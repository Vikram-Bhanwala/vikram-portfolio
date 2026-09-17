export const site = {
  name: "Vikram Bhanwala",
  short: "VB",
  role: "Full Stack Developer",
  headline: "I build the digital systems brands run on.",
  subhead:
    "Full stack developer in Gurugram. Custom websites, CMS platforms, Shopify and WordPress themes and plugins, storefronts, APIs, faster checkout (Magic Checkout, Shiprocket), payment gateways, and AWS — end to end.",
  location: "Gurugram, India",
  timezone: "Asia/Kolkata",
  timezoneLabel: "IST",
  email: "vikrambhanwala1@gmail.com",
  phone: "8685011980",
  phoneHref: "tel:+918685011980",
  whatsapp: "https://wa.me/918685011980",
  linkedin: "https://www.linkedin.com/in/vikrambhanwala",
  photo: "/vikram-portrait.png",
  resumePdf: "/vikram-bhanwala-resume.pdf",
  company: "The Brand Bee",
  companyRole: "Full Stack Developer",
  years: "6+",
  summary:
    "Full Stack Developer with 6+ years building scalable web applications, custom websites, CMS platforms, eCommerce, and REST APIs. Strong in PHP, Node.js, Express, Next.js, MVC, and microservices. I ship custom sites from scratch, admin CMS, Shopify and WordPress themes and plugins, faster checkout, payment gateways, third-party APIs, and AWS deploys.",
  roles: [
    "Full Stack Developer",
    "Custom Web Developer",
    "CMS Developer",
    "eCommerce Engineer",
  ],
} as const;

export const nav = [
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#process", label: "Process", id: "process" },
  { href: "/#contact", label: "Contact", id: "contact" },
] as const;

export const stats = [
  { value: "6+", label: "Years experience" },
  { value: "30+", label: "Live products" },
  { value: "3", label: "Companies" },
  { value: "20+", label: "APIs" },
] as const;

export const skillGroups = [
  {
    title: "Backend",
    items: ["PHP", "Node.js", "Express", "REST APIs", "Microservices", "MVC"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "JavaScript", "AJAX", "PWA"],
  },
  {
    title: "Platforms",
    items: [
      "Custom websites",
      "Custom CMS",
      "Shopify",
      "WordPress",
      "WooCommerce",
      "Headless / Next.js",
    ],
  },
  {
    title: "Themes & plugins",
    items: [
      "Custom Shopify themes",
      "Custom WP themes",
      "Custom WP plugins",
      "Shopify extensions",
    ],
  },
  {
    title: "Checkout & payments",
    items: [
      "Razorpay",
      "Magic Checkout",
      "Stripe",
      "PhonePe",
      "PayU",
      "Cashfree",
      "EMI / UPI",
    ],
  },
  {
    title: "Logistics & APIs",
    items: [
      "Shiprocket",
      "Delhivery",
      "WhatsApp API",
      "SMS / MSG91",
      "Google Maps",
      "Webhooks",
    ],
  },
  {
    title: "Cloud & data",
    items: ["AWS EC2", "AWS RDS", "S3", "MySQL", "MongoDB", "Redis"],
  },
] as const;

export const marquee = [
  "Custom websites",
  "Custom CMS",
  "PHP",
  "Node.js",
  "Express",
  "Next.js",
  "Shopify",
  "WordPress",
  "Custom Shopify themes",
  "Custom WordPress themes",
  "WordPress plugins",
  "Magic Checkout",
  "Shiprocket",
  "Razorpay",
  "Stripe",
  "PhonePe",
  "PayU",
  "Cashfree",
  "MySQL",
  "MongoDB",
  "Redis",
  "AWS",
  "REST APIs",
];

export const experience = [
  {
    company: "The Brand Bee",
    role: "Full Stack Developer",
    period: "Sep 2022 — Present",
    location: "Gurugram",
    points: [
      "Designed scalable backend systems using PHP, Node.js, and Express.",
      "Built REST APIs following MVC and microservice architecture.",
      "Shipped custom websites from scratch — corporate, brand, education, and industrial — not only storefronts.",
      "Developed custom CMS platforms so teams can manage content, catalogues, and pages without a developer.",
      "Built full custom Shopify themes and custom WordPress themes from scratch — not child-theme restyles.",
      "Created custom WordPress plugins and Shopify theme/app extensions for catalogues, checkout, and admin.",
      "Implemented faster checkout with Razorpay Magic Checkout, Shiprocket, and shipping APIs.",
      "Integrated payment gateways including Razorpay, Stripe, PhonePe, PayU, and Cashfree.",
      "Connected third-party APIs for logistics, WhatsApp, SMS, maps, and webhooks.",
      "Managed AWS EC2 infrastructure and RDS databases; improved performance with Redis and query tuning.",
    ],
  },
  {
    company: "Weaddo",
    role: "Backend Developer",
    period: "Jan 2022 — Sep 2022",
    location: "India",
    points: [
      "Integrated backend APIs with React and Next.js applications.",
      "Built backend services using PHP MVC frameworks.",
      "Maintained databases and optimized application performance.",
      "Unified multiple data sources into centralized backend services.",
    ],
  },
  {
    company: "Healthians",
    role: "PHP Developer",
    period: "Aug 2021 — Jan 2022",
    location: "India",
    points: [
      "Developed REST APIs for internal and partner integrations.",
      "Built CMS modules using PHP and MVC architecture.",
      "Improved backend performance and reliability.",
    ],
  },
] as const;

export const education = {
  degree: "M.Sc. Computer Science",
  school: "Maharishi Dayanand University",
  period: "2018 — 2020",
};

export const process = [
  {
    step: "01",
    title: "Map the brief",
    body: "Business goals, content, catalogue, traffic, and the systems already in play. I write the architecture before a line of website UI.",
  },
  {
    step: "02",
    title: "Model the data",
    body: "Schemas, APIs, CMS, and payment flows. The boring layer that decides whether the site still feels fast in month twelve.",
  },
  {
    step: "03",
    title: "Build & integrate",
    body: "Custom websites and CMS, Shopify / WordPress themes and plugins, PHP or Node services, Next.js surfaces, Magic Checkout, Shiprocket, payment gateways, and admin tools the team can actually run.",
  },
  {
    step: "04",
    title: "Ship & harden",
    body: "AWS, caching, Redis, query tuning, monitoring. Launch is not the finish — production is.",
  },
] as const;

export const services = [
  {
    title: "Custom websites & CMS",
    body: "From-scratch PHP, Node, and Next.js sites with a CMS the team can run — pages, blogs, catalogues, forms, and admin. Corporate, education, industrial, and brand sites, not only shops.",
  },
  {
    title: "Shopify, WordPress & commerce",
    body: "Custom Shopify and WordPress themes and plugins, WooCommerce, headless storefronts, and custom PHP / Node commerce — catalogues, carts, and campaign traffic included.",
  },
  {
    title: "Faster checkout",
    body: "Razorpay Magic Checkout, one-page flows, UPI / EMI / cards, and Shiprocket so shipping, rates, and tracking sit inside checkout — not after it.",
  },
  {
    title: "Payments & APIs",
    body: "Razorpay, Stripe, PhonePe, PayU, Cashfree, WhatsApp, SMS, maps, and logistics webhooks wired into the order pipeline — or into a custom CMS and website.",
  },
] as const;

export const faqs = [
  {
    q: "What do you actually specialise in?",
    a: "Full stack. Custom websites, custom CMS, PHP, Node.js, Express, Next.js, Shopify, WordPress (themes and plugins), MySQL / MongoDB, Redis, and AWS. Commerce is a large part of the work — storefronts, checkout, payments, logistics — but I also ship corporate, education, and brand sites end to end.",
  },
  {
    q: "Do you build custom websites and CMS, not only Shopify or WordPress?",
    a: "Yes. Custom websites from scratch, custom CMS and admin, plus Shopify and WordPress when that is the right stack. Headless Next.js, PHP MVC, and Node services are all in play.",
  },
  {
    q: "Do you build custom Shopify and WordPress themes?",
    a: "Yes — full custom Shopify themes and WordPress themes from scratch, plus custom WordPress plugins and Shopify extensions. Not a bought theme with a logo swap.",
  },
  {
    q: "Can you implement Magic Checkout and Shiprocket?",
    a: "Yes. Razorpay Magic Checkout, Shiprocket (rates, pickup, tracking, returns), and the webhooks that keep orders, inventory, and the customer in sync.",
  },
  {
    q: "Which payment gateways have you shipped?",
    a: "Razorpay, Stripe, PhonePe, PayU, and Cashfree — including UPI, cards, EMI, and retry flows. I also wire WhatsApp, SMS, and maps APIs around the order or the CMS.",
  },
  {
    q: "How do you usually engage?",
    a: "As a full stack developer at The Brand Bee, or directly on a scoped build. I prefer end-to-end ownership: architecture, CMS, website or storefront, APIs, deploy.",
  },
  {
    q: "How do I reach you?",
    a: "Call or WhatsApp 8685011980, or email vikrambhanwala1@gmail.com. I reply from Gurugram, IST.",
  },
] as const;

export const strengths = [
  "End-to-end ownership from development to deployment",
  "Clean coding standards and scalable architecture",
  "Agile, collaborative product teams",
  "Version control with Git and GitLab",
];

export type ProjectCategory = "commerce" | "platform" | "education" | "corporate";

export type Project = {
  slug: string;
  name: string;
  url: string;
  year: string;
  category: ProjectCategory;
  engine: string;
  tags: string[];
  accent: string;
  excerpt: string;
  description: string;
  contribution: string[];
  stack: string[];
  featured?: boolean;
  highlight?: string;
};

export const projects: Project[] = [
  {
    slug: "kurlon",
    name: "Kurlon",
    url: "https://kurlon.com/",
    year: "2024",
    category: "commerce",
    tags: ["eCommerce", "Magic Checkout", "Shiprocket"],
    engine: "Shopify",
    featured: true,
    accent: "#1f6b4a",
    excerpt: "National mattress commerce for a 60-year brand — catalogue, custom sizes, EMI, and campaign traffic.",
    description:
      "Kurlon is one of India’s defining sleep brands: 60 years, 10 million+ families, 5,000+ stores, and a full D2C catalogue of mattresses, pillows, and custom sizes. The site has to sell like a modern storefront while carrying legacy-brand trust — orthopaedic lines, warranties, EMI, and high SKU count included.",
    contribution: [
      "Full stack commerce architecture for a high-SKU national catalogue.",
      "Faster checkout with Razorpay / Magic Checkout, EMI, and UPI.",
      "Shiprocket and logistics APIs for rates, pickup, and tracking.",
    ],
    stack: ["Shopify", "Magic Checkout", "Shiprocket", "Razorpay", "APIs"],
  },
  {
    slug: "hero-cycles",
    name: "Hero Cycles",
    url: "https://www.herocycles.com/",
    year: "2024",
    category: "platform",
    tags: ["PWA", "Full stack", "Product"],
    engine: "Custom + PWA",
    accent: "#c1121f",
    featured: true,
    highlight: "PWA app",
    excerpt: "Flagship site and installable PWA for the world’s largest bicycle manufacturer.",
    description:
      "Hero Cycles needed more than a brochure. The work covers a cinematic brand site — age-based ride finder, personalisation, stories — plus a PWA so the experience can live on the home screen. Craft, catalogue, and performance had to coexist.",
    contribution: [
      "Shipped the public site alongside an installable PWA layer.",
      "Structured product storytelling for kids, teens, and performance lines.",
      "Built for mobile-first discovery without throwing away brand craft.",
    ],
    stack: ["PWA", "JavaScript", "PHP", "Node.js", "AWS"],
  },
  {
    slug: "the-tutorx",
    name: "The TutorX",
    url: "https://www.thetutorx.com/",
    year: "2024",
    category: "education",
    tags: ["Platform", "Bookings", "Payments"],
    engine: "Custom PHP / Node",
    accent: "#1d4ed8",
    featured: true,
    excerpt: "1-on-1 tutoring platform across AU, UK, US, CA, and IN — matching, sessions, and payments.",
    description:
      "The TutorX is a live 1-on-1 tutoring product spanning Australia, the UK, US, Canada, and India. Curriculum mapping, tutor matching, demo booking, session tracking, and parent-facing progress all sit on one platform — not a marketing site with a form.",
    contribution: [
      "Backend services for matching, scheduling, and multi-region programmes.",
      "Payment gateway integration for enrolment and demo booking.",
      "REST APIs and CMS models for campaigns, tutors, and curricula.",
    ],
    stack: ["PHP", "Node.js", "REST APIs", "MySQL", "Payments"],
  },
  {
    slug: "home-and-kraft",
    name: "Home & Kraft",
    url: "https://homeandkraft.com/",
    year: "2025",
    category: "commerce",
    tags: ["Shopify / Next.js", "Magic Checkout", "Made-to-order"],
    engine: "Next.js + commerce APIs",
    accent: "#8b5a2b",
    featured: true,
    excerpt: "Made-to-measure handmade rugs — weave, size, colour, and a storefront that prices the craft honestly.",
    description:
      "Home & Kraft sells genuinely handmade, washable rugs with custom size, shape, weave, and colour. The commerce problem is not a simple catalogue: every SKU is a configuration, lead times are real, and the story (artisans, materials, wash-testing) has to sit next to a working cart.",
    contribution: [
      "Custom commerce logic for made-to-order sizing and weave options.",
      "Faster checkout with payment gateways and Shiprocket fulfilment.",
      "APIs for catalogue, rates, and order operations.",
    ],
    stack: ["Next.js", "Shopify APIs", "Magic Checkout", "Shiprocket", "Razorpay"],
  },
  {
    slug: "dit-university",
    name: "DIT University",
    url: "https://www.dituniversity.edu.in/",
    year: "2023",
    category: "education",
    tags: ["Education", "CMS", "Admissions"],
    engine: "Custom CMS",
    accent: "#0f3d68",
    featured: true,
    excerpt: "Admissions-grade university site — programmes, research, placements, and content that admissions teams can run.",
    description:
      "DIT University’s public site has to do admissions work: UG / PG / PhD programmes, fees, scholarships, research centres, placements, campus life, and alumni. High content volume, many stakeholders, and a CMS that staff can actually update.",
    contribution: [
      "Information architecture for programmes, admissions, and campus content.",
      "CMS modules so departments can publish without a developer on every change.",
      "Performance and structure suited to seasonal admissions traffic.",
    ],
    stack: ["PHP", "Custom CMS", "MySQL", "REST APIs"],
  },
  {
    slug: "yuni-beauty",
    name: "YUNI Beauty",
    url: "https://www.yunibeauty.com/",
    year: "2024",
    category: "commerce",
    tags: ["Shopify", "Magic Checkout", "International"],
    engine: "Shopify",
    accent: "#2f6f5e",
    featured: true,
    excerpt: "Clean-beauty storefront for a US natural skincare brand — ritual, catalogue, and conversion.",
    description:
      "YUNI Beauty is a plant-based skincare and body-care brand. The storefront has to feel editorial (ritual, ingredients, sustainability) while still being a working shop: collections, PDPs, rewards, and secure checkout.",
    contribution: [
      "Commerce merchandising and collection architecture for a beauty catalogue.",
      "Checkout with payment gateways for an international D2C brand.",
      "Storefront and API work around rewards, catalogue, and fulfilment.",
    ],
    stack: ["Shopify", "JavaScript", "Stripe", "Checkout APIs"],
  },
  {
    slug: "my-sleepwell",
    name: "My Sleepwell",
    url: "https://www.mysleepwell.com/",
    year: "2024",
    category: "commerce",
    tags: ["D2C", "Magic Checkout", "Shiprocket"],
    engine: "Shopify",
    accent: "#4c1d95",
    excerpt: "Direct-to-consumer sleep commerce — mattress discovery, PDP, and purchase flows.",
    description:
      "My Sleepwell is a D2C sleep destination. Mattress buying is high-consideration: firmness, size, trial, warranty, and delivery all have to be explained without slowing the path to cart.",
    contribution: [
      "Storefront and catalogue structure for a sleep D2C range.",
      "Faster checkout with payment gateways, EMI, and Shiprocket fulfilment.",
      "Cart, payments, and promotion APIs for high-ticket products.",
    ],
    stack: ["Shopify", "Magic Checkout", "Shiprocket", "Razorpay"],
  },
  {
    slug: "mnb-buildfab",
    name: "MNB Buildfab",
    url: "https://mnbbuildfab.com/",
    year: "2024",
    category: "corporate",
    tags: ["Real estate", "Corporate", "Lead gen"],
    engine: "Custom PHP",
    accent: "#1c1917",
    excerpt: "Luxury developer site for a Gurugram group spanning residential, commercial, and hospitality.",
    description:
      "MNB Buildfab is a Gurugram-based developer backed by a long construction legacy, with projects across Delhi NCR, Mumbai, Gujarat, and Goa. The site has to present leadership, project inventory, and enquiry without feeling like a PDF dumped on the web.",
    contribution: [
      "Corporate information architecture for projects, leadership, and enquiries.",
      "Lead capture and content models for a multi-city developer.",
      "A brand surface that can grow as inventory grows.",
    ],
    stack: ["PHP", "Custom CMS", "REST APIs", "Lead forms"],
  },
  {
    slug: "fiorella-india",
    name: "Fiorella India",
    url: "https://fiorellaindia.com/delhi",
    year: "2024",
    category: "commerce",
    tags: ["Shopify", "Same-day", "Shiprocket"],
    engine: "Shopify",
    accent: "#9d174d",
    excerpt: "Online flower boutique with city delivery, occasion merchandising, and same-day cutoffs.",
    description:
      "Fiorella is a floral eCommerce boutique — boxed roses, hand bouquets, hampers, midnight delivery, pincode checks, and occasion merchandising. Logistics rules (same-day cutoff, city pages like Delhi) are part of the product, not a footnote.",
    contribution: [
      "City and occasion-based catalogue architecture.",
      "Delivery-rule aware commerce with Shiprocket, pincode, and same-day slots.",
      "Payment gateways and faster checkout for high-AOV gifting.",
    ],
    stack: ["Shopify", "Shiprocket", "Razorpay", "Maps API"],
  },
  {
    slug: "kay2-steel",
    name: "KAY2 Steel",
    url: "https://www.kay2steel.com/",
    year: "2023",
    category: "corporate",
    tags: ["Industrial", "Corporate", "Product"],
    engine: "Custom PHP",
    accent: "#7c2d12",
    excerpt: "Industrial brand site for TMT manufacturing — product story, trust, and dealer-facing information.",
    description:
      "KAY2 Steel manufactures TMT bars with a highly specific product story (hexagonal rib pattern, seismic bonding). The site has to educate a technical buyer and still feel like a national construction brand.",
    contribution: [
      "Product storytelling for a technical industrial SKU.",
      "Corporate pages, downloads, and enquiry paths.",
      "A structure dealers and project buyers can actually navigate.",
    ],
    stack: ["PHP", "Custom CMS", "MySQL"],
  },
  {
    slug: "miorah-shoes",
    name: "Miorah Shoes",
    url: "https://miorahshoes.com/",
    year: "2024",
    category: "commerce",
    tags: ["Shopify", "Magic Checkout", "Fashion"],
    engine: "Shopify",
    accent: "#111827",
    excerpt: "Luxury leather footwear storefront — collections, variants, and a high-craft PDP.",
    description:
      "Miorah is a luxury footwear label out of Agra: block heels, metallics, pumps, and seasonal collections. Variant-heavy PDPs (colourways, materials) and a look-and-feel that matches the product, not a generic theme.",
    contribution: [
      "Collection and variant architecture for a fashion catalogue.",
      "Faster checkout with payment gateways and shipping APIs.",
      "PDP structure for colourways, materials, and craft.",
    ],
    stack: ["Shopify", "Magic Checkout", "Razorpay", "Shiprocket"],
  },
  {
    slug: "music-antra",
    name: "Music Antra",
    url: "https://musicantra.com/",
    year: "2025",
    category: "education",
    tags: ["Education", "Experience", "CMS"],
    engine: "Custom stack",
    accent: "#4c1d95",
    excerpt: "Music school platform — learning journeys, instruments, and a calmer education brand.",
    description:
      "Music Antra teaches piano, vocals, guitar, and drums with a syllabus that can be exam-track or purely personal. The site has to feel like a studio, not an LMS screenshot — journeys, therapy, live, and enrolment.",
    contribution: [
      "Content model for programmes, instruments, and learning stages.",
      "Brand site architecture for enrolment and studio storytelling.",
      "CMS so programmes can evolve without a rebuild.",
    ],
    stack: ["PHP", "JavaScript", "Custom CMS", "APIs"],
  },
  {
    slug: "newstone-ludhiana",
    name: "Newstone Ludhiana",
    url: "https://newstoneludhiana.com/",
    year: "2025",
    category: "corporate",
    tags: ["Real estate", "Hospitality", "Launch"],
    engine: "Custom PHP",
    accent: "#92400e",
    excerpt: "Launch site for Le Meridien by Newstone — mixed-use landmark, leasing, and investor enquiry.",
    description:
      "Le Meridien by Newstone is a 5,00,000 sq. ft. mixed-use destination in Ludhiana: retail, dining, entertainment, and a 120-key hotel. The site is a launch and leasing tool as much as a brand piece.",
    contribution: [
      "Narrative site for a mixed-use hospitality + retail destination.",
      "Enquiry paths for leasing, investors, and careers.",
      "Content structure for plans, connectivity, and brand mix.",
    ],
    stack: ["PHP", "CMS", "Lead forms", "Performance"],
  },
  {
    slug: "educare-global",
    name: "Educare Global",
    url: "https://educareglobalconsulting.com/",
    year: "2025",
    category: "education",
    tags: ["Consultancy", "Private", "International"],
    engine: "Next.js",
    accent: "#134e4a",
    excerpt: "Private family consultancy — education, household, and international support, built with discretion.",
    description:
      "Educare Global Consulting walks families through education, household staffing, medical coordination, and international moves. The site has to feel private and considered — a conversation, not a funnel screaming for leads.",
    contribution: [
      "Quiet, high-trust information architecture for a private consultancy.",
      "Enquiry flow designed as a private conversation, not a spam form.",
      "Content model across household, family support, and schools.",
    ],
    stack: ["Next.js", "CMS", "Forms", "SEO"],
  },
  {
    slug: "the-brand-bee",
    name: "The Brand Bee",
    url: "https://thebrandbee.com/",
    year: "2025",
    category: "corporate",
    tags: ["Agency", "Full stack", "Brand"],
    engine: "Custom PHP",
    accent: "#c4a035",
    excerpt: "Integrated brand and performance agency site — practices, proof, and the hive that ships the work.",
    description:
      "The Brand Bee is a Gurugram brand, digital, and performance group: 85+ specialists, 20+ industries, 18+ countries. The site has to sell the studio without looking like a template, and still carry case studies, careers, and lead flow.",
    contribution: [
      "Full stack public site for the agency I build product on.",
      "Content models for practices, proof, and campaign work.",
      "Enquiry and performance-oriented information architecture.",
    ],
    stack: ["PHP", "Custom CMS", "JavaScript", "AWS"],
  },
  {
    slug: "sheela-foam",
    name: "Sheela Foam",
    url: "https://www.sheelafoam.com/",
    year: "2024",
    category: "corporate",
    tags: ["Corporate", "Manufacturing", "Group"],
    engine: "Custom stack",
    accent: "#1e3a5f",
    excerpt: "Group site for a global comfort manufacturer — Sleepwell, Kurlon, Furlenco under one roof.",
    description:
      "Sheela Foam is a global foam and comfort group across Asia, Australia, and Europe, with household brands including Sleepwell, Kurl-on, and Furlenco. The corporate site has to hold investor, brand, and industrial stories without becoming a PDF dump.",
    contribution: [
      "Corporate information architecture for a multi-brand manufacturing group.",
      "Content structure across comfort science, brands, and sustainability.",
      "A public surface that can sit beside the D2C storefronts in the same family.",
    ],
    stack: ["PHP", "Custom CMS", "MySQL", "AWS"],
  },
  {
    slug: "house-of-wellness",
    name: "House of Wellness",
    url: "https://houseofwellness.health/",
    year: "2025",
    category: "commerce",
    tags: ["D2C", "Shopify", "Checkout"],
    engine: "Shopify",
    accent: "#9f1239",
    excerpt: "Women’s wellness commerce — periods to menopause, quiz-led discovery, and a working checkout.",
    description:
      "House of Wellness sells science-backed women’s health products by life stage. Discovery is the product: rooms, a 60-second quiz, and a catalogue that still has to convert through payments and delivery.",
    contribution: [
      "D2C storefront and catalogue architecture for a wellness range.",
      "Faster checkout with payment gateways and shipping APIs.",
      "Quiz and merchandising flows that still land in a real cart.",
    ],
    stack: ["Shopify", "Magic Checkout", "Razorpay", "Shiprocket"],
  },
  {
    slug: "khazana",
    name: "Khazana",
    url: "https://khazanathetreasure.com/",
    year: "2025",
    category: "commerce",
    tags: ["US eCom", "Grocery", "Payments"],
    engine: "Shopify",
    accent: "#92400e",
    excerpt: "Indian grocery commerce for the USA — pantry staples, delivery, and a cross-border checkout.",
    description:
      "Khazana sells authentic Indian groceries across the USA: rice, atta, lentils, spices, ready-to-eat. Cross-border catalogue, delivery promises, and checkout have to feel native to a US shopper.",
    contribution: [
      "International grocery catalogue and collection architecture.",
      "Checkout and payment flows for US delivery.",
      "Logistics and order APIs around a high-repeat pantry business.",
    ],
    stack: ["Shopify", "Payments", "Shipping APIs", "Checkout"],
  },
  {
    slug: "whipped",
    name: "Whipped",
    url: "https://whipped.in/",
    year: "2024",
    category: "commerce",
    tags: ["D2C", "Same-day", "Gifting"],
    engine: "Shopify",
    accent: "#be185d",
    excerpt: "Cakes and flowers for Delhi NCR — customisation, add-ons, and same-day gifting checkout.",
    description:
      "Whipped is a celebration storefront: cakes, flowers, candles, customisation. Same-day NCR delivery and add-on merchandising are part of checkout, not a footer note.",
    contribution: [
      "Catalogue and customisation flows for cakes and florals.",
      "Same-day gifting checkout with payments and delivery rules.",
      "Add-on merchandising that does not break the cart.",
    ],
    stack: ["Shopify", "Razorpay", "Shiprocket", "Checkout APIs"],
  },
  {
    slug: "puffli",
    name: "Puffli Snacks",
    url: "https://pufflisnacks.com/",
    year: "2025",
    category: "commerce",
    tags: ["D2C", "Bundles", "Checkout"],
    engine: "Shopify",
    accent: "#c2410c",
    excerpt: "Roasted makhana D2C — flavour packs, bundles, COD, and a snack-speed checkout.",
    description:
      "Puffli is a flavoured makhana brand with bundles, COD, Amazon as a second channel, and a storefront that has to sell crunch without a slow cart. Repeat rate is the metric.",
    contribution: [
      "D2C catalogue, bundles, and subscription-style pack logic.",
      "Faster checkout with Razorpay, COD, and shipping APIs.",
      "Promotion and free-shipping rules that survive campaign traffic.",
    ],
    stack: ["Shopify", "Razorpay", "Shiprocket", "Magic Checkout"],
  },
  {
    slug: "pariaa",
    name: "Pariaa",
    url: "https://www.pariaa.com/",
    year: "2025",
    category: "commerce",
    tags: ["Jewellery", "D2C", "Checkout"],
    engine: "Shopify",
    accent: "#44403c",
    excerpt: "Anti-tarnish jewellery storefront — collections, COD, and a high-craft PDP.",
    description:
      "Pariaa sells water-resistant, anti-tarnish jewellery for everyday wear. Variant-heavy PDPs and a checkout that supports COD and prepaid without looking like a generic theme.",
    contribution: [
      "Collection and PDP architecture for a jewellery catalogue.",
      "Checkout with prepaid and cash-on-delivery flows.",
      "Storefront performance for a visual, high-AOV D2C brand.",
    ],
    stack: ["Shopify", "Razorpay", "Checkout", "Shiprocket"],
  },
  {
    slug: "walkstalk",
    name: "Walkstalk",
    url: "https://shopwalkstalk.com/",
    year: "2025",
    category: "commerce",
    tags: ["Fashion", "D2C", "Shopify"],
    engine: "Shopify",
    accent: "#7c2d12",
    excerpt: "Occasion sneakers for Indian wear — small-batch catalogue and a celebration checkout.",
    description:
      "Walkstalk makes celebration sneakers designed to sit with sarees and festive wear. Small-batch SKUs, craft story, and a storefront that still has to take payment.",
    contribution: [
      "Fashion catalogue and PDP for a small-batch footwear line.",
      "Checkout and payment gateway integration.",
      "Content structure for craft, styling, and conversion.",
    ],
    stack: ["Shopify", "Razorpay", "Shiprocket", "JavaScript"],
  },
];

export const moreWork = [
  {
    name: "Alzea India",
    url: "https://alzeaindia.com/",
    tag: "Education",
  },
  {
    name: "PVNA Group",
    url: "https://www.pvnagroup.com/",
    tag: "Corporate",
  },
  {
    name: "WOG Group",
    url: "https://woggroup.com/",
    tag: "Industrial",
  },
  {
    name: "Kauma Kids",
    url: "https://kaumakids.com/",
    tag: "D2C",
  },
  {
    name: "Incroy & Merv",
    url: "https://www.incroymerv.com/",
    tag: "Fashion",
  },
  {
    name: "Pomme",
    url: "https://pomme.co.in/",
    tag: "D2C",
  },
  {
    name: "Fundedd",
    url: "https://www.fundedd.com/",
    tag: "Fintech",
  },
  {
    name: "Kusum Flowers",
    url: "https://kusumflowers.com/",
    tag: "Gifting",
  },
  {
    name: "Dunham-Bush",
    url: "https://dunham-bush.com/",
    tag: "HVAC",
  },
  {
    name: "Design i.O",
    url: "https://www.designio.in/",
    tag: "Architecture",
  },
  {
    name: "Lusso Vita",
    url: "https://thelussovita.com/",
    tag: "Apparel",
  },
] as const;

export const categoryLabels: Record<ProjectCategory, string> = {
  commerce: "Commerce",
  platform: "Platform",
  education: "Education",
  corporate: "Corporate",
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
