import { LocalizedText } from "@/lib/localization";

const s = (text: string): LocalizedText => ({ en: text, es: text });

export type CategoryKey = "ai" | "vp" | "3d" | "vfx" | "dev";

export type CategoryCard = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  cta: string;
  accent: string;
  linkKind: "external" | "internal" | "reel";
  media?: {
    src: string;
    alt: string;
  };
};

export type PortfolioCategory = {
  key: CategoryKey;
  label: string;
  heroTitle: LocalizedText;
  heroDescription: LocalizedText;
  modalDescription: string;
  textareaPlaceholder: string;
  panelTitle: string;
  panelDescription: string;
  cards: CategoryCard[];
};

export const categoryOrder: CategoryKey[] = ["ai", "vp", "3d", "vfx", "dev"];

export const portfolioCategories: Record<CategoryKey, PortfolioCategory> = {
  // ============================================================================
  // IA
  // ============================================================================
  ai: {
    key: "ai",
    label: "AI",
    heroTitle: s("PRODUCCIÓN AI"),
    heroDescription: s("Flujos de trabajo asistidos por inteligencia artificial."),
    modalDescription:
      "Automatización, experimentación rápida y herramientas creativas nativas de AI orientadas a producción.",
    textareaPlaceholder:
      "Describe el flujo de AI, el reto de automatización o el prototipo que quieres lanzar",
    panelTitle: "Sistemas, herramientas y experimentos de AI",
    panelDescription:
      "Una plataforma modular para agentes, pipelines y conceptos cinematográficos de AI que puede crecer con el laboratorio.",
    cards: [
      {
        title: "Reel de flujo asistido",
        subtitle: "Automatización / Reel",
        description:
          "Un recorrido cinematográfico por flujos asistidos, iteración rápida y puntos de contacto de producción con AI.",
        href: "/videos/ai1.mp4",
        cta: "Ver reel",
        accent: "from-cyan-400/25 via-white/8 to-sky-300/20",
        linkKind: "reel",
        media: {
          src: "/images/img1.jpeg",
          alt: "Vista previa de producción con AI",
        },
      },
      {
        title: "Laboratorio de interfaces",
        subtitle: "Vista previa / Interno",
        description:
          "Interfaces conceptuales para prompting, orquestación y sistemas de automatización enfocados al creador.",
        href: "/#showcase",
        cta: "Abrir vista previa",
        accent: "from-white/18 via-transparent to-cyan-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img2.png",
          alt: "Vista previa de interfaz experimental de AI",
        },
      },
      {
        title: "Canal de investigación",
        subtitle: "Externo / Canal",
        description:
          "Reels, breakdowns y procesos conectados con flujos emergentes de inteligencia artificial.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Visitar canal",
        accent: "from-sky-400/16 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img4.jpeg",
          alt: "Vista previa del canal de AI",
        },
      },
    ],
  },

  // ============================================================================
  // PRODUCCIÓN VIRTUAL
  // ============================================================================
  vp: {
    key: "vp",
    label: "VP",
    heroTitle: s("PRODUCCIÓN VIRTUAL"),
    heroDescription: s("Pipelines y dirección visual en Unreal Engine."),
    modalDescription:
      "Escenarios en tiempo real, previs y pensamiento de pipeline para ejecución premium en producción virtual.",
    textareaPlaceholder:
      "Describe la secuencia, el escenario o el pipeline de Unreal que necesitas construir",
    panelTitle: "Escenarios en tiempo real y reels de VP",
    panelDescription:
      "Lanzamientos de previs, lookdev de entornos y vistas cinematográficas de escenario listas para producción.",
    cards: [
      {
        title: "Reel de movimiento de escenario",
        subtitle: "VP / Reel",
        description:
          "Movimiento de cámara en tiempo real, cadencia de iluminación y lenguaje de escenario para reproducción cinematográfica.",
        href: "/videos/vp1.mp4",
        cta: "Ver reel",
        accent: "from-violet-300/18 via-white/7 to-cyan-300/18",
        linkKind: "reel",
        media: {
          src: "/images/img3.jpeg",
          alt: "Vista previa de reel de producción virtual",
        },
      },
      {
        title: "Deck de entorno",
        subtitle: "Vista previa / Interno",
        description:
          "Bloques de construcción de escena y señales de lookdev para entornos guiados por escenario.",
        href: "/#showcase",
        cta: "Abrir vista previa",
        accent: "from-white/15 via-transparent to-blue-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img1.jpeg",
          alt: "Vista previa de entorno",
        },
      },
      {
        title: "Breakdowns de pipeline",
        subtitle: "Externo / Canal",
        description:
          "Selección de reels y breakdowns enfocados en stagecraft en tiempo real y flujos en Unreal.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Ver breakdowns",
        accent: "from-cyan-300/14 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img4.jpeg",
          alt: "Vista previa de breakdown de pipeline",
        },
      },
    ],
  },

  // ============================================================================
  // 3D
  // ============================================================================
  "3d": {
    key: "3d",
    label: "3D",
    heroTitle: s("PRODUCCIÓN 3D"),
    heroDescription: s("Del modelado a la salida cinematográfica."),
    modalDescription:
      "Modelado, materiales, detalle automotriz y render cinematográfico dentro de pipelines 3D pulidos.",
    textareaPlaceholder:
      "Comparte el modelo, producto o sistema de render que quieres desarrollar en 3D",
    panelTitle: "Modelado, automotriz y estudios de render",
    panelDescription:
      "Formas de alta fidelidad, estudios de materiales y salidas cinematográficas para narrativa visual premium.",
    cards: [
      {
        title: "Reel de render automotriz",
        subtitle: "3D / Reel",
        description:
          "Lenguaje de forma, superficies duras y presentación guiada por render para assets hero.",
        href: "/videos/3d1.mp4",
        cta: "Ver reel",
        accent: "from-zinc-200/14 via-white/7 to-amber-200/12",
        linkKind: "reel",
        media: {
          src: "/images/img2.png",
          alt: "Vista previa de render automotriz en 3D",
        },
      },
      {
        title: "Vista previa de materiales",
        subtitle: "Vista previa / Interno",
        description:
          "Estudios de superficie, pintura e iluminación presentados como un configurador cinematográfico.",
        href: "/#showcase",
        cta: "Abrir vista previa",
        accent: "from-white/18 via-transparent to-zinc-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img3.jpeg",
          alt: "Vista previa de desarrollo de materiales",
        },
      },
      {
        title: "Galería de producción",
        subtitle: "Externo / Showcase",
        description:
          "Punto de partida para estudios visuales, renders y breakdowns con presentación cinematográfica.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Abrir galería",
        accent: "from-amber-200/12 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img4.jpeg",
          alt: "Vista previa de galería de producción",
        },
      },
    ],
  },

  // ============================================================================
  // VFX
  // ============================================================================
  vfx: {
    key: "vfx",
    label: "VFX",
    heroTitle: s("VFX"),
    heroDescription: s("Efectos en tiempo real y lenguaje cinematográfico."),
    modalDescription:
      "Niagara, simulaciones, composición y efectos en tiempo real con control cinematográfico.",
    textareaPlaceholder:
      "Describe el efecto, la simulación o la secuencia en tiempo real que quieres desarrollar",
    panelTitle: "Simulaciones, Niagara y composición",
    panelDescription:
      "Estudios de efectos en tiempo real, atmósferas y lanzadores VFX pensados para shots premium.",
    cards: [
      {
        title: "Reel de secuencia Niagara",
        subtitle: "VFX / Reel",
        description:
          "Efectos en tiempo real, movimiento por capas y timing cinematográfico para shots de alto impacto.",
        href: "/videos/vfx1.mp4",
        cta: "Ver reel",
        accent: "from-fuchsia-300/18 via-white/8 to-cyan-300/18",
        linkKind: "reel",
        media: {
          src: "/images/img1.jpeg",
          alt: "Vista previa de reel VFX",
        },
      },
      {
        title: "Vista previa de FX Pack",
        subtitle: "Vista previa / Interno",
        description:
          "Una mirada más cercana a sistemas reutilizables de efectos y detalles de implementación cinematográfica.",
        href: "/#profile-journal",
        cta: "Abrir vista previa",
        accent: "from-white/18 via-transparent to-fuchsia-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img4.jpeg",
          alt: "Vista previa de paquete de efectos",
        },
      },
      {
        title: "Feed de breakdowns",
        subtitle: "Externo / Canal",
        description:
          "Estudios continuos de efectos, composición por capas y experimentos de movimiento en tiempo real.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Ver feed",
        accent: "from-cyan-300/12 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img3.jpeg",
          alt: "Vista previa de breakdown en tiempo real",
        },
      },
    ],
  },

  // ============================================================================
  // DESARROLLO
  // ============================================================================
  dev: {
    key: "dev",
    label: "DEV",
    heroTitle: s("DEV / UI / UX"),
    heroDescription: s("Sistemas interactivos y herramientas técnicas."),
    modalDescription:
      "Plugins, sistemas, herramientas de UI y experiencias de desarrollo orientadas a Unreal con presentación premium.",
    textareaPlaceholder:
      "Cuéntame sobre el plugin, sistema, interfaz o herramienta de Unreal que quieres lanzar",
    panelTitle: "Plugins, sistemas y herramientas para Unreal",
    panelDescription:
      "Sistemas modulares, plugins listos para lanzamiento e interfaces orientadas al creador.",
    cards: [
      {
        title: "Reel de sistemas",
        subtitle: "DEV / Reel",
        description:
          "Sistemas interactivos, herramientas de flujo y momentos de UI premium capturados en movimiento.",
        href: "/videos/dev1.mp4",
        cta: "Ver reel",
        accent: "from-emerald-300/16 via-white/8 to-cyan-300/16",
        linkKind: "reel",
        media: {
          src: "/images/img2.png",
          alt: "Vista previa de reel de sistemas",
        },
      },
      {
        title: "Vitrina de plugins",
        subtitle: "Interno / Biblioteca",
        description:
          "Acceso a herramientas, sistemas y productos técnicos a medida que la biblioteca siga creciendo.",
        href: "/#profile-journal",
        cta: "Abrir biblioteca",
        accent: "from-white/18 via-transparent to-emerald-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img1.jpeg",
          alt: "Vista previa de vitrina de plugins",
        },
      },
      {
        title: "Broadcast técnico",
        subtitle: "Externo / Canal",
        description:
          "Bitácoras de desarrollo, demos de herramientas y sistemas presentados con una mirada cinematográfica.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Abrir canal",
        accent: "from-cyan-300/12 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img4.jpeg",
          alt: "Vista previa de broadcast técnico",
        },
      },
    ],
  },
};
