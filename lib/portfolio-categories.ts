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
  heroTitle: string;
  heroDescription: string;
  modalDescription: string;
  textareaPlaceholder: string;
  panelTitle: string;
  panelDescription: string;
  cards: CategoryCard[];
};

export const categoryOrder: CategoryKey[] = ["ai", "vp", "3d", "vfx", "dev"];

export const portfolioCategories: Record<CategoryKey, PortfolioCategory> = {
  ai: {
    key: "ai",
    label: "AI",
    heroTitle: "AI PRODUCTION",
    heroDescription: "AI-assisted workflows.",
    modalDescription:
      "Automation, rapid experiments, and AI-native creative tooling shaped for production velocity.",
    textareaPlaceholder:
      "Outline the AI workflow, automation challenge, or prototype you want to launch",
    panelTitle: "AI systems, tools, and experiments",
    panelDescription:
      "A modular launchpad for agents, pipelines, and cinematic AI concepts that can expand as the lab grows.",
    cards: [
      {
        title: "Agent Workflow Reel",
        subtitle: "Automation / Reel",
        description:
          "A cinematic pass through assisted workflows, rapid iteration loops, and AI production touchpoints.",
        href: "/videos/ai1.mp4",
        cta: "Play reel",
        accent: "from-cyan-400/25 via-white/8 to-sky-300/20",
        linkKind: "reel",
        media: {
          src: "/images/img1.jpeg",
          alt: "AI production reel preview",
        },
      },
      {
        title: "Experimental Interface Lab",
        subtitle: "Preview / Internal",
        description:
          "Concept interfaces for prompting, orchestration, and creator-facing automation systems.",
        href: "/#showcase",
        cta: "Open preview",
        accent: "from-white/18 via-transparent to-cyan-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img2.png",
          alt: "AI interface experiment preview",
        },
      },
      {
        title: "AssetHero Research Feed",
        subtitle: "External / Channel",
        description:
          "Reels, breakdowns, and process snapshots connected to emerging AI workflows.",
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
  vp: {
    key: "vp",
    label: "VP",
    heroTitle: "VIRTUAL PRODUCTION",
    heroDescription: "Unreal Engine pipelines.",
    modalDescription:
      "Realtime stages, previs, and pipeline thinking for premium virtual production execution.",
    textareaPlaceholder:
      "Describe the virtual production sequence, stage, or Unreal pipeline you need built",
    panelTitle: "Realtime stages and VP reels",
    panelDescription:
      "Previs launches, environment lookdev, and cinematic stage previews shaped for production-ready delivery.",
    cards: [
      {
        title: "Stage Motion Reel",
        subtitle: "VP / Reel",
        description:
          "Realtime camera motion, lighting cadence, and stage language assembled for cinematic playback.",
        href: "/videos/vp1.mp4",
        cta: "Play reel",
        accent: "from-violet-300/18 via-white/7 to-cyan-300/18",
        linkKind: "reel",
        media: {
          src: "/images/img3.jpeg",
          alt: "Virtual production reel preview",
        },
      },
      {
        title: "Environment Preview Deck",
        subtitle: "Preview / Internal",
        description:
          "Scalable scene-building blocks and lookdev cues for stage-driven environments.",
        href: "/#showcase",
        cta: "Open preview",
        accent: "from-white/15 via-transparent to-blue-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img1.jpeg",
          alt: "Environment preview deck",
        },
      },
      {
        title: "Pipeline Breakdowns",
        subtitle: "External / Channel",
        description:
          "Selected reels and breakdowns focused on realtime stage craft and Unreal workflows.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Watch breakdowns",
        accent: "from-cyan-300/14 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img4.jpeg",
          alt: "Pipeline breakdown preview",
        },
      },
    ],
  },
  "3d": {
    key: "3d",
    label: "3D",
    heroTitle: "3D PRODUCTION",
    heroDescription: "From modeling to cinematic output.",
    modalDescription:
      "Modeling, surfacing, automotive detail, and cinematic rendering across polished 3D pipelines.",
    textareaPlaceholder:
      "Share the model, product, or render system you want developed in 3D",
    panelTitle: "Modeling, automotive, and render studies",
    panelDescription:
      "High-fidelity forms, material studies, and cinematic output previews built for premium product storytelling.",
    cards: [
      {
        title: "Automotive Render Reel",
        subtitle: "3D / Reel",
        description:
          "Shape language, hard-surface confidence, and render-led presentation for hero assets.",
        href: "/videos/3d1.mp4",
        cta: "Play reel",
        accent: "from-zinc-200/14 via-white/7 to-amber-200/12",
        linkKind: "reel",
        media: {
          src: "/images/img2.png",
          alt: "Automotive 3D render preview",
        },
      },
      {
        title: "Material Lookdev Preview",
        subtitle: "Preview / Internal",
        description:
          "Surface, paint, and lighting studies framed like a cinematic product configurator.",
        href: "/#assets",
        cta: "Open preview",
        accent: "from-white/18 via-transparent to-zinc-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img3.jpeg",
          alt: "Material look development preview",
        },
      },
      {
        title: "Production Gallery",
        subtitle: "External / Showcase",
        description:
          "A launch point for visual studies, renders, and process breakdowns with cinematic presentation.",
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
    heroTitle: "VFX",
    heroDescription: "Real-time and cinematic FX.",
    modalDescription:
      "Niagara, simulations, compositing, and realtime effects assembled with cinematic control.",
    textareaPlaceholder:
      "Describe the effect, simulation, or realtime sequence you want crafted",
    panelTitle: "Simulations, Niagara, and compositing previews",
    panelDescription:
      "Realtime effects studies, atmospheric passes, and cinematic FX launchers built for premium shot work.",
    cards: [
      {
        title: "Niagara Sequence Reel",
        subtitle: "VFX / Reel",
        description:
          "Realtime effects, layered motion, and cinematic timing designed for high-impact shots.",
        href: "/videos/vfx1.mp4",
        cta: "Play reel",
        accent: "from-fuchsia-300/18 via-white/8 to-cyan-300/18",
        linkKind: "reel",
        media: {
          src: "/images/img1.jpeg",
          alt: "Visual effects reel preview",
        },
      },
      {
        title: "FX Pack Preview",
        subtitle: "Preview / Internal",
        description:
          "A closer look at reusable effect systems and cinematic implementation details.",
        href: "/#assets",
        cta: "Open preview",
        accent: "from-white/18 via-transparent to-fuchsia-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img4.jpeg",
          alt: "Effects pack preview",
        },
      },
      {
        title: "Realtime Breakdown Feed",
        subtitle: "External / Channel",
        description:
          "Ongoing effect studies, layered compositing moments, and realtime motion experiments.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Watch feed",
        accent: "from-cyan-300/12 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img3.jpeg",
          alt: "Realtime breakdown feed preview",
        },
      },
    ],
  },
  dev: {
    key: "dev",
    label: "DEV",
    heroTitle: "DEV / UI / UX",
    heroDescription: "Interactive systems.",
    modalDescription:
      "Plugins, systems, UI tooling, and Unreal-oriented development experiences with premium presentation.",
    textareaPlaceholder:
      "Tell me about the plugin, system, UI, or Unreal tool you want to ship",
    panelTitle: "Plugins, systems, and Unreal tool launches",
    panelDescription:
      "Modular systems, launch-ready plugins, and creator-facing interfaces designed to scale with new builds.",
    cards: [
      {
        title: "Systems Reel",
        subtitle: "DEV / Reel",
        description:
          "Interactive systems, workflow tooling, and premium UI moments captured in motion.",
        href: "/videos/dev1.mp4",
        cta: "Play reel",
        accent: "from-emerald-300/16 via-white/8 to-cyan-300/16",
        linkKind: "reel",
        media: {
          src: "/images/img2.png",
          alt: "Development systems reel preview",
        },
      },
      {
        title: "Plugin Shelf",
        subtitle: "Internal / Assets",
        description:
          "Jump into the live asset and plugin section as the library expands over time.",
        href: "/#assets",
        cta: "Open assets",
        accent: "from-white/18 via-transparent to-emerald-300/10",
        linkKind: "internal",
        media: {
          src: "/images/img1.jpeg",
          alt: "Plugin shelf preview",
        },
      },
      {
        title: "Toolchain Broadcast",
        subtitle: "External / Channel",
        description:
          "Build logs, tool previews, and system demos presented through a cinematic product lens.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Open channel",
        accent: "from-cyan-300/12 via-transparent to-white/8",
        linkKind: "external",
        media: {
          src: "/images/img4.jpeg",
          alt: "Toolchain broadcast preview",
        },
      },
    ],
  },
};
