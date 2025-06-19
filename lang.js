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

  // Get all translatable elements (common to all pages)
  const commonElements = {
    navHome: document.getElementById("nav-home"),
    navAbout: document.getElementById("nav-about"),
    navContact: document.getElementById("nav-contact"),
    footerText: document.getElementById("footer-text"),
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
      aboutText: "4W Security Co. W.L.L., based in Manama, Bahrain, is a trusted provider of security and cleaning services. With over 20 years of experience, we serve both public and private sectors with tailored solutions. Our team of carefully selected experts enhances staff performance in security and maintenance, supported by a dedicated training division aligned with each site's needs.",
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
      contactTitle: "Get in Touch",
      contactText: "Ready to experience our professional cleaning services? Contact us today for a free consultation.",
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
      whatsappButton: "WhatsApp",
      journeyButton: "Start Your Journey",
      // Cleaning page translations
      cleaningHeroText: "Experience excellence in cleanliness with our comprehensive cleaning solutions tailored to your needs.",
      residentialTitle: "Residential Cleaning",
      residential1: "Regular cleaning services",
      residential2: "Deep cleaning solutions",
      residential3: "Move-in/move-out cleaning",
      residential4: "Customized cleaning plans",
      shipTitle: "Ship Maintenance Services",
      ship1: "Marine vessel cleaning",
      ship2: "Ship interior maintenance",
      ship3: "Deck and hull cleaning",
      ship4: "Maritime safety compliance",
      commercialTitle: "Commercial Cleaning",
      commercial1: "Office buildings",
      commercial2: "Retail spaces",
      commercial3: "Restaurants & food service",
      commercial4: "Professional workspace maintenance",
      industrialTitle: "Industrial & Post-Construction Cleaning",
      industrial1: "Industrial facility cleaning",
      industrial2: "Post-construction cleanup",
      industrial3: "Heavy machinery cleaning",
      industrial4: "Safety compliance cleaning",
      janitorialTitle: "Janitorial Services",
      janitorial1: "Daily cleaning maintenance",
      janitorial2: "Sanitation services",
      janitorial3: "Restroom maintenance",
      janitorial4: "Regular facility upkeep",
      weldingTitle: "Welding & Repair Services",
      welding1: "Metal fabrication repairs",
      welding2: "Equipment maintenance",
      welding3: "Structural repairs",
      welding4: "Custom metal work",
      floorTitle: "Floor Stripping, Sealing & Polishing",
      floor1: "Floor stripping services",
      floor2: "Sealing & protection",
      floor3: "Floor polishing & buffing",
      floor4: "Hard surface maintenance",
      windowTitle: "Window Cleaning",
      window1: "Interior window cleaning",
      window2: "Exterior window services",
      window3: "High-rise window cleaning",
      window4: "Glass surface maintenance",
      landscapingTitle: "Landscaping & Grounds Maintenance",
      landscaping1: "Garden maintenance",
      landscaping2: "Grounds keeping",
      landscaping3: "Outdoor area cleaning",
      landscaping4: "Landscape design support",
      maintenanceTitle: "General Building Maintenance & Repairs",
      maintenance1: "Building maintenance",
      maintenance2: "Repair services",
      maintenance3: "Preventive maintenance",
      maintenance4: "Facility management",
      qualityTitle: "Quality Assurance",
      qualityText: "Regular quality checks and feedback systems ensure consistent service excellence.",
      // Security page translations
      securityHeroText: "Comprehensive security solutions to protect what matters most to you.",
      overviewTitle: "Services Overview",
      cctvTitle: "CCTV Monitoring Systems",
      cctv1: "24/7 surveillance monitoring",
      cctv2: "High-definition camera systems",
      cctv3: "Remote monitoring capabilities",
      cctv4: "Real-time alert systems",
      overviewText1: "4W Security Co WLL provides comprehensive Uniform Security Services to businesses, commerce, and government ministries across Bahrain.",
      overviewText2: "We form proactive working partnerships with our clients to understand their unique requirements and implement tailored security strategies that complement their core business operations.",
      overviewText3: "Our services range from traditional manned guarding to advanced technology solutions including CCTV monitoring, access control systems, and specialized protection services. We combine experienced personnel with cutting-edge technology to deliver the highest standards of security and protection.",
      dataTitle: "Data Storage",
      data1: "Secure cloud storage solutions",
      data2: "Local backup systems",
      data3: "Encrypted data protection",
      data4: "Long-term retention policies",
      faceTitle: "Face Recognition",
      face1: "Advanced facial recognition technology",
      face2: "Access control integration",
      face3: "Real-time identification",
      face4: "Security alert systems",
      fingerprintTitle: "Digital Finger Print",
      fingerprint1: "Authorized personnel access control",
      fingerprint2: "Building entry management",
      fingerprint3: "Attendance tracking systems",
      fingerprint4: "Secure authentication methods",
      intrusionTitle: "Intrusion Detection",
      intrusion1: "Perimeter security systems",
      intrusion2: "Motion detection sensors",
      intrusion3: "Instant alert notifications",
      intrusion4: "Emergency response protocols",
      guardingTitle: "Security Guarding",
      guarding1: "Shopping centers & retail security",
      guarding2: "Hospital & healthcare facilities",
      guarding3: "Office buildings & corporate security",
      guarding4: "Industrial parks & manufacturing",
      bodyguardTitle: "Body Guarding",
      bodyguard1: "Celebrity & VIP protection",
      bodyguard2: "Political figures security",
      bodyguard3: "Female bodyguard services",
      bodyguard4: "Domestic & international protection",
      eventGuardTitle: "Special Event Guard Services",
      eventGuard1: "Corporate events & conferences",
      eventGuard2: "Concerts & festivals",
      eventGuard3: "Weddings & private gatherings",
      eventGuard4: "Customized security solutions",
      volunteerTitle: "Event Volunteer Services",
      volunteer1: "Guest assistance & registration",
      volunteer2: "Ushering & crowd coordination",
      volunteer3: "Corporate & community events",
      volunteer4: "Event support services",
      mobileTitle: "Mobile Security Units",
      mobile1: "Patrol services",
      mobile2: "Emergency response",
      mobile3: "Mobile surveillance",
      mobile4: "Rapid deployment",
      personalProtectionTitle: "Personal Protection",
      personal1: "Executive protection",
      personal2: "Personal security",
      personal3: "Travel security",
      personal4: "Risk assessment",
      borderTitle: "Border Security",
      border1: "Border control",
      border2: "Checkpoint security",
      border3: "Perimeter protection",
      border4: "Access management",
      techSolutionsTitle: "Advanced Technology",
      techSolutionsText: "State-of-the-art security systems and monitoring solutions.",
      responseTitle: "Quick Response",
      responseText: "24/7 monitoring and rapid response to security incidents.",
      industriesTitle: "Industries We Serve",
      eventsTitle: "Events",
      eventsText: "Conferences, exhibitions, and special occasions",
      industrialTitle: "Industrial",
      industrialText: "Factories, warehouses, and industrial facilities",
      // New Security page specific translations
      securityServicesTitle: "Security Services",
      whyChooseSecurityTitle: "Why Choose Security Services",
      trainedTextSecurity: "Our security personnel undergo rigorous training and adhere to strict standards.",
      customSecurityTitle: "Customized Security Solutions",
      customSecurityText: "We design security solutions tailored to your specific needs and requirements.",
      airMarshallTitle: "Air Marshall Services",
      air1: "Air security services",
      air2: "Security personnel trained for self-defense",
      air3: "Experience with portable weapons",
      air4: "Enhanced air security",
      airMarshallDesc: "Highly trained Air Marshalls for secure flights in today's challenging global political climate. Our Air Marshalls are extensively trained in self-defense and carry-on weapons, providing enhanced security for airlines and passengers.",
      lifeguardTitle: "Lifeguard Services",
      lifeguard1: "Security for swimming pools and beaches",
      lifeguard2: "Security for resorts and water parks",
      lifeguard3: "Certified in first aid and CPR",
      lifeguard4: "Emergency response for water-related incidents",
      lifeguardDesc: "Highly trained and experienced lifeguards for pools, beaches, resorts, and waterparks. Our lifeguards are certified in lifesaving techniques, CPR, and first aid, ensuring the highest standards of safety and emergency readiness.",
      commercialSecurityText: "Office buildings and commercial areas, business centers",
      commercialSecurityTitle: "Commercial",
      residentialSecurityTitle: "Residential",
      residentialSecurityText: "Apartments, compounds, and private residences",
      contactPageTitle: "Contact Us",
      contactPageText: "Are you ready to enhance your security? Contact us today for consultation.",
      learnMore: "Learn More",

      // Service descriptions that need data-translate-key in HTML
      volunteerDesc: "Dedicated and well-trained event volunteers to support the smooth execution of various events. Our volunteers are skilled in guest assistance, registration, ushering, crowd coordination, and general event support.",
      eventGuardDesc: "Professional Special Event Guard services tailored to ensure the safety, security, and smooth operation of your events. Our experienced security personnel are trained in crowd management, access control, emergency response, and VIP protection.",
      bodyguardDesc: "Pre-screened, insured and CPR certified bodyguards for celebrities, political figures or any other VIP protection needs domestically or abroad. Our bodyguards are trained in martial arts and defense against armed and unarmed personnel.",
      guardingDesc: "Professional, courteous and helpful security guards for shopping centers, hospitals, office buildings and industrial parks. Our guards are trained by former U.S. Law Enforcement officers in surveillance, self-defence, theft prevention, customer relations and professional ethics.",
      mobileDesc: "Reliable Mobile Security Patrol and CCTV Monitoring Services to protect properties, assets, and personnel around the clock. Our mobile patrol units conduct scheduled and random inspections with real-time threat detection.",
      personalProtectionDesc: "Discreet and professional personal protection services for high-profile individuals, executives, VIPs, and private clients. Our trained and licensed bodyguards are skilled in risk assessment, close protection, threat management, and secure transportation.",
      borderDesc: "Specialized Border Security Services designed to support national and private sector efforts in securing borders, restricted zones, and critical infrastructure. Our personnel are trained in surveillance, access control, perimeter patrol, threat detection, and rapid response protocols."
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
      aboutText: "شركة 4W للأمن ذ.م.م.، ومقرها المنامة، البحرين، هي مزود موثوق لخدمات الأمن والنظافة. بخبرة تزيد عن 20 عامًا، نخدم القطاعين العام والخاص بحلول مصممة خصيصًا. يعمل فريقنا المختار بعناية على رفع كفاءة الموظفين في الأمن والصيانة، بدعم من قسم تدريب متخصص يتوافق مع احتياجات كل موقع.",
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
      contactText: "هل أنت مستعد لتجربة خدماتنا المحترفة في التنظيف؟ اتصل بنا اليوم للحصول على استشارة مجانية.",
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
      whatsappButton: "واتساب",
      journeyButton: "ابدأ رحلتك",
      // Cleaning page translations
      cleaningHeroText: "تجربة التميز في النظافة مع حلولنا الشاملة المصممة خصيصاً لتلبية احتياجاتكم.",
      residentialTitle: "تنظيف سكني",
      residential1: "خدمات التنظيف المنتظمة",
      residential2: "حلول التنظيف العميق",
      residential3: "تنظيف ما قبل وبعد الانتقال",
      residential4: "خطط تنظيف مخصصة",
      shipTitle: "خدمات صيانة السفن",
      ship1: "تنظيف السفن البحرية",
      ship2: "صيانة الداخلي للسفن",
      ship3: "تنظيف السفينة والجسم البحري",
      ship4: "الامتثال للسلامة البحرية",
      commercialTitle: "تنظيف تجاري",
      commercial1: "المباني المكتبية",
      commercial2: "المتاجر ومراكز التسوق",
      commercial3: "المطاعم وخدمة الطعام",
      commercial4: "صيانة المكان العملي",
      industrialTitle: "تنظيف صناعي وبناء بعد",
      industrial1: "تنظيف المرافق الصناعية",
      industrial2: "تنظيف ما بعد البناء",
      industrial3: "تنظيف الآلات الثقيلة",
      industrial4: "تنظيف الامتثال للسلامة",
      janitorialTitle: "خدمات النظافة اليومية",
      janitorial1: "صيانة التنظيف اليومي",
      janitorial2: "خدمات التهيئة",
      janitorial3: "صيانة المرحاض",
      janitorial4: "صيانة المرافق العامة",
      weldingTitle: "خدمات اللحام وإصلاح",
      welding1: "إصلاح التصنيع المعدني",
      welding2: "صيانة المعدات",
      welding3: "إصلاح الهيكل",
      welding4: "العمل المعدني المخصص",
      floorTitle: "تنظيف الأرضيات والتلميع والتلميع",
      floor1: "خدمات تنظيف الأرضيات",
      floor2: "التلميع والحماية",
      floor3: "تلميع الأرضيات والتلميع",
      floor4: "صيانة السطح الصلب",
      windowTitle: "تنظيف النوافذ",
      window1: "تنظيف النوافذ الداخلية",
      window2: "خدمات النوافذ الخارجية",
      window3: "تنظيف النوافذ العالية",
      window4: "صيانة السطح الملمس",
      landscapingTitle: "تنظيف المناظر الطبيعية وصيانة المناطق",
      landscaping1: "صيانة الحديقة",
      landscaping2: "الحفاظ على المناطق",
      landscaping3: "تنظيف المنطقة الخارجية",
      landscaping4: "دعم تصميم المنظر الطبيعي",
      maintenanceTitle: "صيانة المبنى العام وإصلاحه",
      maintenance1: "صيانة المبنى",
      maintenance2: "خدمات إصلاح",
      maintenance3: "صيانة مكافحة",
      maintenance4: "إدارة المرافق",
      qualityTitle: "ضمان الجودة",
      qualityText: "تأكد الجودة المنتظمة ونظام التقييم والارتياب لضمان جودة خدمة عالية.",
      // Security page translations
      securityHeroText: "حلول أمنية شاملة لحماية ما يهمك.",
      overviewTitle: "نظرة عامة على الخدمات",
      cctvTitle: "أنظمة مراقبة كاميرات المراقبة",
      cctv1: "مراقبة المراقبة على مدار الساعة",
      cctv2: "أنظمة الكاميرات عالية الدقة",
      cctv3: "قدرات المراقبة عن بعد",
      cctv4: "أنظمة التنبيه في الوقت الفعلي",
      overviewText1: "تقدم 4W Security Co WLL خدمات أمنية موحدة وشاملة للشركات والتجارة والوزارات الحكومية في جميع أنحاء البحرين.",
      overviewText2: "نحن نشكل شراكات عمل استباقية مع عملائنا لفهم متطلباتهم الفريدة وتنفيذ استراتيجيات أمنية مخصصة تكمل عملياتهم التجارية الأساسية.",
      overviewText3: "تتراوح خدماتنا من الحراسة التقليدية المأهولة إلى حلول التكنولوجيا المتقدمة بما في ذلك مراقبة الدوائر التلفزيونية المغلقة (CCTV) وأنظمة التحكم في الدخول وخدمات الحماية المتخصصة. نجمع بين الموظفين ذوي الخبرة والتكنولوجيا المتطورة لتقديم أعلى معايير الأمن والحماية.",
      dataTitle: "تخزين البيانات",
      data1: "حلول التخزين السحابي الآمنة",
      data2: "أنظمة النسخ الاحتياطي المحلية",
      data3: "حماية البيانات المشفرة",
      data4: "سياسات الاحتفاظ طويلة الأجل",
      faceTitle: "التعرف على الوجه",
      face1: "تقنية التعرف على الوجه المتقدمة",
      face2: "تكامل التحكم في الدخول",
      face3: "التعريف في الوقت الفعلي",
      face4: "أنظمة التنبيه الأمنية",
      fingerprintTitle: "البصمة الرقمية",
      fingerprint1: "التحكم في دخول الموظفين المصرح لهم",
      fingerprint2: "إدارة دخول المبنى",
      fingerprint3: "أنظمة تتبع الحضور",
      fingerprint4: "طرق المصادقة الآمنة",
      intrusionTitle: "كشف التسلل",
      intrusion1: "أنظمة الأمن المحيطية",
      intrusion2: "أجهزة استشعار كشف الحركة",
      intrusion3: "إشعارات التنبيه الفورية",
      intrusion4: "بروتوكولات الاستجابة للطوارئ",
      guardingTitle: "حراسة الأمن",
      guarding1: "مراكز التسوق وأمن التجزئة",
      guarding2: "المستشفيات والمرافق الصحية",
      guarding3: "المباني المكتبية والأمن المؤسسي",
      guarding4: "الحدائق الصناعية والتصنيع",
      bodyguardTitle: "حراسة الشخصية",
      bodyguard1: "حماية المشاهير والشخصيات المهمة",
      bodyguard2: "أمن الشخصيات السياسية",
      bodyguard3: "خدمات حراسة الإناث",
      bodyguard4: "الحماية المحلية والدولية",
      eventGuardTitle: "خدمات حراسة الفعاليات الخاصة",
      eventGuard1: "الفعاليات المؤسسية والمؤتمرات",
      eventGuard2: "الحفلات والمهرجانات",
      eventGuard3: "الأعراس والتجمعات الخاصة",
      eventGuard4: "حلول أمنية مخصصة",
      volunteerTitle: "خدمات متطوعي الفعاليات",
      volunteer1: "مساعدة الضيوف والتسجيل",
      volunteer2: "الإرشاد وتنسيق الحشود",
      volunteer3: "الفعاليات المؤسسية والمجتمعية",
      volunteer4: "خدمات دعم الفعاليات",
      mobileTitle: "وحدات الأمن المتنقلة",
      mobile1: "خدمات الدوريات",
      mobile2: "الاستجابة للطوارئ",
      mobile3: "المراقبة المتنقلة",
      mobile4: "النشر السريع",
      personalProtectionTitle: "الحماية الشخصية",
      personal1: "حماية التنفيذيين",
      personal2: "الأمن الشخصي",
      personal3: "أمن السفر",
      personal4: "تقييم المخاطر",
      borderTitle: "أمن الحدود",
      border1: "التحكم في الحدود",
      border2: "أمن نقاط التفتيش",
      border3: "حماية المحيط",
      border4: "إدارة الدخول",
      techSolutionsTitle: "تكنولوجيا متقدمة",
      techSolutionsText: "أحدث أنظمة وحلول المراقبة الأمنية.",
      responseTitle: "استجابة سريعة",
      responseText: "مراقبة واستجابة سريعة للحوادث الأمنية على مدار الساعة.",
      industriesTitle: "القطاعات التي نخدمها",
      eventsTitle: "الفعاليات",
      eventsText: "المؤتمرات والمعارض والمناسبات الخاصة",
      industrialTitle: "صناعي",
      industrialText: "المصانع والمستودعات والمرافق الصناعية",
      // New Security page specific translations
      securityServicesTitle: "خدماتنا الأمنية",
      whyChooseSecurityTitle: "لماذا تختار خدماتنا الأمنية",
      trainedTextSecurity: "يخضع موظفونا الأمنيون لبرامج تدريب واعتماد صارمة.",
      customSecurityTitle: "حلول أمنية مخصصة",
      customSecurityText: "حلول أمنية مصممة خصيصًا لتلبية متطلباتكم المحددة.",
      airMarshallTitle: "خدمات المارشال الجوي",
      air1: "خدمات أمن الطيران",
      air2: "موظفون مدربون على الدفاع عن النفس",
      air3: "خبرة في الأسلحة المحمولة",
      air4: "أمن طيران معزز",
      airMarshallDesc: "مارشالو طيران مدربون تدريباً عالياً لرحلات آمنة في المناخ السياسي العالمي الصعب اليوم. مارشالو طيراننا مدربون تدريباً مكثفاً على الدفاع عن النفس والأسلحة المحمولة، مما يوفر أماناً محسناً للخطوط الجوية والركاب.",
      lifeguardTitle: "خدمات الإنقاذ",
      lifeguard1: "منقذو المسابح والشواطئ",
      lifeguard2: "أمن المنتجعات والحدائق المائية",
      lifeguard3: "معتمدون في الإنعاش القلبي الرئوي والإسعافات الأولية",
      lifeguard4: "الاستجابة للطوارئ المائية",
      lifeguardDesc: "منقذون مدربون تدريباً عالياً وذوو خبرة للمسابح والشواطئ والمنتجعات والحدائق المائية. منقذونا معتمدون في تقنيات الإنقاذ والإنعاش القلبي الرئوي والإسعافات الأولية، مما يضمن أعلى معايير السلامة والجاهزية للطوارئ.",
      commercialSecurityText: "المباني المكتبية والمساحات التجارية ومراكز الأعمال",
      commercialSecurityTitle: "تجاري",
      residentialSecurityTitle: "سكني",
      residentialSecurityText: "الشقق والمجمعات والمساكن الخاصة",
      contactPageTitle: "تواصل معنا",
      contactPageText: "هل أنت مستعد لتعزيز أمنك؟ اتصل بنا اليوم للاستشارة.",
      learnMore: "تعرف على المزيد",

      // Service descriptions that need data-translate-key in HTML
      volunteerDesc: "متطوعو فعاليات متخصصون ومدربون جيداً لدعم التنفيذ السلس لمختلف الفعاليات. متطوعونا ماهرون في مساعدة الضيوف، التسجيل، الإرشاد، تنسيق الحشود، والدعم العام للفعاليات.",
      eventGuardDesc: "خدمات حراسة الفعاليات الخاصة الاحترافية المصممة لضمان سلامة وأمن وسلاسة عمل فعالياتك. أفراد أمننا ذوو الخبرة مدربون على إدارة الحشود، التحكم في الدخول، الاستجابة للطوارئ، وحماية الشخصيات الهامة.",
      bodyguardDesc: "حراس شخصيون مدققون مسبقًا، مؤمن عليهم ومعتمدون في الإنعاش القلبي الرئوي (CPR) لحماية المشاهير، الشخصيات السياسية، أو أي احتياجات حماية كبار الشخصيات الأخرى محليًا أو خارج البلاد. حراسنا الشخصيون مدربون على الفنون القتالية والدفاع ضد الأفراد المسلحين وغير المسلحين.",
      guardingDesc: "حراس أمن محترفون ومهذبون ومفيدون لمراكز التسوق والمستشفيات ومباني المكاتب والحدائق الصناعية. يتم تدريب حراسنا من قبل ضباط إنفاذ القانون الأمريكيين السابقين في المراقبة والدفاع عن النفس ومنع السرقة وعلاقات العملاء والأخلاقيات المهنية.",
      mobileDesc: "خدمات دوريات الأمن المتنقلة ومراقبة الدوائر التلفزيونية المغلقة الموثوقة لحماية الممتلكات والأصول والأفراد على مدار الساعة. تقوم وحدات الدوريات المتنقلة لدينا بإجراء عمليات تفتيش مجدولة وعشوائية مع الكشف عن التهديدات في الوقت الفعلي.",
      personalProtectionDesc: "خدمات حماية شخصية سرية ومهنية للأفراد البارزين والمديرين التنفيذيين وكبار الشخصيات والعملاء الخاصين. حراسنا الشخصيون المدربون والمرخصون ماهرون في تقييم المخاطر، والحماية المقربة، وإدارة التهديدات، والنقل الآمن.",
      borderDesc: "خدمات أمن الحدود المتخصصة المصممة لدعم الجهود الوطنية والقطاع الخاص في تأمين الحدود والمناطق المحظورة والبنية التحتية الحيوية. يتم تدريب أفرادنا على المراقبة والتحكم في الدخول ودوريات المحيط والكشف عن التهديدات وبروتوكولات الاستجابة السريعة."
    }
  };

  // Function to switch language
  function switchLanguage(lang) {
    const t = translations[lang];
    
    // Update document direction and language
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
    document.body.dir = t.dir;

    // Update common elements
    const commonElements = {
        navHome: document.getElementById("nav-home"),
        navAbout: document.getElementById("nav-about"),
        navContact: document.getElementById("nav-contact"),
        footerText: document.getElementById("footer-text"),
        phoneButton: document.getElementById("phone-button"),
        whatsappButton: document.getElementById("whatsapp-button"),
        // Add other common elements from your HTML if they don't have IDs
        // For example:
        // heroSubtitle: document.getElementById("hero-subtitle"),
        // aboutTitle: document.getElementById("about-title"),
        // etc.
    };

    Object.keys(commonElements).forEach(key => {
      const element = commonElements[key];
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
    
    // Handle elements with data-translate-key attribute
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.dataset.translateKey;
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // Dispatch language change event
    document.dispatchEvent(new Event('languageChanged'));
    
    // Restart counting animation after a short delay
    setTimeout(() => {
      if (window.restartCountingAnimation) {
        console.log('Restarting counter animation...');
        window.restartCountingAnimation();
      } else {
        console.log('restartCountingAnimation function not found');
      }
    }, 300);
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
