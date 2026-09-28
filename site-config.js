/* ==========================================================================
   SITE CONFIG — the ONLY file you need to edit for day-to-day changes.
   Change a value here, save, and the whole website updates.
   ========================================================================== */

window.SITE_CONFIG = {

  /* --- WHO YOU ARE ---------------------------------------------------- */
  businessName: "Mohami LaundryCo",
  legalName: "Mohami LaundryCo",

  // South Africa WhatsApp number in INTERNATIONAL format:
  //   country code 27, then the number WITHOUT the leading 0 and no "+".
  //   067 983 0755  ->  "27679830755"
  whatsapp: "27679830755",

  // How the number is displayed on the page
  phoneDisplay: "067 983 0755",

  /* --- PRICES (all in Rand) --------------------------------------------- */
  // THE ONLY PLACE PRICES LIVE. Change a number here and every price on the
  // site updates — the service cards, the pricing table, the Google schema
  // and the WhatsApp quoting all stay in sync automatically.
  // Use numbers without the "R".
  prices: {
    /* Wash services — per kilogram */
    washDryFoldKg: 35, // Wash, dry & fold
    ironingOnlyKg: 40, // Ironing only (you wash, we press)
    washFoldIronKg: 70, // Wash, dry, fold & iron

    /* Order */
    minOrder: 150, // Minimum order value

    /* Collection & delivery — free from 10kg, otherwise a flat fee */
    deliveryFreeFromKg: 10,
    deliveryUnderKg: 18,

    /* Booking deposit — taken OFF your final bill, not an extra fee */
    bookingDeposit: 50,

    /* Duvets & comforters */
    duvetSingle: 80,
    duvetDouble: 100,
    duvetQueen: 120,
    duvetKing: 140,
    duvetXL: 170,

    /* Blankets */
    blanketSingle: 120,
    blanketDouble: 150,
    blanketQueen: 180,
    blanketKing: 220,
    blanketXL: 300,

    /* Towels */
    towelSmall: 25, // Small / hand towel
    towelMedium: 35, // Medium towel
    towelLarge: 50, // Large / bath towel

    /* Rugs & mats */
    rugSmall: 50,
    rugBathroom: 50, // Bathroom rug
    matBath: 50, // Bath mat
  },

  // Shown as a note under the price list. Set to "" to hide.
  specialTreatmentNote:
    "Special treatment may be quoted separately for heavily soiled items, excessive pet hair, oil or grease, and difficult stains.",

  /* --- WHERE YOU WORK (important for Google "near me" searches) -------- */
  // Set ONE main suburb/city, then list the surrounding areas you cover.
  // Example: city: "Pretoria", areas: ["Brooklyn", "Hatfield", "Mamelodi"]
  city: "Pretoria",
  province: "Gauteng",
  country: "South Africa",
  countryCode: "ZA",

  // Your business address. Leave `street` as "" if you work from home and
  // collect/deliver only — that's normal and legal. The site then shows the
  // `addressFallback` line below instead of an empty address.
  street: "",
  cityLine: "Service-area business",
  postalCode: "0001",
  addressFallback: "Service-area business — free collection & delivery",

  // Nearby suburbs / areas you collect from and deliver to.
  // REPLACE THESE with the areas you actually service. Ranking for a suburb
  // you don't cover wastes your time and upsets real customers.
  areas: [
    "Pretoria",
    "Brooklyn",
    "Hatfield",
    "Menlo Park",
    "Waterkloof",
    "Lynnwood",
    "Menlyn",
    "Silverton",
    "Montana",
    "Centurion",
    "Mamelodi",
    "Soshanguve",
  ],

  // Extra free-text keyword areas for the page copy + meta tags
  serviceAreaKeywords: "Pretoria, Centurion, Menlyn, Brooklyn, Soshanguve",

  /* --- HOURS (24h format, Google Search Console format) ----------------- */
  // Collection and drop-off windows. A day can have MORE THAN ONE window —
  // just add another entry for the same day below, e.g. a morning slot and
  // an evening slot. Google handles this correctly and shows both.
  hours: [
    { days: ["Monday"], open: "06:30", close: "10:00" },
    { days: ["Monday"], open: "17:00", close: "20:00" },
    { days: ["Tuesday"], open: "06:30", close: "10:00" },
    { days: ["Tuesday"], open: "17:00", close: "20:00" },
    { days: ["Wednesday"], open: "06:30", close: "10:00" },
    { days: ["Wednesday"], open: "17:00", close: "20:00" },
    { days: ["Thursday"], open: "06:30", close: "10:00" },
    { days: ["Thursday"], open: "17:00", close: "20:00" },
    { days: ["Friday"], open: "06:30", close: "10:00" },
    { days: ["Friday"], open: "17:00", close: "20:00" },
    { days: ["Saturday"], open: "06:30", close: "10:00" },
    { days: ["Saturday"], open: "17:00", close: "20:00" },
    { days: ["Sunday"], open: "06:30", close: "10:00" },
    { days: ["Sunday"], open: "17:00", close: "20:00" },
  ],
  hoursText: "Collection & drop-off 06:30–10:00 and 17:00–20:00, every day",

  /* --- SOCIAL / CONTACT ------------------------------------------------- */
  email: "youremail@example.com", // optional, leave "" to hide
  instagram: "", // e.g. "mohamis.laundry" — leave "" to hide
  facebook: "",

  /* --- WHATSAPP MESSAGE TEMPLATES -------------------------------------- */
  // {business} is replaced with your business name automatically.
  messages: {
    default: "Hi {business}, I'd like to book a laundry collection. Please send me a quote.",
    washFold: "Hi {business}, I'd like a wash, dry & fold collection. How much will my load cost?",
    ironingOnly: "Hi {business}, I'd like ironing only for {area}. How much per kilogram?",
    washIron: "Hi {business}, I'd like a wash, dry, fold & iron collection. How much will my load cost?",
    bedding: "Hi {business}, I'd like a duvet / blanket cleaned. How much for my size?",
    towels: "Hi {business}, I'd like towels washed. How much per towel?",
    rugs: "Hi {business}, I'd like a rug / bath mat washed. How much?",
    deposit: "Hi {business}, how does the R50 booking deposit work? Is it taken off my final bill?",
    pickup: "Hi {business}, please collect my laundry today. I'm in {area}.",
    hours: "Hi {business}, what are your collection and drop-off times today?",
  },

  /* --- SEARCH ENGINE SETTINGS ------------------------------------------- */
  // Set to true once you are listed on Google Business Profile.
  verifiedBusiness: false,

  // Paste your Google Search Console verification code here, e.g. "abc123".
  // Leave "" until you have one.
  googleVerification: "",

  // Paste your Bing verification code here, e.g. "1234567890abcdef".
  bingVerification: "",

  // Your live address, e.g. "https://mohamislaundry.netlify.app".
  // Used by sitemap.xml instructions, canonical tags and social previews.
  siteUrl: "https://mohamislaundry.netlify.app",
};
