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

type InfoRow = {
  label: string;
  value: string;
};

type PipelineCard = {
  title: string;
  tools: string;
  description: string;
};

type WorldNote = {
  title: string;
  description: string;
};

type CharacterCard = {
  title: string;
  description: string;
};

type StoneCard = {
  title: string;
  description: string;
};

type ResourceButton = {
  label: string;
  href: string;
  external?: boolean;
};

type RunawayContent = {
  backToHome: string;
  languageLabel: string;
  festivalKit: SectionText;
  hero: {
    eyebrow: string;
    logoLabel: string;
    title: string;
    subtitle: string;
    description: string;
    buttons: {
      watchFilm: string;
      pressKit: string;
      productionJournal: string;
    };
  };
  synopsis: SectionText & {
    body: string;
  };
  festivalInfo: SectionText & {
    rows: InfoRow[];
  };
  pipeline: SectionText & {
    cards: PipelineCard[];
  };
  worldbuilding: SectionText & {
    notes: WorldNote[];
  };
  characters: SectionText & {
    danniel: CharacterCard;
    alexis: CharacterCard;
  };
  stones: SectionText & {
    cards: StoneCard[];
  };
  directorBio: SectionText & {
    body: string;
  };
  resources: SectionText & {
    buttons: ResourceButton[];
  };
};

const content: Record<Locale, RunawayContent> = {
  es: {
    backToHome: "<- VOLVER AL INICIO",
    languageLabel: "Idioma",
    festivalKit: {
      eyebrow: "OFFICIAL FESTIVAL KIT",
      title: "WAIFF Submission Package",
      description:
        "Hub editorial oficial para festival, dossier de producción y presentación cinematográfica de Runaway 2150.",
    },
    hero: {
      eyebrow: "THE ASSET HERO ORIGINAL",
      logoLabel: "Official Festival Submission",
      title: "RUNAWAY 2150",
      subtitle: "Serie cinematográfica producida por The Asset Hero.",
      description:
        "Una producción cinematográfica sci-fi construida con IA, mundos conectados y una guerra que no debe comenzar.",
      buttons: {
        watchFilm: "Watch Film",
        pressKit: "Download Press Kit",
        productionJournal: "Production Journal",
      },
    },
    synopsis: {
      eyebrow: "SINOPSIS",
      title: "Short synopsis",
      body: "Runaway 2150 is a dystopian sci-fi short film set in CA Ciudad Azteca, a futuristic Latin city under robotic occupation. Danniel and Alexis must recover a series of powerful Stones scattered across planets, black markets, and hostile territories before an unstoppable war begins.",
    },
    festivalInfo: {
      eyebrow: "FESTIVAL INFORMATION",
      title: "Estado de festival y ficha del proyecto",
      rows: [
        {
          label: "Festival Status",
          value: "Submitted to WAIFF — World AI Film Festival",
        },
        {
          label: "Category",
          value: "AI Short Film / Sci-Fi / Dystopian Future",
        },
        {
          label: "Project Type",
          value: "AI-assisted cinematic short film",
        },
        {
          label: "Year",
          value: "2026",
        },
        {
          label: "Creator / Director",
          value: "Emmanuel Blancas",
        },
      ],
    },
    pipeline: {
      eyebrow: "AI PRODUCTION PIPELINE",
      title: "Pipeline creativo y ensamblaje del film",
      description:
        "Una cadena de producción híbrida que mezcla escritura, worldbuilding, generación visual, video, música y postproducción.",
      cards: [
        {
          title: "Writing & Worldbuilding",
          tools: "ChatGPT",
          description:
            "Construcción de lore, estructura narrativa, expansión de facciones, personajes y continuidad del universo.",
        },
        {
          title: "Visual Development",
          tools: "Nano Banana, Grok Image, ComfyUI",
          description:
            "Diseño visual, mood frames, exploración de atmósferas, identidades de mundos y pruebas de dirección de arte.",
        },
        {
          title: "Video Generation",
          tools: "Veo, Grok Video, Wan 2.2",
          description:
            "Secuencias cinematográficas, prototipos de shots y material visual generado para el ensamblaje del corto.",
        },
        {
          title: "Music & Sound",
          tools: "Suno.com AI Music",
          description:
            "Piezas musicales, identidad sonora, atmósfera y apoyo emocional para el montaje final.",
        },
        {
          title: "Editing & Final Assembly",
          tools: "Placeholder tools",
          description:
            "Montaje, estructura final, revisión narrativa, ritmo visual y cierre de la experiencia editorial del proyecto.",
        },
      ],
    },
    worldbuilding: {
      eyebrow: "WORLDBUILDING DOSSIER",
      title: "CA Ciudad Azteca, ocupación y guerra inminente",
      description:
        "La película se mueve entre ciudades futuristas, rutas clandestinas, facciones enfrentadas y reliquias de poder capaces de detonar una guerra.",
      notes: [
        {
          title: "CA Ciudad Azteca",
          description:
            "Una ciudad latina futurista marcada por el control vertical, la vigilancia y una tensión social constante.",
        },
        {
          title: "Robotic Occupation",
          description:
            "La ocupación robótica impone orden, presencia militar y restricciones sobre la vida cotidiana.",
        },
        {
          title: "The Stones",
          description:
            "Reliquias de alto poder que concentran el conflicto principal y el equilibrio entre facciones.",
        },
        {
          title: "Black Markets",
          description:
            "Redes de intercambio clandestino donde circulan piezas, rutas, mercenarios y secretos del sistema.",
        },
        {
          title: "Factions",
          description:
            "Grupos con agendas opuestas que buscan controlar las Stones antes de que el conflicto global estalle.",
        },
        {
          title: "Fiscalía Central",
          description:
            "Una institución de poder y vigilancia que encarna el peso político del orden establecido.",
        },
        {
          title: "Humanoid Combat Robots",
          description:
            "Fuerzas tácticas utilizadas para contención, ocupación y eliminación de amenazas estratégicas.",
        },
        {
          title: "Alien Merchants",
          description:
            "Intermediarios y comerciantes que alimentan las rutas de mercado negro entre mundos y facciones.",
        },
        {
          title: "Aurora Spaceship",
          description:
            "Vehículo clave dentro del universo narrativo, asociado a movilidad, escape y conexión entre territorios.",
        },
        {
          title: "The Coming War",
          description:
            "Un conflicto a gran escala que todavía puede evitarse, pero solo si las Stones se recuperan a tiempo.",
        },
      ],
    },
    characters: {
      eyebrow: "CHARACTER SYSTEM",
      title: "Danniel y Alexis",
      description:
        "Dos protagonistas unidos por la culpa, la urgencia y la necesidad de recuperar lo que fue dispersado por error.",
      danniel: {
        title: "Danniel",
        description:
          "Red-haired protagonist, responsible for selling the Stones separately, which scattered them across different planets, factions, and black-market networks.",
      },
      alexis: {
        title: "Alexis",
        description:
          "Dressed in black, tactical, cautious, and central to the recovery mission.",
      },
    },
    stones: {
      eyebrow: "THE STONES",
      title: "Tres fuerzas visuales del conflicto",
      description:
        "Cada Stone representa una pieza crítica dentro del sistema de poder que sostiene la guerra por venir.",
      cards: [
        {
          title: "Blue Stone",
          description:
            "Clave para el equilibrio energético y una de las piezas más codiciadas del sistema.",
        },
        {
          title: "Purple Stone",
          description:
            "Asociada a territorios ambiguos, secretos de mercado negro y rutas de alto riesgo.",
        },
        {
          title: "Gold Stone",
          description:
            "Símbolo de poder absoluto, valor estratégico y detonante del conflicto mayor.",
        },
      ],
    },
    directorBio: {
      eyebrow: "DIRECTOR BIO",
      title: "Emmanuel Blancas",
      body: "Emmanuel Blancas is a 3D artist and AI-assisted filmmaker with experience in visual production for film, television, commercials, social media, virtual sets, and cinematic 3D workflows. His background includes hard-surface modeling, texturing, lighting, rendering, VFX, Unreal Engine, 3ds Max, post-production tools, and emerging AI production pipelines. Through projects like Runaway 2150, he combines worldbuilding, cinematic visual direction, science fiction, and AI-assisted storytelling to create ambitious independent films with a strong visual identity.",
    },
    resources: {
      eyebrow: "DOWNLOADS / RESOURCES",
      title: "Materiales de presentación y consulta",
      description:
        "Paquete de recursos para seguimiento del proyecto, presentación editorial y revisión de festival.",
      buttons: [
        {
          label: "Download Production Journal PDF",
          href: "#",
        },
        {
          label: "Download Press Kit",
          href: "#",
        },
        {
          label: "Download Poster",
          href: "#",
        },
        {
          label: "View Credits",
          href: "#credits",
        },
        {
          label: "Watch on YouTube",
          href: "https://youtu.be/StHnkr4zFgs",
          external: true,
        },
      ],
    },
  },
  en: {
    backToHome: "<- BACK TO HOME",
    languageLabel: "Language",
    festivalKit: {
      eyebrow: "OFFICIAL FESTIVAL KIT",
      title: "WAIFF Submission Package",
      description:
        "Official editorial hub for festival submission, production dossier, and cinematic presentation of Runaway 2150.",
    },
    hero: {
      eyebrow: "THE ASSET HERO ORIGINAL",
      logoLabel: "Official Festival Submission",
      title: "RUNAWAY 2150",
      subtitle: "A cinematic series produced by The Asset Hero.",
      description:
        "A sci-fi cinematic production built with AI, connected worlds, and a war that must never begin.",
      buttons: {
        watchFilm: "Watch Film",
        pressKit: "Download Press Kit",
        productionJournal: "Production Journal",
      },
    },
    synopsis: {
      eyebrow: "SYNOPSIS",
      title: "Short synopsis",
      body: "Runaway 2150 is a dystopian sci-fi short film set in CA Ciudad Azteca, a futuristic Latin city under robotic occupation. Danniel and Alexis must recover a series of powerful Stones scattered across planets, black markets, and hostile territories before an unstoppable war begins.",
    },
    festivalInfo: {
      eyebrow: "FESTIVAL INFORMATION",
      title: "Festival status and project profile",
      rows: [
        {
          label: "Festival Status",
          value: "Submitted to WAIFF — World AI Film Festival",
        },
        {
          label: "Category",
          value: "AI Short Film / Sci-Fi / Dystopian Future",
        },
        {
          label: "Project Type",
          value: "AI-assisted cinematic short film",
        },
        {
          label: "Year",
          value: "2026",
        },
        {
          label: "Creator / Director",
          value: "Emmanuel Blancas",
        },
      ],
    },
    pipeline: {
      eyebrow: "AI PRODUCTION PIPELINE",
      title: "Creative pipeline and final assembly",
      description:
        "A hybrid production chain combining writing, worldbuilding, visual generation, video, music, and post-production.",
      cards: [
        {
          title: "Writing & Worldbuilding",
          tools: "ChatGPT",
          description:
            "Lore design, narrative structure, faction expansion, character systems, and universe continuity.",
        },
        {
          title: "Visual Development",
          tools: "Nano Banana, Grok Image, ComfyUI",
          description:
            "Visual look development, mood frames, atmosphere exploration, world identity, and art direction testing.",
        },
        {
          title: "Video Generation",
          tools: "Veo, Grok Video, Wan 2.2",
          description:
            "Cinematic sequences, shot prototypes, and generated visual material for the short film assembly.",
        },
        {
          title: "Music & Sound",
          tools: "Suno.com AI Music",
          description:
            "Musical identity, atmosphere, emotional support, and sound direction for the final cut.",
        },
        {
          title: "Editing & Final Assembly",
          tools: "Placeholder tools",
          description:
            "Editorial structure, final pacing, narrative clarity, visual rhythm, and polish for the submission package.",
        },
      ],
    },
    worldbuilding: {
      eyebrow: "WORLDBUILDING DOSSIER",
      title: "CA Ciudad Azteca, occupation, and the coming war",
      description:
        "The film moves through futuristic cities, clandestine routes, hostile factions, and relics powerful enough to trigger a planetary conflict.",
      notes: [
        {
          title: "CA Ciudad Azteca",
          description:
            "A futuristic Latin city defined by vertical control, surveillance, and constant civic pressure.",
        },
        {
          title: "Robotic Occupation",
          description:
            "Robotic occupation enforces order, military presence, and restrictions over everyday life.",
        },
        {
          title: "The Stones",
          description:
            "High-power relics that concentrate the central conflict and the balance between factions.",
        },
        {
          title: "Black Markets",
          description:
            "Clandestine exchange networks where routes, relics, mercenaries, and secrets circulate.",
        },
        {
          title: "Factions",
          description:
            "Opposing groups seeking control of the Stones before a global conflict ignites.",
        },
        {
          title: "Fiscalía Central",
          description:
            "A power structure of surveillance and authority representing the political weight of the system.",
        },
        {
          title: "Humanoid Combat Robots",
          description:
            "Tactical robotic forces used for containment, occupation, and strategic elimination.",
        },
        {
          title: "Alien Merchants",
          description:
            "Intermediaries feeding the black-market economy between planets and political blocs.",
        },
        {
          title: "Aurora Spaceship",
          description:
            "A key vehicle within the narrative universe, linked to mobility, escape, and interplanetary connection.",
        },
        {
          title: "The Coming War",
          description:
            "A large-scale conflict that can still be prevented, but only if the Stones are recovered in time.",
        },
      ],
    },
    characters: {
      eyebrow: "CHARACTER SYSTEM",
      title: "Danniel and Alexis",
      description:
        "Two protagonists bound by guilt, urgency, and the need to recover what was scattered by mistake.",
      danniel: {
        title: "Danniel",
        description:
          "Red-haired protagonist, responsible for selling the Stones separately, which scattered them across different planets, factions, and black-market networks.",
      },
      alexis: {
        title: "Alexis",
        description:
          "Dressed in black, tactical, cautious, and central to the recovery mission.",
      },
    },
    stones: {
      eyebrow: "THE STONES",
      title: "Three visual forces driving the conflict",
      description:
        "Each Stone represents a critical layer inside the power system that sustains the war ahead.",
      cards: [
        {
          title: "Blue Stone",
          description:
            "A key piece for energy balance and one of the most coveted relics in the system.",
        },
        {
          title: "Purple Stone",
          description:
            "Linked to ambiguous territories, black-market secrets, and high-risk transport routes.",
        },
        {
          title: "Gold Stone",
          description:
            "A symbol of absolute power, strategic value, and the trigger of the larger conflict.",
        },
      ],
    },
    directorBio: {
      eyebrow: "DIRECTOR BIO",
      title: "Emmanuel Blancas",
      body: "Emmanuel Blancas is a 3D artist and AI-assisted filmmaker with experience in visual production for film, television, commercials, social media, virtual sets, and cinematic 3D workflows. His background includes hard-surface modeling, texturing, lighting, rendering, VFX, Unreal Engine, 3ds Max, post-production tools, and emerging AI production pipelines. Through projects like Runaway 2150, he combines worldbuilding, cinematic visual direction, science fiction, and AI-assisted storytelling to create ambitious independent films with a strong visual identity.",
    },
    resources: {
      eyebrow: "DOWNLOADS / RESOURCES",
      title: "Submission resources and supporting material",
      description:
        "A resource package for project review, editorial follow-up, and festival-facing presentation.",
      buttons: [
        {
          label: "Download Production Journal PDF",
          href: "#",
        },
        {
          label: "Download Press Kit",
          href: "#",
        },
        {
          label: "Download Poster",
          href: "#",
        },
        {
          label: "View Credits",
          href: "#credits",
        },
        {
          label: "Watch on YouTube",
          href: "https://youtu.be/StHnkr4zFgs",
          external: true,
        },
      ],
    },
  },
};

function SectionLabel({ eyebrow, title, description }: SectionText) {
  return (
    <div className="max-w-4xl">
      <p className="text-[0.68rem] uppercase tracking-[0.32em] text-red-200/58">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2.2rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-white/58 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] shadow-[0_0_28px_rgba(255,255,255,0.04)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.08),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-red-300/40 to-transparent" />
      <div className="relative z-10 h-full">{children}</div>
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
    <Panel className="p-5 sm:p-6">
      <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-white/74">
        {title}
      </h3>
      <div className="mt-4 text-sm leading-7 text-white/58 sm:text-base">
        {children}
      </div>
    </Panel>
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
    <Panel className={className}>
      <div className="relative h-full min-h-[240px]">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
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
  const className =
    "inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/80 transition hover:-translate-y-0.5 hover:border-red-300/28 hover:bg-white/[0.08] hover:text-white";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={className}
    >
      {children}
    </a>
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
  const language: Locale = searchParams?.lang === "es" ? "es" : "en";
  const page = content[language];

  return (
    <main className="min-h-screen bg-[#040404] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.12),transparent_24%),radial-gradient(circle_at_78%_16%,rgba(251,191,36,0.08),transparent_18%),linear-gradient(180deg,#040404_0%,#080808_48%,#020202_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:88px_88px]" />

      <section className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10 lg:px-12 lg:pb-28">
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

        <SectionLabel
          eyebrow={page.festivalKit.eyebrow}
          title={page.festivalKit.title}
          description={page.festivalKit.description}
        />

        <section className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.88fr)] xl:items-start">
          <Panel className="overflow-hidden">
            <div className="aspect-video w-full" id="main-trailer">
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

          <Panel className="p-6 sm:p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-red-200/56">
              {page.hero.eyebrow}
            </p>
            <p className="mt-3 text-[0.62rem] uppercase tracking-[0.28em] text-white/42">
              {page.hero.logoLabel}
            </p>
            <h1 className="mt-5 text-[2.9rem] font-semibold tracking-[-0.05em] text-white sm:text-[3.8rem] lg:text-[4.8rem] lg:leading-[0.94]">
              {page.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78 sm:text-[1.2rem]">
              {page.hero.subtitle}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/56 sm:text-base">
              {page.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ActionButton href="#main-trailer">
                {page.hero.buttons.watchFilm}
              </ActionButton>
              <ActionButton href="#resources">
                {page.hero.buttons.pressKit}
              </ActionButton>
              <ActionButton href="#production-journal">
                {page.hero.buttons.productionJournal}
              </ActionButton>
            </div>

            <div className="mt-8">
              <MediaPanel
                src="/images/runaway/hero.png"
                alt="Runaway 2150 hero artwork"
                className="min-h-[240px]"
                sizes="(max-width: 1280px) 100vw, 420px"
              />
            </div>
          </Panel>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.8fr)]">
          <InfoCard title={page.synopsis.eyebrow}>
            <p className="text-white/76">{page.synopsis.body}</p>
          </InfoCard>

          <InfoCard title={page.festivalInfo.eyebrow}>
            <div className="space-y-4">
              {page.festivalInfo.rows.map((row) => (
                <div
                  key={row.label}
                  className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0"
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/42">
                    {row.label}
                  </p>
                  <p className="mt-2 text-sm text-white/78 sm:text-base">
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </InfoCard>
        </section>

        <section className="space-y-5" id="production-journal">
          <SectionLabel
            eyebrow={page.pipeline.eyebrow}
            title={page.pipeline.title}
            description={page.pipeline.description}
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {page.pipeline.cards.map((card) => (
              <InfoCard key={card.title} title={card.title}>
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-red-200/62">
                  {card.tools}
                </p>
                <p className="mt-3">{card.description}</p>
              </InfoCard>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <SectionLabel
            eyebrow={page.worldbuilding.eyebrow}
            title={page.worldbuilding.title}
            description={page.worldbuilding.description}
          />

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <MediaPanel
              src="/images/runaway/ca-ciudad-azteca.png"
              alt="CA Ciudad Azteca"
              className="min-h-[340px] lg:min-h-[460px]"
              sizes="(max-width: 1280px) 100vw, 640px"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <MediaPanel
                src="/images/runaway/combat-robots.png"
                alt="Humanoid combat robots"
                className="min-h-[220px]"
              />
              <MediaPanel
                src="/images/runaway/nuevo-mundo-brokers.png"
                alt="Black market brokers"
                className="min-h-[220px]"
              />
              <MediaPanel
                src="/images/runaway/purple-world.png"
                alt="The Purple World"
                className="min-h-[220px]"
              />
              <MediaPanel
                src="/images/runaway/caribbean-world.png"
                alt="The Caribbean World"
                className="min-h-[220px]"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {page.worldbuilding.notes.map((note) => (
              <InfoCard key={note.title} title={note.title}>
                {note.description}
              </InfoCard>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <SectionLabel
            eyebrow={page.characters.eyebrow}
            title={page.characters.title}
            description={page.characters.description}
          />

          <MediaPanel
            src="/images/runaway/characters-wide.jpeg"
            alt="Runaway 2150 character ensemble"
            className="min-h-[280px] sm:min-h-[360px]"
            sizes="100vw"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <MediaPanel
                  src="/images/runaway/danniel.png"
                  alt="Danniel portrait"
                  className="min-h-[220px]"
                />
                <MediaPanel
                  src="/images/runaway/danniel-action.png"
                  alt="Danniel action scene"
                  className="min-h-[220px]"
                />
              </div>
              <InfoCard title={page.characters.danniel.title}>
                {page.characters.danniel.description}
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
                className="min-h-[220px]"
              />
              <InfoCard title={page.characters.alexis.title}>
                {page.characters.alexis.description}
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

          <div className="grid gap-4 md:grid-cols-3">
            <article className="space-y-4">
              <MediaPanel
                src="/images/runaway/stones.png"
                alt="Blue Stone visual"
                className="min-h-[240px]"
              />
              <InfoCard title={page.stones.cards[0].title}>
                {page.stones.cards[0].description}
              </InfoCard>
            </article>
            <article className="space-y-4">
              <MediaPanel
                src="/images/runaway/purple-world02.png"
                alt="Purple Stone visual"
                className="min-h-[240px]"
              />
              <InfoCard title={page.stones.cards[1].title}>
                {page.stones.cards[1].description}
              </InfoCard>
            </article>
            <article className="space-y-4">
              <MediaPanel
                src="/images/runaway/overview.png"
                alt="Gold Stone visual"
                className="min-h-[240px]"
              />
              <InfoCard title={page.stones.cards[2].title}>
                {page.stones.cards[2].description}
              </InfoCard>
            </article>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]" id="credits">
          <InfoCard title={page.directorBio.eyebrow}>
            {page.directorBio.body}
          </InfoCard>
          <MediaPanel
            src="/images/runaway/overview.png"
            alt="Runaway 2150 production overview"
            className="min-h-[320px]"
            sizes="(max-width: 1280px) 100vw, 420px"
          />
        </section>

        <section className="space-y-5" id="resources">
          <SectionLabel
            eyebrow={page.resources.eyebrow}
            title={page.resources.title}
            description={page.resources.description}
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {page.resources.buttons.map((button) => (
              <Panel key={button.label} className="p-4">
                <ActionButton href={button.href} external={button.external}>
                  {button.label}
                </ActionButton>
              </Panel>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
