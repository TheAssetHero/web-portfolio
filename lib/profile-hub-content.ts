import { CategoryKey } from "@/lib/portfolio-categories";

export type ProfileHubItem = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  cta: string;
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
};

export type ProfileHubCategory = {
  label: string;
  title: string;
  description: string;
  items: ProfileHubItem[];
};

export const profileHubContent: Record<CategoryKey, ProfileHubCategory> = {
  ai: {
    label: "AI",
    title: "Automation experiments and AI-native creative systems",
    description:
      "A cinematic mix of AI tools, workflow prototypes, and interface-led experiments shaped for modern production.",
    items: [
      {
        id: "ai-youtube",
        eyebrow: "YouTube / Featured",
        title: "AI workflow broadcast",
        description:
          "A featured broadcast-style embed for process, prototypes, and production-minded AI thinking.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Open channel",
        linkKind: "external",
        accent: "from-cyan-400/18 via-white/8 to-sky-300/18",
        thumbnail: {
          src: "/images/img1.jpeg",
          alt: "AI workflow broadcast thumbnail",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0",
        },
      },
      {
        id: "ai-tooling",
        eyebrow: "Tooling / Preview",
        title: "Experimental interface lab",
        description:
          "Prompting surfaces, orchestration panels, and creator-facing automation concepts presented with a premium UI lens.",
        href: "/#showcase",
        cta: "Open preview",
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
      },
      {
        id: "ai-reel",
        eyebrow: "Reel / Motion",
        title: "Agent workflow reel",
        description:
          "A cinematic pass through automation loops, AI-assisted production timing, and creative tooling momentum.",
        href: "/videos/ai1.mp4",
        cta: "Play reel",
        linkKind: "reel",
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
      },
    ],
  },
  vp: {
    label: "VP",
    title: "Virtual production reels and realtime environments",
    description:
      "Stagecraft, environment development, and realtime camera language assembled into a clean creative launch surface.",
    items: [
      {
        id: "vp-youtube",
        eyebrow: "YouTube / Featured",
        title: "Virtual production stage reel",
        description:
          "A featured embed space for realtime stage motion, previs framing, and Unreal-centric production studies.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Watch breakdowns",
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
        eyebrow: "Environment / Preview",
        title: "Realtime environment deck",
        description:
          "Scalable scene language, lighting beats, and cinematic environment cues for virtual production pipelines.",
        href: "/#showcase",
        cta: "Open preview",
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
        eyebrow: "Reel / Motion",
        title: "Stage motion reel",
        description:
          "Realtime camera movement, cinematic blocking, and stage-driven visual flow for production-ready presentation.",
        href: "/videos/vp1.mp4",
        cta: "Play reel",
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
    title: "Automotive renders and cinematic 3D shots",
    description:
      "High-fidelity forms, product studies, and cinematic visual development framed as a premium interactive gallery.",
    items: [
      {
        id: "3d-youtube",
        eyebrow: "YouTube / Featured",
        title: "Cinematic 3D presentation",
        description:
          "A featured video slot for polished render stories, lighting studies, and hero asset presentations.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Open gallery",
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
        eyebrow: "Lookdev / Preview",
        title: "Material study launcher",
        description:
          "Surfaces, paint systems, and lighting direction arranged like a cinematic product configurator.",
        href: "/#profile-journal",
        cta: "Open preview",
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
        eyebrow: "Reel / Motion",
        title: "Automotive render reel",
        description:
          "A polished motion piece focused on hard-surface confidence, camera rhythm, and premium render presentation.",
        href: "/videos/3d1.mp4",
        cta: "Play reel",
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
    title: "Niagara, simulations, and compositing launchers",
    description:
      "Realtime effects, layered motion, and shot-driven compositing previews shaped as a lightweight cinematic hub.",
    items: [
      {
        id: "vfx-youtube",
        eyebrow: "YouTube / Featured",
        title: "Realtime effects breakdown",
        description:
          "A featured embed area for Niagara timing, simulation studies, and realtime VFX breakdowns.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Watch feed",
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
        eyebrow: "Toolkit / Preview",
        title: "FX pack preview",
        description:
          "Reusable effect systems, cinematic atmospherics, and layered implementation details for premium shot work.",
        href: "/#profile-journal",
        cta: "Open preview",
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
        eyebrow: "Reel / Motion",
        title: "Niagara sequence reel",
        description:
          "A cinematic reel for layered effects, atmospheric motion, and high-impact realtime timing.",
        href: "/videos/vfx1.mp4",
        cta: "Play reel",
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
    title: "Unreal systems, plugins, and technical tools",
    description:
      "Systems thinking, plugin launches, and technical tooling surfaced through a premium studio-style interface.",
    items: [
      {
        id: "dev-youtube",
        eyebrow: "YouTube / Featured",
        title: "Technical toolchain broadcast",
        description:
          "A featured embed for Unreal systems, workflow tooling, and technical demos presented with cinematic clarity.",
        href: "https://www.youtube.com/@TheAssetHero",
        cta: "Open channel",
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
        eyebrow: "Plugins / Preview",
        title: "Plugin shelf",
        description:
          "A clean launch surface for Unreal tools, plugin systems, and future technical product drops.",
        href: "/#profile-journal",
        cta: "Open journal",
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
        eyebrow: "Reel / Motion",
        title: "Systems reel",
        description:
          "A technical motion reel for workflow systems, creator-facing tools, and polished UI-driven engineering work.",
        href: "/videos/dev1.mp4",
        cta: "Play reel",
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
