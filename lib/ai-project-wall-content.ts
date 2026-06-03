import { LocalizedText } from "@/lib/localization";

const s = (text: string): LocalizedText => ({ en: text, es: text });

export type AIProjectTileSize = "small" | "medium" | "large" | "wide";

export type AIProjectAction = {
  label: LocalizedText;
  href: string;
  kind: "internal" | "external";
};

export type AIProjectPreview =
  | {
      kind: "embed";
      src: string;
      title: string;
    }
  | {
      kind: "image";
      src: string;
      alt: string;
    };

export type AIProjectWallItem = {
  id: string;
  enabled: boolean;
  size: AIProjectTileSize;
  type: LocalizedText;
  title: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  preview: AIProjectPreview;
  modalVideoUrl: string;
  modalEmbedTitle?: LocalizedText;
  actions?: AIProjectAction[];
};

export const aiProjectWallIntro = {
  title: s("AI PRODUCTION WALL"),
  subtitle: s(
    "Selected experiments, commercials, cinematic tests and original projects created through AI-assisted production."
  ),
};

export const aiProjectWallItems: AIProjectWallItem[] = [
  {
    id: "runaway-2150",
    enabled: true,
    size: "wide",
    type: s("AI / ORIGINAL SERIES"),
    title: s("Runaway 2150"),
    shortDescription: s("An original sci-fi series built with AI-assisted production."),
    description: s(
      "An original sci-fi series developed through AI-assisted cinematic production, connected worlds and a war that cannot begin."
    ),
    preview: {
      kind: "embed",
      src: "https://www.youtube.com/embed/StHnkr4zFgs?rel=0",
      title: "Runaway 2150 preview",
    },
    modalVideoUrl: "https://www.youtube.com/embed/StHnkr4zFgs?rel=0",
    actions: [
      {
        label: s("VIEW PROJECT"),
        href: "/runaway-2150",
        kind: "internal",
      },
    ],
  },
  {
    id: "the-echelon",
    enabled: true,
    size: "large",
    type: s("AI / CASE STUDY"),
    title: s("The Echelon"),
    shortDescription: s("The first fully AI-produced commercial project in LATAM."),
    description: s(
      "The first fully AI-produced commercial project in LATAM. Voice, image and audio generated with artificial intelligence."
    ),
    preview: {
      kind: "embed",
      src: "https://player.vimeo.com/video/1190250981?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "The Echelon preview",
    },
    modalVideoUrl:
      "https://player.vimeo.com/video/1190250981?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    modalEmbedTitle: s("The Echelon"),
    actions: [
      {
        label: s("VIEW PROJECT"),
        href: "https://www.behance.net/gallery/245574455/The-Echelon-AI-Project",
        kind: "external",
      },
    ],
  },
  {
    id: "bmw-m2-racing-2026",
    enabled: true,
    size: "medium",
    type: s("AI / AUTOMOTIVE"),
    title: s("BMW M2 Racing 2026"),
    shortDescription: s("AI-assisted automotive film with high-end motion."),
    description: s(
      "AI-assisted automotive film focused on performance, cinematic motion and high-end vehicle visualization."
    ),
    preview: {
      kind: "embed",
      src: "https://www.youtube.com/embed/AaqX9k6b0Gw?rel=0",
      title: "BMW M2 Racing 2026 preview",
    },
    modalVideoUrl: "https://www.youtube.com/embed/AaqX9k6b0Gw?rel=0",
    actions: [
      {
        label: s("VIEW PROJECT"),
        href: "https://www.behance.net/emmanuelblancas",
        kind: "external",
      },
    ],
  },
  {
    id: "don-bigotes",
    enabled: true,
    size: "wide",
    type: s("AI / CHARACTER PROJECT"),
    title: s("Don Bigotes"),
    shortDescription: s("Character-driven AI project with a cinematic editorial presentation."),
    description: s(
      "Character-driven AI project with a cinematic editorial presentation."
    ),
    preview: {
      kind: "embed",
      src: "https://www.youtube.com/embed/kYFfOKDUtRc?rel=0",
      title: "Don Bigotes preview",
    },
    modalVideoUrl: "https://www.youtube.com/embed/kYFfOKDUtRc?rel=0",
    actions: [
      {
        label: s("WATCH VIDEO"),
        href: "https://youtu.be/kYFfOKDUtRc",
        kind: "external",
      },
    ],
  },
  {
    id: "anatomia-al-limite",
    enabled: true,
    size: "small",
    type: s("AI / EXPERIMENT"),
    title: s("Anatomía al límite"),
    shortDescription: s("Experimental AI short exploring distorted reality."),
    description: s(
      "Experimental AI short exploring perception, exhaustion and distorted reality."
    ),
    preview: {
      kind: "image",
      src: "/images/img1.jpeg",
      alt: "Anatomía al límite preview",
    },
    modalVideoUrl: "https://youtu.be/ZFUxo69JAAM",
  },
  {
    id: "the-therians",
    enabled: true,
    size: "small",
    type: s("AI / SHORT"),
    title: s("The Therians"),
    shortDescription: s("Short-form AI concept piece with narrative atmosphere."),
    description: s(
      "Short-form AI concept piece built around character experimentation and narrative atmosphere."
    ),
    preview: {
      kind: "image",
      src: "/images/img2.png",
      alt: "The Therians preview",
    },
    modalVideoUrl: "https://youtube.com/shorts/CuoNMN1EhIk",
  },
  {
    id: "the-rango-bravo",
    enabled: true,
    size: "small",
    type: s("AI / RELEASE"),
    title: s("The Rango Bravo"),
    shortDescription: s("A satirical automotive short."),
    description: s(
      "A satirical automotive short exploring vehicle failure statistics without targeting any specific brand."
    ),
    preview: {
      kind: "image",
      src: "/images/img4.jpeg",
      alt: "The Rango Bravo preview",
    },
    modalVideoUrl:
      "https://www.youtube.com/embed/Qpo0jaKJuyE?si=Cotw9RY43-nVQQbw",
    actions: [
      {
        label: s("WATCH VIDEO"),
        href: "https://youtu.be/Y1UbzPnqJPo",
        kind: "external",
      },
    ],
  },
];
