import { LocalizedText } from "@/lib/localization";
import { CategoryKey } from "@/lib/portfolio-categories";

const s = (text: string): LocalizedText => ({ en: text, es: text });

export type ProfileHubItem = {
  id: string;
  title: LocalizedText;
  eyebrow: LocalizedText;
  description: LocalizedText;
  href: string;
  cta: LocalizedText;
  linkKind: "external" | "internal" | "reel";
  accent: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  media:
    | {
        type: "youtube";
        embedUrl: string;
      }
    | {
        type: "poster";
        src: string;
        alt: string;
      };
  detail?: {
    // --------------------------------------------------------------------------
    // DETALLE INTERNO DE TARJETA
    // - SubtÃ­tulo / categorÃ­a
    // - DescripciÃ³n principal
    // - Video embebido o video local
    // - Link externo opcional
    // - Texto adicional opcional
    // --------------------------------------------------------------------------
    subtitle: LocalizedText;
    description: LocalizedText;
    videoUrl: string;
    embedTitle?: LocalizedText;
    externalUrl?: string;
    externalCta?: LocalizedText;
    extraInfo?: LocalizedText;
  };
};

export type ProfileHubCategory = {
  label: string;
  title: LocalizedText;
  description: LocalizedText;
  feature?: {
    // --------------------------------------------------------------------------
    // PROYECTO DESTACADO / NOTICIA PRINCIPAL
    // - Eyebrow
    // - TÃ­tulo principal
    // - SubtÃ­tulo
    // - DescripciÃ³n
    // - Video embebido
    // - BotÃ³n
    // - Link externo
    // --------------------------------------------------------------------------
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    description: LocalizedText;
    videoUrl: string;
    buttonLabel?: LocalizedText;
    externalUrl?: string;
  };
  secondaryFeatures?: Array<{
    // --------------------------------------------------------------------------
    // PROYECTO DESTACADO ADICIONAL
    // - TÃ­tulo principal
    // - Headline / texto secundario
    // - DescripciÃ³n
    // - Video embebido
    // - BotÃ³n
    // - Link externo
    // --------------------------------------------------------------------------
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    description: LocalizedText;
    videoUrl: string;
    buttonLabel?: LocalizedText;
    externalUrl?: string;
  }>;
  campaignBanner?: {
    // --------------------------------------------------------------------------
    // BANNER EDITORIAL INTERMEDIO
    // - TÃ­tulo
    // - Texto principal
    // - Video embebido / preview
    // - Botones
    // --------------------------------------------------------------------------
    title: LocalizedText;
    description: LocalizedText;
    videoUrl: string;
    actions: Array<{
      label: LocalizedText;
      href: string;
    }>;
  };
  announcements?: Array<{
    // --------------------------------------------------------------------------
    // TARJETA EDITORIAL SECUNDARIA
    // - TÃ­tulo del proyecto
    // - Headline
    // - Badge de lanzamiento
    // - DescripciÃ³n
    // - BotÃ³n / link
    // --------------------------------------------------------------------------
    id: string;
    projectTitle: LocalizedText;
    headline: LocalizedText;
    releaseInfo: LocalizedText;
    description: LocalizedText;
    videoUrl?: string;
    href: string;
    cta: LocalizedText;
  }>;
  items: ProfileHubItem[];
};

export const profileHubContent: Record<CategoryKey, ProfileHubCategory> = {
  // ============================================================================
  // IA
  // ============================================================================
  ai: {
    label: "AI",
    title: s("ProducciÃ³n, exploraciÃ³n y sistemas creativos con inteligencia artificial"),
    description: s(
      "Una mezcla cinematogrÃ¡fica de herramientas de AI, prototipos de flujo de trabajo y experimentos guiados por interfaz para la producciÃ³n moderna."
    ),

    feature: {
      eyebrow: s("AI / CASE STUDY"),
      title: s("The Echelon"),
      subtitle: s("Primer comercial en LATAM completamente en IA"),
      description: s(
        "Voz, imagen y audio generados con inteligencia artificial."
      ),
      videoUrl:
        "https://player.vimeo.com/video/1190250981?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      buttonLabel: s("VER PROYECTO"),
      externalUrl:
        "https://www.behance.net/gallery/245574455/The-Echelon-AI-Project",
    },
    secondaryFeatures: [
      {
        eyebrow: s("AI / AUTOMOTIVE"),
        title: s("BMW M2 Racing 2026"),
        subtitle: s("M2 Racing Full AI Production"),
        description: s(
          "Pieza audiovisual desarrollada con inteligencia artificial, enfocada en visualización automotriz, performance y estética cinematográfica."
        ),
        videoUrl: "https://www.youtube.com/embed/AaqX9k6b0Gw?rel=0",
        buttonLabel: s("VER PROYECTO"),
        externalUrl: "https://www.behance.net/emmanuelblancas",
      },
    ],
    campaignBanner: {
      title: s("Runaway 2150"),
      description: s(
        "La primera temporada de Runaway 2150 llegará en 2026: una producción cinematográfica de The Asset Hero construida con IA, mundos conectados y una guerra que no debe comenzar."
      ),
      videoUrl: "https://www.youtube.com/embed/StHnkr4zFgs?rel=0",
      actions: [
        {
          label: s("VER TRAILER"),
          href: "https://youtu.be/StHnkr4zFgs",
        },
        {
          label: s("VER PROYECTO"),
          href: "/runaway-2150",
        },
      ],
    },

    announcements: [
      {
        id: "rango-bravo-release",
        projectTitle: s("The Rango Bravo"),
        headline: s('Estreno de "Una MÃ¡s al Kilo"'),
        releaseInfo: s("Estreno hoy a la 1:00 PM"),
        description: s(
          "Cortometraje que muestra las estadÃ­sticas de fallas de vehÃ­culos extranjeros en el aÃ±o 2025, sin tirarle a nadie en especÃ­fico."
        ),
        videoUrl:
          "https://www.youtube.com/embed/Qpo0jaKJuyE?si=Cotw9RY43-nVQQbw",
        href: "https://youtu.be/Y1UbzPnqJPo",
        cta: s("VER VIDEO"),
      },
    ],

    items: [
      {
        id: "ai-youtube",
        eyebrow: s("AI / Destacado"),
        title: s("AnatomÃ­a al lÃ­mite"),
        description: s(
          "Pieza editorial compacta para experimentaciÃ³n audiovisual, tono de lanzamiento y narrativa visual dentro del Ã¡rea de AI."
        ),
        href: "#",
        cta: s("Abrir detalle"),
        linkKind: "internal",
        accent: "from-zinc-100/12 via-black/10 to-cyan-300/14",
        thumbnail: {
          src: "/images/img1.jpeg",
          alt: "Imagen destacada de AnatomÃ­a al lÃ­mite",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0",
        },
        detail: {
          subtitle: s("AI / Destacado"),
          description: s(
            "Pieza experimental desarrollada dentro del Ã¡rea de AI Production."
          ),
          videoUrl: "https://youtube.com/shorts/uwMm0Wl1b7s",
        },
      },
      {
        id: "ai-tooling",
        eyebrow: s("AI / Proyecto"),
        title: s("The Therians"),
        description: s(
          "Tarjeta editorial de formato pequeÃ±o para conceptos AI, experimentos visuales y lanzamientos narrativos dentro del portafolio."
        ),
        href: "#",
        cta: s("Abrir detalle"),
        linkKind: "internal",
        accent: "from-white/18 via-transparent to-cyan-300/10",
        thumbnail: {
          src: "/images/img2.png",
          alt: "Imagen destacada de The Therians",
        },
        media: {
          type: "poster",
          src: "/images/img2.png",
          alt: "Poster de The Therians",
        },
        detail: {
          subtitle: s("AI / Proyecto"),
          description: s(
            "Tarjeta editorial de formato pequeÃ±o para conceptos AI, experimentos visuales y lanzamientos narrativos dentro del portafolio."
          ),
          videoUrl: "https://www.youtube.com/embed/CuoNMN1EhIk?rel=0",
        },
      },
      {
        id: "ai-reel",
        eyebrow: s("AI / Proyecto"),
        title: s("Don Bigotes"),
        description: s(
          "Tarjeta sobria para trabajo corto en AI, presentaciÃ³n conceptual y empaquetado editorial listo para mostrarse dentro del sitio."
        ),
        href: "#",
        cta: s("Abrir detalle"),
        linkKind: "internal",
        accent: "from-sky-400/16 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "Imagen destacada de Don Bigotes",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "Poster de Don Bigotes",
        },
        detail: {
          subtitle: s("AI / Proyecto"),
          description: s("Proyecto temporal embebido desde Behance."),
          videoUrl: "https://www.behance.net/embed/project/152862489?ilo0=1",
          embedTitle: s("Don Bigotes Behance Embed"),
        },
      },
    ],
  },

  // ============================================================================
  // 3D
  // ============================================================================
  "3d": {
    label: "3D",
    title: s("Renders automotrices y tomas 3D cinematogrÃ¡ficas"),
    description: s(
      "Formas de alta fidelidad, estudios de producto y desarrollo visual cinematogrÃ¡fico presentados como una galerÃ­a interactiva premium."
    ),
    items: [
      {
        id: "3d-youtube",
        eyebrow: s("YouTube / Destacado"),
        title: s("PresentaciÃ³n 3D cinematogrÃ¡fica"),
        description: s(
          "Espacio destacado para historias de render, estudios de iluminaciÃ³n y presentaciÃ³n de assets hero."
        ),
        href: "https://www.youtube.com/@TheAssetHero",
        cta: s("Abrir galerÃ­a"),
        linkKind: "external",
        accent: "from-zinc-200/14 via-white/7 to-amber-200/12",
        thumbnail: {
          src: "/images/img2.png",
          alt: "Miniatura de presentaciÃ³n 3D",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/tgbNymZ7vqY?rel=0",
        },
      },
      {
        id: "3d-materials",
        eyebrow: s("Lookdev / Vista previa"),
        title: s("Lanzador de estudio de materiales"),
        description: s(
          "Superficies, sistemas de pintura y direcciÃ³n de iluminaciÃ³n organizados como un configurador cinematogrÃ¡fico."
        ),
        href: "/#profile-journal",
        cta: s("Abrir vista previa"),
        linkKind: "internal",
        accent: "from-white/18 via-transparent to-zinc-300/10",
        thumbnail: {
          src: "/images/img3.jpeg",
          alt: "Miniatura de estudio de materiales",
        },
        media: {
          type: "poster",
          src: "/images/img3.jpeg",
          alt: "Poster de estudio de materiales",
        },
      },
      {
        id: "3d-reel",
        eyebrow: s("Reel / Movimiento"),
        title: s("Reel de render automotriz"),
        description: s(
          "Pieza pulida enfocada en superficies duras, ritmo de cÃ¡mara y presentaciÃ³n premium de render."
        ),
        href: "/videos/3d1.mp4",
        cta: s("Ver reel"),
        linkKind: "reel",
        accent: "from-amber-200/12 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "Miniatura de reel automotriz",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "Poster de reel automotriz",
        },
      },
    ],
  },

  // ============================================================================
  // VFX
  // ============================================================================
  vfx: {
    label: "VFX",
    title: s("Niagara, simulaciones y lanzadores de composiciÃ³n"),
    description: s(
      "Efectos en tiempo real, movimiento por capas y avances de composiciÃ³n orientados al shot dentro de un hub cinematogrÃ¡fico ligero."
    ),
    items: [
      {
        id: "vfx-youtube",
        eyebrow: s("YouTube / Destacado"),
        title: s("Breakdown de efectos en tiempo real"),
        description: s(
          "Ãrea destacada para timing en Niagara, estudios de simulaciÃ³n y breakdowns VFX en tiempo real."
        ),
        href: "https://www.youtube.com/@TheAssetHero",
        cta: s("Ver feed"),
        linkKind: "external",
        accent: "from-fuchsia-300/18 via-white/8 to-cyan-300/18",
        thumbnail: {
          src: "/images/img1.jpeg",
          alt: "Miniatura de breakdown VFX",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/jNQXAC9IVRw?rel=0",
        },
      },
      {
        id: "vfx-preview",
        eyebrow: s("Toolkit / Vista previa"),
        title: s("Vista previa de paquete FX"),
        description: s(
          "Sistemas reutilizables de efectos, atmÃ³sfera cinematogrÃ¡fica y detalles de implementaciÃ³n para shots premium."
        ),
        href: "/#profile-journal",
        cta: s("Abrir vista previa"),
        linkKind: "internal",
        accent: "from-white/18 via-transparent to-fuchsia-300/10",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "Miniatura de paquete FX",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "Poster de paquete FX",
        },
      },
      {
        id: "vfx-reel",
        eyebrow: s("Reel / Movimiento"),
        title: s("Reel de secuencia Niagara"),
        description: s(
          "Reel cinematogrÃ¡fico para efectos por capas, movimiento atmosfÃ©rico y timing en tiempo real de alto impacto."
        ),
        href: "/videos/vfx1.mp4",
        cta: s("Ver reel"),
        linkKind: "reel",
        accent: "from-cyan-300/12 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img3.jpeg",
          alt: "Miniatura de secuencia Niagara",
        },
        media: {
          type: "poster",
          src: "/images/img3.jpeg",
          alt: "Poster de secuencia Niagara",
        },
      },
    ],
  },

  // ============================================================================
  // DESARROLLO
  // ============================================================================
  dev: {
    label: "DEV",
    title: s("Sistemas en Unreal, plugins y herramientas tÃ©cnicas"),
    description: s(
      "Pensamiento de sistemas, lanzamientos de plugins y herramientas tÃ©cnicas presentadas a travÃ©s de una interfaz premium con estilo de estudio."
    ),
    items: [
      {
        id: "dev-youtube",
        eyebrow: s("YouTube / Destacado"),
        title: s("Broadcast de toolchain tÃ©cnica"),
        description: s(
          "Embed destacado para sistemas en Unreal, herramientas de flujo y demos tÃ©cnicas presentadas con claridad cinematogrÃ¡fica."
        ),
        href: "https://www.youtube.com/@TheAssetHero",
        cta: s("Abrir canal"),
        linkKind: "external",
        accent: "from-emerald-300/16 via-white/8 to-cyan-300/16",
        thumbnail: {
          src: "/images/img2.png",
          alt: "Miniatura de toolchain tÃ©cnica",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0",
        },
      },
      {
        id: "dev-plugin",
        eyebrow: s("Plugins / Vista previa"),
        title: s("Vitrina de plugins"),
        description: s(
          "Superficie limpia para herramientas en Unreal, sistemas de plugins y futuros lanzamientos tÃ©cnicos."
        ),
        href: "/#profile-journal",
        cta: s("Abrir secciÃ³n"),
        linkKind: "internal",
        accent: "from-white/18 via-transparent to-emerald-300/10",
        thumbnail: {
          src: "/images/img1.jpeg",
          alt: "Miniatura de vitrina de plugins",
        },
        media: {
          type: "poster",
          src: "/images/img1.jpeg",
          alt: "Poster de vitrina de plugins",
        },
      },
      {
        id: "dev-reel",
        eyebrow: s("Reel / Movimiento"),
        title: s("Reel de sistemas"),
        description: s(
          "Reel tÃ©cnico para sistemas de flujo, herramientas orientadas al creador y trabajo de ingenierÃ­a guiado por interfaz."
        ),
        href: "/videos/dev1.mp4",
        cta: s("Ver reel"),
        linkKind: "reel",
        accent: "from-cyan-300/12 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "Miniatura de reel de sistemas",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "Poster de reel de sistemas",
        },
      },
    ],
  },
};

