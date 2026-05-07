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
    // - Subtítulo / categoría
    // - Descripción principal
    // - Video embebido o video local
    // - Link externo opcional
    // - Texto adicional opcional
    // --------------------------------------------------------------------------
    subtitle: LocalizedText;
    description: LocalizedText;
    videoUrl: string;
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
    // - Título principal
    // - Subtítulo
    // - Descripción
    // - Video embebido
    // - Botón
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
    // - Título principal
    // - Headline / texto secundario
    // - Descripción
    // - Video embebido
    // - Botón
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
    // - Título
    // - Texto principal
    // - Botones
    // --------------------------------------------------------------------------
    title: LocalizedText;
    description: LocalizedText;
    actions: Array<{
      label: LocalizedText;
      href: string;
    }>;
  };
  announcements?: Array<{
    // --------------------------------------------------------------------------
    // TARJETA EDITORIAL SECUNDARIA
    // - Título del proyecto
    // - Headline
    // - Badge de lanzamiento
    // - Descripción
    // - Botón / link
    // --------------------------------------------------------------------------
    id: string;
    projectTitle: LocalizedText;
    headline: LocalizedText;
    releaseInfo: LocalizedText;
    description: LocalizedText;
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
    title: s("Producción, exploración y sistemas creativos con inteligencia artificial"),
    description: s(
      "Una mezcla cinematográfica de herramientas de AI, prototipos de flujo de trabajo y experimentos guiados por interfaz para la producción moderna."
    ),

    feature: {
      eyebrow: s("IA / Proyecto destacado"),
      title: s("The Echelon AI Project"),
      subtitle: s("Primer comercial en Latam completamente creado con IA."),
      description: s(
        "Una pieza experimental donde imagen, voz, edición y audio fueron desarrollados con inteligencia artificial para explorar nuevas formas de producción audiovisual, narrativa comercial y dirección visual."
      ),
      videoUrl: "https://vimeo.com/1190250981?share=copy&fl=sv&fe=ci",
      buttonLabel: s("Ver proyecto completo"),
      externalUrl: "https://vimeo.com/1190250981?share=copy&fl=sv&fe=ci",
    },
    secondaryFeatures: [
      {
        eyebrow: s("AI / Proyecto destacado"),
        title: s("BMW M2 Racing V6 2026"),
        subtitle: s("M2 Racing 2026 probando España"),
        description: s(
          "Esta imponente fiera alemana se agarra a la pista con su tracción trasera en la pista F1 de Barcelona."
        ),
        videoUrl: "https://youtu.be/AaqX9k6b0Gw",
        buttonLabel: s("VER VIDEO"),
        externalUrl: "https://youtu.be/AaqX9k6b0Gw",
      },
    ],
    campaignBanner: {
      title: s("Runaway 2150"),
      description: s(
        "Este a\u00f1o se producir\u00e1 la primera temporada de Runaway 2150, totalmente producida por The Asset Hero."
      ),
      actions: [
        {
          label: s("VER TRAILER"),
          href: "#",
        },
        {
          label: s("VER PROYECTO"),
          href: "#",
        },
      ],
    },

    announcements: [
      {
        id: "rango-bravo-release",
        projectTitle: s("The Rango Bravo"),
        headline: s('Estreno de "Una Más al Kilo"'),
        releaseInfo: s("Estreno hoy a la 1:00 PM"),
        description: s(
          "Cortometraje que muestra las estadísticas de fallas de vehículos extranjeros en el año 2025, sin tirarle a nadie en específico."
        ),
        href: "https://youtu.be/Y1UbzPnqJPo",
        cta: s("Ver video"),
      },
    ],

    items: [
      {
        id: "ai-youtube",
        eyebrow: s("AI / Destacado"),
        title: s("Anatomía al límite"),
        description: s(
          "Pieza editorial compacta para experimentación audiovisual, tono de lanzamiento y narrativa visual dentro del área de AI."
        ),
        href: "#",
        cta: s("Abrir detalle"),
        linkKind: "internal",
        accent: "from-zinc-100/12 via-black/10 to-cyan-300/14",
        thumbnail: {
          src: "/images/img1.jpeg",
          alt: "Imagen destacada de Anatomía al límite",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0",
        },
        detail: {
          subtitle: s("AI / Destacado"),
          description: s(
            "Proyecto editorial y audiovisual presentado como pieza destacada dentro del área de producción con AI. Aquí vive el video principal y el texto explicativo del proyecto."
          ),
          videoUrl: "/videos/ai1.mp4",
          extraInfo: s(
            "Este bloque está pensado para crecer fácilmente con notas, contexto creativo, enlaces adicionales y futuras versiones del proyecto."
          ),
        },
      },
      {
        id: "ai-tooling",
        eyebrow: s("AI / Proyecto"),
        title: s("The Therians"),
        description: s(
          "Tarjeta editorial de formato pequeño para conceptos AI, experimentos visuales y lanzamientos narrativos dentro del portafolio."
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
            "Superficie editorial interna para lanzamientos de concepto, pruebas visuales y piezas narrativas relacionadas con producción asistida por inteligencia artificial."
          ),
          videoUrl: "/videos/ai2.mp4",
          extraInfo: s(
            "Puedes editar aquí el video, el texto principal, los enlaces externos y cualquier información adicional del proyecto."
          ),
        },
      },
      {
        id: "ai-reel",
        eyebrow: s("AI / Proyecto"),
        title: s("Don Beto"),
        description: s(
          "Tarjeta sobria para trabajo corto en AI, presentación conceptual y empaquetado editorial listo para mostrarse dentro del sitio."
        ),
        href: "#",
        cta: s("Abrir detalle"),
        linkKind: "internal",
        accent: "from-sky-400/16 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "Imagen destacada de Don Beto",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "Poster de Don Beto",
        },
        detail: {
          subtitle: s("AI / Proyecto"),
          description: s(
            "Vista interna cinematográfica para storytelling corto en AI, contexto editorial y futuras extensiones del proyecto dentro del portafolio."
          ),
          videoUrl: "/videos/ai3.mp4",
          extraInfo: s(
            "Este espacio también puede alojar trailers, notas técnicas, imágenes complementarias o enlaces externos cuando el proyecto lo necesite."
          ),
        },
      },
    ],
  },

  // ============================================================================
  // PRODUCCIÓN VIRTUAL
  // ============================================================================
  vp: {
    label: "VP",
    title: s("Reels de producción virtual y entornos en tiempo real"),
    description: s(
      "Stagecraft, desarrollo de entornos y lenguaje de cámara en tiempo real reunidos en una superficie creativa limpia."
    ),
    items: [
      {
        id: "vp-youtube",
        eyebrow: s("YouTube / Destacado"),
        title: s("Reel de escenario de producción virtual"),
        description: s(
          "Espacio destacado para movimiento de escenario en tiempo real, previs y estudios de producción centrados en Unreal."
        ),
        href: "https://www.youtube.com/@TheAssetHero",
        cta: s("Ver breakdowns"),
        linkKind: "external",
        accent: "from-violet-300/18 via-white/7 to-cyan-300/18",
        thumbnail: {
          src: "/images/img3.jpeg",
          alt: "Miniatura de reel de producción virtual",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U?rel=0",
        },
      },
      {
        id: "vp-environment",
        eyebrow: s("Entorno / Vista previa"),
        title: s("Deck de entorno en tiempo real"),
        description: s(
          "Lenguaje de escena escalable, ritmos de iluminación y claves visuales para pipelines de producción virtual."
        ),
        href: "/#showcase",
        cta: s("Abrir vista previa"),
        linkKind: "internal",
        accent: "from-white/15 via-transparent to-blue-300/10",
        thumbnail: {
          src: "/images/img1.jpeg",
          alt: "Miniatura de entorno en tiempo real",
        },
        media: {
          type: "poster",
          src: "/images/img1.jpeg",
          alt: "Poster de entorno en tiempo real",
        },
      },
      {
        id: "vp-reel",
        eyebrow: s("Reel / Movimiento"),
        title: s("Reel de movimiento de escenario"),
        description: s(
          "Movimiento de cámara, bloqueo cinematográfico y flujo visual guiado por escenario para presentación lista para producción."
        ),
        href: "/videos/vp1.mp4",
        cta: s("Ver reel"),
        linkKind: "reel",
        accent: "from-cyan-300/14 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "Miniatura de reel de movimiento de escenario",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "Poster de reel de movimiento de escenario",
        },
      },
    ],
  },

  // ============================================================================
  // 3D
  // ============================================================================
  "3d": {
    label: "3D",
    title: s("Renders automotrices y tomas 3D cinematográficas"),
    description: s(
      "Formas de alta fidelidad, estudios de producto y desarrollo visual cinematográfico presentados como una galería interactiva premium."
    ),
    items: [
      {
        id: "3d-youtube",
        eyebrow: s("YouTube / Destacado"),
        title: s("Presentación 3D cinematográfica"),
        description: s(
          "Espacio destacado para historias de render, estudios de iluminación y presentación de assets hero."
        ),
        href: "https://www.youtube.com/@TheAssetHero",
        cta: s("Abrir galería"),
        linkKind: "external",
        accent: "from-zinc-200/14 via-white/7 to-amber-200/12",
        thumbnail: {
          src: "/images/img2.png",
          alt: "Miniatura de presentación 3D",
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
          "Superficies, sistemas de pintura y dirección de iluminación organizados como un configurador cinematográfico."
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
          "Pieza pulida enfocada en superficies duras, ritmo de cámara y presentación premium de render."
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
    title: s("Niagara, simulaciones y lanzadores de composición"),
    description: s(
      "Efectos en tiempo real, movimiento por capas y avances de composición orientados al shot dentro de un hub cinematográfico ligero."
    ),
    items: [
      {
        id: "vfx-youtube",
        eyebrow: s("YouTube / Destacado"),
        title: s("Breakdown de efectos en tiempo real"),
        description: s(
          "Área destacada para timing en Niagara, estudios de simulación y breakdowns VFX en tiempo real."
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
          "Sistemas reutilizables de efectos, atmósfera cinematográfica y detalles de implementación para shots premium."
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
          "Reel cinematográfico para efectos por capas, movimiento atmosférico y timing en tiempo real de alto impacto."
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
    title: s("Sistemas en Unreal, plugins y herramientas técnicas"),
    description: s(
      "Pensamiento de sistemas, lanzamientos de plugins y herramientas técnicas presentadas a través de una interfaz premium con estilo de estudio."
    ),
    items: [
      {
        id: "dev-youtube",
        eyebrow: s("YouTube / Destacado"),
        title: s("Broadcast de toolchain técnica"),
        description: s(
          "Embed destacado para sistemas en Unreal, herramientas de flujo y demos técnicas presentadas con claridad cinematográfica."
        ),
        href: "https://www.youtube.com/@TheAssetHero",
        cta: s("Abrir canal"),
        linkKind: "external",
        accent: "from-emerald-300/16 via-white/8 to-cyan-300/16",
        thumbnail: {
          src: "/images/img2.png",
          alt: "Miniatura de toolchain técnica",
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
          "Superficie limpia para herramientas en Unreal, sistemas de plugins y futuros lanzamientos técnicos."
        ),
        href: "/#profile-journal",
        cta: s("Abrir sección"),
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
          "Reel técnico para sistemas de flujo, herramientas orientadas al creador y trabajo de ingeniería guiado por interfaz."
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
