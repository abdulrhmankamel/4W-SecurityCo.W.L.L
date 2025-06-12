document.addEventListener("DOMContentLoaded", () => {
  // Get language switching elements
  const langBtn = document.getElementById("lang-btn");
  const langList = document.getElementById("lang-list");
  const langOptions = langList.querySelectorAll("li");

  // Function to toggle dropdown
  function toggleDropdown(show) {
    langList.classList.toggle("show", show);
    langBtn.setAttribute("aria-expanded", show);
  }

  // Get all translatable elements
  const elements = {
    // Common Navigation Elements
    navHome: document.getElementById("nav-home"),
    navAbout: document.getElementById("nav-about"),
    navContact: document.getElementById("nav-contact"),
    footerText: document.getElementById("footer-text"),

    // Home Page Elements
    welcomeText: document.querySelector(".welcome-text"),
    companyName: document.querySelector(".company-name"),
    heroSubtitle: document.getElementById("hero-subtitle"),
    aboutTitle: document.getElementById("about-title"),
    aboutText: document.getElementById("about-text"),
    featureProfessional: document.getElementById("feature-professional"),
    featureSupport: document.getElementById("feature-support"),
    featureModern: document.getElementById("feature-modern"),
    featureQuality: document.getElementById("feature-quality"),
    whyChooseTitle: document.getElementById("why-choose-title"),
    expertSecurityTitle: document.getElementById("expert-security-title"),
    expertSecurityText: document.getElementById("expert-security-text"),
    premiumCleaningTitle: document.getElementById("premium-cleaning-title"),
    premiumCleaningText: document.getElementById("premium-cleaning-text"),
    fastResponseTitle: document.getElementById("fast-response-title"),
    fastResponseText: document.getElementById("fast-response-text"),
    reliableServiceTitle: document.getElementById("reliable-service-title"),
    reliableServiceText: document.getElementById("reliable-service-text"),
    statsClientsTitle: document.getElementById("stats-clients-title"),
    statsClientsValue: document.getElementById("stats-clients-value"),
    statsStaffTitle: document.getElementById("stats-staff-title"),
    statsStaffValue: document.getElementById("stats-staff-value"),
    statsExperienceTitle: document.getElementById("stats-experience-title"),
    statsExperienceValue: document.getElementById("stats-experience-value"),
    statsSupportTitle: document.getElementById("stats-support-title"),
    statsSupportValue: document.getElementById("stats-support-value"),
    servicesTitle: document.getElementById("services-title"),
    cleaningTitle: document.getElementById("cleaning-title"),
    cleaningText: document.getElementById("cleaning-text"),
    cleaningButton: document.getElementById("cleaning-button"),
    securityTitle: document.getElementById("security-title"),
    securityText: document.getElementById("security-text"),
    securityButton: document.getElementById("security-button"),
    contactTitle: document.getElementById("contact-title"),
    contactText: document.getElementById("contact-text"),
    inputName: document.getElementById("input-name"),
    inputEmail: document.getElementById("input-email"),
    inputMessage: document.getElementById("input-message"),
    submitBtn: document.getElementById("submit-btn"),

    // Cleaning Page Elements
    cleaningHeroTitle: document.getElementById("cleaning-hero-title"),
    cleaningHeroText: document.getElementById("cleaning-hero-text"),
    commercialTitle: document.getElementById("commercial-title"),
    commercial1: document.getElementById("commercial-1"),
    commercial2: document.getElementById("commercial-2"),
    commercial3: document.getElementById("commercial-3"),
    commercial4: document.getElementById("commercial-4"),
    residentialTitle: document.getElementById("residential-title"),
    residential1: document.getElementById("residential-1"),
    residential2: document.getElementById("residential-2"),
    residential3: document.getElementById("residential-3"),
    residential4: document.getElementById("residential-4"),
    specializedTitle: document.getElementById("specialized-title"),
    specialized1: document.getElementById("specialized-1"),
    specialized2: document.getElementById("specialized-2"),
    specialized3: document.getElementById("specialized-3"),
    specialized4: document.getElementById("specialized-4"),
    ecoTitle: document.getElementById("eco-title"),
    ecoText: document.getElementById("eco-text"),

    // Security Page Elements
    securityHeroTitle: document.getElementById("security-hero-title"),
    securityHeroText: document.getElementById("security-hero-text"),
    guardTitle: document.getElementById("guard-title"),
    guard1: document.getElementById("guard-1"),
    guard2: document.getElementById("guard-2"),
    guard3: document.getElementById("guard-3"),
    guard4: document.getElementById("guard-4"),
    techTitle: document.getElementById("tech-title"),
    tech1: document.getElementById("tech-1"),
    tech2: document.getElementById("tech-2"),
    tech3: document.getElementById("tech-3"),
    tech4: document.getElementById("tech-4"),
    facilityTitle: document.getElementById("facility-title"),
    facility1: document.getElementById("facility-1"),
    facility2: document.getElementById("facility-2"),
    facility3: document.getElementById("facility-3"),
    facility4: document.getElementById("facility-4"),
    techSolutionsTitle: document.getElementById("tech-solutions-title"),
    techSolutionsText: document.getElementById("tech-solutions-text"),
    responseTitle: document.getElementById("response-title"),
    responseText: document.getElementById("response-text"),
    industriesTitle: document.getElementById("industries-title"),
    eventsTitle: document.getElementById("events-title"),
    eventsText: document.getElementById("events-text"),
    industrialTitle: document.getElementById("industrial-title"),
    industrialText: document.getElementById("industrial-text"),

    // Common Elements
    trainedTitle: document.getElementById("trained-title"),
    trainedText: document.getElementById("trained-text"),
    customTitle: document.getElementById("custom-title"),
    customText: document.getElementById("custom-text"),
    phoneButton: document.getElementById("phone-button"),
    whatsappButton: document.getElementById("whatsapp-button")
  };

  const translations = {
    eng: {
      dir: "ltr",
      navHome: "Home",
      navAbout: "About",
      navContact: "Contact",
      welcomeText: "WELCOME TO",
      companyName: "4W",
      heroSubtitle: "Your trusted partner in modern security and cleaning solutions.",
      aboutTitle: "About Us",
      aboutText: "4W Security Co. W.L.L. is a leading provider of comprehensive security and cleaning services based in Manama, Kingdom of Bahrain. With a commitment to excellence, integrity, and innovation, 4W Security delivers tailored solutions to both public and private sectors.",
      featureProfessional: "Professional Team",
      featureSupport: "24/7 Support",
      featureModern: "Modern Solutions",
      featureQuality: "Quality Service",
      whyChooseTitle: "Why Choose Us",
      expertSecurityTitle: "Expert Security",
      expertSecurityText: "Trained professionals using latest security technologies",
      premiumCleaningTitle: "Premium Cleaning",
      premiumCleaningText: "Eco-friendly cleaning with attention to detail",
      fastResponseTitle: "Fast Response",
      fastResponseText: "Quick response times to all service requests",
      reliableServiceTitle: "Reliable Service",
      reliableServiceText: "Consistent and dependable service delivery",
      statsClientsTitle: "Clients Served",
      statsClientsValue: "500+",
      statsStaffTitle: "Expert Staff",
      statsStaffValue: "50+",
      statsExperienceTitle: "Years Experience",
      statsExperienceValue: "10+",
      statsSupportTitle: "Support Available",
      statsSupportValue: "24/7",
      servicesTitle: "Our Services",
      cleaningTitle: "Cleaning Service",
      cleaningText: "Our expert cleaning team ensures your premises are spotless, safe, and well-maintained with eco-friendly solutions.",
      cleaningButton: "Know More",
      securityTitle: "Security Service",
      securityText: "Professional guards and surveillance to protect your property and people around the clock.",
      securityButton: "Know More",
      contactTitle: "Contact",
      inputName: "Your Name",
      inputEmail: "Your Email",
      inputMessage: "Your Message",
      submitBtn: "Send Message",
      footerText: "© 2025 4W. All rights reserved.",
      langBtnText: "ENG",
      cleaningHeroTitle: "Professional Cleaning Services",
      cleaningHeroText: "Experience excellence in cleanliness with our comprehensive cleaning solutions tailored to your needs.",
      commercialTitle: "Commercial Cleaning",
      commercial1: "Office buildings and workspaces",
      commercial2: "Retail stores and shopping centers",
      commercial3: "Hotels and hospitality venues",
      commercial4: "Regular maintenance programs",
      residentialTitle: "Residential Cleaning",
      residential1: "Homes and apartments",
      residential2: "Move-in/move-out cleaning",
      residential3: "Deep cleaning services",
      residential4: "Customized cleaning plans",
      specializedTitle: "Specialized Cleaning",
      specialized1: "Medical facilities",
      specialized2: "Educational institutions",
      specialized3: "Industrial spaces",
      specialized4: "Post-construction cleanup",
      ecoTitle: "Eco-Friendly Solutions",
      ecoText: "We use environmentally responsible cleaning products and methods to protect both your space and the planet.",
      securityHeroTitle: "Professional Security Services",
      securityHeroText: "Comprehensive security solutions to protect what matters most to you.",
      guardTitle: "Security Guards",
      guard1: "Trained security personnel",
      guard2: "24/7 surveillance",
      guard3: "Access control management",
      guard4: "Emergency response",
      techTitle: "Security Technology",
      tech1: "CCTV installation",
      tech2: "Alarm systems",
      tech3: "Access control systems",
      tech4: "Remote monitoring",
      facilityTitle: "Facility Security",
      facility1: "Building security",
      facility2: "Event security",
      facility3: "Perimeter protection",
      facility4: "Risk assessment",
      techSolutionsTitle: "Advanced Technology",
      techSolutionsText: "State-of-the-art security systems and monitoring solutions.",
      responseTitle: "Quick Response",
      responseText: "24/7 monitoring and rapid response to security incidents.",
      industriesTitle: "Industries We Serve",
      eventsTitle: "Events",
      eventsText: "Conferences, exhibitions, and special occasions",
      industrialTitle: "Industrial",
      industrialText: "Factories, warehouses, and industrial facilities",
      trainedTitle: "Trained Professionals",
      trainedText: "Our staff undergoes rigorous training to deliver consistent, high-quality service.",
      customTitle: "Customized Solutions",
      customText: "We develop programs tailored to your specific needs and requirements.",
      phoneButton: "Call Us Now",
      whatsappButton: "WhatsApp"
    },
    ar: {
      dir: "rtl",
      navHome: "الرئيسية",
      navAbout: "من نحن",
      navContact: "اتصل بنا",
      welcomeText: "مرحباً بكم في",
      companyName: "4W",
      heroSubtitle: "شريككم الموثوق به في حلول الأمن والنظافة الحديثة",
      aboutTitle: "من نحن",
      aboutText: "شركة 4W للأمن ذ.م.م. هي شركة رائدة في تقديم خدمات الأمن والنظافة الشاملة ومقرها في المنامة، مملكة البحرين. مع التزامنا بالتميز والنزاهة والابتكار، تقدم 4W للأمن حلولاً مخصصة للقطاعين العام والخاص.",
      featureProfessional: "فريق محترف",
      featureSupport: "دعم على مدار الساعة",
      featureModern: "حلول حديثة",
      featureQuality: "خدمة عالية الجودة",
      whyChooseTitle: "لماذا تختارنا",
      expertSecurityTitle: "خبراء الأمن",
      expertSecurityText: "متخصصون مدربون يستخدمون أحدث تقنيات الأمن",
      premiumCleaningTitle: "تنظيف متميز",
      premiumCleaningText: "تنظيف صديق للبيئة مع الاهتمام بالتفاصيل",
      fastResponseTitle: "استجابة سريعة",
      fastResponseText: "سرعة الاستجابة لجميع طلبات الخدمة",
      reliableServiceTitle: "خدمة موثوقة",
      reliableServiceText: "تقديم خدمة متناسقة ويمكن الاعتماد عليها",
      statsClientsTitle: "عميل",
      statsClientsValue: "+500",
      statsStaffTitle: "موظف خبير",
      statsStaffValue: "+50",
      statsExperienceTitle: "سنوات خبرة",
      statsExperienceValue: "+10",
      statsSupportTitle: "دعم متوفر",
      statsSupportValue: "24/7",
      servicesTitle: "خدماتنا",
      cleaningTitle: "خدمات النظافة",
      cleaningText: "فريق التنظيف المحترف لدينا يضمن نظافة وسلامة وصيانة منشآتكم باستخدام حلول صديقة للبيئة",
      cleaningButton: "اعرف المزيد",
      securityTitle: "الخدمات الأمنية",
      securityText: "حراس أمن محترفون وأنظمة مراقبة لحماية ممتلكاتكم والأفراد على مدار الساعة",
      securityButton: "اعرف المزيد",
      contactTitle: "اتصل بنا",
      inputName: "الاسم",
      inputEmail: "البريد الإلكتروني",
      inputMessage: "الرسالة",
      submitBtn: "إرسال",
      footerText: "© 2025 4W. جميع الحقوق محفوظة",
      langBtnText: "عربي",
      cleaningHeroTitle: "خدمات التنظيف المحترفة",
      cleaningHeroText: "تجربة التميز في النظافة مع حلولنا الشاملة المصممة خصيصاً لتلبية احتياجاتكم.",
      commercialTitle: "تنظيف تجاري",
      commercial1: "المباني المكتبية وأماكن العمل",
      commercial2: "المتاجر ومراكز التسوق",
      commercial3: "الفنادق ومرافق الضيافة",
      commercial4: "برامج الصيانة المنتظمة",
      residentialTitle: "تنظيف سكني",
      residential1: "المنازل والشقق",
      residential2: "تنظيف ما قبل وبعد الانتقال",
      residential3: "خدمات التنظيف العميق",
      residential4: "خطط تنظيف مخصصة",
      specializedTitle: "تنظيف متخصص",
      specialized1: "المرافق الطبية",
      specialized2: "المؤسسات التعليمية",
      specialized3: "المساحات الصناعية",
      specialized4: "تنظيف ما بعد البناء",
      ecoTitle: "حلول صديقة للبيئة",
      ecoText: "نستخدم منتجات وطرق تنظيف مسؤولة بيئياً لحماية مساحتك وكوكبنا.",
      securityHeroTitle: "خدمات الأمن المحترفة",
      securityHeroText: "حلول أمنية شاملة لحماية ما يهمك.",
      guardTitle: "حراس الأمن",
      guard1: "أفراد أمن مدربين",
      guard2: "مراقبة على مدار الساعة",
      guard3: "إدارة التحكم في الدخول",
      guard4: "الاستجابة للطوارئ",
      techTitle: "التكنولوجيا الأمنية",
      tech1: "تركيب كاميرات المراقبة",
      tech2: "أنظمة الإنذار",
      tech3: "أنظمة التحكم في الدخول",
      tech4: "المراقبة عن بعد",
      facilityTitle: "أمن المنشآت",
      facility1: "أمن المباني",
      facility2: "أمن الفعاليات",
      facility3: "حماية المحيط",
      facility4: "تقييم المخاطر",
      techSolutionsTitle: "تكنولوجيا متقدمة",
      techSolutionsText: "أحدث أنظمة وحلول المراقبة الأمنية.",
      responseTitle: "استجابة سريعة",
      responseText: "مراقبة واستجابة سريعة للحوادث الأمنية على مدار الساعة.",
      industriesTitle: "القطاعات التي نخدمها",
      eventsTitle: "الفعاليات",
      eventsText: "المؤتمرات والمعارض والمناسبات الخاصة",
      industrialTitle: "صناعي",
      industrialText: "المصانع والمستودعات والمرافق الصناعية",
      trainedTitle: "محترفون مدربون",
      trainedText: "يخضع موظفونا لتدريب مكثف لتقديم خدمة عالية الجودة ومتناسقة.",
      customTitle: "حلول مخصصة",
      customText: "نطور برامج مصممة خصيصاً لتلبية احتياجاتكم ومتطلباتكم.",
      phoneButton: "اتصل بنا الآن",
      whatsappButton: "واتساب"
    }
  };

  // Function to switch language
  function switchLanguage(lang) {
    const t = translations[lang];
    
    // Update document direction and language
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
    document.body.dir = t.dir;

    // Update all elements
    Object.keys(elements).forEach(key => {
      const element = elements[key];
      if (element) {
        if (key.includes('input')) {
          element.placeholder = t[key];
        } else {
          element.textContent = t[key];
        }
      }
    });

    // Update button text
    const btnTextSpan = langBtn.querySelector('span');
    if (btnTextSpan) {
      btnTextSpan.textContent = t.langBtnText;
    }
    
    // Update selected state
    langOptions.forEach(option => {
      option.setAttribute('aria-selected', option.dataset.lang === lang);
    });
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Hide dropdown
    toggleDropdown(false);
  }

  // Language button click handler
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = langBtn.getAttribute('aria-expanded') === 'true';
    toggleDropdown(!isExpanded);
  });

  // Language option click handlers
  langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      switchLanguage(option.dataset.lang);
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target) && !langList.contains(e.target)) {
      toggleDropdown(false);
    }
  });

  // Close dropdown when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleDropdown(false);
    }
  });

  // Handle navigation button clicks
  const homeBtn = document.getElementById("nav-home");
  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  const aboutBtn = document.getElementById("nav-about");
  if (aboutBtn) {
    aboutBtn.addEventListener("click", () => {
      const aboutSection = document.querySelector(".about-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "index.html#about";
      }
    });
  }

  const contactBtn = document.getElementById("nav-contact");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      const contactSection = document.querySelector(".contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "index.html#contact";
      }
    });
  }

  // Initialize with saved language preference or default to English
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'eng';
  switchLanguage(savedLanguage);
});
