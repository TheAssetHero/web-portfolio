import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Runaway 2150 | The Asset Hero",
  description: "Proyecto cinematográfico sci-fi producido por The Asset Hero.",
};

type Locale = "es" | "en";

type SectionText = {
  eyebrow: string;
  title: string;
  description?: string;
};

type WorldCard = {
  title: string;
  description: string;
};

type CharacterCard = {
  title: string;
  description: string;
};

type EnemyCard = {
  title: string;
  description: string;
};

type RunawayContent = {
  backToHome: string;
  languageLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    mainDescription: string;
    storyContext: string;
    narrativeNote: string;
  };
  projectOverview: SectionText & {
    paragraphs: string[];
  };
  connectedWorlds: SectionText & {
    worldCards: WorldCard[];
  };
  ciudadAzteca: SectionText;
  characterSystem: SectionText & {
    danniel: CharacterCard;
    alexis: CharacterCard;
  };
  stones: SectionText & {
    paragraphs: string[];
  };
  enemies: SectionText & {
    cards: EnemyCard[];
  };
  pipeline: SectionText & {
    body: string;
  };
  status: {
    title: string;
    value: string;
  };
};

const content: Record<Locale, RunawayContent> = {
  es: {
    backToHome: "<- VOLVER AL INICIO",
    languageLabel: "Idioma",
    hero: {
      eyebrow: "THE ASSET HERO ORIGINAL",
      title: "RUNAWAY 2150",
      subtitle: "Serie cinematográfica producida por The Asset Hero.",
      mainDescription:
        "Un proyecto cinematográfico sci-fi multiplanetario construido alrededor de la recuperación de las Stones, la culpa de un error y la guerra que no puede comenzar.",
      storyContext:
        "Runaway 2150 ocurre en un universo donde múltiples planetas, facciones y ciudades conviven bajo tensión. Danniel y Alexis deben recuperar las Stones antes de que una guerra inevitable comience.",
      narrativeNote:
        "Danniel fue responsable de vender las Stones por separado, dispersándolas por distintos planetas, facciones y redes de mercado negro. Ahora la misión se convierte en una búsqueda casi interminable para recuperarlas antes de que sea demasiado tarde.",
    },
    projectOverview: {
      eyebrow: "RESUMEN DEL PROYECTO",
      title: "Producción sci-fi con visión editorial",
      description:
        "Runaway 2150 combina dirección visual, worldbuilding y herramientas generativas para construir una serie con identidad cinematográfica propia.",
      paragraphs: [
        "La propuesta mezcla producción asistida por IA, narrativa serial y diseño de universo para levantar una obra donde imagen, voz, sonido, edición y atmósfera operan como un solo sistema creativo.",
        "El proyecto funciona como un dossier vivo: una biblia visual en expansión donde cada planeta, facción, personaje y objeto clave puede crecer con nuevos episodios, piezas promocionales y materiales editoriales.",
      ],
    },
    connectedWorlds: {
      eyebrow: "MUNDOS CONECTADOS",
      title: "Planetas, rutas y nodos de conflicto",
      description:
        "El mapa de Runaway 2150 está sostenido por corredores estratégicos, centros urbanos densos y mundos con identidades visuales contrastantes.",
      worldCards: [
        {
          title: "Nuevo Mundo",
          description:
            "Territorio en expansión donde convergen tecnología, tensión política y rutas clave para el movimiento de recursos.",
        },
        {
          title: "Caribe Azul",
          description:
            "Zona estratégica conectada a tránsitos marítimos, facciones periféricas y enclaves de intercambio clandestino.",
        },
        {
          title: "Ciudad Azteca",
          description:
            "Centro urbano denso y simbólico donde distintas fuerzas disputan poder, memoria y control territorial.",
        },
      ],
    },
    ciudadAzteca: {
      eyebrow: "CA CIUDAD AZTECA",
      title: "Escala urbana y vida cotidiana",
      description:
        "La ciudad funciona como uno de los focos más densos del universo de Runaway 2150: tránsito, rutina, presión política y verticalidad.",
    },
    characterSystem: {
      eyebrow: "SISTEMA DE PERSONAJES",
      title: "Danniel y Alexis",
      description:
        "Dos protagonistas unidos por la urgencia de recuperar las Stones antes de que el conflicto escale sin retorno.",
      danniel: {
        title: "Danniel",
        description:
          "Protagonista pelirrojo vinculado directamente a la venta y dispersión de las Stones. Su pasado activa el conflicto y también la urgencia de corregirlo.",
      },
      alexis: {
        title: "Alexis",
        description:
          "Protagonista de vestimenta negra, táctico, enfocado y central en la misión de recuperación. Su lectura estratégica sostiene el avance de la búsqueda.",
      },
    },
    stones: {
      eyebrow: "LAS STONES",
      title: "El núcleo del conflicto",
      description:
        "Las Stones definen el equilibrio de poder entre facciones, mercados y territorios. Su recuperación decide el destino de la temporada.",
      paragraphs: [
        "Las Stones son el centro de la crisis. Su dispersión detonó el desequilibrio entre facciones, mercados y territorios en todo el sistema.",
        "Si no son recuperadas a tiempo, la guerra que se aproxima no podrá detenerse y el universo de Runaway 2150 entrará en un punto de no retorno.",
      ],
    },
    enemies: {
      eyebrow: "ENEMIGOS Y FACCIONES",
      title: "Fuerzas de ocupación y presión",
      description:
        "La amenaza no proviene de un solo frente: control territorial, robots de combate y brokers de poder presionan el universo narrativo desde distintos ángulos.",
      cards: [
        {
          title: "Combat Robots",
          description:
            "Presencia de fuerza, choque y control táctico para zonas de alta fricción dentro del conflicto.",
        },
        {
          title: "Occupation Control",
          description:
            "Estructuras de vigilancia y dominio que empujan a las ciudades y facciones hacia un estado de tensión permanente.",
        },
        {
          title: "Nuevo Mundo Brokers",
          description:
            "Redes de mercado negro, intermediación y circulación de poder que complican la recuperación de las Stones.",
        },
      ],
    },
    pipeline: {
      eyebrow: "PIPELINE DE PRODUCCIÓN",
      title: "Un dossier vivo en expansión",
      description:
        "La serie se plantea como una mezcla de sci-fi, biblia visual y experiencia editorial preparada para crecer por temporadas.",
      body: "Runaway 2150 está pensado como una plataforma narrativa modular: personajes, planetas, facciones, materiales promocionales y piezas audiovisuales pueden sumarse sin romper la coherencia del universo.",
    },
    status: {
      title: "ESTATUS",
      value: "En desarrollo / Temporada uno planeada para 2026",
    },
  },
  en: {
    backToHome: "<- BACK TO HOME",
    languageLabel: "Language",
    hero: {
      eyebrow: "THE ASSET HERO ORIGINAL",
      title: "RUNAWAY 2150",
      subtitle: "A cinematic series produced by The Asset Hero.",
      mainDescription:
        "A multiplanet sci-fi cinematic project built around the recovery of the Stones, the guilt of a mistake, and a war that cannot begin.",
      storyContext:
        "Runaway 2150 unfolds in a universe where multiple planets, factions, and cities coexist under pressure. Danniel and Alexis must recover the Stones before an inevitable war begins.",
      narrativeNote:
        "Danniel was responsible for selling the Stones separately, scattering them across planets, factions, and black-market networks. Now the mission becomes an almost endless search to recover them before it is too late.",
    },
    projectOverview: {
      eyebrow: "PROJECT OVERVIEW",
      title: "Sci-fi production with an editorial spine",
      description:
        "Runaway 2150 blends visual direction, worldbuilding, and generative tools to shape a series with a distinct cinematic identity.",
      paragraphs: [
        "The project combines AI-assisted production, serialized storytelling, and universe design to build a work where image, voice, sound, editing, and atmosphere operate as a single creative system.",
        "It functions as a living dossier: an expandable visual bible where every planet, faction, character, and key object can scale into new episodes, promotional assets, and editorial materials.",
      ],
    },
    connectedWorlds: {
      eyebrow: "CONNECTED WORLDS",
      title: "Planets, routes, and conflict nodes",
      description:
        "The map of Runaway 2150 is held together by strategic corridors, dense urban centers, and worlds with sharply contrasted visual identities.",
      worldCards: [
        {
          title: "Nuevo Mundo",
          description:
            "An expanding territory where technology, political tension, and key resource routes converge.",
        },
        {
          title: "Caribe Azul",
          description:
            "A strategic zone tied to maritime traffic, peripheral factions, and clandestine exchange enclaves.",
        },
        {
          title: "Ciudad Azteca",
          description:
            "A dense symbolic urban center where competing forces fight for power, memory, and territorial control.",
        },
      ],
    },
    ciudadAzteca: {
      eyebrow: "CA CIUDAD AZTECA",
      title: "Urban scale and daily life",
      description:
        "The city acts as one of the densest focal points in the Runaway 2150 universe: transit, routine, political pressure, and verticality.",
    },
    characterSystem: {
      eyebrow: "CHARACTER SYSTEM",
      title: "Danniel and Alexis",
      description:
        "Two protagonists bound by the urgency of recovering the Stones before the conflict escalates beyond return.",
      danniel: {
        title: "Danniel",
        description:
          "A red-haired protagonist directly tied to the sale and scattering of the Stones. His past triggers the conflict and the urgency to correct it.",
      },
      alexis: {
        title: "Alexis",
        description:
          "A black-clad protagonist: tactical, focused, and central to the recovery mission. His strategic reading sustains the search.",
      },
    },
    stones: {
      eyebrow: "THE STONES",
      title: "The core of the conflict",
      description:
        "The Stones define the balance of power between factions, markets, and territories. Their recovery decides the fate of the season.",
      paragraphs: [
        "The Stones are the center of the crisis. Their dispersion triggered the imbalance between factions, markets, and territories across the system.",
        "If they are not recovered in time, the coming war cannot be stopped and the universe of Runaway 2150 will enter a point of no return.",
      ],
    },
    enemies: {
      eyebrow: "ENEMIES + FACTIONS",
      title: "Occupying forces and pressure systems",
      description:
        "The threat does not come from a single front: territorial control, combat robots, and power brokers pressure the narrative universe from different angles.",
      cards: [
        {
          title: "Combat Robots",
          description:
            "Force, impact, and tactical control units designed for high-friction zones inside the conflict.",
        },
        {
          title: "Occupation Control",
          description:
            "Surveillance and dominance structures pushing cities and factions into a permanent state of tension.",
        },
        {
          title: "Nuevo Mundo Brokers",
          description:
            "Black-market networks, intermediaries, and power circulation channels that complicate the recovery of the Stones.",
        },
      ],
    },
    pipeline: {
      eyebrow: "PRODUCTION PIPELINE",
      title: "A living dossier designed to expand",
      description:
        "The series is conceived as a hybrid of sci-fi, visual bible, and editorial experience ready to scale across seasons.",
      body: "Runaway 2150 is structured as a modular narrative platform: characters, planets, factions, promotional materials, and audiovisual pieces can expand without breaking the coherence of the universe.",
    },
    status: {
      title: "STATUS",
      value: "In development / Season One planned for 2026",
    },
  },
};

function SectionLabel({
  eyebrow,
  title,
  description,
}: SectionText) {
  return (
    <div className="max-w-3xl">
      <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/38">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2.2rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-white/54 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5 shadow-[0_0_24px_rgba(255,255,255,0.04)] sm:p-6">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/35 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-6 h-px w-24 bg-gradient-to-r from-amber-200/35 to-transparent" />
      <div className="relative z-10">
        <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-white/74">
          {title}
        </h3>
        <div className="mt-4 text-sm leading-7 text-white/58 sm:text-base">
          {children}
        </div>
      </div>
    </article>
  );
}

function MediaPanel({
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
    <div
      className={`relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-black/70 shadow-[0_0_26px_rgba(74,222,128,0.08)] ${className}`}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

function LanguageToggle({ language }: { language: Locale }) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.26em] transition";

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 shadow-[0_0_18px_rgba(255,255,255,0.04)]">
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
    </div>
  );
}

export default async function Runaway2150Page(
  props: PageProps<"/runaway-2150">
) {
  const searchParams = await props.searchParams;
  const language: Locale = searchParams?.lang === "en" ? "en" : "es";
  const page = content[language];

  return (
    <main className="min-h-screen bg-[#040404] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.09),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(251,191,36,0.07),transparent_24%),linear-gradient(180deg,#040404_0%,#070707_48%,#030303_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:88px_88px]" />

      <section className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10 lg:px-12 lg:pb-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/62 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            {page.backToHome}
          </Link>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="text-[0.62rem] uppercase tracking-[0.24em] text-white/38">
              {page.languageLabel}
            </span>
            <LanguageToggle language={language} />
          </div>
        </div>

        <header className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 shadow-[0_0_34px_rgba(255,255,255,0.04)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.09),transparent_42%),radial-gradient(circle_at_78%_18%,rgba(251,191,36,0.08),transparent_26%)]" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/38 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-8 h-px w-36 bg-gradient-to-r from-amber-200/40 to-transparent" />

          <div className="relative z-10 grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.92fr)] xl:items-start">
            <div className="min-w-0">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/42">
                {page.hero.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-[2.8rem] font-semibold tracking-[-0.05em] text-white sm:text-[3.6rem] lg:text-[4.6rem] lg:leading-[0.96]">
                {page.hero.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/76 sm:text-[1.2rem]">
                {page.hero.subtitle}
              </p>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/56 sm:text-base">
                {page.hero.mainDescription}
              </p>
              <p className="mt-8 max-w-3xl text-sm leading-7 text-white/58 sm:text-base">
                {page.hero.storyContext}
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/48 sm:text-base">
                {page.hero.narrativeNote}
              </p>
            </div>

            <div className="space-y-4">
              <MediaPanel
                src="/images/runaway/hero.png"
                alt="Runaway 2150 hero artwork"
                className="min-h-[280px] sm:min-h-[360px]"
                sizes="(max-width: 1280px) 100vw, 560px"
              />
              <div className="overflow-hidden rounded-[1.55rem] border border-white/10 bg-black/70 shadow-[0_0_26px_rgba(74,222,128,0.08)]">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/sLEJaIPUmeU?si=rizr7-X0Tn0vIo_4"
                    title="Runaway 2150"
                    className="h-full w-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)]">
          <InfoCard title={page.projectOverview.eyebrow}>
            {page.projectOverview.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 first:mt-0">
                {paragraph}
              </p>
            ))}
          </InfoCard>

          <MediaPanel
            src="/images/runaway/overview.png"
            alt="Runaway 2150 project overview"
            className="min-h-[280px]"
            sizes="(max-width: 1280px) 100vw, 420px"
          />
        </section>

        <section className="space-y-5">
          <SectionLabel
            eyebrow={page.connectedWorlds.eyebrow}
            title={page.connectedWorlds.title}
            description={page.connectedWorlds.description}
          />

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <MediaPanel
              src="/images/runaway/ca-ciudad-azteca.png"
              alt="CA Ciudad Azteca"
              className="min-h-[320px] lg:min-h-[420px]"
              sizes="(max-width: 1280px) 100vw, 760px"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <MediaPanel
                src="/images/runaway/purple-world.png"
                alt="The Purple World"
                className="min-h-[190px]"
              />
              <MediaPanel
                src="/images/runaway/purple-world02.png"
                alt="The Purple World 02"
                className="min-h-[190px]"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)_minmax(0,0.95fr)]">
            <InfoCard title={page.connectedWorlds.worldCards[0].title}>
              {page.connectedWorlds.worldCards[0].description}
            </InfoCard>
            <InfoCard title={page.connectedWorlds.worldCards[1].title}>
              {page.connectedWorlds.worldCards[1].description}
            </InfoCard>
            <MediaPanel
              src="/images/runaway/caribbean-world.png"
              alt="The Caribbean World"
              className="min-h-[220px]"
              sizes="(max-width: 1280px) 100vw, 360px"
            />
          </div>
        </section>

        <section className="space-y-5">
          <SectionLabel
            eyebrow={page.ciudadAzteca.eyebrow}
            title={page.ciudadAzteca.title}
            description={page.ciudadAzteca.description}
          />

          <div className="grid gap-4 md:grid-cols-3">
            <MediaPanel
              src="/images/runaway/street-level.png"
              alt="Street level view"
              className="min-h-[240px]"
            />
            <MediaPanel
              src="/images/runaway/daily-life.png"
              alt="Daily life in Ciudad Azteca"
              className="min-h-[240px]"
            />
            <MediaPanel
              src="/images/runaway/scale.png"
              alt="Architectural scale"
              className="min-h-[240px]"
            />
          </div>
        </section>

        <section className="space-y-5">
          <SectionLabel
            eyebrow={page.characterSystem.eyebrow}
            title={page.characterSystem.title}
            description={page.characterSystem.description}
          />

          <MediaPanel
            src="/images/runaway/characters-wide.jpeg"
            alt="Runaway 2150 character ensemble"
            className="min-h-[280px] sm:min-h-[360px]"
            sizes="100vw"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="space-y-4">
              <MediaPanel
                src="/images/runaway/danniel.png"
                alt="Danniel portrait"
                className="min-h-[280px]"
              />
              <MediaPanel
                src="/images/runaway/danniel-action.png"
                alt="Danniel action scene"
                className="min-h-[240px]"
              />
              <InfoCard title={page.characterSystem.danniel.title}>
                {page.characterSystem.danniel.description}
              </InfoCard>
            </article>

            <article className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <MediaPanel
                  src="/images/runaway/alexis.png"
                  alt="Alexis portrait"
                  className="min-h-[220px]"
                />
                <MediaPanel
                  src="/images/runaway/alexis-action.png"
                  alt="Alexis action scene"
                  className="min-h-[220px]"
                />
              </div>
              <MediaPanel
                src="/images/runaway/alexis-action02.jpeg"
                alt="Alexis action scene 02"
                className="min-h-[260px]"
              />
              <InfoCard title={page.characterSystem.alexis.title}>
                {page.characterSystem.alexis.description}
              </InfoCard>
            </article>
          </div>
        </section>

        <section className="space-y-5">
          <SectionLabel
            eyebrow={page.stones.eyebrow}
            title={page.stones.title}
            description={page.stones.description}
          />

          <div className="grid gap-6 xl:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)]">
            <MediaPanel
              src="/images/runaway/stones.png"
              alt="The Stones"
              className="min-h-[320px]"
              sizes="(max-width: 1280px) 100vw, 420px"
            />
            <InfoCard title={page.stones.eyebrow}>
              {page.stones.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 first:mt-0">
                  {paragraph}
                </p>
              ))}
            </InfoCard>
          </div>
        </section>

        <section className="space-y-5">
          <SectionLabel
            eyebrow={page.enemies.eyebrow}
            title={page.enemies.title}
            description={page.enemies.description}
          />

          <div className="grid gap-4 md:grid-cols-3">
            <article className="space-y-3">
              <MediaPanel
                src="/images/runaway/combat-robots.png"
                alt="Combat robots"
                className="min-h-[240px]"
              />
              <InfoCard title={page.enemies.cards[0].title}>
                {page.enemies.cards[0].description}
              </InfoCard>
            </article>
            <article className="space-y-3">
              <MediaPanel
                src="/images/runaway/occupation-control.png"
                alt="Occupation control"
                className="min-h-[240px]"
              />
              <InfoCard title={page.enemies.cards[1].title}>
                {page.enemies.cards[1].description}
              </InfoCard>
            </article>
            <article className="space-y-3">
              <MediaPanel
                src="/images/runaway/nuevo-mundo-brokers.png"
                alt="Nuevo Mundo brokers"
                className="min-h-[240px]"
              />
              <InfoCard title={page.enemies.cards[2].title}>
                {page.enemies.cards[2].description}
              </InfoCard>
            </article>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)]">
          <InfoCard title={page.pipeline.eyebrow}>
            <p>{page.pipeline.description}</p>
            <p className="mt-4">{page.pipeline.body}</p>
          </InfoCard>
          <InfoCard title={page.status.title}>
            <p className="text-white/78">{page.status.value}</p>
          </InfoCard>
        </section>
      </section>
    </main>
  );
}
