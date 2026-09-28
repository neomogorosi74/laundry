# Mohami's Laundry — website

A single-page website for a laundry business. Every "book" button opens WhatsApp with a
pre-filled message, so a customer can go from landing on the page to booking in about 15
seconds. No frameworks, no build step, no monthly cost.

```
laundry/
├── index.html        the whole page
├── styles.css        all styling
├── script.js         behaviour + SEO structured data
├── site-config.js    ← EDIT THIS to change your details
├── favicon.svg       browser tab icon
├── og-image.png      WhatsApp / Facebook link preview
├── robots.txt        tells Google where to look
├── sitemap.xml       your page list for Google
├── 404.html          "page not found" page
└── .nojekyll         makes GitHub serve files as-is
```

---

## 1. Change your details

Open **`site-config.js`**. This is the only file you need for day-to-day changes.

| What | Where | Current value |
|---|---|---|
| WhatsApp number | `whatsapp` | `27679830755` |
| How the number is displayed | `phoneDisplay` | `067 983 0755` |
| Business name | `businessName` | `Mohami's Laundry` |
| Main suburb/city | `city` | `Randburg` |
| Suburbs you cover | `areas` | Randburg, Ferndale, … |
| Suburbs in the SEO text | `serviceAreaKeywords` | Randburg, Sandton, Fourways… |
| Street address | `street` | *placeholder — set your real one* |
| Opening hours | `hours` + `hoursText` | Mon–Fri 07:00–18:00 … |
| Email | `email` | your email |
| Instagram / Facebook | `instagram`, `facebook` | empty = hidden |
| The words customers see in the WhatsApp chat | `messages` | see below |

**The number must be in international format with no `+` and no leading `0`:**

| Your number | Value to use |
|---|---|
| 067 983 0755 | `"27679830755"` |
| 082 123 4567 | `"27821234567"` |

Save the file, refresh the page, and every button on the site now uses the new number.

### Changing your prices

Prices are in `index.html` as normal text. Search for `R35`, `R60`, `R45`, `R25` or `R120`
and replace them. The `From R35/kg` text on the service cards and the `R35` in the pricing
section are two separate places — update both so they match.

---

## 2. Publish it free (Netlify)

Live address: **`https://mohamislaundry.netlify.app`** — free hosting, free HTTPS, no card.

Netlify is connected to the GitHub repo, so **every `git push` publishes the site
automatically.** This is the only update cycle you need:

```powershell
cd C:\Users\Dell\laundry
git add .
git commit -m "changed prices"
git push
```

The site updates in about a minute. Nothing to click, nothing to remember.

<details>
<summary>How the Netlify connection was set up (only needed if you ever have to redo it)</summary>

1. <https://app.netlify.com> → **Add new site** → **Import an existing project** → **GitHub**
2. Authorise GitHub and pick the `laundry` repository
3. Deploy settings — **Branch** `main`, **Build command** leave *empty*, **Publish directory** `/`
4. **Deploy site**
5. **Site configuration** → **Access & security** → **Visitor access control** →
   set to **Allow all visitors** (if this is left on, visitors get a login page instead of
   your website)

</details>

<details>
<summary>Fallback: deploy by dragging the folder (no GitHub link)</summary>

Go to <https://app.netlify.com/drop> and drag this folder onto the page:

```
C:\Users\Dell\laundry
```

This publishes whatever is in the folder *at that moment*. Files you change later on your
computer will **not** go live until you drag again — which is why the GitHub link above is
better.

</details>

### The website is also on GitHub Pages — turn that off

An earlier version was published to `https://neomogorosi74.github.io/laundry/`. Two live
copies of the same page confuse Google about which one is the real site, and your SEO
efforts get split between them. Turn the old one off:

<https://github.com/neomogorosi74/laundry/settings/pages> → under *GitHub Pages*,
set **Source** to **None** → **Save**.

### If you ever move to a different address

The site tells Google its official address in several places. If the URL ever changes, all
of these must change together or Google will index the wrong page:

- `<link rel="canonical">` in `index.html`
- `og:url`, `og:image` and `twitter:image` in `index.html`
- the `Sitemap:` line in `robots.txt`
- `<loc>` in `sitemap.xml`
- `siteUrl` in `site-config.js`

---

## 3. Get it on Google

The website is only half the job. For a local laundry business, most of your customers
will find you through **Google Maps**, not the normal search results. Do these four steps
in this order.

### Step 1 — Google Business Profile (the important one, do this first)

This is the listing that appears on Google Maps when someone searches *laundry near me*.
It is free and it is what actually brings in customers.

1. Go to <https://www.google.com/business/> and sign in with a Google account.
2. Click **Add your business**. Enter `Mohami's Laundry`.
3. Choose **Service-area business** (no shopfront) if you have no walk-in address.
4. Category: **Laundry service** (also add *Dry cleaning service* and *Ironing service*).
5. Add your **real address or service area** — the suburbs you actually cover.
6. Add your **phone number** (use the WhatsApp number).
7. Add **opening hours** matching `site-config.js`.
8. Upload **photos**. This matters enormously. Take these on your phone:
   - a clean folded pile of laundry
   - your ironing board with pressed shirts
   - your packed collection bag
   - your folded uniforms
   - your van or your logo
   - 3–5 real photos of actual jobs you have done
9. Add your **services and prices** (R35/kg wash & fold, etc.).
10. Verify by postcard or phone. This takes a few days to a few weeks.

Once verified, ask every happy customer for a Google review. Reviews are the number one
ranking factor for a local service business.

### Step 2 — Get the site indexed by Google

1. Go to <https://search.google.com/search-console>
2. Add **URL prefix** → type your full address `https://mohamislaundry.netlify.app`
3. Google gives you a verification code. Copy it.
4. Open `site-config.js`, find `googleVerification: ""` and paste the code between the
   quotes. Push the change.
5. Go back to Search Console → **Sitemaps** → paste
   `sitemap.xml` → **Submit**.

Search Console also shows you the exact searches people use to find you — check it monthly
and adjust your wording if people are searching for something you do not mention.

### Step 3 — Bing and other search engines

Search Console does not cover Bing, and some free email browsers use Bing. It takes
30 seconds: <https://www.bing.com/webmasters> → add your site → paste the code into
`bingVerification` in `site-config.js`.

### Step 4 — Submit to free business directories

Free listings that Google sometimes reads, and that customers find:

- **HelloPeter** (hellopeter.com) — South Africa's biggest review site
- **Facebook page** — a real page (not a personal profile) for your business
- **Instagram** — before/after photos of folded laundry do really well
- **Yelp**, **Yellow Pages SA**, **Bizcommunity**

Always use the **exact same** business name, phone number and address everywhere. Search
engines treat mismatches as separate businesses and quietly ignore you.

### Add Bing/Microsoft verification (optional)

To get "Verified by Microsoft" next to your site in Bing results, save
`BpLandingPage.zip` from Microsoft into this folder. It contains a `BingSiteAuth.xml`
file which gets published automatically. Instructions: <https://www.bing.com/webmasters/help/how-to-verify-ownership-of-your-site-afcfefc6>

---

## 4. Things worth doing later

- **A real photo** of your best work on the homepage. Photos of actual folded laundry
  convert far better than any wording. Put it in the `.hero__media` block in `index.html`.
- **Your real address** in `street` on `site-config.js`. A service-area business is fine,
  but never invent an address you don't actually operate from.
- **A listing of suburbs you serve** in `areas`. Add a few more as you take on new routes —
  this is how you rank for each suburb.
- **Your own domain** (about R120/year at a South African registrar) if you ever want
  `mohamislaundry.co.za` instead of the GitHub address. If you buy one, add a file named
  `CNAME` containing just the domain, and set DNS to GitHub's servers.
- **Google Analytics** is optional. Only add it once you actually want to see the numbers.

---

## 5. Rating markup (read this before you touch it)

At the bottom of `index.html` there is a hidden element:

```html
<span id="aggregate-rating" data-value="5" data-count="1" hidden></span>
```

`script.js` uses this to tell Google your star rating. It **only activates** when
`verifiedBusiness: true` in `site-config.js`.

Leave it alone until you have real Google reviews, and never invent a rating. Google's
guidelines call fake review markup a violation and it can get the whole listing suppressed.
The testimonials written on the page are fine — they are just text.

---

## 6. Local preview

```powershell
npx serve .
```

or, if you have Python installed:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>.
