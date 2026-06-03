import { LocalizedText } from "@/lib/localization";

const s = (text: string): LocalizedText => ({ en: text, es: text });

export type CategoryKey = "ai" | "3d" | "vfx" | "dev";

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

export const categoryOrder: CategoryKey[] = ["ai", "3d", "vfx", "dev"];

export const portfolioCategories: Record<CategoryKey, PortfolioCategory> = {
  // ============================================================================
  // IA
  // ============================================================================
  ai: {
    key: "ai",
    label: "AI",
    heroTitle: s("PRODUCCIÃ“N AI"),
    heroDescription: s("Flujos de trabajo asistidos por inteligencia artificial."),
    modalDescription:
      "AutomatizaciÃ³n, experimentaciÃ³n rÃ¡pida y herramientas creativas nativas de AI orientadas a producciÃ³n.",
    textareaPlaceholder:
      "Describe el flujo de AI, el reto de automatizaciÃ³n o el prototipo que quieres lanzar",
    panelTitle: "Sistemas, herramientas y experimentos de AI",
    panelDescription:
      "Una plataforma modular para agentes, pipelines y conceptos cinematogrÃ¡ficos de AI que puede crecer con el laboratorio.",
    cards: [
      {
        title: "Reel de flujo asistido",
        subtitle: "AutomatizaciÃ³n / Reel",
        description:
          "Un recorrido cinematogrÃ¡fico por flujos asistidos, iteraciÃ³n rÃ¡pida y puntos de contacto de producciÃ³n con AI.",
        href: "/videos/ai1.mp4",
        cta: "Ver reel",
        accent: "from-cyan-400/25 via-white/8 to-sky-300/20",
        linkKind: "reel",
        media: {
          src: "/images/img1.jpeg",
          alt: "Vista previa de producciÃ³n con AI",
        },
      },
      {
        title: "Laboratorio de interfaces",
        subtitle: "Vista previa / Interno",
        description:
          "Interfaces conceptuales para prompting, orquestaciÃ³n y sistemas de automatizaciÃ³n enfocados al creador.",
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
        title: "Canal de investigaciÃ³n",
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
  // 3D
  // ============================================================================
  "3d": {
    key: "3d",
    label: "3D",
    heroTitle: s("PRODUCCIÃ“N 3D"),
    heroDescription: s("Del modelado a la salida cinematogrÃ¡fica."),
    modalDescription:
      "Modelado, materiales, detalle automotriz y render cinematogrÃ¡fico dentro de pipelines 3D pulidos.",
    textareaPlaceholder:
      "Comparte el modelo, producto o sistema de render que quieres desarrollar en 3D",
    panelTitle: "Modelado, automotriz y estudios de render",
    panelDescription:
      "Formas de alta fidelidad, estudios de materiales y salidas cinematogrÃ¡ficas para narrativa visual premium.",
    cards: [
      {
        title: "Reel de render automotriz",
        subtitle: "3D / Reel",
        description:
          "Lenguaje de forma, superficies duras y presentaciÃ³n guiada por render para assets hero.",
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
          "Estudios de superficie, pintura e iluminaciÃ³n presentados como un configurador cinematogrÃ¡fico.",
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
        title: "GalerÃ­a de producciÃ³n",
        subtitle: "Externo / Showcase",
        description:
          "Punto de partida para estudios visuales, renders y breakdowns con presentaciÃ³n cinematogrÃ¡fica.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Abrir galerÃ­a",
        accent: "from-amber-200/12 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img4.jpeg",
          alt: "Vista previa de galerÃ­a de producciÃ³n",
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
    heroDescription: s("Efectos en tiempo real y lenguaje cinematogrÃ¡fico."),
    modalDescription:
      "Niagara, simulaciones, composiciÃ³n y efectos en tiempo real con control cinematogrÃ¡fico.",
    textareaPlaceholder:
      "Describe el efecto, la simulaciÃ³n o la secuencia en tiempo real que quieres desarrollar",
    panelTitle: "Simulaciones, Niagara y composiciÃ³n",
    panelDescription:
      "Estudios de efectos en tiempo real, atmÃ³sferas y lanzadores VFX pensados para shots premium.",
    cards: [
      {
        title: "Reel de secuencia Niagara",
        subtitle: "VFX / Reel",
        description:
          "Efectos en tiempo real, movimiento por capas y timing cinematogrÃ¡fico para shots de alto impacto.",
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
          "Una mirada mÃ¡s cercana a sistemas reutilizables de efectos y detalles de implementaciÃ³n cinematogrÃ¡fica.",
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
          "Estudios continuos de efectos, composiciÃ³n por capas y experimentos de movimiento en tiempo real.",
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
    heroDescription: s("Sistemas interactivos y herramientas tÃ©cnicas."),
    modalDescription:
      "Plugins, sistemas, herramientas de UI y experiencias de desarrollo orientadas a Unreal con presentaciÃ³n premium.",
    textareaPlaceholder:
      "CuÃ©ntame sobre el plugin, sistema, interfaz o herramienta de Unreal que quieres lanzar",
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
          "Acceso a herramientas, sistemas y productos tÃ©cnicos a medida que la biblioteca siga creciendo.",
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
        title: "Broadcast tÃ©cnico",
        subtitle: "Externo / Canal",
        description:
          "BitÃ¡coras de desarrollo, demos de herramientas y sistemas presentados con una mirada cinematogrÃ¡fica.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Abrir canal",
        accent: "from-cyan-300/12 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img4.jpeg",
          alt: "Vista previa de broadcast tÃ©cnico",
        },
      },
    ],
  },
};
