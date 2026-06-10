import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ContactTrigger from "@/components/ContactTrigger";

export const metadata: Metadata = {
  title: "Luxury Hospitality Video Production | The Asset Hero",
  description:
    "Premium cinematic video production for five-star hospitality, resorts, concierge brands and luxury experience companies.",
};

const positioningCards = [
  {
    title: "Atmosphere First",
    text: "We build videos around mood, light, rhythm, texture and emotion, not generic travel footage.",
    image: "/images/luxurypage/atmospherefirst.png",
  },
  {
    title: "Trust Before Booking",
    text: "The right visual language helps clients understand the level of care, discretion and service behind the experience.",
    image: "/images/luxurypage/trustbeforebooking.png",
  },
  {
    title: "Built for Premium Brands",
    text: "Designed for resorts, hotels, concierge teams, executive travel services and luxury experience companies.",
    image: "/images/luxurypage/buildforpremiumbrands.png",
  },
];

const services = [
  {
    title: "Brand Films",
    text: "Editorial films for premium positioning.",
  },
  {
    title: "Resort Reels",
    text: "Short-form visuals for campaigns and web.",
  },
  {
    title: "Concierge Videos",
    text: "Trust-driven service storytelling.",
  },
  {
    title: "Destination Campaigns",
    text: "Atmosphere-led destination pieces.",
  },
  {
    title: "AI Concepts",
    text: "Fast visual exploration for pitches.",
  },
  {
    title: "3D / Virtual Support",
    text: "Previews, environments and production support.",
  },
];

const videoConcept = [
  {
    number: "01",
    label: "Arrival",
    text: "Private arrival, warm light, calm rhythm and no chaos.",
    image: "/images/luxurypage/01arrival.png",
  },
  {
    number: "02",
    label: "Experience",
    text: "Rooms, architecture, dining, wellness and curated details.",
    image: "/images/luxurypage/02experience.png",
  },
  {
    number: "03",
    label: "Human Touch",
    text: "Concierge, host, chef, driver or service team preparing the experience.",
    image: "/images/luxurypage/03human%20touch.png",
  },
  {
    number: "04",
    label: "Emotional Close",
    text: "The client feels privacy, time, comfort and everything already handled.",
    image: "/images/luxurypage/04emotional.png",
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
    image: "/images/luxurypage/01discovery.png",
  },
  {
    number: "02",
    title: "Visual Direction",
    text: "Mood, references, pacing, camera language, music direction and narrative structure.",
    image: "/images/luxurypage/02direction.png",
  },
  {
    number: "03",
    title: "Production Plan",
    text: "Shot list, edit structure, required assets, AI/3D needs, locations, footage and delivery format.",
    image: "/images/luxurypage/03productionPlan.png",
  },
  {
    number: "04",
    title: "Creation",
    text: "Editing, motion graphics, AI-assisted visuals, 3D support, sound, color and finishing.",
    image: "/images/luxurypage/04creation.png",
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

          <div className="mt-16">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#e8d7af]/62">
              Luxury Hospitality Video Production
            </p>
            <h1 className="mt-5 max-w-7xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl lg:leading-[0.9]">
              Cinematic video for five-star hospitality, resorts and concierge
              brands.
            </h1>
            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(280px,0.42fr)] lg:items-end">
              <div>
                <p className="max-w-5xl text-lg leading-8 text-white/78 sm:text-xl sm:leading-9">
                  Premium video production for hotels, resorts, private travel
                  companies and concierge services that need to communicate
                  trust, atmosphere and high-end experience.
                </p>
                <p className="mt-6 max-w-4xl text-sm leading-7 text-white/50 sm:text-base">
                  We create polished visual pieces designed to make potential
                  clients feel the quality of the experience before they book.
                  From cinematic brand films to social campaigns, destination
                  reels and AI-assisted visual concepts, the goal is to turn
                  luxury service into a visual decision.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <ContactTrigger
                  className="inline-flex justify-center rounded-full border border-[#e8d7af]/30 bg-[#e8d7af]/14 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#f6ead0] shadow-[0_0_28px_rgba(232,215,175,0.12)] transition hover:border-[#e8d7af]/55 hover:bg-[#e8d7af]/20 hover:text-white"
                >
                  Start a Project
                </ContactTrigger>
                <a
                  href="#services"
                  className="inline-flex justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/68 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  View Services
                </a>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_0_70px_rgba(232,215,175,0.09)]">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/PLgxsjxsHnI?rel=0"
                  title="Luxury Hospitality Video Production"
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
      </section>

      <Section eyebrow="Positioning" title="Your service is premium. The video should feel premium too.">
        <p className="max-w-4xl text-base leading-8 text-white/58 sm:text-lg">
          High-end clients do not only buy a destination. They buy confidence,
          privacy, comfort, beauty and the promise that every detail will be
          handled. The video needs to communicate that instantly.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {positioningCards.map((card) => (
            <VisualCard
              key={card.title}
              title={card.title}
              text={card.text}
              image={card.image}
              label="Positioning"
            />
          ))}
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="Services"
        title="Video services for luxury experience brands"
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <VisualCard
              key={service.title}
              title={service.title}
              text={service.text}
              label="Service"
              compact
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Video Concept" title="The video we would create">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {videoConcept.map((item) => (
            <VisualCard
              key={item.label}
              title={item.label}
              text={item.text}
              image={item.image}
              label={item.number}
              compact
            />
          ))}
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
            <VisualCard
              key={step.number}
              title={step.title}
              text={step.text}
              image={step.image}
              label={step.number}
              compact
            />
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
            <ContactTrigger
              className="mt-8 inline-flex rounded-full border border-[#e8d7af]/30 bg-[#e8d7af]/14 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#f6ead0] transition hover:border-[#e8d7af]/55 hover:bg-[#e8d7af]/20 hover:text-white"
            >
              Start a Project
            </ContactTrigger>
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

function VisualCard({
  title,
  text,
  image,
  label,
  compact = false,
}: {
  title: string;
  text: string;
  image?: string;
  label?: string;
  compact?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] shadow-[0_0_26px_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-1 hover:border-[#e8d7af]/25 hover:bg-white/[0.05] hover:shadow-[0_0_34px_rgba(232,215,175,0.07)]">
      <div
        className={`relative overflow-hidden bg-[radial-gradient(circle_at_70%_20%,rgba(232,215,175,0.16),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] ${
          compact ? "aspect-[16/10]" : "aspect-[16/11]"
        }`}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(232,215,175,0.12),rgba(255,255,255,0.035)_42%,rgba(0,0,0,0.18))]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {label ? (
          <p className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.22em] text-[#e8d7af]/72 backdrop-blur-md">
            {label}
          </p>
        ) : null}
      </div>
      <div className={compact ? "p-4" : "p-5 sm:p-6"}>
        <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/52">{text}</p>
      </div>
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
