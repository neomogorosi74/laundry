/* ==========================================================================
   Mohami's Laundry — page behaviour
   1. Config plumbing (single source of truth)
   2. Build + inject all WhatsApp links
   3. Fill config-driven text (name, phone, hours, areas)
   4. LocalBusiness + FAQ structured data for Google
   5. Nav, mobile menu, FAQ, scroll reveal
   No dependencies. Works offline / with JS disabled (links still render).
   ========================================================================== */

(function () {
  "use strict";

  var C = window.SITE_CONFIG || {};
  var name = C.businessName || "Laundry";
  var wa = String(C.whatsapp || "").replace(/\D/g, "");
  var msgs = C.messages || {};
  var MSG_FALLBACK = "Hi, I'd like a quote for laundry services.";

  /* ---------------------------------------------------------------- 1. links */

  // Placeholder image uses a plain SVG so the site has zero image requests.
  function fillTemplating(str) {
    return String(str || "")
      .replace(/\{business\}/g, name)
      .replace(/\{area\}/g, C.city || "my area");
  }

  function waLink(key) {
    var template = msgs[key] || msgs.default || MSG_FALLBACK;
    var text = fillTemplating(template);
    return "https://wa.me/" + wa + "?text=" + encodeURIComponent(text);
  }

  // Every link/button that should open WhatsApp carries data-wa="messageKey".
  function hydrateWhatsApp() {
    var nodes = document.querySelectorAll("[data-wa]");
    if (!wa) {
      // No number configured yet — keep the button visible but non-broken.
      nodes.forEach(function (el) {
        el.setAttribute("href", "#contact");
        el.setAttribute("data-missing-number", "true");
      });
      return;
    }
    nodes.forEach(function (el) {
      el.setAttribute("href", waLink(el.getAttribute("data-wa")));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  /* ------------------------------------------------------------- 2. bindings */

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.textContent = value;
    });
  }

  function hydrateText() {
    setText("[data-bind=\"business\"]", name);
    if (C.phoneDisplay) setText("[data-bind=\"phone\"]", C.phoneDisplay);
    if (C.hoursText) setText("[data-bind=\"hours\"]", C.hoursText);
    if (C.street) setText("[data-bind=\"street\"]", C.street);
    if (C.city) setText("[data-bind=\"city\"]", C.city);
    if (C.province) setText("[data-bind=\"province\"]", C.province);
    if (C.postalCode) setText("[data-bind=\"postal\"]", C.postalCode);
    if (C.email) setText("[data-bind=\"email\"]", C.email);
    if (C.serviceAreaKeywords) {
      setText("[data-bind=\"areaKeywords\"]", C.serviceAreaKeywords);
    }

    // Contact <a href="tel:">
    var tel = document.querySelectorAll("[data-tel]");
    if (wa) {
      tel.forEach(function (el) {
        el.setAttribute("href", "tel:+" + wa);
      });
    }

    // mailto:
    var mail = document.querySelectorAll("[data-mail]");
    if (C.email) {
      mail.forEach(function (el) {
        el.setAttribute("href", "mailto:" + C.email);
      });
    } else {
      mail.forEach(function (el) {
        el.setAttribute("hidden", "");
      });
    }

    // Area chips
    var chips = document.querySelectorAll("[data-bind=\"areas\"]");
    if (C.areas && C.areas.length) {
      chips.forEach(function (el) {
        el.innerHTML = "";
        C.areas.forEach(function (a) {
          var li = document.createElement("span");
          li.className = "area-chip";
          li.textContent = a;
          el.appendChild(li);
        });
      });
    }

    // Social links (hidden when not configured)
    var ig = document.querySelectorAll("[data-social=\"instagram\"]");
    if (C.instagram) {
      ig.forEach(function (el) {
        el.setAttribute("href", "https://instagram.com/" + C.instagram);
        el.removeAttribute("hidden");
      });
    } else {
      ig.forEach(function (el) {
        el.setAttribute("hidden", "");
      });
    }

    var fb = document.querySelectorAll("[data-social=\"facebook\"]");
    if (C.facebook) {
      fb.forEach(function (el) {
        el.setAttribute("href", "https://facebook.com/" + C.facebook);
        el.removeAttribute("hidden");
      });
    } else {
      fb.forEach(function (el) {
        el.setAttribute("hidden", "");
      });
    }

    document.getElementById("year").textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------- 3. structured data (SEO) */

  // Google uses this to build the "laundry near me" knowledge panel results.
  function buildLocalBusinessSchema() {
    var data = {
      "@context": "https://schema.org",
      "@type": "LaundryService",
      name: C.legalName || name,
      description:
        "Laundry services including wash and fold, wash and iron, dry cleaning, " +
        "school uniforms, duvets, bedding and curtains. Free collection and " +
        "delivery in " + (C.city || "the local area") + ".",
      url: C.siteUrl || "",
      telephone: wa ? "+" + wa : "",
      image: (C.siteUrl || "") + "og-image.png",
      priceRange: "R$$",
      currenciesAccepted: "ZAR",
      address: {
        "@type": "PostalAddress",
        streetAddress: C.street || "",
        addressLocality: C.city || "",
        addressRegion: C.province || "",
        postalCode: C.postalCode || "",
        addressCountry: C.countryCode || "ZA",
      },
      areaServed: (C.areas || []).map(function (a) {
        return { "@type": "City", name: a };
      }),
      openingHoursSpecification: buildHours(),
      hasOfferCatalog: buildCatalog(),
      aggregateRating: buildRating(),
    };
    if (C.email) data.email = C.email;
    return data;
  }

  function buildHours() {
    return (C.hours || []).map(function (h) {
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days.map(function (d) {
          return "https://schema.org/" + d;
        }),
        opens: h.open,
        closes: h.close,
      };
    });
  }

  // Services + prices appear as rich results / price snippets.
  function buildCatalog() {
    var svc = [];
    document.querySelectorAll("[data-service]").forEach(function (el) {
      var item = {
        "@type": "Offer",
        name: el.getAttribute("data-service"),
        description: el.getAttribute("data-service-desc") || undefined,
      };
      var price = el.getAttribute("data-service-price");
      if (price) {
        var num = price.replace(/[^0-9.]/g, "");
        if (num) {
          item.price = num;
          item.priceCurrency = "ZAR";
        }
      }
      svc.push(item);
    });
    return {
      "@type": "OfferCatalog",
      name: "Laundry services",
      itemListElement: svc.map(function (s) {
        return { "@type": "Offer", itemOffered: s };
      }),
    };
  }

  // Only emit a rating if you have real, verifiable reviews — fake review
  // markup breaks Google guidelines and can get you penalised.
  function buildRating() {
    var el = document.getElementById("aggregate-rating");
    if (!el) return undefined;
    var value = el.getAttribute("data-value");
    var count = el.getAttribute("data-count");
    if (!value || !count || C.verifiedBusiness !== true) return undefined;
    return {
      "@type": "AggregateRating",
      ratingValue: value,
      reviewCount: count,
      bestRating: "5",
    };
  }

  // FAQ schema can win you the "People also ask" dropdown in Google.
  function buildFaqSchema() {
    var items = [];
    document.querySelectorAll(".faq details").forEach(function (d) {
      var q = d.querySelector("summary");
      var a = d.querySelector(".faq__answer");
      if (!q || !a) return;
      items.push({
        "@type": "Question",
        name: q.textContent.trim(),
        acceptedAnswer: { "@type": "Answer", text: a.textContent.trim() },
      });
    });
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items,
    };
  }

  function injectSchema() {
    var blocks = [];
    var lb = buildLocalBusinessSchema();
    if (lb) blocks.push(lb);
    var faq = buildFaqSchema();
    if (faq && faq.mainEntity.length) blocks.push(faq);

    blocks.forEach(function (obj) {
      var s = document.createElement("script");
      s.type = "application/ld+json";
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  }

  /* ----------------------------------------------------------------- 4. chrome */

  function initHeader() {
    var header = document.querySelector(".header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileMenu() {
    var burger = document.querySelector(".burger");
    var menu = document.querySelector(".mobile-menu");
    if (!burger || !menu) return;

    var close = function () {
      burger.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    };

    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("is-open", !open);
    });

    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 860) close();
    });
  }

  // One FAQ open at a time keeps the section tidy on mobile.
  function initFaq() {
    var all = document.querySelectorAll(".faq details");
    all.forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (!d.open) return;
        all.forEach(function (other) {
          if (other !== d) other.open = false;
        });
      });
    });
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (i) {
        i.classList.add("is-visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    items.forEach(function (i) {
      io.observe(i);
    });
  }

  /* ------------------------------------------------------------------- 5. init */

  function init() {
    hydrateText();
    hydrateWhatsApp();
    injectSchema();
    initHeader();
    initMobileMenu();
    initFaq();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
