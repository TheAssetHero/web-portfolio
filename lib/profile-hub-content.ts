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
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    description: LocalizedText;
    videoUrl: string;
    buttonLabel?: LocalizedText;
    externalUrl?: string;
  };
  secondaryFeatures?: Array<{
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    description: LocalizedText;
    videoUrl: string;
    buttonLabel?: LocalizedText;
    externalUrl?: string;
  }>;
  campaignBanner?: {
    title: LocalizedText;
    description: LocalizedText;
    videoUrl: string;
    actions: Array<{
      label: LocalizedText;
      href: string;
    }>;
  };
  announcements?: Array<{
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
  ai: {
    label: "AI",
    title: s("AI production, experiments and creative systems"),
    description: s(
      "A cinematic mix of AI tools, workflow prototypes and interface-led experiments for modern production."
    ),
    feature: {
      eyebrow: s("AI / CASE STUDY"),
      title: s("The Echelon"),
      subtitle: s("The first fully AI-produced commercial project in LATAM"),
      description: s(
        "Voice, image and audio generated with artificial intelligence."
      ),
      videoUrl:
        "https://player.vimeo.com/video/1190250981?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      buttonLabel: s("VIEW PROJECT"),
      externalUrl:
        "https://www.behance.net/gallery/245574455/The-Echelon-AI-Project",
    },
    secondaryFeatures: [
      {
        eyebrow: s("AI / AUTOMOTIVE"),
        title: s("BMW M2 Racing 2026"),
        subtitle: s("M2 Racing Full AI Production"),
        description: s(
          "AI-assisted automotive film focused on performance, cinematic motion and high-end vehicle visualization."
        ),
        videoUrl: "https://www.youtube.com/embed/AaqX9k6b0Gw?rel=0",
        buttonLabel: s("VIEW PROJECT"),
        externalUrl: "https://www.behance.net/emmanuelblancas",
      },
    ],
    campaignBanner: {
      title: s("Runaway 2150"),
      description: s(
        "An original sci-fi series developed through AI-assisted cinematic production, connected worlds and a war that cannot begin."
      ),
      videoUrl: "https://www.youtube.com/embed/StHnkr4zFgs?rel=0",
      actions: [
        {
          label: s("WATCH TRAILER"),
          href: "https://youtu.be/StHnkr4zFgs",
        },
        {
          label: s("VIEW PROJECT"),
          href: "/runaway-2150",
        },
      ],
    },
    announcements: [
      {
        id: "rango-bravo-release",
        projectTitle: s("The Rango Bravo"),
        headline: s('Premiere of "Una Más al Kilo"'),
        releaseInfo: s("Release today at 1:00 PM"),
        description: s(
          "A satirical automotive short exploring vehicle failure statistics without targeting any specific brand."
        ),
        videoUrl:
          "https://www.youtube.com/embed/Qpo0jaKJuyE?si=Cotw9RY43-nVQQbw",
        href: "https://youtu.be/Y1UbzPnqJPo",
        cta: s("WATCH VIDEO"),
      },
    ],
    items: [
      {
        id: "ai-youtube",
        eyebrow: s("AI / Experiment"),
        title: s("Anatomía al límite"),
        description: s(
          "Experimental AI short exploring perception, exhaustion and distorted reality."
        ),
        href: "#",
        cta: s("Open detail"),
        linkKind: "internal",
        accent: "from-zinc-100/12 via-black/10 to-cyan-300/14",
        thumbnail: {
          src: "/images/img1.jpeg",
          alt: "Anatomía al límite featured image",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0",
        },
        detail: {
          subtitle: s("AI / Experiment"),
          description: s(
            "Experimental AI short exploring perception, exhaustion and distorted reality."
          ),
          videoUrl: "https://youtu.be/ZFUxo69JAAM",
        },
      },
      {
        id: "ai-tooling",
        eyebrow: s("AI / Short"),
        title: s("The Therians"),
        description: s(
          "Short-form AI concept piece built around character experimentation and narrative atmosphere."
        ),
        href: "#",
        cta: s("Open detail"),
        linkKind: "internal",
        accent: "from-white/18 via-transparent to-cyan-300/10",
        thumbnail: {
          src: "/images/img2.png",
          alt: "The Therians featured image",
        },
        media: {
          type: "poster",
          src: "/images/img2.png",
          alt: "The Therians poster",
        },
        detail: {
          subtitle: s("AI / Short"),
          description: s(
            "Short-form AI concept piece built around character experimentation and narrative atmosphere."
          ),
          videoUrl: "https://youtube.com/shorts/CuoNMN1EhIk",
        },
      },
      {
        id: "ai-reel",
        eyebrow: s("AI / Character Project"),
        title: s("Don Bigotes"),
        description: s(
          "Character-driven AI project with a cinematic editorial presentation."
        ),
        href: "#",
        cta: s("Open detail"),
        linkKind: "internal",
        accent: "from-sky-400/16 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "Don Bigotes featured image",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "Don Bigotes poster",
        },
        detail: {
          subtitle: s("AI / Character Project"),
          description: s(
            "Character-driven AI project with a cinematic editorial presentation."
          ),
          videoUrl: "https://www.youtube.com/embed/kYFfOKDUtRc?rel=0",
          embedTitle: s("Don Bigotes"),
        },
      },
    ],
  },

  "3d": {
    label: "3D",
    title: s("Automotive renders and cinematic 3D shots"),
    description: s(
      "High-fidelity forms, product studies and cinematic visual development presented as a premium interactive gallery."
    ),
    items: [
      {
        id: "3d-youtube",
        eyebrow: s("YouTube / Featured"),
        title: s("Cinematic 3D Presentation"),
        description: s(
          "A featured space for render stories, lighting studies and hero asset presentation."
        ),
        href: "https://www.youtube.com/@TheAssetHero",
        cta: s("Open gallery"),
        linkKind: "external",
        accent: "from-zinc-200/14 via-white/7 to-amber-200/12",
        thumbnail: {
          src: "/images/img2.png",
          alt: "3D presentation thumbnail",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/tgbNymZ7vqY?rel=0",
        },
      },
      {
        id: "3d-materials",
        eyebrow: s("Lookdev / Preview"),
        title: s("Material Study Launcher"),
        description: s(
          "Surfaces, paint systems and lighting direction arranged as a cinematic configurator."
        ),
        href: "/#profile-journal",
        cta: s("Open preview"),
        linkKind: "internal",
        accent: "from-white/18 via-transparent to-zinc-300/10",
        thumbnail: {
          src: "/images/img3.jpeg",
          alt: "Material study thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img3.jpeg",
          alt: "Material study poster",
        },
      },
      {
        id: "3d-reel",
        eyebrow: s("Reel / Motion"),
        title: s("Automotive Render Reel"),
        description: s(
          "A polished reel focused on hard-surface detail, camera rhythm and premium render presentation."
        ),
        href: "/videos/3d1.mp4",
        cta: s("Watch reel"),
        linkKind: "reel",
        accent: "from-amber-200/12 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "Automotive reel thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "Automotive reel poster",
        },
      },
    ],
  },

  vfx: {
    label: "VFX",
    title: s("Niagara, simulations and compositing launchers"),
    description: s(
      "Realtime effects, layered motion and compositing previews built for a lightweight cinematic hub."
    ),
    items: [
      {
        id: "vfx-youtube",
        eyebrow: s("YouTube / Featured"),
        title: s("Realtime Effects Breakdown"),
        description: s(
          "A featured area for Niagara timing, simulation studies and realtime VFX breakdowns."
        ),
        href: "https://www.youtube.com/@TheAssetHero",
        cta: s("View feed"),
        linkKind: "external",
        accent: "from-fuchsia-300/18 via-white/8 to-cyan-300/18",
        thumbnail: {
          src: "/images/img1.jpeg",
          alt: "VFX breakdown thumbnail",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/jNQXAC9IVRw?rel=0",
        },
      },
      {
        id: "vfx-preview",
        eyebrow: s("Toolkit / Preview"),
        title: s("FX Pack Preview"),
        description: s(
          "Reusable effect systems, cinematic atmosphere and implementation details for premium shots."
        ),
        href: "/#profile-journal",
        cta: s("Open preview"),
        linkKind: "internal",
        accent: "from-white/18 via-transparent to-fuchsia-300/10",
        thumbnail: {
          src: "/images/img4.jpeg",
          alt: "FX pack thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img4.jpeg",
          alt: "FX pack poster",
        },
      },
      {
        id: "vfx-reel",
        eyebrow: s("Reel / Motion"),
        title: s("Niagara Sequence Reel"),
        description: s(
          "A cinematic reel for layered effects, atmospheric motion and high-impact realtime timing."
        ),
        href: "/videos/vfx1.mp4",
        cta: s("Watch reel"),
        linkKind: "reel",
        accent: "from-cyan-300/12 via-transparent to-white/8",
        thumbnail: {
          src: "/images/img3.jpeg",
          alt: "Niagara sequence thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img3.jpeg",
          alt: "Niagara sequence poster",
        },
      },
    ],
  },

  dev: {
    label: "DEV",
    title: s("Unreal systems, plugins and technical tools"),
    description: s(
      "Systems thinking, plugin launches and technical tools presented through a premium studio-style interface."
    ),
    items: [
      {
        id: "dev-youtube",
        eyebrow: s("YouTube / Featured"),
        title: s("Technical Toolchain Broadcast"),
        description: s(
          "A featured embed for Unreal systems, workflow tools and technical demos presented with cinematic clarity."
        ),
        href: "https://www.youtube.com/@TheAssetHero",
        cta: s("Open channel"),
        linkKind: "external",
        accent: "from-emerald-300/16 via-white/8 to-cyan-300/16",
        thumbnail: {
          src: "/images/img2.png",
          alt: "Technical toolchain thumbnail",
        },
        media: {
          type: "youtube",
          embedUrl: "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0",
        },
      },
      {
        id: "dev-plugin",
        eyebrow: s("Plugins / Preview"),
        title: s("Plugin Showcase"),
        description: s(
          "A clean surface for Unreal tools, plugin systems and future technical releases."
        ),
        href: "/#profile-journal",
        cta: s("Open section"),
        linkKind: "internal",
        accent: "from-white/18 via-transparent to-emerald-300/10",
        thumbnail: {
          src: "/images/img1.jpeg",
          alt: "Plugin showcase thumbnail",
        },
        media: {
          type: "poster",
          src: "/images/img1.jpeg",
          alt: "Plugin showcase poster",
        },
      },
      {
        id: "dev-reel",
        eyebrow: s("Reel / Motion"),
        title: s("Systems Reel"),
        description: s(
          "A technical reel for workflow systems, creator-focused tools and interface-led engineering."
        ),
        href: "/videos/dev1.mp4",
        cta: s("Watch reel"),
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
