import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Project } from "./types";

export type Locale = "en" | "ar";

type TranslationKey = keyof typeof translations.en;

const translations = {
  en: {
    languageName: "العربية",
    languageLabel: "Switch language to Arabic",
    siteTitle: "Suhail Khalil | Full Stack Engineer",
    siteDescription: "Suhail Khalil Abdulshakur is a full stack engineer and IT specialist based in Madinah, Saudi Arabia.",
    home: "Home",
    expertise: "Expertise",
    about: "About",
    projects: "Projects",
    connect: "Let’s connect",
    toggleMenu: "Toggle menu",
    goToHome: "Go to home",
    location: "Full stack engineer · Madinah, Saudi Arabia",
    heroTitleBefore: "Engineering",
    heroTitleEmphasis: "secure",
    heroTitleAfter: "digital solutions.",
    heroIntro: "I’m Suhail, a full stack engineer and IT specialist with 5+ years of experience building web applications, automating workflows, and deploying reliable enterprise infrastructure.",
    viewProjects: "View my projects",
    getInTouch: "Get in touch",
    yearsExperience: "years of experience",
    gpa: "/ 4.00 GPA",
    secureWorkspace: "Secure digital workspace",
    buildWith: "Build with",
    purpose: "purpose.",
    coreExpertise: "Core expertise",
    technologyBefore: "Technology with",
    technologyEmphasis: "purpose.",
    expertiseCopy: "A hands-on engineering approach across applications, infrastructure, AI, and cybersecurity.",
    serviceFullStack: "Full stack development",
    serviceFullStackCopy: "React, Next.js, Node.js, Express, PHP, MySQL, and PostgreSQL applications built for reliability and scale.",
    serviceAutomation: "Automation & delivery",
    serviceAutomationCopy: "Tested workflows, relational data models, and CI/CD pipelines that improve operational efficiency and enable zero-downtime releases.",
    serviceInfrastructure: "Infrastructure & security",
    serviceInfrastructureCopy: "IP cameras, switches, Wi-Fi access points, security policies, and practical cybersecurity-minded IT support.",
    aboutSuhail: "About Suhail",
    aboutTitleBefore: "Building for today,",
    aboutTitleEmphasis: "learning for tomorrow.",
    aboutParagraph1: "I am a Full Stack Engineer at DALSEEN Co. with 5+ years of experience across software engineering, IT infrastructure, marketing, and real estate. I hold a B.S. in Information Technology from Saudi Electronic University with a 3.60 / 4.00 GPA.",
    aboutParagraph2: "My recent work includes React, Next.js, and Express applications, automated testing, relational databases, CI/CD pipelines, zero-downtime releases, and enterprise network deployments. I am also passionate about AI applications and advancing enterprise cybersecurity.",
    aboutParagraph3: "My toolkit includes JavaScript, TypeScript, HTML5, CSS3, Node.js, PHP, MySQL, PostgreSQL, Jest, Vitest, Git, Docker, Linux, and RAG pipelines. I am available for relocation or remote opportunities.",
    startConversation: "Start a conversation",
    curiousByNature: "Curious by nature",
    focusedByCraft: "Focused by craft",
    engineeringToolkit: "Engineering toolkit",
    selectedProjects: "Selected projects",
    workTitleBefore: "A few things I’ve",
    workTitleEmphasis: "built.",
    workCopy: "A selection of engineering, AI, web development, and infrastructure projects. Click any project to take a closer look.",
    viewProject: "View project",
    technicalChallenge: "Have a technical challenge?",
    footerTitleBefore: "Let’s build",
    footerTitleEmphasis: "something useful.",
    copyright: "© 2026 Suhail Khalil Abdulshakur",
    projectNotFound: "Project not found",
    projectMissing: "That project does not exist.",
    backHome: "Back home",
    backToHome: "Back to home",
    backToWork: "Back to all work",
    projectGallery: "image gallery",
    previousImage: "Previous project image",
    nextImage: "Next project image",
    chooseProjectImage: "Choose project image",
    showProjectImage: "Show project image",
    imageOf: "Image {current} of {total}",
    imagePreview: "{title} preview {current} of {total}",
    approach: "The approach",
    approachCopy: "I focused on making the experience feel simple and intentional, with a clear visual hierarchy and responsive behavior that works as naturally on a phone as it does on a desktop.",
  },
  ar: {
    languageName: "English",
    languageLabel: "التبديل إلى الإنجليزية",
    siteTitle: "سهيل خليل | مهندس برمجيات متكامل",
    siteDescription: "سهيل خليل عبد الشكور مهندس برمجيات متكامل ومتخصص في تقنية المعلومات يقيم في المدينة المنورة، المملكة العربية السعودية.",
    home: "الرئيسية",
    expertise: "الخبرات",
    about: "نبذة عني",
    projects: "المشاريع",
    connect: "لنتواصل",
    toggleMenu: "تبديل القائمة",
    goToHome: "الانتقال إلى الرئيسية",
    location: "مهندس برمجيات متكامل · المدينة المنورة، المملكة العربية السعودية",
    heroTitleBefore: "هندسة حلول",
    heroTitleEmphasis: "رقمية آمنة",
    heroTitleAfter: ".",
    heroIntro: "أنا سهيل، مهندس برمجيات متكامل ومتخصص في تقنية المعلومات، أمتلك أكثر من 5 سنوات من الخبرة في بناء تطبيقات الويب وأتمتة سير العمل ونشر البنية التحتية المؤسسية الموثوقة.",
    viewProjects: "استعرض مشاريعي",
    getInTouch: "تواصل معي",
    yearsExperience: "سنوات من الخبرة",
    gpa: "/ 4.00 المعدل",
    secureWorkspace: "مساحة عمل رقمية آمنة",
    buildWith: "نبني بـ",
    purpose: "هدف.",
    coreExpertise: "الخبرات الأساسية",
    technologyBefore: "تقنية ذات",
    technologyEmphasis: "هدف.",
    expertiseCopy: "نهج هندسي عملي يشمل التطبيقات والبنية التحتية والذكاء الاصطناعي والأمن السيبراني.",
    serviceFullStack: "تطوير متكامل",
    serviceFullStackCopy: "تطبيقات React وNext.js وNode.js وExpress وPHP وMySQL وPostgreSQL مبنية بموثوقية وقابلية للتوسع.",
    serviceAutomation: "الأتمتة والتسليم",
    serviceAutomationCopy: "سير عمل مختبر ونماذج بيانات علائقية وخطوط CI/CD لتحسين الكفاءة التشغيلية وتمكين الإصدارات دون توقف.",
    serviceInfrastructure: "البنية التحتية والأمن",
    serviceInfrastructureCopy: "كاميرات IP ومحولات ونقاط وصول Wi-Fi وسياسات أمنية ودعم عملي لتقنية المعلومات يراعي الأمن السيبراني.",
    aboutSuhail: "نبذة عن سهيل",
    aboutTitleBefore: "نبني للحاضر،",
    aboutTitleEmphasis: "ونتعلم للمستقبل.",
    aboutParagraph1: "أعمل مهندس برمجيات متكامل في شركة دالسين، وأمتلك أكثر من 5 سنوات من الخبرة في هندسة البرمجيات والبنية التحتية لتقنية المعلومات والتسويق والعقارات. أحمل درجة البكالوريوس في تقنية المعلومات من الجامعة السعودية الإلكترونية بمعدل 3.60 من 4.00.",
    aboutParagraph2: "تشمل أعمالي الحديثة تطبيقات React وNext.js وExpress، والاختبارات الآلية، وقواعد البيانات العلائقية، وخطوط CI/CD، والإصدارات دون توقف، ونشر شبكات المؤسسات. كما أهتم بتطبيقات الذكاء الاصطناعي وتطوير الأمن السيبراني المؤسسي.",
    aboutParagraph3: "تشمل أدواتي JavaScript وTypeScript وHTML5 وCSS3 وNode.js وPHP وMySQL وPostgreSQL وJest وVitest وGit وDocker وLinux وخطوط RAG. أنا متاح للانتقال أو فرص العمل عن بُعد.",
    startConversation: "ابدأ محادثة",
    curiousByNature: "فضولي بطبيعتي",
    focusedByCraft: "أركز على الإتقان",
    engineeringToolkit: "عدة المهندس",
    selectedProjects: "مشاريع مختارة",
    workTitleBefore: "إليك بعض ما",
    workTitleEmphasis: "أنجزته.",
    workCopy: "مجموعة من مشاريع الهندسة والذكاء الاصطناعي وتطوير الويب والبنية التحتية. اختر أي مشروع لإلقاء نظرة أقرب.",
    viewProject: "عرض المشروع",
    technicalChallenge: "لديك تحدٍ تقني؟",
    footerTitleBefore: "لنبنِ",
    footerTitleEmphasis: "شيئًا مفيدًا.",
    copyright: "© 2026 سهيل خليل عبد الشكور",
    projectNotFound: "المشروع غير موجود",
    projectMissing: "هذا المشروع غير موجود.",
    backHome: "العودة للرئيسية",
    backToHome: "العودة إلى الرئيسية",
    backToWork: "العودة إلى جميع المشاريع",
    projectGallery: "معرض الصور",
    previousImage: "صورة المشروع السابقة",
    nextImage: "صورة المشروع التالية",
    chooseProjectImage: "اختيار صورة المشروع",
    showProjectImage: "عرض صورة المشروع",
    imageOf: "الصورة {current} من {total}",
    imagePreview: "معاينة {title} {current} من {total}",
    approach: "النهج",
    approachCopy: "ركزت على جعل التجربة بسيطة ومدروسة، مع تسلسل بصري واضح وسلوك متجاوب يعمل بسلاسة على الهاتف كما يعمل على سطح المكتب.",
  },
} satisfies Record<Locale, Record<string, string>>;

const projectTranslations: Record<string, Record<Locale, Pick<Project, "type" | "description" | "tags">>> = {
  quizzical: {
    en: { type: "React quiz application", description: "A React trivia application with dynamic questions, answer selection, scoring, review, replay, loading states, and accessible feedback.", tags: ["React", "Open Trivia DB", "Accessibility"] },
    ar: { type: "تطبيق اختبارات React", description: "تطبيق أسئلة تفاعلي مبني باستخدام React، مع أسئلة ديناميكية واختيار إجابات واحتساب النتائج والمراجعة وإعادة اللعب وحالات تحميل وتغذية راجعة سهلة الوصول.", tags: ["React", "Open Trivia DB", "إتاحة الوصول"] },
  },
  popchoice: {
    en: { type: "AI movie recommender", description: "A beta RAG-powered movie recommender using OpenAI embeddings, LangChain chunking, Supabase vector search, and TMDB.", tags: ["OpenAI", "LangChain", "Supabase"] },
    ar: { type: "مُرشّح أفلام بالذكاء الاصطناعي", description: "مُرشّح أفلام تجريبي يعمل بتقنية RAG باستخدام تضمينات OpenAI وتقسيم LangChain والبحث المتجهي في Supabase وTMDB.", tags: ["OpenAI", "LangChain", "Supabase"] },
  },
  sifo: {
    en: { type: "Senior college project", description: "A donation platform connecting donors and charities through campaigns and food and non-food donation management.", tags: ["PHP", "MySQL", "Donation platform"] },
    ar: { type: "مشروع التخرج", description: "منصة تبرعات تربط المتبرعين بالجمعيات من خلال الحملات وإدارة التبرعات الغذائية وغير الغذائية.", tags: ["PHP", "MySQL", "منصة تبرعات"] },
  },
  meme: {
    en: { type: "IT infrastructure", description: "An enterprise deployment covering 50+ IP cameras, 8+ switches, and 20+ access points with reliable post-deployment operations.", tags: ["IP cameras", "Switches", "Wi-Fi APs"] },
    ar: { type: "بنية تحتية لتقنية المعلومات", description: "نشر مؤسسي شمل أكثر من 50 كاميرا IP و8 محولات وأكثر من 20 نقطة وصول، مع تشغيل موثوق بعد النشر.", tags: ["كاميرات IP", "محولات", "نقاط وصول Wi-Fi"] },
  },
  dashboard: {
    en: { type: "Full stack engineering", description: "Internal web applications and automated workflows built to improve operational efficiency, reliability, and release speed.", tags: ["Next.js", "Express", "CI/CD"] },
    ar: { type: "هندسة برمجيات متكاملة", description: "تطبيقات ويب داخلية وسير عمل مؤتمت لتحسين الكفاءة التشغيلية والموثوقية وسرعة الإصدارات.", tags: ["Next.js", "Express", "CI/CD"] },
  },
  experiences: {
    en: { type: "Engineering & cybersecurity", description: "Practical, high-efficiency digital solutions shaped by enterprise cybersecurity, testing, infrastructure, and AI application experience.", tags: ["Node.js", "Docker", "RAG"] },
    ar: { type: "الهندسة والأمن السيبراني", description: "حلول رقمية عملية وعالية الكفاءة تشكلت من خبرة في الأمن السيبراني المؤسسي والاختبارات والبنية التحتية وتطبيقات الذكاء الاصطناعي.", tags: ["Node.js", "Docker", "RAG"] },
  },
};

type LocaleContextValue = {
  locale: Locale;
  direction: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: TranslationKey, values?: Record<string, string | number>) => string;
  localizeProject: (project: Project) => Project;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function interpolate(value: string, values?: Record<string, string | number>) {
  return values
    ? Object.entries(values).reduce((result, [key, replacement]) => result.replace(`{${key}}`, String(replacement)), value)
    : value;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = window.localStorage.getItem("portfolio-locale");
    return saved === "ar" ? "ar" : "en";
  });

  useEffect(() => {
    const direction = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.title = translations[locale].siteTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", translations[locale].siteDescription);
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => ({
    locale,
    direction: locale === "ar" ? "rtl" : "ltr",
    setLocale,
    toggleLocale: () => setLocale((current) => current === "en" ? "ar" : "en"),
    t: (key, values) => interpolate(translations[locale][key], values),
    localizeProject: (project) => {
      const localized = projectTranslations[project.id]?.[locale];
      return localized ? { ...project, ...localized } : project;
    },
  }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context) return context;

  return {
    locale: "en" as const,
    direction: "ltr" as const,
    setLocale: () => undefined,
    toggleLocale: () => undefined,
    t: (key: TranslationKey, values?: Record<string, string | number>) => interpolate(translations.en[key], values),
    localizeProject: (project: Project) => project,
  };
}
