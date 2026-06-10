import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Hospitality Video Production | The Asset Hero",
  description:
    "Premium cinematic video production for five-star hospitality, resorts, concierge brands and luxury experience companies.",
};

const contactHref = "mailto:contact@theassethero.com";

const positioningCards = [
  {
    title: "Atmosphere First",
    text: "We build videos around mood, light, rhythm, texture and emotion, not generic travel footage.",
  },
  {
    title: "Trust Before Booking",
    text: "The right visual language helps clients understand the level of care, discretion and service behind the experience.",
  },
  {
    title: "Built for Premium Brands",
    text: "Designed for resorts, hotels, concierge teams, executive travel services and luxury experience companies.",
  },
];

const services = [
  {
    title: "Brand Films",
    text: "Cinematic short films that present the property, service or experience with a premium editorial tone.",
  },
  {
    title: "Resort & Hotel Reels",
    text: "Vertical and horizontal videos designed for websites, social media, campaigns and direct sales.",
  },
  {
    title: "Concierge Experience Videos",
    text: "Visual storytelling for private travel planning, executive vacations and tailored guest experiences.",
  },
  {
    title: "Destination Campaigns",
    text: "Videos that sell the feeling of a place: arrival, privacy, architecture, food, wellness, ocean, city or retreat.",
  },
  {
    title: "AI-Assisted Concepts",
    text: "Fast visual exploration for campaigns, pitch decks, mood films and pre-production concepts.",
  },
  {
    title: "3D / Virtual Production Support",
    text: "Digital environments, cinematic previews, 3D visualization and Unreal Engine support when the project requires it.",
  },
];

const videoConcept = [
  {
    label: "Opening",
    text: "A calm cinematic arrival. Airport, private driver, resort entrance, warm light, no chaos.",
  },
  {
    label: "Experience",
    text: "Rooms, architecture, dining, wellness, water, city, mountain or villa details. Everything feels intentional.",
  },
  {
    label: "Human Touch",
    text: "Concierge, staff, private host, chef, driver, wellness expert or travel designer preparing the experience.",
  },
  {
    label: "Emotional Close",
    text: "The client is not just traveling. They are recovering time, privacy and presence.",
  },
];

const industries = [
  "Five-Star Hotels",
  "Resorts",
  "Boutique Stays",
  "Luxury Villas",
  "Concierge Services",
  "Executive Travel",
  "Wellness Retreats",
  "Private Experiences",
  "Destination Brands",
  "Lifestyle Campaigns",
];

const deliverables = [
  "Hero website video",
  "Social media reels",
  "Vertical campaign clips",
  "Brand film",
  "Destination teaser",
  "Service explainer video",
  "AI-assisted concept film",
  "Pitch visuals",
  "3D / environment previews",
  "Campaign image frames",
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "We define the brand, audience, destination, tone, service level and purpose of the video.",
  },
  {
    number: "02",
    title: "Visual Direction",
    text: "Mood, references, pacing, camera language, music direction and narrative structure.",
  },
  {
    number: "03",
    title: "Production Plan",
    text: "Shot list, edit structure, required assets, AI/3D needs, locations, footage and delivery format.",
  },
  {
    number: "04",
    title: "Creation",
    text: "Editing, motion graphics, AI-assisted visuals, 3D support, sound, color and finishing.",
  },
  {
    number: "05",
    title: "Delivery",
    text: "Final files for website, social media, campaigns, presentation and sales use.",
  },
];

export default function LuxuryHospitalityVideoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative px-6 pb-24 pt-8 sm:px-10 md:px-16 lg:px-24 lg:pb-32">
        <Atmosphere />
        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/62 transition hover:border-[#e8d7af]/35 hover:bg-[#e8d7af]/10 hover:text-white"
          >
            Back to Home
          </Link>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#e8d7af]/62">
                Luxury Hospitality Video Production
              </p>
              <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Cinematic video for five-star hospitality, resorts and
                concierge brands.
              </h1>
              <p className="mt-7 max-w-4xl text-lg leading-8 text-white/78 sm:text-xl sm:leading-9">
                Premium video production for hotels, resorts, private travel
                companies and concierge services that need to communicate
                trust, atmosphere and high-end experience.
              </p>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
                We create polished visual pieces designed to make potential
                clients feel the quality of the experience before they book.
                From cinematic brand films to social campaigns, destination
                reels and AI-assisted visual concepts, the goal is to turn
                luxury service into a visual decision.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contactHref}
                  className="inline-flex justify-center rounded-full border border-[#e8d7af]/30 bg-[#e8d7af]/14 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#f6ead0] shadow-[0_0_28px_rgba(232,215,175,0.12)] transition hover:border-[#e8d7af]/55 hover:bg-[#e8d7af]/20 hover:text-white"
                >
                  Start a Project
                </a>
                <a
                  href="#services"
                  className="inline-flex justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/68 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  View Services
                </a>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#e8d7af]/14 bg-[radial-gradient(circle_at_70%_20%,rgba(232,215,175,0.24),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-5 shadow-[0_0_60px_rgba(232,215,175,0.08)]">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-40" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-black/55 p-5 backdrop-blur-md">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#e8d7af]/70">
                  Five-Star Experience
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight text-white">
                  Sell the feeling before the client arrives.
                </p>
                <p className="mt-3 text-sm leading-6 text-white/52">
                  A visual language for privacy, confidence, atmosphere and
                  carefully managed details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Positioning" title="Your service is premium. The video should feel premium too.">
        <p className="max-w-4xl text-base leading-8 text-white/58 sm:text-lg">
          High-end clients do not only buy a destination. They buy confidence,
          privacy, comfort, beauty and the promise that every detail will be
          handled. The video needs to communicate that instantly.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {positioningCards.map((card) => (
            <EditorialCard key={card.title} title={card.title} text={card.text} />
          ))}
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="Services"
        title="Video services for luxury experience brands"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <EditorialCard
              key={service.title}
              title={service.title}
              text={service.text}
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Video Concept" title="The video we would create">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="rounded-[1.85rem] border border-[#e8d7af]/12 bg-[linear-gradient(160deg,rgba(232,215,175,0.11),rgba(255,255,255,0.025))] p-6 shadow-[0_0_38px_rgba(232,215,175,0.06)] sm:p-8">
            <p className="text-sm leading-7 text-white/58 sm:text-base">
              For a five-star hospitality or concierge company, the video
              should not feel like a tourist ad. It should feel like access:
              quiet luxury, precise service, curated moments and the confidence
              that everything is already handled.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {videoConcept.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.45rem] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-[#e8d7af]/25 hover:bg-white/[0.055]"
              >
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#e8d7af]/60">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/56">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Industries"
        title="Designed for premium hospitality and experience companies"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 text-center text-[0.7rem] uppercase tracking-[0.18em] text-white/62 transition hover:border-[#e8d7af]/25 hover:text-white"
            >
              {industry}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Deliverables" title="What can be delivered">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {deliverables.map((deliverable) => (
            <div
              key={deliverable}
              className="rounded-[1.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] px-4 py-4 text-sm text-white/62"
            >
              {deliverable}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title="Production flow">
        <div className="grid gap-4 lg:grid-cols-5">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-[1.55rem] border border-white/10 bg-white/[0.035] p-5"
            >
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#e8d7af]/58">
                {step.number}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <section className="px-6 pb-28 sm:px-10 md:px-16 lg:px-24 lg:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-[#e8d7af]/16 bg-[radial-gradient(circle_at_75%_10%,rgba(232,215,175,0.18),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-7 shadow-[0_0_54px_rgba(232,215,175,0.08)] sm:p-10 lg:p-12">
            <p className="text-[0.66rem] uppercase tracking-[0.34em] text-[#e8d7af]/60">
              Start the Conversation
            </p>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Turn the experience into a visual decision.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/58 sm:text-lg">
              Luxury clients decide with emotion first and logic second. A
              premium video helps them feel the experience before they ever
              arrive.
            </p>
            <a
              href={contactHref}
              className="mt-8 inline-flex rounded-full border border-[#e8d7af]/30 bg-[#e8d7af]/14 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#f6ead0] transition hover:border-[#e8d7af]/55 hover:bg-[#e8d7af]/20 hover:text-white"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-6 pb-24 sm:px-10 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-[0.64rem] uppercase tracking-[0.32em] text-[#e8d7af]/52">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function EditorialCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-5 shadow-[0_0_26px_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-1 hover:border-[#e8d7af]/25 hover:bg-white/[0.05] hover:shadow-[0_0_34px_rgba(232,215,175,0.07)] sm:p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/52">{text}</p>
    </article>
  );
}

function Atmosphere() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(232,215,175,0.12),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[size:38px_38px] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] opacity-[0.045]" />
    </>
  );
}
