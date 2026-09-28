/* ==========================================================================
   SITE CONFIG — the ONLY file you need to edit for day-to-day changes.
   Change a value here, save, and the whole website updates.
   ========================================================================== */

window.SITE_CONFIG = {

  /* --- WHO YOU ARE ---------------------------------------------------- */
  businessName: "Mohami's Laundry",
  legalName: "Mohami's Laundry",

  // South Africa WhatsApp number in INTERNATIONAL format:
  //   country code 27, then the number WITHOUT the leading 0 and no "+".
  //   067 983 0755  ->  "27679830755"
  whatsapp: "27679830755",

  // How the number is displayed on the page
  phoneDisplay: "067 983 0755",

  /* --- WHERE YOU WORK (important for Google "near me" searches) -------- */
  // Set ONE main suburb/city, then list the surrounding areas you cover.
  // Example: city: "Soweto", areas: ["Pimville", "Jabulani", "Dobsonville"]
  city: "Randburg",
  province: "Gauteng",
  country: "South Africa",
  countryCode: "ZA",

  // The main address Google will show. Use a real, mappable address or a
  // service-area business address (no shopfront) — do NOT invent one.
  street: "Set your street address here",
  postalCode: "0000",

  // Nearby suburbs / areas you collect from and deliver to.
  areas: [
    "Randburg",
    "Sandsfontein",
    "Ferndale",
    "Northcliff",
    "Brixton",
    "Robindale",
    "Fontainebleau",
  ],

  // Extra free-text keyword areas for the page copy + meta tags
  serviceAreaKeywords: "Randburg, Sandton, Fourways, Roodepoort, Soweto",

  /* --- HOURS (24h format, Google Search Console format) ----------------- */
  hours: [
    { days: ["Monday"], open: "07:00", close: "18:00" },
    { days: ["Tuesday"], open: "07:00", close: "18:00" },
    { days: ["Wednesday"], open: "07:00", close: "18:00" },
    { days: ["Thursday"], open: "07:00", close: "18:00" },
    { days: ["Friday"], open: "07:00", close: "18:00" },
    { days: ["Saturday"], open: "08:00", close: "14:00" },
    { days: ["Sunday"], open: "closed", close: "" },
  ],
  hoursText: "Mon–Fri 07:00–18:00 · Sat 08:00–14:00 · Sun closed",

  /* --- SOCIAL / CONTACT ------------------------------------------------- */
  email: "youremail@example.com", // optional, leave "" to hide
  instagram: "", // e.g. "mohamis.laundry" — leave "" to hide
  facebook: "",

  /* --- WHATSAPP MESSAGE TEMPLATES -------------------------------------- */
  // {business} is replaced with your business name automatically.
  messages: {
    default: "Hi {business}, I'd like to book a laundry service. Please send me a quote.",
    washFold: "Hi {business}, I'd like a wash & fold collection. How much will my load cost?",
    washIron: "Hi {business}, I'd like a wash & iron collection. How much will my load cost?",
    dryClean: "Hi {business}, I'd like a dry cleaning quote. Please send me the price list.",
    school: "Hi {business}, I'd like a school uniforms quote. How much per item?",
    bedding: "Hi {business}, I'd like a duvet / bedding quote. How much?",
    curtains: "Hi {business}, I'd like curtains washed and ironed. How much?",
    pickup: "Hi {business}, please collect my laundry today. I'm in {area}.",
    hours: "Hi {business}, are you open today? What are your operating hours?",
  },

  /* --- SEARCH ENGINE SETTINGS ------------------------------------------- */
  // Set to true once you are listed on Google Business Profile.
  verifiedBusiness: false,

  // Paste your Google Search Console verification code here, e.g. "abc123".
  // Leave "" until you have one.
  googleVerification: "",

  // Paste your Bing verification code here, e.g. "1234567890abcdef".
  bingVerification: "",

  // Your live address, e.g. "https://yourname.github.io/laundry/".
  // Used by sitemap.xml instructions, canonical tags and social previews.
  siteUrl: "https://neomogorosi74.github.io/laundry/",
};
