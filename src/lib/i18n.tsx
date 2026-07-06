"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "am";

interface LanguageContextValue {
  language: Language;
  setLanguage: (value: Language) => void;
  t: (key: string) => string;
  get: (key: string) => unknown;
}

export const dictionaries = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      academics: "Academics",
      teachers: "Teachers",
      fees: "Fees",
      transportation: "Transportation",
      campusLife: "Campus Life",
      achievements: "Achievements",
      gallery: "Gallery",
      register: "Register",
      contact: "Contact",
    },
    topBar: {
      tagline: "Kings Academy Gondar — Excellence in every step.",
    },
    hero: {
      badge: "Welcome to Kings Academy Gondar",
      title: "Empowering Tomorrow's Leaders Through Excellence, Innovation & Character",
      description:
        "Kings Academy Gondar is committed to nurturing confident, creative, and responsible learners through quality education, modern teaching methods, and a supportive learning environment.",
      primary: "Explore Programs",
      secondary: "Register Now",
    },
    footer: {
      heading: "Ready to Discover Kings Academy Gondar?",
      description:
        "Experience a learning environment where academic excellence, leadership, and character come together to prepare students for a successful future.",
      contactCta: "Contact Us",
      campusCta: "Explore Our Campus",
      quickLinks: "Quick Links",
      programs: "Academic Programs",
      contact: "Contact",
      followUs: "Follow Us",
      schoolHours: "School Hours",
      schoolHoursValue: "Monday – Friday 8:00 AM – 5:00 PM",
      brandDescription:
        "Empowering Future Leaders Through Excellence, Innovation & Character.",
      brandText:
        "Kings Academy Gondar delivers a forward-looking education rooted in academic rigor, personal growth, and a supportive school community.",
      address: "Gondar, Ethiopia",
    },
    home: {
      programs: {
        eyebrow: "Academic programs",
        title: "A structured pathway for every stage of learning.",
        description:
          "Kings Academy Gondar offers thoughtfully designed programs from early years to university preparation.",
        items: {
          kindergarten: {
            title: "Kindergarten",
            description: "A nurturing start with hands-on learning, early literacy, and social development.",
            highlights: {
              0: "Play-based exploration and creativity",
              1: "Foundational literacy and numeracy skills",
              2: "Social confidence and independence",
            },
          },
          primarySchool: {
            title: "Primary School",
            description: "A balanced curriculum that builds critical thinking, literacy, and STEM foundations.",
            highlights: {
              0: "Language and literacy development",
              1: "Math confidence through problem solving",
              2: "Science inquiry and creative discovery",
            },
          },
          secondarySchool: {
            title: "Secondary School",
            description: "A focused academic pathway with advanced sciences, languages, and leadership opportunities.",
            highlights: {
              0: "Deeper subject mastery and research skills",
              1: "Critical thinking and independent learning",
              2: "Leadership building and personal growth",
            },
          },
          preparatory: {
            title: "Preparatory",
            description: "University readiness through rigorous coursework, project work, and personal mentorship.",
            highlights: {
              0: "University counseling and planning",
              1: "Exam preparation and academic support",
              2: "Service learning and portfolio development",
            },
          },
        },
      },
      facilities: {
        eyebrow: "Our facilities",
        title: "A learning environment built for safety, inspiration, and achievement.",
        description:
          "Explore the campus facilities that support modern learning, student wellbeing, and academic success.",
        items: {
          library: {
            title: "Library & Learning Hub",
            description: "A bright, inspiring library with digital research stations and collaborative study spaces.",
          },
          ict: {
            title: "ICT Laboratory",
            description: "Modern computer labs equipped for coding, robotics, and digital innovation.",
          },
          scienceLabs: {
            title: "Science Laboratories",
            description: "Fully equipped labs for chemistry, physics, and biology with a focus on inquiry.",
          },
          sportsField: {
            title: "Sports Field",
            description: "A spacious outdoor field for athletics, football, and team building.",
          },
          cafeteria: {
            title: "Cafeteria",
            description: "Healthy dining in a bright, wellness-focused environment.",
          },
          clinic: {
            title: "School Clinic",
            description: "On-campus care with qualified health staff and wellness support.",
          },
        },
      },
      whyChooseUs: {
        eyebrow: "Why choose Kings Academy Gondar",
        title: "A school experience built for strong minds and confident futures.",
        description:
          "We combine world-class teaching, modern facilities and a caring community to help students thrive academically, socially and personally.",
        items: {
          expertFaculty: {
            title: "Expert faculty",
            description: "Highly qualified educators delivering personalized attention and modern teaching methods.",
          },
          learningSpaces: {
            title: "Smart learning spaces",
            description: "Technology-rich classrooms that inspire collaboration, creativity, and future-ready skills.",
          },
          academicExcellence: {
            title: "Proven academic excellence",
            description: "Strong exam results and a curriculum designed for both confidence and achievement.",
          },
          globalStandards: {
            title: "Global standards",
            description: "Internationally-aligned curriculum with a mindset for global citizenship and leadership.",
          },
          community: {
            title: "Safe, supportive community",
            description: "A caring campus environment where every student is guided, supported, and encouraged.",
          },
          holisticDevelopment: {
            title: "Holistic development",
            description: "A broad range of extracurricular programs for growth beyond academics.",
          },
        },
      },
      studentLife: {
        eyebrow: "Student life",
        title: "A vibrant student experience beyond the classroom.",
        description:
          "From clubs and creative arts to sports and leadership, Kings Academy Gondar offers a joyful, balanced lifestyle where students feel connected and inspired.",
        items: {
          sportsAthletics: {
            title: "Sports & Athletics",
            description: "Vibrant athletic programs foster teamwork, fitness, and school spirit across football, track, and games.",
          },
          artsCreativity: {
            title: "Arts & Creativity",
            description: "Visual art, music, and drama experiences help students express themselves and build confidence.",
          },
          studentClubs: {
            title: "Student Clubs",
            description: "From debate to environmental clubs, students lead initiatives and build friendships through shared interests.",
          },
          technologyInnovation: {
            title: "Technology & Innovation",
            description: "Hands-on coding, robotics, and maker spaces nurture creative problem solving and future-ready skills.",
          },
          eventsSocialLife: {
            title: "Events & Social Life",
            description: "Community events, cultural celebrations, and field trips make school life lively and memorable.",
          },
          leadershipGrowth: {
            title: "Leadership & Growth",
            description: "Student leadership, service projects, and personal development opportunities build character and resilience.",
          },
        },
      },
      achievements: {
        eyebrow: "Key achievements",
        title: "A record of distinction, awards, and national recognition.",
        description:
          "Kings Academy Gondar has been celebrated for outstanding exam results, competition victories, and innovation-led achievements that underscore our academic excellence.",
        items: {
          nationalExam: {
            title: "National exam success",
            description: "Outstanding results that reflect strong teaching, student commitment, and academic support.",
          },
          academicAwards: {
            title: "Academic awards",
            description: "Recognition for student achievements in competitions, science fairs, and scholarship programs.",
          },
          innovationHonors: {
            title: "Innovation honors",
            description: "Creative projects and technology work that have earned regional and national recognition.",
          },
          sportsChampionship: {
            title: "Sports championships",
            description: "Competitive teams have earned trophies and school pride through athletics and tournaments.",
          },
          culturalRecognition: {
            title: "Cultural recognition",
            description: "Students are celebrated for leadership in community events, arts, and cultural programs.",
          },
        },
      },
      statistics: {
        eyebrow: "Statistics",
        title: "Impactful numbers that reflect our learning community.",
        description: "Explore the key statistics that show the growth, scale, and success of Kings Academy Gondar.",
        items: {
          studentsEnrolled: {
            label: "Students enrolled",
            description: "A dynamic student community supported by modern classrooms and student-centered learning.",
          },
          experiencedTeachers: {
            label: "Experienced teachers",
            description: "Highly qualified educators guiding every learner with dedication and expertise.",
          },
          examPassRate: {
            label: "Exam pass rate",
            description: "Outstanding academic performance with progress-driven support and mentoring.",
          },
          graduatesLastYear: {
            label: "Graduates last year",
            description: "Successful alumni who left Kings Academy Gondar ready for the next stage.",
          },
          yearsOfExcellence: {
            label: "Years of excellence",
            description: "A proven track record in international education and student success.",
          },
        },
      },
    },
    about: {
      heroTitle: "About Kings Academy Gondar",
      heroDescription:
        "A values-led international school shaping confident learners, thoughtful leaders, and compassionate citizens.",
      storyEyebrow: "Our story",
      storyTitle: "A school rooted in excellence, innovation, and care.",
      storyDescription:
        "From our earliest days, Kings Academy Gondar has been built to offer a world-class education that respects local identity while preparing students for an international future.",
      storyBody:
        "Our school combines academic ambition with a warm, community-centered approach. Students learn in a culture where curiosity is encouraged, responsibility is practiced, and every child is known well.",
      missionTitle: "Mission",
      missionText:
        "To provide a transformative learning experience that develops intellectual curiosity, strong character, and leadership for a rapidly changing world.",
      visionTitle: "Vision",
      visionText:
        "To become one of the most trusted international schools in the region, known for academic distinction, student wellbeing, and community impact.",
      valuesEyebrow: "Core values",
      valuesTitle: "The principles that guide every classroom and campus experience.",
      principalEyebrow: "Principal's message",
      principalTitle: "Every student deserves a learning environment that is ambitious, warm, and purposeful.",
      principalBody:
        "At Kings Academy Gondar, we believe education must do more than prepare students for exams. It must prepare them for life: to think deeply, act responsibly, and thrive with confidence in a global society.",
      principalBody2:
        "Our teachers, staff, and families work collaboratively to offer a school experience that is both rigorous and deeply personal.",
      milestonesEyebrow: "Milestones",
      milestonesTitle: "A steady journey of growth and progress.",
      ctaTitle: "Discover how our community learns and grows.",
      ctaDescription:
        "Explore our academic programs, campus life, and admissions experience to see whether Kings Academy Gondar is the right fit for your family.",
      ctaPrimary: "Explore Academics",
      ctaSecondary: "Apply Now",
    },
    academics: {
      heroTitle: "Academic Excellence",
      heroDescription:
        "A balanced and forward-looking academic experience where students grow in knowledge, character, and confidence from early years through university preparation.",
      ctaTitle: "Ready to learn more?",
      ctaDescription:
        "Visit our campus or speak with our team to experience the academic environment at Kings Academy Gondar.",
      ctaPrimary: "Contact Us",
      ctaSecondary: "Visit Our Campus",
    },
    admissions: {
      heroTitle: "Admissions",
      heroDescription:
        "A clear, welcoming admissions journey for families seeking a vibrant and supportive school community.",
      welcomeTitle: "We make the admissions experience warm, transparent, and encouraging.",
      welcomeDescription:
        "Whether you are exploring a first school placement or transitioning from another institution, our admissions team is here to guide you every step of the way.",
      body: "We welcome families who value academic excellence, caring relationships, and a school culture where every child can thrive.",
      expectationsTitle: "What families can expect",
      expectationsList: [
        "Personalized guidance from our admissions team",
        "Clear application timelines and documentation support",
        "Open communication around student readiness and placement",
      ],
      processTitle: "A simple process designed around your family’s needs.",
      visitTitle: "See the community for yourself.",
      visitBody:
        "We invite prospective families to visit our campus, tour key learning spaces, and meet members of our teaching team.",
      visitCta: "Arrange a Visit",
      learnCta: "Learn About Us",
      ctaTitle: "Start your journey with Kings Academy Gondar.",
      ctaDescription:
        "Reach out to our admissions office to request information, schedule a visit, or begin an application.",
      contactCta: "Contact Admissions",
    },
    campusLife: {
      heroTitle: "Campus Life",
      heroDescription:
        "A lively, nurturing environment where students grow through friendship, opportunity, and shared experiences.",
      sectionTitle: "A school community where learning extends beyond the classroom.",
      sectionDescription:
        "Campus life at Kings Academy Gondar is shaped by connection, creativity, and a strong sense of belonging.",
      panelTitle: "Every day offers room to grow",
      panelBody:
        "From sporting competitions to student-led initiatives, our campus life program helps young people build confidence, teamwork, and a strong sense of purpose.",
      whyTitle: "A vibrant campus supports wellbeing and belonging.",
      whyBody:
        "We believe that a rich co-curricular life helps students discover their strengths, form lasting friendships, and build resilience that carries into adulthood.",
      ctaTitle: "Experience the energy of our campus community.",
      ctaDescription:
        "Visit us to see the clubs, spaces, and traditions that make Kings Academy Gondar such a welcoming place to learn and belong.",
      visitCta: "Book a Visit",
      aboutCta: "About the School",
    },
    contact: {
      heroTitle: "Contact Us",
      heroDescription:
        "We are happy to help with admissions questions, visits, and general information about our school.",
      planTitle: "Schedule a tour or request information.",
      planBody:
        "Our admissions team can help you learn more about our programs, campus life, and application process. Please reach out with any questions.",
      emailCta: "Email Us",
      admissionsCta: "Admissions Page",
    },
    register: {
      heroTitle: "School Registration Form",
      heroDescription: "Begin your child’s admission journey by completing the registration form below.",
      introTitle: "Start your child’s journey with us.",
      introDescription:
        "Share your details and our admissions team will reach out with the next steps.",
      highlights: [
        "A simple application process for new students",
        "Support from our admissions team",
        "Quick follow-up with program and fee guidance",
      ],
      formTitle: "Student registration request",
      parentName: "Parent/Guardian Name",
      email: "Email Address",
      phone: "Phone Number",
      grade: "Grade Applying For",
      studentName: "Student Name",
      studentAge: "Student Age",
      message: "Additional Message",
      submit: "Submit Registration Request",
    },
    fees: {
      heroTitle: "Transparent Tuition and Fees",
      heroDescription:
        "Kings Academy Gondar is committed to clear, family-friendly financial information and flexible support options.",
    },
    teachers: {
      heroTitle: "Meet Our Dedicated Educators",
      heroDescription:
        "Kings Academy Gondar is proud of its teaching team, whose expertise, care, and commitment shape a vibrant learning community.",
    },
    transportation: {
      heroTitle: "Safe and Reliable School Transport",
      heroDescription:
        "Kings Academy Gondar offers organized transport services designed for safety, punctuality, and family convenience.",
    },
    gallery: {
      heroTitle: "Gallery",
      heroDescription: "A visual window into our classrooms, campus life, and shared celebrations.",
      sectionEyebrow: "Moments to remember",
      sectionTitle: "Explore the atmosphere of our school through images.",
      sectionDescription:
        "These placeholder highlights reflect the warmth, energy, and learning spirit of Kings Academy Gondar.",
    },
    news: {
      heroTitle: "News & Updates",
      heroDescription: "Stay connected with the latest stories, events, and developments from our school community.",
      sectionEyebrow: "Latest stories",
      sectionTitle: "What is happening at Kings Academy Gondar.",
      sectionDescription:
        "From student achievements to community events, these updates offer a glimpse into life at our school.",
      ctaTitle: "Follow our journey throughout the year.",
      ctaDescription:
        "Visit again soon for new stories, events, and highlights from our school community.",
      ctaButton: "Stay in Touch",
    },
  },
  am: {
    nav: {
      home: "መነሻ",
      about: "ስለ ት/ቤቱ",
      academics: "ትምህርታዊ እንቅስቃሴ",
      teachers: "መምህራን",
      fees: "ክፍያዎች",
      transportation: "መጓጓዣ",
      campusLife: "የት/ቤቱ ህይወት",
      achievements: "ስኬቶች",
      gallery: "ፎቶ ማስታወሻ",
      register: "መመዝገብ",
      contact: "እናገኛለን",
    },
    topBar: {
      tagline: "ኪንግስ አካዳሚ ጎንደር — በሁሉም ነገር ላይ ልዩ መስፈርት።",
    },
    hero: {
      badge: "እንኳን ወደ ኪንግስ አካዳሚ ጎንደር በደህና መጡ",
      title: "የወደፊት መሪዎችን በስኬት፣ ፈጠራ እና ባህሪ የሚያበረታታ ትምህርት",
      description:
        "ኪንግስ አካዳሚ ጎንደር ተማሪዎችን በእምነት፣ በፈጠራ እና በኃላፊነት እንዲያድጉ በጥራት ያለው ትምህርት፣ ዘመናዊ የማስተማር ዘዴዎች እና የሚደግፍ አካባቢ በኩል ያደጋል።",
      primary: "የትምህርታዊ ፕሮግራም መመልከቻ",
      secondary: "አሁን ይመዝገቡ",
    },
    footer: {
      heading: "ኪንግስ አካዳሚ ጎንደርን ለማግኘት ዝግጁ ነዎት?",
      description:
        "የትምህርት ስኬት፣ መሪነት እና ባህሪ የተቀላቀሉበት የመማር አካባቢ ይህን ይወቅላል።",
      contactCta: "ለእኛ ይጻፉ",
      campusCta: "የት/ቤታችንን ይመልከቱ",
      quickLinks: "ፈጣን አገናኞች",
      programs: "ትምህርታዊ ፕሮግራሞች",
      contact: "ግንኙነት",
      followUs: "በማህበራዊ ሚዲያ ይከተሉን",
      schoolHours: "የት/ቤት ሰዓት",
      schoolHoursValue: "ሰኞ – ቅዳሜ 8:00 ጥዋት – 5:00 ከሰዓት",
      brandDescription: "የወደፊት መሪዎችን በስኬት፣ ፈጠራ እና ባህሪ በኩል ያጠናክራል።",
      brandText:
        "ኪንግስ አካዳሚ ጎንደር በአካዳሚክ ጥበብ፣ በግል እድገት እና በድጋፍ የሚሞላ ትምህርት ይሰጣል።",
      address: "ጎንደር፣ ኢትዮጵያ",
    },
    home: {
      programs: {
        eyebrow: "ትምህርታዊ ፕሮግራሞች",
        title: "ለእያንዳንዱ ደረጃ ትምህርት አዲስ መንገድ።",
        description:
          "ኪንግስ አካዳሚ ጎንደር ከቀደምት ዓመታት እስከ ዩኒቨርሲቲ ማዘጋጃ ድረስ በጥልቅ የተነደፈ ፕሮግራሞች ይሰጣል።",
        items: {
          kindergarten: {
            title: "ቅድሚ ትምህርት",
            description: "በተግባር የተመሰረተ ትምህርት፣ እንግሊዝኛ መማር እና ማህበረሰብ እድሎች.",
            highlights: {
              0: "በተጫዋች መልኩ የሚከናወን ምክርና ፈጠራ",
              1: "የመሰረታዊ እውቀት እና የቁጥር ጥናት ክህሎቶች",
              2: "ማህበራዊ ፍቅር እና አስተማማኝ ብርቱነት",
            },
          },
          primarySchool: {
            title: "መጀመሪያ ደረጃ ትምህርት",
            description: "የአእምሮ እውቀት፣ ቋንቋ እና STEM መሠረቶችን የሚያበረታታ ተመጣጣኝ አመራር.",
            highlights: {
              0: "የቋንቋና የትምህርት እውቀት እድገት",
              1: "ችሎታ የሚጨምር የሒሳብ ልምዶች",
              2: "እውቀት በሳይንስ እና ፈጠራ እውቀት",
            },
          },
          secondarySchool: {
            title: "ከክፍል ግዜ ትምህርት",
            description: "በሳይንስ፣ ቋንቋ እና መሪነት ላይ የተመሰረተ የትምህርት አቅጣጫ.",
            highlights: {
              0: "ርዕስ ጥናት እና የመረምረት ክህሎቶች",
              1: "አስተዳደር እና የግንዛቤ ልምድ",
              2: "መሪነት እና ግል እድገት",
            },
          },
          preparatory: {
            title: "የዩኒቨርሲቲ እዝረት",
            description: "በከባድ ትምህርት፣ የፕሮጀክት ስራ እና ግል እገዛ የተመሰረተ ዝግጅት.",
            highlights: {
              0: "የዩኒቨርሲቲ አማካሪነት እና እቅድ አቅርቦት",
              1: "የፈተና ዝግጅት እና የትምህርት ድጋፍ",
              2: "የአገልግሎት ትምህርት እና የግምት ስራ አቅርቦት",
            },
          },
        },
      },
      facilities: {
        eyebrow: "ተቋማችን",
        title: "ለአስተማማኝነት፣ ለፈጠራ እና ለስኬት የተሰራ የመማር አካባቢ።",
        description:
          "የመማር አካባቢዎችን ተመልከቱ ይህ ተቋም በዘመናዊ ትምህርት፣ በተማሪ ደህንነት እና በአካዳሚክ ስኬት ላይ ይሠራል።",
        items: {
          library: {
            title: "ቤተ-መጻሕፍት እና የመማር ማዕከል",
            description: "ከዲጂታል መረጃ ጣቢያዎች እና በተባበሩ ስፍራዎች ጋር የተሞላ ብርሃናማ ቤተ-መጻሕፍት.",
          },
          ict: {
            title: "የኢንፎርሜሽን እና ቴክኖሎጂ ላብራቶሪ",
            description: "ለኮዲንግ፣ ሮቦቲክስ እና ዲጂታል ፈጠራ የተዘጋ ዘመናዊ የኮምፒውተር ላብ.",
          },
          scienceLabs: {
            title: "ሳይንስ ላብራቶሪዎች",
            description: "በኬሚስትሪ፣ ፊዚክስ እና ባዮሎጂ ላይ የተመሠረቱ የጥናት ላብራቶሪዎች.",
          },
          sportsField: {
            title: "የስፖርት ሜዳ",
            description: "ለአትሌቲክስ፣ እግር ኳስ እና የቡድን ሥራዎች በሚሰሩ ሰፊ ውጪ ሜዳ.",
          },
          cafeteria: {
            title: "የምግብ ቤት",
            description: "በወደድ የሆነ የደህንነት ተመራማሪ ሁኔታ ውስጥ የጤና ምግብ.",
          },
          clinic: {
            title: "የት/ቤት የጤና ማዕከል",
            description: "በተማሪ የጤና ድጋፍ እና ታማኝ የክህሎት ሰራተኞች የተዘጋ.",
          },
        },
      },
      whyChooseUs: {
        eyebrow: "ለምን ኪንግስ አካዳሚ ጎንደር ይመርጣሉ",
        title: "ለጠንካራ አእምሮ እና ለደህንነት ያለው የወደፊት እድል።",
        description:
          "እኛ ዘመናዊ ትምህርት፣ ዘመናዊ ተቋሞች እና አስተማማኝ ማህበረሰብ በኩል ተማሪዎች በትምህርት፣ በማህበራዊ እና በግል ህይወት ይድገሙ።",
        items: {
          expertFaculty: {
            title: "የባለሙያ አስተማሪዎች",
            description: "በብልጽግና የተሞላ እንዲሁም ዘመናዊ መምህር ሥራዎች የሚያቀርቡ እና ዝቅተኛ የግል ትኩረት.",
          },
          learningSpaces: {
            title: "የትምህርት ቦታዎች",
            description: "የቴክኖሎጂ ልማዶች የተዘጋ ክፍሎች እና እርምጃ ለማድረግ የሚያስችሉ ስፍራዎች.",
          },
          academicExcellence: {
            title: "የትምህርት ስኬት",
            description: "የተማሪ ውጤቶች ረጅም ጊዜ ላይ የታረገ ፣ ለማሻሻል የተለያዩ እርዳታዎች.",
          },
          globalStandards: {
            title: "ዓለም አቀፍ መለኪያዎች",
            description: "ዓለም አቀፍ ጥናቶች እና የምርምር አቅጣጫዎች የተመሰረቱ.",
          },
          community: {
            title: "የደህንነት እና የድጋፍ ማህበረሰብ",
            description: "እያንዳንዱ ተማሪ በእርግጥ የሚረዳ እና የሚደገፍ አካባቢ.",
          },
          holisticDevelopment: {
            title: "የሙሉ እድገት",
            description: "ከትምህርት በላይ የሚገኙ የተለያዩ እንቅስቃሴዎች.",
          },
        },
      },
      statistics: {
        eyebrow: "ስኬታዊ ቁጥሮች",
        title: "የትምህርታዊ ማህበረሰብ ትርጉም የሚያሳይ  ቁጥሮች.",
        description: "የኪንግስ አካዳሚ ጎንደር እድገት፣ ስፋት እና ስኬት የሚያሳዩ ቁጥሮችን ያስለቅሳሉ.",
        items: {
          studentsEnrolled: {
            label: "የተመዙ ተማሪዎች",
            description: "በዘመናዊ ክፍሎች እና በተማሪ ማእከላዊ ትምህርት የተደገፈ የተማሪ ማህበረሰብ.",
          },
          experiencedTeachers: {
            label: "የተሟላ መምህራን",
            description: "በከፍተኛ የትምህርት ሙያ ባለዎች የተማሪዎችን የማስተማር ጥራት የሚያቀርቡ.",
          },
          examPassRate: {
            label: "የፈተና እጅግ ማረጋገጫ",
            description: "በትምህርት ውጤት የተነሳ የተማሪዎች ታማኝ የሆነ ውጤት.",
          },
          graduatesLastYear: {
            label: "የባለፈው አመት የተመረጡ",
            description: "ኪንግስ አካዳሚ ጎንደርን የተወሰኑ የተማሪዎች ማስተላለፊያ.",
          },
          yearsOfExcellence: {
            label: "የብርታት ዓመታት",
            description: "በአካዳሚክ ትምህርት እና የተማሪ ስኬት የተሰራ የተመረጡ ታሪክ.",
          },
        },
      },
      studentLife: {
        eyebrow: "የተማሪ ህይወት",
        title: "ከክፍል በላይ የሚያስደስት የተማሪ ልምድ።",
        description:
          "ከክለብ እስከ ጥበብ፣ ከስፖርት እስከ መሪነት፣ ኪንግስ አካዳሚ ጎንደር የተማሪዎችን መረዳት እና ተነሳሽነት የሚሰጥ ደስተኛ እና ሚዛናዊ ህይወት ይሰጣል።",
        items: {
          sportsAthletics: {
            title: "ስፖርት እና አትሌቲክስ",
            description: "የቡድን ሥራዎችን፣ የደጋፊነትን እና የክፍለ-ጊዜ ጥረትን የሚያበረታታ ፍራንክ እና ስፖርት ፕሮግራሞች.",
          },
          artsCreativity: {
            title: "ስነ-ጥበብ እና ፈጠራ",
            description: "የስእለት፣ ሙዚቃ እና ባህላዊ እንቅስቃሴዎች ተማሪዎችን የሚያገኙ የእራሳቸው እድሎች.",
          },
          studentClubs: {
            title: "የተማሪ ክለቦች",
            description: "ከንግግር እስከ አካባቢ ጥናት ድረስ የተማሪዎች ተስፋን የሚያበረታታ እንቅስቃሴዎች.",
          },
          technologyInnovation: {
            title: "ቴክኖሎጂ እና ፈጠራ",
            description: "በኮዲንግ፣ ሮቦቲክስ እና ማከናወን ችሎታዎች ላይ የተመሰረተ ልምድ.",
          },
          eventsSocialLife: {
            title: "ክስተቶች እና ማህበራዊ ህይወት",
            description: "የማህበረሰብ ልዩ ክስተቶች፣ ባህላዊ በዓላት እና የዕረፍት ጉብኝት ይህንን ሕይወት ያስገኛል.",
          },
          leadershipGrowth: {
            title: "መሪነት እና እድገት",
            description: "የተማሪ መሪነት፣ የአገልግሎት ፕሮጀክቶች እና የግል እድገት ዕድሎች.",
          },
        },
      },
      achievements: {
        eyebrow: "ዋና ስኬቶች",
        title: "የስኬት፣ የሽልማት እና የአገር አቀፍ ክብር ታሪክ።",
        description:
          "ኪንግስ አካዳሚ ጎንደር በጥራት ያለ የፈተና ውጤቶች፣ በውድድር ሽልማቶች እና በፈጠራ ስኬቶች ላይ ተገልጿል።",
        items: {
          nationalExam: {
            title: "በሀገር ውስጥ የፈተና ምርጥ ውጤት",
            description: "በጥራት የተሞላ እና በትምህርት እኩልነት የተመነጠረ ውጤት.",
          },
          academicAwards: {
            title: "የትምህርት ሽልማቶች",
            description: "በሳይንስ፣ በሒሳብ እና በቋንቋ ውድድሮች የተሸለሉ ሽልማቶች.",
          },
          innovationHonors: {
            title: "የፈጠራ እና ሳይንስ ክብር",
            description: "የተማሪ የስራ እና የቴክኖሎጂ ፕሮጀክቶች የተሸለሉ.",
          },
          sportsChampionship: {
            title: "የስፖርት ዋና ሻምፒዮንሺፕ",
            description: "በክለብ ብርታትና እርስ በርስ ተጫዋቾች የተካፈሉ ተመን.",
          },
          culturalRecognition: {
            title: "የባህላዊ ማክበር",
            description: "በማህበረሰብ ክስተቶች፣ ስነ-ጥበብ እና ባህላዊ መዛግብት የተሸነፈ.",
          },
        },
      },
    },
    about: {
      heroTitle: "ስለ ኪንግስ አካዳሚ ጎንደር",
      heroDescription:
        "በእሴቶች ላይ የተመሰረተ ዓለም አቀፍ ት/ቤት የሚያስተምራቸው ተማሪዎችን፣ አስተማማኝ መሪዎችን እና ርህራሄ ያላቸው ዜጎችን ይፈጥራል።",
      storyEyebrow: "ታሪካችን",
      storyTitle: "በስኬት፣ በፈጠራ እና በእንክብካቤ የተመሰረተ ት/ቤት።",
      storyDescription:
        "ከመጀመሪያዎቹ ቀናት ጀምሮ ኪንግስ አካዳሚ ጎንደር የአለም አቀፍ ትምህርት ቅርጽ እንዲሰጥ ለጥራት በተመሰረተ ት/ቤት ነው።",
      storyBody:
        "ት/ቤታችን በአካዳሚክ ጥራት እና በሞላ አካባቢ የተመሰረተ ስልጠና ይሰጣል። ተማሪዎች እያንዳንዱ ልጅ በሚሰማራበት ትምህርት ውስጥ ቢማሩም በሀላፊነት ይማራሉ።",
      missionTitle: "ተልእኮ",
      missionText:
        "በዘመናዊ ዓለም ለሚያስፈልግ የአእምሮ ግንዛቤ፣ በጥራት ያለ ባህሪ እና መሪነት በማሠራት ትምህርት ለመስጠት።",
      visionTitle: "ራዕይ",
      visionText:
        "ከምርጥ አካዳሚክ ትምህርት እና ከአለም አቀፍ ደረጃ ጋር የተሰራ ት/ቤት ተመስርቶ እንዲሆን ለመስራት።",
      valuesEyebrow: "ዋና እሴቶች",
      valuesTitle: "በክፍል እና በት/ቤት ላይ የሚመራ መርሆች።",
      principalEyebrow: "የመምህር መልእክት",
      principalTitle: "እያንዳንዱ ተማሪ የሚበልጥ ትምህርት አካባቢ ይኖረዋል።",
      principalBody:
        "በኪንግስ አካዳሚ ጎንደር ትምህርት ፈተናዎችን ብቻ ለማድረግ አይደለም፣ ነገር ግን ለህይወት እንዲዘጋጅ ለመስራት ነው።",
      principalBody2:
        "መምህራናችን፣ ሰራተኞቻችን እና ቤተሰቦቻችን አንድ ላይ ለመስራት ያገናኛሉ።",
      milestonesEyebrow: "የእድገት ደረጃዎች",
      milestonesTitle: "መሻሻል እና እድገት በተከታታይ አቅጣጫ።",
      ctaTitle: "የኛ ማህበረሰብ እንዴት ይማራል እና ይወጣል ይመልከቱ።",
      ctaDescription:
        "የትምህርታዊ ፕሮግራሞቻችን፣ የት/ቤት ህይወት እና የመመዝገብ ልምድን ይመልከቱ።",
      ctaPrimary: "ትምህርታዊ ዘርፎችን ይመልከቱ",
      ctaSecondary: "አሁን ይመዝገቡ",
    },
    academics: {
      heroTitle: "ትምህርታዊ ስኬት",
      heroDescription:
        "ከቀደምት ደረጃ ጀምሮ እስከ ዩኒቨርሲቲ ማዘጋጃ ድረስ በእውቀት፣ በባህሪ እና በብስክር የሚያድግ ትምህርት።",
      ctaTitle: "ተጨማሪ ለማወቅ ዝግጁ ነዎት?",
      ctaDescription:
        "የት/ቤታችንን አካባቢ ይሄዱ ወይም ለቡድናችን ይነጋገሩ።",
      ctaPrimary: "እኛን ይጠቀሙ",
      ctaSecondary: "የት/ቤታችንን አካባቢ ይመልከቱ",
    },
    admissions: {
      heroTitle: "መመዝገብ",
      heroDescription:
        "ለቤተሰብ ለመምረጥ ግልጽ እና እንደ እርስዎ ተቀባይ ልምድ የሚሰጥ ተስማሚ ሂደት።",
      welcomeTitle: "የመመዝገብ ልምድ እንደመነሻ ለመስጠት እንደ መታሰሪያ ነው።",
      welcomeDescription:
        "ማንኛውም ቤተሰብ ት/ቤታችንን ፈልጎ ሱቅ ላይ ሞከረ እንደ ማስተማሪያ ይደግፋል።",
      body: "እኛ ቤተሰቦችን በትምህርታዊ ጥራት፣ በተንከባካቢ ግንኙነት እና በት/ቤት ህይወት አንድ ላይ ይተካሉ።",
      expectationsTitle: "ቤተሰቦች የሚጠብቁት",
      expectationsList: [
        "ከመመዝገብ ቡድናችን ጋር የሚሰጥ ልዩ መረጃ",
        "ግልፅ የመመለሻ ጊዜዎች እና ሰነድ ድጋፍ",
        "የተማሪ ዝግጅት እና ቦታ አስተዳደር",
      ],
      processTitle: "ለቤተሰብዎ እንደነበር ቀላል ሂደት።",
      visitTitle: "የት/ቤቱን አካባቢ ለማየት።",
      visitBody: "እኛ ብዙ ቤተሰቦችን ጉብኝት ለመስጠት እንጋብዛለን።",
      visitCta: "ጉብኝት ይያዙ",
      learnCta: "ስለ ት/ቤቱ ይወቁ",
      ctaTitle: "ከኪንግስ አካዳሚ ጎንደር ጋር ጉብኝት ይጀምሩ።",
      ctaDescription: "ለመረጃ ወይም ለመመዝገብ እኛን ይደውሉ።",
      contactCta: "የመመዝገብ ቡድን ይጠቀሙ",
    },
    campusLife: {
      heroTitle: "የት/ቤቱ ህይወት",
      heroDescription: "ተማሪዎች እንዴት በጓደኞች፣ በእድሎች እና በማህበራዊ ልምዶች እንደሚያድጉ ያሳያል።",
      sectionTitle: "የት/ቤቱ ህይወት ከክፍል በላይ ይዘት ያለው ነው።",
      sectionDescription: "የት/ቤቱ ህይወት በማህበራዊ ግንኙነት፣ በፈጠራ እና በመሰማራት ላይ የተመሰረተ ነው።",
      panelTitle: "በየቀኑ እድል አለ።",
      panelBody: "ከስፖርት እስከ የተማሪ ስራዎች እንዲሁም ከተለያዩ እንቅስቃሴዎች ድረስ ይህ አካባቢ ተማሪዎችን ያጠናክራል።",
      whyTitle: "የት/ቤቱ አካባቢ ለመታመን ቅርጽ አለው።",
      whyBody: "እኛ እንሁን የት/ቤት ህይወት የተማሪዎች ጥንካሬ እና አንድነት እንዲያድጉ እንደሚያግዝ እናምናለን።",
      ctaTitle: "የት/ቤታችንን ማህበረሰብ ይመልከቱ።",
      ctaDescription: "የክለቦችን፣ ቦታዎችን እና ባህሎችን ለማየት ይሄዱ።",
      visitCta: "ጉብኝት ያድርጉ",
      aboutCta: "ስለ ት/ቤቱ",
    },
    contact: {
      heroTitle: "እኛን ይጠቀሙ",
      heroDescription: "ለመመዝገብ፣ ለጉብኝት እና ለአጠቃላይ መረጃ እንረዳዎታለን።",
      planTitle: "ጉብኝት ይለያዩ ወይም መረጃ ይጠይቁ።",
      planBody: "የመመዝገብ ቡድናችን ስለ ፕሮግራሞቻችን፣ ት/ቤት ህይወት እና የመመዝገብ ሂደት ይረዳዎታል።",
      emailCta: "ኢሜይል ይላኩ",
      admissionsCta: "የመመዝገብ ገፅ",
    },
    register: {
      heroTitle: "የት/ቤት መመዝገብ ቅጽ",
      heroDescription: "የልጅዎን ምዝገባ በመሙላት ይጀምሩ።",
      introTitle: "የልጅዎን ጉዞ ይጀምሩ።",
      introDescription: "የእርስዎን መረጃ ያስገቡ እና የመመዝገብ ቡድናችን ወደ ቀጣይ እርምጃ ይወስዳል።",
      highlights: [
        "የአዲስ ተማሪ ቀላል ምዝገባ",
        "የመምህራን እርዳታ",
        "የፕሮግራም እና የክፍያ መረጃ",
      ],
      formTitle: "የተማሪ ምዝገባ ጥያቄ",
      parentName: "የወላጅ/አሳዳጊ ስም",
      email: "ኢሜይል አድራሻ",
      phone: "ስልክ ቁጥር",
      grade: "ለምን ክፍል ይጠይቃሉ",
      studentName: "የተማሪ ስም",
      studentAge: "የተማሪ ዕድሜ",
      message: "ተጨማሪ መልእክት",
      submit: "የምዝገባ ጥያቄ ይላኩ",
    },
    fees: {
      heroTitle: "ግልጽ ክፍያ እና ኪሳራ",
      heroDescription: "ኪንግስ አካዳሚ ጎንደር ግልጽ እና ቤተሰብ ደስተኛ የሆነ የገንዘብ መረጃ ይሰጣል።",
    },
    teachers: {
      heroTitle: "የመምህራን ቡድንን ይገናኙ",
      heroDescription: "ኪንግስ አካዳሚ ጎንደር የመምህራን ቡድኑን በስልጠና፣ በእንክብካቤ እና በተሞክሮ ይናገራል።",
    },
    transportation: {
      heroTitle: "ደህንነት ያለው የት/ቤት መጓጓዣ",
      heroDescription: "ኪንግስ አካዳሚ ጎንደር የጥንቃቄ መጓጓዣ ዘዴዎችን ይሰጣል።",
    },
    gallery: {
      heroTitle: "ማስታወሻ",
      heroDescription: "ከክፍልዎች፣ ከት/ቤት ህይወት እና ከተመሳሳይ ያሉ ፎቶዎች አስተዋይ መረጃ።",
      sectionEyebrow: "የሚታሰቡ ቅጽበቶች",
      sectionTitle: "የት/ቤታችንን አካባቢ በምስሎች ይመልከቱ።",
      sectionDescription:
        "እነዚህ ምስሎች የኪንግስ አካዳሚ ጎንደር በማህበረሰብ፣ በጥራት እና በትምህርት ላይ ያለውን እምነት ያሳያሉ።",
    },
    news: {
      heroTitle: "ዜና እና ዝማኔዎች",
      heroDescription: "ከኛ ማህበረሰብ የቅርብ ጊዜ ታሪኮችን እና ዝማኔዎችን ይከተሉ።",
      sectionEyebrow: "የቅርብ ጊዜ ታሪኮች",
      sectionTitle: "ኪንግስ አካዳሚ ጎንደር ምን እየተከናወነ ነው።",
      sectionDescription:
        "ከተማሪ ስኬት እስከ ማህበራዊ ክስተቶች፣ እነዚህ ዝማኔዎች ለት/ቤታችን ህይወት አስተዋፅኦ ይሰጣሉ።",
      ctaTitle: "በዓመቱ ሙሉ የኛን ጉዞ ይከተሉ።",
      ctaDescription: "እንደገና ለአዲስ ታሪኮች፣ ክስተቶች እና ትልልቅ ማስታወሻዎች ይመጡ።",
      ctaButton: "እኛን ይከተሉ",
    },
  },
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("kings-lang");
    if (stored === "en" || stored === "am") {
      setLanguage(stored);
      return;
    }

    const browserLanguage = navigator.language.toLowerCase().startsWith("am") ? "am" : "en";
    setLanguage(browserLanguage as Language);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("kings-lang", language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key: string) => {
        const fallbackValue = getValue(dictionaries.en, key);
        const currentValue = getValue(dictionaries[language], key);
        if (typeof currentValue === "string") {
          return currentValue;
        }
        if (typeof fallbackValue === "string") {
          return fallbackValue;
        }
        return key;
      },
      get: (key: string) => {
        const currentValue = getValue(dictionaries[language], key);
        if (currentValue !== undefined) {
          return currentValue;
        }
        return getValue(dictionaries.en, key);
      },
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }
  return context;
}

function getValue(dictionary: Record<string, unknown>, key: string) {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, dictionary);
}

export function getDictionary(language: Language) {
  return dictionaries[language];
}

export function translate(language: Language, key: string) {
  const fallbackValue = getValue(dictionaries.en, key);
  const currentValue = getValue(dictionaries[language], key);
  return typeof currentValue === "string" ? currentValue : fallbackValue;
}

export function getLanguageLabel(language: Language) {
  return language === "am" ? "አማ" : "EN";
}
