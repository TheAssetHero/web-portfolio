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
  ai: {
    key: "ai",
    label: "AI",
    heroTitle: s("AI PRODUCTION"),
    heroDescription: s("AI-assisted workflows for cinematic production."),
    modalDescription:
      "Automation, rapid experimentation and AI-native creative tools for production-ready work.",
    textareaPlaceholder:
      "Describe the AI workflow, automation challenge or prototype you want to launch.",
    panelTitle: "AI systems, tools and experiments",
    panelDescription:
      "A modular platform for agents, pipelines and AI cinematic concepts built to grow with the studio.",
    cards: [
      {
        title: "Assisted Workflow Reel",
        subtitle: "Automation / Reel",
        description:
          "A cinematic look at assisted workflows, rapid iteration and AI production touchpoints.",
        href: "/videos/ai1.mp4",
        cta: "Watch reel",
        accent: "from-cyan-400/25 via-white/8 to-sky-300/20",
        linkKind: "reel",
        media: {
          src: "/images/img1.jpeg",
          alt: "AI production preview",
        },
      },
      {
        title: "Interface Lab",
        subtitle: "Preview / Internal",
        description:
          "Concept interfaces for prompting, orchestration and creator-focused automation systems.",
        href: "/#showcase",
        cta: "Open preview",
        accent: "from-white/18 via-transparent to-cyan-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img2.png",
          alt: "Experimental AI interface preview",
        },
      },
      {
        title: "Research Channel",
        subtitle: "External / Channel",
        description:
          "Reels, breakdowns and process notes connected to emerging AI workflows.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Visit channel",
        accent: "from-sky-400/16 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img4.jpeg",
          alt: "AI channel preview",
        },
      },
    ],
  },

  "3d": {
    key: "3d",
    label: "3D",
    heroTitle: s("3D PRODUCTION"),
    heroDescription: s("From modeling to cinematic output."),
    modalDescription:
      "Modeling, materials, automotive detail and cinematic rendering inside polished 3D pipelines.",
    textareaPlaceholder:
      "Share the model, product or render system you want to develop in 3D.",
    panelTitle: "Modeling, automotive and render studies",
    panelDescription:
      "High-fidelity forms, material studies and cinematic output for premium visual storytelling.",
    cards: [
      {
        title: "Automotive Render Reel",
        subtitle: "3D / Reel",
        description:
          "Hard-surface form language and render-led presentation for hero assets.",
        href: "/videos/3d1.mp4",
        cta: "Watch reel",
        accent: "from-zinc-200/14 via-white/7 to-amber-200/12",
        linkKind: "reel",
        media: {
          src: "/images/img2.png",
          alt: "3D automotive render preview",
        },
      },
      {
        title: "Material Study Preview",
        subtitle: "Preview / Internal",
        description:
          "Surface, paint and lighting studies presented as a cinematic configurator.",
        href: "/#showcase",
        cta: "Open preview",
        accent: "from-white/18 via-transparent to-zinc-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img3.jpeg",
          alt: "Material development preview",
        },
      },
      {
        title: "Production Gallery",
        subtitle: "External / Showcase",
        description:
          "A starting point for visual studies, renders and cinematic breakdowns.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Open gallery",
        accent: "from-amber-200/12 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img4.jpeg",
          alt: "Production gallery preview",
        },
      },
    ],
  },

  vfx: {
    key: "vfx",
    label: "VFX",
    heroTitle: s("VFX"),
    heroDescription: s("Realtime effects and cinematic motion language."),
    modalDescription:
      "Niagara, simulations, compositing and realtime effects with cinematic control.",
    textareaPlaceholder:
      "Describe the effect, simulation or realtime sequence you want to develop.",
    panelTitle: "Simulations, Niagara and compositing",
    panelDescription:
      "Realtime effects studies, atmospheres and VFX launchers designed for premium shots.",
    cards: [
      {
        title: "Niagara Sequence Reel",
        subtitle: "VFX / Reel",
        description:
          "Realtime effects, layered motion and cinematic timing for high-impact shots.",
        href: "/videos/vfx1.mp4",
        cta: "Watch reel",
        accent: "from-fuchsia-300/18 via-white/8 to-cyan-300/18",
        linkKind: "reel",
        media: {
          src: "/images/img1.jpeg",
          alt: "VFX reel preview",
        },
      },
      {
        title: "FX Pack Preview",
        subtitle: "Preview / Internal",
        description:
          "A closer look at reusable effect systems and cinematic implementation details.",
        href: "/#profile-journal",
        cta: "Open preview",
        accent: "from-white/18 via-transparent to-fuchsia-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img4.jpeg",
          alt: "FX pack preview",
        },
      },
      {
        title: "Breakdown Feed",
        subtitle: "External / Channel",
        description:
          "Ongoing studies in effects, layered compositing and realtime motion experiments.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "View feed",
        accent: "from-cyan-300/12 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img3.jpeg",
          alt: "Realtime breakdown preview",
        },
      },
    ],
  },

  dev: {
    key: "dev",
    label: "DEV",
    heroTitle: s("DEV / UI / UX"),
    heroDescription: s("Interactive systems and technical tools."),
    modalDescription:
      "Plugins, systems, UI tools and Unreal-focused development experiences with premium presentation.",
    textareaPlaceholder:
      "Tell me about the plugin, system, interface or Unreal tool you want to launch.",
    panelTitle: "Plugins, systems and Unreal tools",
    panelDescription:
      "Modular systems, launch-ready plugins and creator-focused interfaces.",
    cards: [
      {
        title: "Systems Reel",
        subtitle: "DEV / Reel",
        description:
          "Interactive systems, workflow tools and premium UI moments captured in motion.",
        href: "/videos/dev1.mp4",
        cta: "Watch reel",
        accent: "from-emerald-300/16 via-white/8 to-cyan-300/16",
        linkKind: "reel",
        media: {
          src: "/images/img2.png",
          alt: "Systems reel preview",
        },
      },
      {
        title: "Plugin Showcase",
        subtitle: "Internal / Library",
        description:
          "Access to tools, systems and technical products as the library continues to grow.",
        href: "/#profile-journal",
        cta: "Open library",
        accent: "from-white/18 via-transparent to-emerald-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img1.jpeg",
          alt: "Plugin showcase preview",
        },
      },
      {
        title: "Technical Broadcast",
        subtitle: "External / Channel",
        description:
          "Development logs, tool demos and systems presented with a cinematic eye.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Open channel",
        accent: "from-cyan-300/12 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img4.jpeg",
          alt: "Technical broadcast preview",
        },
      },
    ],
  },
};
