import { LocalizedText } from "@/lib/localization";
import { CategoryKey } from "@/lib/portfolio-categories";

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
    eyebrow: LocalizedText;
    headline: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    description: LocalizedText;
    href?: string;
    cta?: LocalizedText;
  };
  announcements?: Array<{
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

const t = (en: string, es: string): LocalizedText => ({ en, es });

export const profileHubContent: Record<CategoryKey, ProfileHubCategory> = {
  ai: {
    label: "AI",
    title: t(
      "Automation experiments and AI-native creative systems",
      "Experimentos de automatizacion y sistemas creativos nativos de AI"
    ),
    description: t(
      "A cinematic mix of AI tools, workflow prototypes, and interface-led experiments shaped for modern production.",
      "Una mezcla cinematografica de herramientas de AI, prototipos de flujo de trabajo y experimentos guiados por interfaz para la produccion moderna."
    ),
    feature: {
      eyebrow: t("Featured Case Study", "Caso destacado"),
      headline: t(
        "First commercial in LATAM made completely with AI",
        "Primer comercial en LATAM completamente en IA"
      ),
      title: t("The Echelon AI Project", "The Echelon AI Project"),
      subtitle: t(
        "Voice, image, and audio generated with artificial intelligence.",
        "Voz, imagen y audio generados con inteligencia artificial."
      ),
      description: t(
        "A premium achievement marker positioned as the lead AI case study inside the editorial viewer, highlighting a fully AI-driven commercial production.",
        "Un marcador de logro premium colocado como el caso principal de AI dentro de la vista editorial, destacando una produccion comercial impulsada completamente por inteligencia artificial."
      ),
      href: "https://www.behance.net/gallery/245574455/The-Echelon-AI-Project",
      cta: t("VIEW PROJECT", "VER PROYECTO"),
    },
    announcements: [
      {
        id: "rango-bravo-release",
        projectTitle: t("The Rango Bravo", "The Rango Bravo"),
        headline: t(
          'Premiere of "Una Mas al Kilo"',
          'Estreno de "Una Mas al Kilo"'
        ),
        releaseInfo: t(
          "Premieres today at 1:00 PM",
          "Estreno hoy a la 1:00 PM"
        ),
        description: t(
          "Short film showing foreign vehicle failure statistics in 2025, without aiming at anyone in particular.",
          "Cortometraje que muestra las estadisticas de fallas de vehiculos extranjeros en el ano 2025, sin tirarle a nadie en especifico."
        ),
        href: "https://youtu.be/Y1UbzPnqJPo",
        cta: t("WATCH VIDEO", "VER VIDEO"),
      },
    ],
    items: [
      {
        id: "ai-youtube",
        eyebrow: t("AI / Featured", "AI / Destacado"),
        title: t("Anatom\u00eda al l\u00edmite", "Anatom\u00eda al l\u00edmite"),
        description: t(
          "A compact AI release marker for worldbuilding experiments and launch-minded visual storytelling.",
          "Una senal compacta de lanzamiento AI para experimentos de worldbuilding y narrativa visual orientada a estrenos."
        ),
        href: "#",
        cta: t("Open feature", "Abrir detalle"),
        linkKind: "internal",
        accent: "from-zinc-100/12 via-black/10 to-cyan-300/14",
        thumbnail: {
          src: "/images/img1.jpeg",
          alt: "Runaway 2150 launch thumbnail",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0",
        },
        detail: {
          subtitle: t("AI / Featured", "AI / Destacado"),
          description: t(
            "Editorial and audiovisual project presented as a featured release inside the AI Production area. This internal panel is designed to hold the main video and supporting project context.",
            "Proyecto editorial y audiovisual presentado como pieza destacada dentro del area de AI Production. Aqui puede vivir el video principal y texto explicativo del proyecto."
          ),
          videoUrl: "/videos/ai1.mp4",
          extraInfo: t(
            "Built as a premium in-site feature panel so editorial launches can open without breaking the current experience.",
            "Construido como un panel interno premium para que los lanzamientos editoriales se abran sin romper la experiencia actual."
          ),
        },
      },
      {
        id: "ai-tooling",
        eyebrow: t("AI / Feature", "AI / Feature"),
        title: t("The Therians", "The Therians"),
        description: t(
          "A small-format project tile for AI concepts, interface experiments, and narrative release ideas.",
          "Una pieza de proyecto en formato pequeno para conceptos AI, experimentos de interfaz e ideas narrativas de lanzamiento."
        ),
        href: "#",
        cta: t("Open feature", "Abrir detalle"),
        linkKind: "internal",
        accent: "from-white/18 via-transparent to-cyan-300/10",
        thumbnail: {
          src: "/images/img2.png",
          alt: "AI interface lab thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img2.png",
          alt: "AI interface lab poster",
        },
        detail: {
          subtitle: t("AI / Feature", "AI / Feature"),
          description: t(
            "A future-ready internal feature surface for AI concept releases, visual experiments, and editorial breakdowns.",
            "Una superficie interna lista para crecer con lanzamientos de conceptos AI, experimentos visuales y breakdowns editoriales."
          ),
          videoUrl: "/videos/ai2.mp4",
          extraInfo: t(
            "Reserved for project footage, release notes, and optional outbound links when this piece expands.",
            "Reservado para footage del proyecto, notas de lanzamiento y enlaces externos opcionales cuando esta pieza crezca."
          ),
        },
      },
      {
        id: "ai-reel",
        eyebrow: t("AI / Feature", "AI / Feature"),
        title: t("Don Beto", "Don Beto"),
        description: t(
          "A restrained card for AI-driven short-form work and release-ready concept packaging.",
          "Una tarjeta sobria para trabajo AI en formato corto y empaquetado conceptual listo para lanzamiento."
        ),
        href: "#",
        cta: t("Open feature", "Abrir detalle"),
        linkKind: "internal",
        accent: "from-sky-400/16 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "Agent workflow reel thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "Agent workflow reel poster",
        },
        detail: {
          subtitle: t("AI / Feature", "AI / Feature"),
          description: t(
            "An internal cinematic detail view for short-form AI storytelling, release framing, and modular project notes.",
            "Una vista interna cinematografica para storytelling AI en formato corto, presentacion de lanzamiento y notas modulares del proyecto."
          ),
          videoUrl: "/videos/ai3.mp4",
          extraInfo: t(
            "Ready to carry future trailer links, supporting text, and release metadata without leaving the site.",
            "Lista para llevar trailers futuros, texto de apoyo y metadata de lanzamiento sin salir del sitio."
          ),
        },
      },
    ],
  },
  vp: {
    label: "VP",
    title: t(
      "Virtual production reels and realtime environments",
      "Reels de produccion virtual y entornos en tiempo real"
    ),
    description: t(
      "Stagecraft, environment development, and realtime camera language assembled into a clean creative launch surface.",
      "Stagecraft, desarrollo de entornos y lenguaje de camara en tiempo real reunidos en una superficie creativa limpia."
    ),
    items: [
      {
        id: "vp-youtube",
        eyebrow: t("YouTube / Featured", "YouTube / Destacado"),
        title: t(
          "Virtual production stage reel",
          "Reel de escenario de produccion virtual"
        ),
        description: t(
          "A featured embed space for realtime stage motion, previs framing, and Unreal-centric production studies.",
          "Un espacio destacado para movimiento de escenario en tiempo real, encuadres de previs y estudios de produccion centrados en Unreal."
        ),
        href: "https://www.youtube.com/@TheAssetHero",
        cta: t("Watch breakdowns", "Ver breakdowns"),
        linkKind: "external",
        accent: "from-violet-300/18 via-white/7 to-cyan-300/18",
        thumbnail: {
          src: "/images/img3.jpeg",
          alt: "Virtual production stage reel thumbnail",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U?rel=0",
        },
      },
      {
        id: "vp-environment",
        eyebrow: t("Environment / Preview", "Entorno / Preview"),
        title: t(
          "Realtime environment deck",
          "Deck de entorno en tiempo real"
        ),
        description: t(
          "Scalable scene language, lighting beats, and cinematic environment cues for virtual production pipelines.",
          "Lenguaje de escena escalable, ritmos de iluminacion y claves cinematicas de entorno para pipelines de produccion virtual."
        ),
        href: "/#showcase",
        cta: t("Open preview", "Abrir preview"),
        linkKind: "internal",
        accent: "from-white/15 via-transparent to-blue-300/10",
        thumbnail: {
          src: "/images/img1.jpeg",
          alt: "Realtime environment deck thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img1.jpeg",
          alt: "Realtime environment deck poster",
        },
      },
      {
        id: "vp-reel",
        eyebrow: t("Reel / Motion", "Reel / Movimiento"),
        title: t("Stage motion reel", "Reel de movimiento de escenario"),
        description: t(
          "Realtime camera movement, cinematic blocking, and stage-driven visual flow for production-ready presentation.",
          "Movimiento de camara en tiempo real, bloqueo cinematografico y flujo visual guiado por escenario para una presentacion lista para produccion."
        ),
        href: "/videos/vp1.mp4",
        cta: t("Play reel", "Ver reel"),
        linkKind: "reel",
        accent: "from-cyan-300/14 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "Stage motion reel thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "Stage motion reel poster",
        },
      },
    ],
  },
  "3d": {
    label: "3D",
    title: t(
      "Automotive renders and cinematic 3D shots",
      "Renders automotrices y tomas 3D cinematicas"
    ),
    description: t(
      "High-fidelity forms, product studies, and cinematic visual development framed as a premium interactive gallery.",
      "Formas de alta fidelidad, estudios de producto y desarrollo visual cinematografico presentados como una galeria interactiva premium."
    ),
    items: [
      {
        id: "3d-youtube",
        eyebrow: t("YouTube / Featured", "YouTube / Destacado"),
        title: t("Cinematic 3D presentation", "Presentacion 3D cinematica"),
        description: t(
          "A featured video slot for polished render stories, lighting studies, and hero asset presentations.",
          "Un espacio de video destacado para historias de render pulidas, estudios de iluminacion y presentaciones de assets hero."
        ),
        href: "https://www.youtube.com/@TheAssetHero",
        cta: t("Open gallery", "Abrir galeria"),
        linkKind: "external",
        accent: "from-zinc-200/14 via-white/7 to-amber-200/12",
        thumbnail: {
          src: "/images/img2.png",
          alt: "Cinematic 3D presentation thumbnail",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/tgbNymZ7vqY?rel=0",
        },
      },
      {
        id: "3d-materials",
        eyebrow: t("Lookdev / Preview", "Lookdev / Preview"),
        title: t("Material study launcher", "Launcher de estudio de materiales"),
        description: t(
          "Surfaces, paint systems, and lighting direction arranged like a cinematic product configurator.",
          "Superficies, sistemas de pintura y direccion de iluminacion organizados como un configurador cinematografico de producto."
        ),
        href: "/#profile-journal",
        cta: t("Open preview", "Abrir preview"),
        linkKind: "internal",
        accent: "from-white/18 via-transparent to-zinc-300/10",
        thumbnail: {
          src: "/images/img3.jpeg",
          alt: "Material study launcher thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img3.jpeg",
          alt: "Material study launcher poster",
        },
      },
      {
        id: "3d-reel",
        eyebrow: t("Reel / Motion", "Reel / Movimiento"),
        title: t("Automotive render reel", "Reel de render automotriz"),
        description: t(
          "A polished motion piece focused on hard-surface confidence, camera rhythm, and premium render presentation.",
          "Una pieza de movimiento pulida centrada en superficies duras, ritmo de camara y presentacion premium de render."
        ),
        href: "/videos/3d1.mp4",
        cta: t("Play reel", "Ver reel"),
        linkKind: "reel",
        accent: "from-amber-200/12 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "Automotive render reel thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "Automotive render reel poster",
        },
      },
    ],
  },
  vfx: {
    label: "VFX",
    title: t(
      "Niagara, simulations, and compositing launchers",
      "Niagara, simulaciones y lanzadores de composicion"
    ),
    description: t(
      "Realtime effects, layered motion, and shot-driven compositing previews shaped as a lightweight cinematic hub.",
      "Efectos en tiempo real, movimiento por capas y avances de composicion orientados al shot, reunidos como un hub cinematografico ligero."
    ),
    items: [
      {
        id: "vfx-youtube",
        eyebrow: t("YouTube / Featured", "YouTube / Destacado"),
        title: t(
          "Realtime effects breakdown",
          "Breakdown de efectos en tiempo real"
        ),
        description: t(
          "A featured embed area for Niagara timing, simulation studies, and realtime VFX breakdowns.",
          "Un area destacada para timing en Niagara, estudios de simulacion y breakdowns VFX en tiempo real."
        ),
        href: "https://www.youtube.com/@TheAssetHero",
        cta: t("Watch feed", "Ver feed"),
        linkKind: "external",
        accent: "from-fuchsia-300/18 via-white/8 to-cyan-300/18",
        thumbnail: {
          src: "/images/img1.jpeg",
          alt: "Realtime effects breakdown thumbnail",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/jNQXAC9IVRw?rel=0",
        },
      },
      {
        id: "vfx-preview",
        eyebrow: t("Toolkit / Preview", "Toolkit / Preview"),
        title: t("FX pack preview", "Preview de paquete FX"),
        description: t(
          "Reusable effect systems, cinematic atmospherics, and layered implementation details for premium shot work.",
          "Sistemas de efectos reutilizables, atmosfericos cinematicos y detalles de implementacion por capas para trabajo de shot premium."
        ),
        href: "/#profile-journal",
        cta: t("Open preview", "Abrir preview"),
        linkKind: "internal",
        accent: "from-white/18 via-transparent to-fuchsia-300/10",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "FX pack preview thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "FX pack preview poster",
        },
      },
      {
        id: "vfx-reel",
        eyebrow: t("Reel / Motion", "Reel / Movimiento"),
        title: t("Niagara sequence reel", "Reel de secuencia Niagara"),
        description: t(
          "A cinematic reel for layered effects, atmospheric motion, and high-impact realtime timing.",
          "Un reel cinematografico para efectos por capas, movimiento atmosferico y timing en tiempo real de alto impacto."
        ),
        href: "/videos/vfx1.mp4",
        cta: t("Play reel", "Ver reel"),
        linkKind: "reel",
        accent: "from-cyan-300/12 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img3.jpeg",
          alt: "Niagara sequence reel thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img3.jpeg",
          alt: "Niagara sequence reel poster",
        },
      },
    ],
  },
  dev: {
    label: "DEV",
    title: t(
      "Unreal systems, plugins, and technical tools",
      "Sistemas de Unreal, plugins y herramientas tecnicas"
    ),
    description: t(
      "Systems thinking, plugin launches, and technical tooling surfaced through a premium studio-style interface.",
      "Pensamiento de sistemas, lanzamientos de plugins y herramientas tecnicas presentados a traves de una interfaz premium con estilo de estudio."
    ),
    items: [
      {
        id: "dev-youtube",
        eyebrow: t("YouTube / Featured", "YouTube / Destacado"),
        title: t(
          "Technical toolchain broadcast",
          "Broadcast de toolchain tecnica"
        ),
        description: t(
          "A featured embed for Unreal systems, workflow tooling, and technical demos presented with cinematic clarity.",
          "Un embed destacado para sistemas de Unreal, herramientas de flujo de trabajo y demos tecnicas presentadas con claridad cinematografica."
        ),
        href: "https://www.youtube.com/@TheAssetHero",
        cta: t("Open channel", "Abrir canal"),
        linkKind: "external",
        accent: "from-emerald-300/16 via-white/8 to-cyan-300/16",
        thumbnail: {
          src: "/images/img2.png",
          alt: "Technical toolchain broadcast thumbnail",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0",
        },
      },
      {
        id: "dev-plugin",
        eyebrow: t("Plugins / Preview", "Plugins / Preview"),
        title: t("Plugin shelf", "Vitrina de plugins"),
        description: t(
          "A clean launch surface for Unreal tools, plugin systems, and future technical product drops.",
          "Una superficie limpia de lanzamiento para herramientas de Unreal, sistemas de plugins y futuros productos tecnicos."
        ),
        href: "/#profile-journal",
        cta: t("Open journal", "Abrir journal"),
        linkKind: "internal",
        accent: "from-white/18 via-transparent to-emerald-300/10",
        thumbnail: {
          src: "/images/img1.jpeg",
          alt: "Plugin shelf thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img1.jpeg",
          alt: "Plugin shelf poster",
        },
      },
      {
        id: "dev-reel",
        eyebrow: t("Reel / Motion", "Reel / Movimiento"),
        title: t("Systems reel", "Reel de sistemas"),
        description: t(
          "A technical motion reel for workflow systems, creator-facing tools, and polished UI-driven engineering work.",
          "Un reel tecnico de movimiento para sistemas de flujo de trabajo, herramientas orientadas al creador y trabajo de ingenieria guiado por UI."
        ),
        href: "/videos/dev1.mp4",
        cta: t("Play reel", "Ver reel"),
        linkKind: "reel",
        accent: "from-cyan-300/12 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "Systems reel thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "Systems reel poster",
        },
      },
    ],
  },
};
