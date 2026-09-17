export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  badge?: string;
  pricingHint?: string;
  whatsappPrompt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web-app' | 'management' | 'creative-3d' | 'utility' | 'ecommerce';
  categoryLabel: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFreeDemo: boolean;
  demoNote?: string;
  highlights: string[];
}

export interface TechnologyItem {
  name: string;
  category: 'Frontend' | 'Backend / Cloud' | 'Mobile & Tools';
  color: string;
  icon: string;
  level: string;
  badge: string;
}

export const SITE_DATA = {
  brand: {
    name: "CREATOR STUDIO 2.0",
    studioName: "CREATOR STUDIO 2.0",
    studioSub: "WEB DEVELOPMENT",
    developerName: "Dhananjay Uphade",
    developerNameCaps: "DHANANJAY UPHADE",
    title: "WEB DEVELOPMENT & APK CREATION",
    tagline: "Your Idea → My Code → Live Website",
    marathiTagline: "तुमची कल्पना + माझे तंत्रज्ञान = तुमची स्वतःची Website!",
    subheading: "Creator Studio 2.0 – Professional & Modern Web Development",
    concept: "Professional websites, web apps and Android APK development with free live demos and custom features.",
    experienceBadge: "Dedicated Craftsmanship",
    turnaround: "Fast Turnaround & Clean Code",
  },
  contact: {
    whatsapp: "8975881499",
    whatsappDisplay: "+91 8975881499",
    email: "dhannjayuphade5@gmail.com",
    instagram: "@dhannjayuphade",
    instagramUrl: "https://www.instagram.com/dhannjayuphade?igsh=YzljYTk1ODg3Zg==",
    featuredPostUrl: "https://www.instagram.com/p/DdYz1Desb69/?stkn=MWdkdGVlMjRxbGY2cQ==",
    github: "dhannjayuphade",
    githubUrl: "https://github.com/dhannjayuphade",
    portfolioUrl: "https://dhannjayuphade.github.io/",
    officialWebsite: "https://dhannjayuphade.github.io/",
    getWhatsAppUrl: (message: string) => {
      return `https://wa.me/918975881499?text=${encodeURIComponent(message)}`;
    },
  },
  stats: [
    { label: "Core Services", value: "12+" },
    { label: "Responsive Design", value: "100%" },
    { label: "Free Demo Demos", value: "Available" },
    { label: "Android APK Delivery", value: "Included" },
  ],
  services: [
    {
      id: "personal-portfolio",
      name: "Personal / Portfolio Website",
      category: "Personal Brand",
      iconName: "User",
      shortDesc: "Showcase your resume, work samples, blogs, and identity with single or multi-page sleek designs.",
      fullDesc: "Tailored portfolio websites for developers, designers, freelancers, and professionals looking to create a commanding online presence. Features responsive hero layouts, project showcases, downloadable resumes, and instant contact channels.",
      features: ["Single or Multi-Page Structure", "Resume / CV Download", "Interactive Project Gallery", "Contact & Social Media Hub", "Fast Loading & Mobile Perfect"],
      badge: "Popular",
      pricingHint: "Affordable & Fast",
      whatsappPrompt: "Hi Dhannjay, I am interested in building a Personal / Portfolio Website. Please share details and free demo options."
    },
    {
      id: "business-website",
      name: "Business Website",
      category: "Corporate",
      iconName: "Briefcase",
      shortDesc: "Establish digital credibility, generate leads, and showcase your company services to potential clients.",
      fullDesc: "Modern corporate and local business websites designed to turn visitors into paying customers. Includes custom branding, service catalogs, Google Maps location, WhatsApp chat integration, and quotation forms.",
      features: ["Company Profile & About", "Service Catalogs & Inquiries", "Customer Testimonials", "Google Maps & Local SEO Setup", "Direct Lead Capture"],
      badge: "High Conversion",
      pricingHint: "Custom Quotation",
      whatsappPrompt: "Hi Dhannjay, I need a Business Website for my company. Please share demo designs and consultation."
    },
    {
      id: "school-college",
      name: "School / College Website",
      category: "Education",
      iconName: "GraduationCap",
      shortDesc: "Educational portals for schools, academies, and colleges with digital notice boards and student portals.",
      fullDesc: "Comprehensive educational web solutions featuring dynamic announcements, course catalogs, faculty directories, admission inquiry forms, event calendars, and downloadable syllabus/results.",
      features: ["Digital Notice Board & Updates", "Admission Inquiries Form", "Courses & Syllabus Section", "Events & Photo Gallery", "Faculty Directory"],
      pricingHint: "Educational Package",
      whatsappPrompt: "Hi Dhannjay, we need a School/College Website with notice boards and admission forms. Let us connect."
    },
    {
      id: "ecommerce-store",
      name: "E-Commerce Website",
      category: "Online Store",
      iconName: "ShoppingCart",
      shortDesc: "Sell products online with digital shopping carts, product catalogs, and direct WhatsApp / payment order checkout.",
      fullDesc: "Sleek online storefronts for clothing, electronics, retail, and local products. Easy product categorization, instant cart management, WhatsApp direct order processing, and payment gateway readiness.",
      features: ["Product Showcase & Filter", "Interactive Shopping Cart", "WhatsApp Direct Order Dispatch", "Payment Gateway Integration Ready", "Inventory & Order Management"],
      badge: "High Growth",
      pricingHint: "Scalable Store",
      whatsappPrompt: "Hi Dhannjay, I want to launch an E-Commerce Website to sell products online. Please share the details."
    },
    {
      id: "admin-dashboard",
      name: "Admin Dashboard",
      category: "Management",
      iconName: "LayoutDashboard",
      shortDesc: "Internal control panels to manage users, monitor analytics, filter databases, and export PDF/Excel reports.",
      fullDesc: "Custom admin portals built for businesses and managers to track real-time activity, manage user roles, audit data entries, update website content, and export vital metrics in seconds.",
      features: ["Interactive Charts & Metrics", "CRUD Data Tables & Search", "User Access & Role Management", "CSV / Excel Data Export", "Dark & Light Mode UI"],
      pricingHint: "Enterprise Ready",
      whatsappPrompt: "Hi Dhannjay, I need a custom Admin Dashboard to manage my application data. Let us discuss the requirements."
    },
    {
      id: "quiz-test-platform",
      name: "Quiz / Test Website",
      category: "Assessment",
      iconName: "HelpCircle",
      shortDesc: "Interactive test portals with multiple-choice questions, timers, instant score evaluation, and AI-ready options.",
      fullDesc: "Engaging quiz and test systems for students, coaching institutes, or competitive exams. Includes timed tests, randomized question banks, instant score breakdown, and answer reviews.",
      features: ["Timer-based MCQ Exams", "Instant Results & Percentage", "Question Category Filtration", "Answer Review & Explanations", "AI Quiz Generation Ready"],
      pricingHint: "Interactive Tool",
      whatsappPrompt: "Hi Dhannjay, I want a Quiz / Test Website for online exams and student assessments."
    },
    {
      id: "login-auth-system",
      name: "Login & Authentication System",
      category: "Security",
      iconName: "Lock",
      shortDesc: "Secure user registration, Email/Password verification, Google OAuth sign-in, and protected route access.",
      fullDesc: "Robust authentication architecture preventing unauthorized access. Implements JWT / Firebase Auth, password recovery, session persistence, and role-based permissions.",
      features: ["Google Sign-In & OAuth", "Email & Password Verification", "Password Reset & Recovery", "Protected Routes & State", "Role Based Permissions"],
      pricingHint: "Security Module",
      whatsappPrompt: "Hi Dhannjay, I need a secure Login & Authentication system for my web project."
    },
    {
      id: "firebase-integration",
      name: "Firebase Integration",
      category: "Cloud Backend",
      iconName: "Database",
      shortDesc: "Cloud Firestore database connection, real-time data sync, secure cloud storage, and live updates without heavy servers.",
      fullDesc: "Effortlessly connect your frontend to Google Firebase for lightning-fast real-time database operations, user management, and static hosting with zero maintenance headaches.",
      features: ["Firestore Real-Time Database", "Firebase Storage for Media", "Cloud Security Rules", "Real-Time Push Notifications Ready", "Scalable Serverless Infrastructure"],
      pricingHint: "Cloud Infrastructure",
      whatsappPrompt: "Hi Dhannjay, I need Firebase database and authentication integration for my web app."
    },
    {
      id: "fully-responsive",
      name: "Fully Responsive Website",
      category: "Design",
      iconName: "Smartphone",
      shortDesc: "Flawless mobile-first layouts that adapt perfectly to Android smartphones, tablets, laptops, and ultra-wide screens.",
      fullDesc: "Every website is engineered from the ground up to render flawlessly across all mobile screen sizes, ensuring fluid touch gestures, legible text, and zero awkward horizontal overflows.",
      features: ["Mobile-First Fluid Layout", "Android & iOS Screen Tuning", "Touch-Friendly Buttons & Inputs", "Retina & HD Display Optimization", "Ultra-Fast Page Speed"],
      badge: "Core Standard",
      pricingHint: "Included Standard",
      whatsappPrompt: "Hi Dhannjay, I need a 100% mobile-friendly responsive website. Can you show me samples?"
    },
    {
      id: "maintenance-support",
      name: "Website Maintenance & Updates",
      category: "Support",
      iconName: "Wrench",
      shortDesc: "Routine bug fixes, UI refreshes, content updates, domain/hosting guidance, and performance health checks.",
      fullDesc: "Already have a website that needs updates or fixing? We handle layout corrections, code refactoring, image replacements, security updates, and performance tuning.",
      features: ["Bug Fixes & Error Resolution", "Text & Image Content Updates", "Page Speed & SEO Optimization", "Hosting & Domain Configuration", "Regular Health Checkups"],
      pricingHint: "Flexible Retainer / Per-Task",
      whatsappPrompt: "Hi Dhannjay, I have an existing website that needs maintenance, bug fixes, or updates."
    },
    {
      id: "web-app-dev",
      name: "Web App Development",
      category: "Full Stack",
      iconName: "Code2",
      shortDesc: "Modern, dynamic Single Page Applications with interactive client-side logic, APIs, and state management.",
      fullDesc: "Transform complex business workflows into seamless web applications. Built using modern JavaScript, React, and modular state architecture for fast, desktop-grade web tools.",
      features: ["Single Page Architecture (SPA)", "API Data Integration", "Dynamic State Management", "Interactive User Interfaces", "Cross-Platform Web Experience"],
      pricingHint: "Custom Scoped",
      whatsappPrompt: "Hi Dhannjay, I am looking to build an interactive Web Application. Let us discuss the concept."
    },
    {
      id: "android-apk-creation",
      name: "Android APK Creation from Website",
      category: "Mobile APK",
      iconName: "SmartphoneCharging",
      shortDesc: "Turn your live website into an installable Android APK with custom launcher icon, splash screen, and offline fallback.",
      fullDesc: "Give your clients and users a native feel on their Android smartphones! We package and optimize your web application into a lightweight, installable APK file ready for distribution.",
      features: ["Custom App Launcher Icon", "Branded Animated Splash Screen", "Full-Screen Mobile UI", "Offline Fallback Screen", "Direct APK Delivery Ready to Install"],
      badge: "Top Feature",
      pricingHint: "Website + APK Deal",
      whatsappPrompt: "Hi Dhannjay, I want to convert my website into an Android APK with custom icon and splash screen."
    }
  ] as ServiceItem[],

  projects: [
    {
      id: "student-management",
      title: "Student Management System",
      category: "management",
      categoryLabel: "Management System",
      description: "A comprehensive digital portal to manage student admissions, grades, attendance records, and generate report cards with authentication.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS", "Auth"],
      liveUrl: "https://dhannjayuphade.github.io/",
      githubUrl: "https://github.com/dhannjayuphade",
      isFreeDemo: true,
      demoNote: "Live demo website available for immediate test and custom adaptation.",
      highlights: ["Student Database", "Attendance Tracker", "Grade Management", "Excel/PDF Export"]
    },
    {
      id: "rocket-3d-structure",
      title: "Rocket 3D Structure",
      category: "creative-3d",
      categoryLabel: "3D & Creative Web",
      description: "Interactive 3D aerospace model explorer built with Three.js and WebGL. Features 360-degree orbital controls, component breakdown, and futuristic lighting.",
      image: "https://images.unsplash.com/photo-1517976487507-5b3b488344e4?q=80&w=1000&auto=format&fit=crop",
      technologies: ["Three.js", "WebGL", "JavaScript", "Cyber UI"],
      liveUrl: "https://dhannjayuphade.github.io/",
      githubUrl: "https://github.com/dhannjayuphade",
      isFreeDemo: true,
      demoNote: "Interactive 3D WebGL demo highlighting modern visual capabilities.",
      highlights: ["Orbital 3D Navigation", "Real-time Lighting", "Interactive Hotspots", "Futuristic HUD"]
    },
    {
      id: "nexora-app-store",
      title: "Nexora App Store",
      category: "web-app",
      categoryLabel: "Web App Store",
      description: "A modern web application marketplace interface with app discovery, categorized galleries, screenshots, reviews, and instant download buttons.",
      image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop",
      technologies: ["JavaScript", "HTML5/CSS3", "Responsive UI", "Local State"],
      liveUrl: "https://dhannjayuphade.github.io/",
      githubUrl: "https://github.com/dhannjayuphade",
      isFreeDemo: true,
      demoNote: "Available as a working demo ready to be rebranded for client catalogs.",
      highlights: ["Category Filter", "App Details View", "Direct APK Link Support", "Dark Cyber Aesthetic"]
    },
    {
      id: "milk-management",
      title: "Milk Management System",
      category: "management",
      categoryLabel: "Dairy & Billing System",
      description: "Specialized dairy collection and farmer ledger system. Handles morning/evening milk collection, fat/SNF calculation, automatic billing, and print slips.",
      image: "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?q=80&w=1000&auto=format&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      liveUrl: "https://dhannjayuphade.github.io/",
      githubUrl: "https://github.com/dhannjayuphade",
      isFreeDemo: true,
      demoNote: "Real-world utility demo for dairy cooperatives and milk centers.",
      highlights: ["Fat & SNF Auto Calculation", "Farmer Ledger Accounts", "Daily Collection Slips", "Monthly Summary Reports"]
    },
    {
      id: "ai-quiz-platform",
      title: "AI Quiz / Test Engine",
      category: "utility",
      categoryLabel: "Interactive Quiz",
      description: "Responsive online assessment tool featuring randomized multiple choice questions, timer countdown, review screen, and instant results calculation.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
      technologies: ["JavaScript", "HTML5", "Tailwind CSS", "JSON Data"],
      liveUrl: "https://dhannjayuphade.github.io/",
      githubUrl: "https://github.com/dhannjayuphade",
      isFreeDemo: true,
      demoNote: "Fully functional interactive quiz module ready for educational use.",
      highlights: ["Timer Countdown", "Instant Scoring System", "Answer Analysis", "Category Selection"]
    },
    {
      id: "ecommerce-boutique",
      title: "Cyber E-Commerce Storefront",
      category: "ecommerce",
      categoryLabel: "E-Commerce",
      description: "Modern online store demo equipped with category filtering, shopping cart drawer, discount coupon calculation, and direct WhatsApp order dispatch.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop",
      technologies: ["React", "Tailwind CSS", "LocalStorage", "WhatsApp API"],
      liveUrl: "https://dhannjayuphade.github.io/",
      githubUrl: "https://github.com/dhannjayuphade",
      isFreeDemo: true,
      demoNote: "Demo storefront ready to be tailored to any retail or boutique business.",
      highlights: ["Cart Drawer System", "WhatsApp Order Generator", "Variant Selector", "Mobile Optimized"]
    }
  ] as ProjectItem[],

  technologies: [
    { name: "HTML5", category: "Frontend", color: "#e34f26", icon: "Code", level: "Semantic & SEO", badge: "Core" },
    { name: "CSS3", category: "Frontend", color: "#1572b6", icon: "Palette", level: "Animations & Grid", badge: "Styling" },
    { name: "JavaScript", category: "Frontend", color: "#f7df1e", icon: "FileCode", level: "ES6+ Modern JS", badge: "Engine" },
    { name: "Firebase", category: "Backend / Cloud", color: "#ffca28", icon: "Flame", level: "Auth & Firestore", badge: "Cloud" },
    { name: "GitHub", category: "Mobile & Tools", color: "#ffffff", icon: "GitBranch", level: "Version Control", badge: "DevOps" },
    { name: "Python", category: "Backend / Cloud", color: "#3776ab", icon: "Terminal", level: "Scripting & Backend", badge: "Logic" },
    { name: "Android APK", category: "Mobile & Tools", color: "#3ddc84", icon: "Smartphone", level: "WebView & Packaging", badge: "Mobile" },
    { name: "Three.js", category: "Frontend", color: "#00e5ff", icon: "Boxes", level: "3D WebGL Worlds", badge: "3D Graphics" },
    { name: "Bootstrap", category: "Frontend", color: "#7952b3", icon: "Layout", level: "Rapid Prototyping", badge: "Grid" },
    { name: "React", category: "Frontend", color: "#61dafb", icon: "Layers", level: "Single Page Apps", badge: "Modern UI" },
    { name: "Tailwind CSS", category: "Frontend", color: "#38bdf8", icon: "Sparkles", level: "Utility Styling", badge: "Modern" },
    { name: "Netlify", category: "Mobile & Tools", color: "#00c7b7", icon: "Globe", level: "Cloud Hosting & CI", badge: "Deploy" }
  ] as TechnologyItem[],

  whyChooseUs: [
    {
      title: "Clean & Modern Design",
      desc: "Pixel-perfect visual aesthetics inspired by high-tech cyber layouts, focused on clean typography and spacious harmony.",
      icon: "Sparkles"
    },
    {
      title: "100% Mobile Friendly",
      desc: "Flawless touch controls and responsiveness across all Android devices, iPhones, tablets, and desktop displays.",
      icon: "Smartphone"
    },
    {
      title: "Fast Loading Speed",
      desc: "Optimized lightweight code, clean DOM architecture, and compressed assets for lightning-fast page response.",
      icon: "Zap"
    },
    {
      title: "Secure & Reliable",
      desc: "Engineered with standard security practices, safe authentication mechanisms, and robust validation.",
      icon: "ShieldCheck"
    },
    {
      title: "Clean Maintainable Code",
      desc: "Structured, well-documented source code that makes future updates, enhancements, and expansions effortless.",
      icon: "Code"
    },
    {
      title: "Custom Development",
      desc: "Every feature is tailored to your exact business goals, color scheme, brand identity, and workflow requirements.",
      icon: "Sliders"
    },
    {
      title: "On-Time Project Delivery",
      desc: "Transparent milestones, direct communication on WhatsApp, and dependable delivery schedules.",
      icon: "Clock"
    },
    {
      title: "Affordable & Fair Pricing",
      desc: "Transparent project quotations with free demos to preview before committing to paid custom development.",
      icon: "DollarSign"
    }
  ],

  processSteps: [
    {
      step: "01",
      title: "Share Your Idea",
      desc: "Message your requirements, business goals, or preferred design reference via WhatsApp or our contact form."
    },
    {
      step: "02",
      title: "Discuss & Try Free Demo",
      desc: "We analyze your needs and share pre-built working demo websites so you can test and visualize the solution."
    },
    {
      step: "03",
      title: "Design & Development",
      desc: "Your custom website is crafted with modern UI/UX, responsive mobile layouts, and secure database connections."
    },
    {
      step: "04",
      title: "Testing & Improvements",
      desc: "We rigorously test on mobile devices, check performance, and apply your feedback and revisions."
    },
    {
      step: "05",
      title: "Live Website / APK Delivery",
      desc: "Your website goes live on the internet, and your installable Android APK is compiled and delivered ready to install."
    }
  ],

  apkDetails: {
    title: "Website + Android APK",
    subtitle: "Turn Your Website Into an Installable Android App",
    description: "Expand your reach beyond browsers! We convert your responsive website into a standalone Android APK that your clients and users can install directly onto their phones.",
    features: [
      { title: "Custom App Icon", desc: "Branded app launcher icon on your phone home screen." },
      { title: "Splash Screen", desc: "Professional animated entrance screen with your brand logo." },
      { title: "Responsive App UI", desc: "Fluid full-screen interface without browser address bar clutter." },
      { title: "Website Integration", desc: "Synchronized with your live website updates in real-time." },
      { title: "Direct APK Delivery", desc: "Installable .apk file sent directly via WhatsApp or Drive." }
    ],
    whatsappPrompt: "Hi Dhannjay, I want to convert my website into an Android APK. Please share the procedure, custom icon setup, and pricing."
  }
};
