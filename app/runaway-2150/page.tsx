import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ReactNode } from "react";

import ContactTrigger from "@/components/ContactTrigger";

export const metadata: Metadata = {
  title: "Runaway 2150 | The Asset Hero",
  description:
    "Original sci-fi cinematic project produced by The Asset Hero.",
};

type Locale = "en" | "es";

type ImageCard = {
  title: string;
  eyebrow?: string;
  description: string;
  image: string;
  alt: string;
  meta?: string;
};

type TextCard = {
  title: string;
  description: string;
};

type PipelineCard = TextCard & {
  tools: string;
};

type PageContent = {
  backToHome: string;
  languageLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    ctaTrailer: string;
    ctaDossier: string;
    ctaContact: string;
  };
  documents: string[];
  sections: {
    what: TextCard;
    story: TextCard & {
      bullets: string[];
    };
    value: TextCard & {
      bullets: string[];
    };
    worldsTitle: string;
    worldsDescription: string;
    charactersTitle: string;
    charactersDescription: string;
    stonesTitle: string;
    stonesDescription: string;
    enemiesTitle: string;
    enemiesDescription: string;
    pipelineTitle: string;
    pipelineDescription: string;
    deliverablesTitle: string;
    deliverablesDescription: string;
    capabilityTitle: string;
    capabilityDescription: string;
    statusTitle: string;
  };
  worlds: ImageCard[];
  characters: ImageCard[];
  stones: ImageCard[];
  enemies: ImageCard[];
  pipeline: PipelineCard[];
  deliverables: string[];
  status: TextCard[];
};

const content: Record<Locale, PageContent> = {
  en: {
    backToHome: "BACK TO HOME",
    languageLabel: "Language",
    hero: {
      eyebrow: "THE ASSET HERO ORIGINAL",
      title: "RUNAWAY 2150",
      subtitle:
        "An original multi-planet sci-fi cinematic project produced by The Asset Hero.",
      description:
        "Runaway 2150 is built around the recovery of the Stones, connected worlds, and a war that cannot be allowed to begin.",
      ctaTrailer: "WATCH TRAILER",
      ctaDossier: "VIEW DOSSIER",
      ctaContact: "CONTACT",
    },
    documents: ["DOWNLOAD PROJECT BIBLE", "DOWNLOAD DOSSIER", "VIEW PDF"],
    sections: {
      what: {
        title: "What is Runaway 2150?",
        description:
          "Runaway 2150 is an original sci-fi IP and cinematic production case study. It combines character-driven storytelling, AI-assisted image and video development, 3D direction, sound design, editing and an interactive web dossier into one scalable universe.",
      },
      story: {
        title: "Story Engine",
        description:
          "The conflict begins with one mistake: Danniel sold the Stones separately, scattering them across planets, factions and black-market networks.",
        bullets: [
          "Danniel and Alexis must recover the Stones before the system collapses.",
          "Every Stone creates a new route, enemy, world and visual set piece.",
          "The mission is personal, but the consequence is planetary war.",
        ],
      },
      value: {
        title: "Why it matters",
        description:
          "The project is designed as original IP with a strong visual identity and a production model that can scale into multiple formats.",
        bullets: [
          "Original cinematic universe with episodic potential.",
          "AI-assisted production pipeline for trailers, shorts and visual tests.",
          "Character-driven structure built for pitch decks, web dossiers and social releases.",
          "A clear visual identity spanning cities, planets, robots, characters and artifacts.",
        ],
      },
      worldsTitle: "Connected Worlds",
      worldsDescription:
        "Each world is designed as a production environment with its own mood, visual language and narrative function.",
      charactersTitle: "Main Characters",
      charactersDescription:
        "The story is led by two protagonists connected by urgency, guilt and the recovery mission.",
      stonesTitle: "The Stones",
      stonesDescription:
        "The Stones are the core of the conflict. If they are not recovered, the coming war cannot be stopped.",
      enemiesTitle: "Enemies + Factions",
      enemiesDescription:
        "The project includes a network of factions and forces that expand the world beyond a single hero story.",
      pipelineTitle: "Production Pipeline",
      pipelineDescription:
        "Runaway 2150 is built as a hybrid cinematic workflow that combines writing, AI, 3D, editing, sound and web presentation.",
      deliverablesTitle: "Project Deliverables",
      deliverablesDescription:
        "The same universe can generate multiple client-facing and audience-facing assets.",
      capabilityTitle: "Why The Asset Hero can produce it",
      capabilityDescription:
        "The Asset Hero combines 3D production, visual direction, AI-assisted filmmaking, editorial web presentation and cinematic systems thinking. This makes Runaway 2150 more than a concept: it is a working production framework for building original sci-fi content.",
      statusTitle: "Production Status",
    },
    worlds: [
      {
        eyebrow: "CITY / OCCUPATION",
        title: "CA Ciudad Azteca",
        description:
          "A futuristic Latin city under robotic occupation, shaped by surveillance, vertical power and street-level pressure.",
        meta: "Visual mood: brutalist, dense, controlled.",
        image: "/images/runaway/ca-ciudad-azteca.png",
        alt: "CA Ciudad Azteca city view",
      },
      {
        eyebrow: "PLANET / BLACK MARKET",
        title: "The Purple World",
        description:
          "A volatile territory connected to secret routes, brokers and dangerous exchanges around the Stones.",
        meta: "Narrative role: risk, trade and deception.",
        image: "/images/runaway/purple-world.png",
        alt: "The Purple World",
      },
      {
        eyebrow: "WORLD / ESCAPE ROUTE",
        title: "The Caribbean World",
        description:
          "A saturated coastal world used for contrast, movement and interplanetary passage.",
        meta: "Narrative role: transit, refuge and pursuit.",
        image: "/images/runaway/caribbean-world.png",
        alt: "The Caribbean World",
      },
    ],
    characters: [
      {
        eyebrow: "PROTAGONIST",
        title: "Danniel",
        description:
          "Red-haired protagonist responsible for selling the Stones separately, scattering them across planets, factions and black-market networks. He matters because the mission is also his attempt to repair the damage he caused.",
        image: "/images/runaway/danniel.png",
        alt: "Danniel character portrait",
      },
      {
        eyebrow: "TACTICAL LEAD",
        title: "Alexis",
        description:
          "Dressed in black, tactical and cautious, Alexis is central to the recovery mission. She brings focus, control and survival instinct to a search that could ignite a war.",
        image: "/images/runaway/alexis.png",
        alt: "Alexis character portrait",
      },
    ],
    stones: [
      {
        title: "Blue Stone",
        description:
          "A key artifact tied to energy balance and one of the most coveted objects in the system.",
        image: "/images/runaway/stones.png",
        alt: "Blue Stone artifact",
      },
      {
        title: "Purple Stone",
        description:
          "Connected to unstable territories, secret ownership and high-risk black-market routes.",
        image: "/images/runaway/purple-world02.png",
        alt: "Purple Stone visual",
      },
      {
        title: "Gold Stone",
        description:
          "A symbol of strategic power and the artifact most likely to trigger the larger war.",
        image: "/images/runaway/overview.png",
        alt: "Gold Stone visual",
      },
    ],
    enemies: [
      {
        title: "Combat Robots",
        description:
          "Humanoid tactical units used for containment, occupation and strategic elimination.",
        image: "/images/runaway/combat-robots.png",
        alt: "Humanoid combat robots",
      },
      {
        title: "CA Control Directorate",
        description:
          "The authority structure behind surveillance, order and occupation inside CA Ciudad Azteca.",
        image: "/images/runaway/occupation-control.png",
        alt: "Occupation control system",
      },
      {
        title: "Nuevo Mundo Brokers",
        description:
          "Black-market intermediaries who move relics, information and access between worlds.",
        image: "/images/runaway/nuevo-mundo-brokers.png",
        alt: "Nuevo Mundo Brokers",
      },
      {
        title: "Stone Collectors",
        description:
          "Private buyers and faction agents competing to acquire the Stones before anyone else.",
        image: "/images/runaway/RA-09.png",
        alt: "Stone Collectors",
      },
      {
        title: "Transit Guilds",
        description:
          "Route controllers who decide who can move between cities, planets and hidden markets.",
        image: "/images/runaway/RA-12.png",
        alt: "Transit Guilds",
      },
      {
        title: "War Interests",
        description:
          "Political and military forces that benefit if the Stones remain separated and conflict begins.",
        image: "/images/runaway/RA-15.png",
        alt: "War Interests",
      },
    ],
    pipeline: [
      {
        title: "Writing and Story Development",
        tools: "Narrative structure",
        description:
          "Story engine, character arcs, faction logic and episodic worldbuilding.",
      },
      {
        title: "Visual Development",
        tools: "AI + 3D direction",
        description:
          "Mood frames, character looks, world identity and cinematic art direction.",
      },
      {
        title: "AI Video Generation",
        tools: "Shot prototyping",
        description:
          "Generated sequences, camera language, action beats and visual continuity tests.",
      },
      {
        title: "Editing",
        tools: "Final assembly",
        description:
          "Rhythm, pacing, structure and cinematic polish for trailers and short-form releases.",
      },
      {
        title: "Voice / Music / Foley",
        tools: "Sound identity",
        description:
          "Voice, atmosphere, music and sound cues developed for emotional clarity.",
      },
      {
        title: "Web Presentation",
        tools: "Interactive dossier",
        description:
          "A client-ready project page, pitch structure and visual bible presentation.",
      },
    ],
    deliverables: [
      "Trailers",
      "Short films",
      "Episodic content",
      "Character teasers",
      "Pitch deck",
      "Visual bible",
      "Social media releases",
      "Music videos",
      "Interactive web dossier",
    ],
    status: [
      {
        title: "Status",
        description: "In development",
      },
      {
        title: "Season One",
        description: "Planned for 2026",
      },
      {
        title: "Format",
        description: "Cinematic AI-assisted sci-fi series / episodic project",
      },
    ],
  },
  es: {
    backToHome: "VOLVER AL INICIO",
    languageLabel: "Idioma",
    hero: {
      eyebrow: "THE ASSET HERO ORIGINAL",
      title: "RUNAWAY 2150",
      subtitle:
        "Un proyecto cinematográfico sci-fi multiplanetario producido por The Asset Hero.",
      description:
        "Runaway 2150 gira alrededor de la recuperación de las Stones, mundos conectados y una guerra que no debe comenzar.",
      ctaTrailer: "VER TRAILER",
      ctaDossier: "VER DOSSIER",
      ctaContact: "CONTACTO",
    },
    documents: ["DOWNLOAD PROJECT BIBLE", "DOWNLOAD DOSSIER", "VIEW PDF"],
    sections: {
      what: {
        title: "¿Qué es Runaway 2150?",
        description:
          "Runaway 2150 es una IP sci-fi original y un caso de producción cinematográfica. Combina narrativa de personajes, desarrollo visual asistido por IA, dirección 3D, sonido, edición y dossier web interactivo.",
      },
      story: {
        title: "Motor narrativo",
        description:
          "El conflicto comienza con un error: Danniel vendió las Stones por separado, dispersándolas entre planetas, facciones y redes de mercado negro.",
        bullets: [
          "Danniel y Alexis deben recuperar las Stones antes de que el sistema colapse.",
          "Cada Stone abre una nueva ruta, enemigo, mundo y set piece visual.",
          "La misión es personal, pero la consecuencia es una guerra planetaria.",
        ],
      },
      value: {
        title: "Por qué importa",
        description:
          "El proyecto está diseñado como IP original con identidad visual fuerte y un modelo de producción escalable.",
        bullets: [
          "Universo cinematográfico original con potencial episódico.",
          "Pipeline asistido por IA para trailers, cortos y pruebas visuales.",
          "Estructura de personajes lista para pitch decks, dossiers web y lanzamientos sociales.",
          "Identidad visual clara entre ciudades, planetas, robots, personajes y artefactos.",
        ],
      },
      worldsTitle: "Mundos conectados",
      worldsDescription:
        "Cada mundo funciona como entorno de producción con mood, lenguaje visual y función narrativa propios.",
      charactersTitle: "Personajes principales",
      charactersDescription:
        "La historia sigue a dos protagonistas unidos por urgencia, culpa y misión.",
      stonesTitle: "The Stones",
      stonesDescription:
        "Las Stones son el núcleo del conflicto. Si no se recuperan, la guerra no podrá detenerse.",
      enemiesTitle: "Enemigos y facciones",
      enemiesDescription:
        "El proyecto incluye una red de fuerzas que expanden el mundo más allá de una historia individual.",
      pipelineTitle: "Pipeline de producción",
      pipelineDescription:
        "Runaway 2150 funciona como flujo híbrido de escritura, IA, 3D, edición, sonido y presentación web.",
      deliverablesTitle: "Entregables del proyecto",
      deliverablesDescription:
        "El mismo universo puede generar múltiples assets para clientes y audiencias.",
      capabilityTitle: "Por qué The Asset Hero puede producirlo",
      capabilityDescription:
        "The Asset Hero combina producción 3D, dirección visual, filmmaking asistido por IA, presentación web editorial y pensamiento de sistemas cinematográficos.",
      statusTitle: "Estado de producción",
    },
    worlds: [
      {
        eyebrow: "CIUDAD / OCUPACIÓN",
        title: "CA Ciudad Azteca",
        description:
          "Ciudad latina futurista bajo ocupación robótica, marcada por vigilancia, poder vertical y tensión callejera.",
        meta: "Mood visual: brutalista, denso, controlado.",
        image: "/images/runaway/ca-ciudad-azteca.png",
        alt: "CA Ciudad Azteca",
      },
      {
        eyebrow: "PLANETA / MERCADO NEGRO",
        title: "The Purple World",
        description:
          "Territorio volátil conectado con rutas secretas, brokers y transacciones peligrosas alrededor de las Stones.",
        meta: "Rol narrativo: riesgo, intercambio y engaño.",
        image: "/images/runaway/purple-world.png",
        alt: "The Purple World",
      },
      {
        eyebrow: "MUNDO / RUTA DE ESCAPE",
        title: "The Caribbean World",
        description:
          "Mundo costero saturado, usado para contraste, movimiento y paso interplanetario.",
        meta: "Rol narrativo: tránsito, refugio y persecución.",
        image: "/images/runaway/caribbean-world.png",
        alt: "The Caribbean World",
      },
    ],
    characters: [
      {
        eyebrow: "PROTAGONISTA",
        title: "Danniel",
        description:
          "Protagonista pelirrojo responsable de vender las Stones por separado. Su misión también es reparar el daño que provocó.",
        image: "/images/runaway/danniel.png",
        alt: "Danniel",
      },
      {
        eyebrow: "LÍDER TÁCTICA",
        title: "Alexis",
        description:
          "Vestida de negro, táctica y cautelosa, Alexis es central para la recuperación de las Stones.",
        image: "/images/runaway/alexis.png",
        alt: "Alexis",
      },
    ],
    stones: [
      {
        title: "Blue Stone",
        description:
          "Artefacto ligado al balance energético y una de las piezas más codiciadas del sistema.",
        image: "/images/runaway/stones.png",
        alt: "Blue Stone",
      },
      {
        title: "Purple Stone",
        description:
          "Conectada con territorios inestables, propiedad secreta y rutas de mercado negro.",
        image: "/images/runaway/purple-world02.png",
        alt: "Purple Stone",
      },
      {
        title: "Gold Stone",
        description:
          "Símbolo de poder estratégico y posible detonante de la guerra mayor.",
        image: "/images/runaway/overview.png",
        alt: "Gold Stone",
      },
    ],
    enemies: [
      {
        title: "Combat Robots",
        description:
          "Unidades tácticas humanoides usadas para contención, ocupación y eliminación estratégica.",
        image: "/images/runaway/combat-robots.png",
        alt: "Combat Robots",
      },
      {
        title: "CA Control Directorate",
        description:
          "Estructura de autoridad detrás de la vigilancia, el orden y la ocupación de CA Ciudad Azteca.",
        image: "/images/runaway/occupation-control.png",
        alt: "CA Control Directorate",
      },
      {
        title: "Nuevo Mundo Brokers",
        description:
          "Intermediarios del mercado negro que mueven reliquias, información y acceso entre mundos.",
        image: "/images/runaway/nuevo-mundo-brokers.png",
        alt: "Nuevo Mundo Brokers",
      },
      {
        title: "Stone Collectors",
        description:
          "Compradores privados y agentes de facciones que compiten por adquirir las Stones.",
        image: "/images/runaway/RA-09.png",
        alt: "Stone Collectors",
      },
      {
        title: "Transit Guilds",
        description:
          "Controladores de rutas entre ciudades, planetas y mercados ocultos.",
        image: "/images/runaway/RA-12.png",
        alt: "Transit Guilds",
      },
      {
        title: "War Interests",
        description:
          "Fuerzas políticas y militares que se benefician si las Stones permanecen separadas.",
        image: "/images/runaway/RA-15.png",
        alt: "War Interests",
      },
    ],
    pipeline: [
      {
        title: "Writing and Story Development",
        tools: "Narrative structure",
        description: "Motor narrativo, personajes, facciones y continuidad.",
      },
      {
        title: "Visual Development",
        tools: "AI + 3D direction",
        description: "Mood frames, identidad visual y dirección de arte.",
      },
      {
        title: "AI Video Generation",
        tools: "Shot prototyping",
        description: "Secuencias generadas, cámara, acción y pruebas de continuidad.",
      },
      {
        title: "Editing",
        tools: "Final assembly",
        description: "Ritmo, estructura y acabado cinematográfico.",
      },
      {
        title: "Voice / Music / Foley",
        tools: "Sound identity",
        description: "Voz, atmósfera, música y sonido para claridad emocional.",
      },
      {
        title: "Web Presentation",
        tools: "Interactive dossier",
        description: "Página de proyecto, estructura de pitch y visual bible.",
      },
    ],
    deliverables: [
      "Trailers",
      "Short films",
      "Episodic content",
      "Character teasers",
      "Pitch deck",
      "Visual bible",
      "Social media releases",
      "Music videos",
      "Interactive web dossier",
    ],
    status: [
      { title: "Status", description: "In development" },
      { title: "Season One", description: "Planned for 2026" },
      {
        title: "Format",
        description: "Cinematic AI-assisted sci-fi series / episodic project",
      },
    ],
  },
};

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="text-[0.68rem] uppercase tracking-[0.32em] text-cyan-100/50">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-white/56 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Panel({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] shadow-[0_0_28px_rgba(255,255,255,0.04)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.09),transparent_35%),radial-gradient(circle_at_85%_18%,rgba(125,211,252,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

function ImagePanel({
  src,
  alt,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <Panel className={className}>
      <div className="relative h-full min-h-[260px]">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    </Panel>
  );
}

function TextPanel({
  title,
  children,
  eyebrow,
}: {
  title: string;
  children: ReactNode;
  eyebrow?: string;
}) {
  return (
    <Panel className="p-5 sm:p-6 lg:p-7">
      {eyebrow ? (
        <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/38">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-xl font-semibold text-white sm:text-2xl">
        {title}
      </h3>
      <div className="mt-4 text-sm leading-7 text-white/58 sm:text-base">
        {children}
      </div>
    </Panel>
  );
}

function ImageStoryCard({ item }: { item: ImageCard }) {
  return (
    <Panel>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
          className="object-cover transition duration-500 hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/22 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          {item.eyebrow ? (
            <p className="text-[0.58rem] uppercase tracking-[0.26em] text-white/48">
              {item.eyebrow}
            </p>
          ) : null}
          <h3 className="mt-2 text-2xl font-semibold text-white">
            {item.title}
          </h3>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-sm leading-7 text-white/58">{item.description}</p>
        {item.meta ? (
          <p className="mt-4 text-[0.68rem] uppercase tracking-[0.22em] text-cyan-100/48">
            {item.meta}
          </p>
        ) : null}
      </div>
    </Panel>
  );
}

function ActionButton({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={actionButtonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={actionButtonClassName}
    >
      {children}
    </a>
  );
}

const actionButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/80 transition hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-white/[0.08] hover:text-white";

function LanguageToggle({ language }: { language: Locale }) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.26em] transition";

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 shadow-[0_0_18px_rgba(255,255,255,0.04)]">
      <Link
        href="/runaway-2150?lang=en"
        className={`${baseClass} ${
          language === "en"
            ? "border-white/14 bg-white/[0.08] text-white"
            : "border-transparent text-white/52 hover:border-white/10 hover:text-white/78"
        }`}
      >
        EN
      </Link>
      <Link
        href="/runaway-2150?lang=es"
        className={`${baseClass} ${
          language === "es"
            ? "border-white/14 bg-white/[0.08] text-white"
            : "border-transparent text-white/52 hover:border-white/10 hover:text-white/78"
        }`}
      >
        ES
      </Link>
    </div>
  );
}

export default async function Runaway2150Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const language: Locale = params.lang === "es" ? "es" : "en";
  const page = content[language];

  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.08),transparent_24%),radial-gradient(circle_at_78%_16%,rgba(125,211,252,0.08),transparent_18%),linear-gradient(180deg,#030303_0%,#080808_48%,#020202_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:88px_88px]" />

      <section className="mx-auto flex w-full max-w-[1360px] flex-col gap-12 px-5 pb-24 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pb-32">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/62 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            {page.backToHome}
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-[0.62rem] uppercase tracking-[0.24em] text-white/38">
              {page.languageLabel}
            </span>
            <LanguageToggle language={language} />
          </div>
        </div>

        <section className="space-y-7">
          <div className="max-w-5xl">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-cyan-100/50">
              {page.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-[3.2rem] font-semibold text-white sm:text-[4.5rem] lg:text-[6rem] lg:leading-[0.94]">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-4xl text-xl leading-8 text-white/82 sm:text-2xl sm:leading-9">
              {page.hero.subtitle}
            </p>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/56 sm:text-base">
              {page.hero.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ActionButton href="#trailer">{page.hero.ctaTrailer}</ActionButton>
              <ActionButton href="#dossier">{page.hero.ctaDossier}</ActionButton>
              <ContactTrigger className={actionButtonClassName}>
                {page.hero.ctaContact}
              </ContactTrigger>
            </div>
          </div>

          <Panel className="overflow-hidden" id="trailer">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/StHnkr4zFgs?rel=0"
                title="Runaway 2150"
                className="h-full w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Panel>

          <div className="grid gap-4 md:grid-cols-3" id="dossier">
            {page.documents.map((label) => (
              <Panel key={label} className="p-4">
                <ActionButton href="#">{label}</ActionButton>
              </Panel>
            ))}
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.9fr)] xl:items-stretch">
          <div className="space-y-6">
            <TextPanel title={page.sections.what.title}>
              {page.sections.what.description}
            </TextPanel>
            <TextPanel title={page.sections.story.title}>
              <p>{page.sections.story.description}</p>
              <ul className="mt-4 space-y-2">
                {page.sections.story.bullets.map((item) => (
                  <li key={item} className="border-l border-cyan-100/24 pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </TextPanel>
          </div>

          <ImagePanel
            src="/images/runaway/hero.png"
            alt="Runaway 2150 hero artwork"
            className="min-h-[460px]"
            sizes="(max-width: 1280px) 100vw, 620px"
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)]">
          <TextPanel title={page.sections.value.title}>
            <p>{page.sections.value.description}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {page.sections.value.bullets.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-4 text-white/66"
                >
                  {item}
                </div>
              ))}
            </div>
          </TextPanel>
          <ImagePanel
            src="/images/runaway/overview.png"
            alt="Runaway 2150 project overview"
            className="min-h-[340px]"
            sizes="(max-width: 1280px) 100vw, 460px"
          />
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="WORLDBUILDING"
            title={page.sections.worldsTitle}
            description={page.sections.worldsDescription}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {page.worlds.map((world) => (
              <ImageStoryCard key={world.title} item={world} />
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <ImagePanel
              src="/images/runaway/street-level.png"
              alt="CA Ciudad Azteca street level"
              className="min-h-[260px]"
            />
            <ImagePanel
              src="/images/runaway/daily-life.png"
              alt="CA Ciudad Azteca daily life"
              className="min-h-[260px]"
            />
            <ImagePanel
              src="/images/runaway/scale.png"
              alt="CA Ciudad Azteca scale"
              className="min-h-[260px]"
            />
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="CHARACTERS"
            title={page.sections.charactersTitle}
            description={page.sections.charactersDescription}
          />
          <ImagePanel
            src="/images/runaway/characters-wide.jpeg"
            alt="Runaway 2150 character ensemble"
            className="min-h-[340px] sm:min-h-[430px]"
            sizes="100vw"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {page.characters.map((character) => (
              <article key={character.title} className="space-y-4">
                <ImageStoryCard item={character} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <ImagePanel
                    src={
                      character.title === "Danniel"
                        ? "/images/runaway/danniel-action.png"
                        : "/images/runaway/alexis-action.png"
                    }
                    alt={`${character.title} action scene`}
                    className="min-h-[220px]"
                  />
                  <ImagePanel
                    src={
                      character.title === "Danniel"
                        ? "/images/runaway/RA-03.png"
                        : "/images/runaway/alexis-action02.jpeg"
                    }
                    alt={`${character.title} secondary scene`}
                    className="min-h-[220px]"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="ARTIFACT SYSTEM"
            title={page.sections.stonesTitle}
            description={page.sections.stonesDescription}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {page.stones.map((stone) => (
              <ImageStoryCard key={stone.title} item={stone} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="CONFLICT NETWORK"
            title={page.sections.enemiesTitle}
            description={page.sections.enemiesDescription}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.enemies.map((enemy) => (
              <ImageStoryCard key={enemy.title} item={enemy} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="PRODUCTION CASE STUDY"
            title={page.sections.pipelineTitle}
            description={page.sections.pipelineDescription}
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.pipeline.map((step) => (
              <TextPanel key={step.title} title={step.title} eyebrow={step.tools}>
                {step.description}
              </TextPanel>
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.85fr)]">
          <TextPanel title={page.sections.capabilityTitle}>
            {page.sections.capabilityDescription}
          </TextPanel>
          <ImagePanel
            src="/images/runaway/RA-16.png"
            alt="Runaway 2150 production capability visual"
            className="min-h-[320px]"
            sizes="(max-width: 1280px) 100vw, 520px"
          />
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="DELIVERABLES"
            title={page.sections.deliverablesTitle}
            description={page.sections.deliverablesDescription}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.deliverables.map((deliverable) => (
              <Panel key={deliverable} className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/74">
                  {deliverable}
                </p>
              </Panel>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeader eyebrow="STATUS" title={page.sections.statusTitle} />
          <div className="grid gap-4 md:grid-cols-3">
            {page.status.map((item) => (
              <TextPanel key={item.title} title={item.title}>
                {item.description}
              </TextPanel>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
