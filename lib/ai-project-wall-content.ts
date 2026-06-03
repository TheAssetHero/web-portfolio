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
    shortDescription: s("Serie sci-fi original construida con IA y mundos conectados."),
    description: s(
      "La primera temporada de Runaway 2150 llegará en 2026: una producción cinematográfica de The Asset Hero construida con IA, mundos conectados y una guerra que no debe comenzar."
    ),
    preview: {
      kind: "embed",
      src: "https://www.youtube.com/embed/StHnkr4zFgs?rel=0",
      title: "Runaway 2150 preview",
    },
    modalVideoUrl: "https://www.youtube.com/embed/StHnkr4zFgs?rel=0",
    actions: [
      {
        label: s("VER PROYECTO"),
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
    shortDescription: s("Primer comercial en LATAM completamente en IA."),
    description: s(
      "Primer comercial en LATAM completamente en IA. Voz, imagen y audio generados con inteligencia artificial."
    ),
    preview: {
      kind: "embed",
      src: "https://player.vimeo.com/video/1190250981?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "The Echelon preview",
    },
    modalVideoUrl:
      "https://player.vimeo.com/video/1190250981?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    modalEmbedTitle: s("The Echelon ES"),
    actions: [
      {
        label: s("VER PROYECTO"),
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
    shortDescription: s("Visualización automotriz con performance cinematográfica."),
    description: s(
      "Pieza audiovisual desarrollada con inteligencia artificial, enfocada en visualización automotriz, performance y estética cinematográfica."
    ),
    preview: {
      kind: "embed",
      src: "https://www.youtube.com/embed/AaqX9k6b0Gw?rel=0",
      title: "BMW M2 Racing 2026 preview",
    },
    modalVideoUrl: "https://www.youtube.com/embed/AaqX9k6b0Gw?rel=0",
    actions: [
      {
        label: s("VER PROYECTO"),
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
    shortDescription: s("Proyecto de personaje con presentación editorial."),
    description: s(
      "Proyecto de personaje presentado como pieza destacada dentro del muro de producción AI."
    ),
    preview: {
      kind: "embed",
      src: "https://www.youtube.com/embed/kYFfOKDUtRc?rel=0",
      title: "Don Bigotes preview",
    },
    modalVideoUrl: "https://www.youtube.com/embed/kYFfOKDUtRc?rel=0",
    actions: [
      {
        label: s("VER VIDEO"),
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
    shortDescription: s("Experimento audiovisual dentro de AI Production."),
    description: s(
      "Pieza experimental desarrollada dentro del área de AI Production."
    ),
    preview: {
      kind: "image",
      src: "/images/img1.jpeg",
      alt: "Preview de Anatomía al límite",
    },
    modalVideoUrl: "https://youtu.be/ZFUxo69JAAM",
  },
  {
    id: "the-therians",
    enabled: true,
    size: "small",
    type: s("AI / SHORT"),
    title: s("The Therians"),
    shortDescription: s("Concepto AI de formato corto y tono narrativo."),
    description: s(
      "Tarjeta editorial de formato pequeño para conceptos AI, experimentos visuales y lanzamientos narrativos dentro del portafolio."
    ),
    preview: {
      kind: "image",
      src: "/images/img2.png",
      alt: "Preview de The Therians",
    },
    modalVideoUrl: "https://youtube.com/shorts/CuoNMN1EhIk",
  },
  {
    id: "the-rango-bravo",
    enabled: true,
    size: "small",
    type: s("AI / RELEASE"),
    title: s("The Rango Bravo"),
    shortDescription: s('Estreno de "Una Más al Kilo".'),
    description: s(
      'Estreno de "Una Más al Kilo". Cortometraje que muestra las estadísticas de fallas de vehículos extranjeros en el año 2025, sin tirarle a nadie en específico.'
    ),
    preview: {
      kind: "image",
      src: "/images/img4.jpeg",
      alt: "Preview de The Rango Bravo",
    },
    modalVideoUrl:
      "https://www.youtube.com/embed/Qpo0jaKJuyE?si=Cotw9RY43-nVQQbw",
    actions: [
      {
        label: s("VER VIDEO"),
        href: "https://youtu.be/Y1UbzPnqJPo",
        kind: "external",
      },
    ],
  },
];
