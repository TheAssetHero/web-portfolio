import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

function SectionLabel({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
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

export default function Runaway2150Page() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.09),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(251,191,36,0.07),transparent_24%),linear-gradient(180deg,#040404_0%,#070707_48%,#030303_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:88px_88px]" />

      <section className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10 lg:px-12 lg:pb-28">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/62 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            {"<- BACK TO HOME"}
          </Link>
        </div>

        <header className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 shadow-[0_0_34px_rgba(255,255,255,0.04)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.09),transparent_42%),radial-gradient(circle_at_78%_18%,rgba(251,191,36,0.08),transparent_26%)]" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/38 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-8 h-px w-36 bg-gradient-to-r from-amber-200/40 to-transparent" />

          <div className="relative z-10 grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.92fr)] xl:items-start">
            <div className="min-w-0">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/42">
                THE ASSET HERO ORIGINAL
              </p>
              <h1 className="mt-5 max-w-4xl text-[2.8rem] font-semibold tracking-[-0.05em] text-white sm:text-[3.6rem] lg:text-[4.6rem] lg:leading-[0.96]">
                Runaway 2150
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/76 sm:text-[1.2rem]">
                Serie cinematografica producida por The Asset Hero.
              </p>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/56 sm:text-base">
                Se producira este 2026 la primera temporada de Runaway 2150,
                totalmente producida por The Asset Hero.
              </p>
              <p className="mt-8 max-w-3xl text-sm leading-7 text-white/58 sm:text-base">
                Runaway 2150 ocurre en un universo donde multiples planetas,
                facciones y ciudades conviven bajo tension. Danniel y Alexis
                deben recuperar las Stones antes de que una guerra inevitable
                comience.
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/48 sm:text-base">
                Danniel fue responsable de vender las Stones por separado,
                dispersandolas por distintos planetas, facciones y redes de
                mercado negro. Ahora la mision se convierte en una busqueda casi
                interminable para recuperarlas antes de que sea demasiado tarde.
              </p>
            </div>

            <div className="space-y-4">
              <MediaPanel
                src="/images/runaway/hero.png"
                alt="Arte principal de Runaway 2150"
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
          <InfoCard title="PROJECT OVERVIEW">
            <p>
              Runaway 2150 combina produccion asistida por IA, storytelling
              cinematografico y construccion de universo para desarrollar una
              serie con identidad visual propia.
            </p>
            <p className="mt-4">
              Imagen, voz, musica, sonido, ritmo de edicion y direccion visual
              conviven como un sistema creativo donde la inteligencia artificial
              funciona como soporte de exploracion, iteracion y produccion.
            </p>
          </InfoCard>

          <MediaPanel
            src="/images/runaway/overview.png"
            alt="Vista editorial del proyecto Runaway 2150"
            className="min-h-[280px]"
            sizes="(max-width: 1280px) 100vw, 420px"
          />
        </section>

        <section className="space-y-5">
          <SectionLabel
            eyebrow="WORLD / PLANETS"
            title="Mundos conectados bajo tension"
            description="Planetas, nodos urbanos y corredores de transito sostienen el conflicto central de la serie y expanden su mapa narrativo."
          />

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <MediaPanel
              src="/images/runaway/ca-ciudad-azteca.png"
              alt="Vista general de Ciudad Azteca"
              className="min-h-[320px] lg:min-h-[420px]"
              sizes="(max-width: 1280px) 100vw, 760px"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <MediaPanel
                src="/images/runaway/purple-world.png"
                alt="Primer mundo purpura de Runaway 2150"
                className="min-h-[190px]"
              />
              <MediaPanel
                src="/images/runaway/purple-world02.png"
                alt="Segundo mundo purpura de Runaway 2150"
                className="min-h-[190px]"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)_minmax(0,0.95fr)]">
            <InfoCard title="Nuevo Mundo">
              Territorio en crecimiento donde convergen tecnologia, tension
              politica y rutas clave para el movimiento de recursos dentro de la
              primera temporada.
            </InfoCard>
            <InfoCard title="Caribe Azul">
              Zona estrategica conectada a transitos maritimos, facciones
              perifericas y enclaves de intercambio clandestino.
            </InfoCard>
            <MediaPanel
              src="/images/runaway/caribbean-world.png"
              alt="Entorno de Caribe Azul"
              className="min-h-[220px]"
              sizes="(max-width: 1280px) 100vw, 360px"
            />
          </div>
        </section>

        <section className="space-y-5">
          <SectionLabel
            eyebrow="CA CIUDAD AZTECA"
            title="Escala urbana y vida cotidiana"
            description="La ciudad funciona como uno de los focos mas densos del universo de Runaway 2150: transito, rutina, presion politica y verticalidad."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <MediaPanel
              src="/images/runaway/street-level.png"
              alt="Nivel calle en Ciudad Azteca"
              className="min-h-[240px]"
            />
            <MediaPanel
              src="/images/runaway/daily-life.png"
              alt="Vida diaria en Ciudad Azteca"
              className="min-h-[240px]"
            />
            <MediaPanel
              src="/images/runaway/scale.png"
              alt="Escala arquitectonica de Ciudad Azteca"
              className="min-h-[240px]"
            />
          </div>
        </section>

        <section className="space-y-5">
          <SectionLabel
            eyebrow="MAIN CHARACTERS"
            title="Danniel y Alexis"
            description="Dos protagonistas unidos por la urgencia de recuperar las Stones antes de que el conflicto escale sin retorno."
          />

          <MediaPanel
            src="/images/runaway/characters-wide.jpeg"
            alt="Composicion amplia de personajes de Runaway 2150"
            className="min-h-[280px] sm:min-h-[360px]"
            sizes="100vw"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="space-y-4">
              <MediaPanel
                src="/images/runaway/danniel.png"
                alt="Retrato de Danniel"
                className="min-h-[280px]"
              />
              <MediaPanel
                src="/images/runaway/danniel-action.png"
                alt="Escena de accion de Danniel"
                className="min-h-[240px]"
              />
              <InfoCard title="Danniel">
                Protagonista pelirrojo vinculado directamente a la venta y
                dispersion de las Stones. Su pasado activa el conflicto y tambien
                la urgencia de corregirlo.
              </InfoCard>
            </article>

            <article className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <MediaPanel
                  src="/images/runaway/alexis.png"
                  alt="Retrato de Alexis"
                  className="min-h-[220px]"
                />
                <MediaPanel
                  src="/images/runaway/alexis-action.png"
                  alt="Primera escena de accion de Alexis"
                  className="min-h-[220px]"
                />
              </div>
              <MediaPanel
                src="/images/runaway/alexis-action02.jpeg"
                alt="Segunda escena de accion de Alexis"
                className="min-h-[260px]"
              />
              <InfoCard title="Alexis">
                Protagonista de vestimenta negra, tactico, enfocado y central en
                la mision de recuperacion. Su lectura estrategica sostiene el
                avance de la busqueda.
              </InfoCard>
            </article>
          </div>
        </section>

        <section className="space-y-5">
          <SectionLabel
            eyebrow="THE STONES"
            title="El nucleo del conflicto"
            description="Las Stones definen el equilibrio de poder entre facciones, mercados y territorios. Su recuperacion decide el destino de la temporada."
          />

          <div className="grid gap-6 xl:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)]">
            <MediaPanel
              src="/images/runaway/stones.png"
              alt="Representacion visual de las Stones"
              className="min-h-[320px]"
              sizes="(max-width: 1280px) 100vw, 420px"
            />
            <InfoCard title="THE STONES">
              <p>
                Las Stones son el nucleo del conflicto. Su dispersion detono el
                desequilibrio entre facciones, mercados y territorios.
              </p>
              <p className="mt-4">
                Si no son recuperadas a tiempo, la guerra que se aproxima no
                podra detenerse y el universo de Runaway 2150 entrara en un
                punto de no retorno.
              </p>
            </InfoCard>
          </div>
        </section>

        <section className="space-y-5">
          <SectionLabel
            eyebrow="ENEMIES / FACTIONS"
            title="Fuerzas de ocupacion y presion"
            description="La amenaza no proviene de un solo frente: control territorial, robots de combate y brokers de poder presionan el universo narrativo desde distintos angulos."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <article className="space-y-3">
              <MediaPanel
                src="/images/runaway/combat-robots.png"
                alt="Robots de combate de Runaway 2150"
                className="min-h-[240px]"
              />
              <InfoCard title="Combat Robots">
                Presencia de fuerza, choque y control tactico para zonas de alta
                friccion dentro del conflicto.
              </InfoCard>
            </article>
            <article className="space-y-3">
              <MediaPanel
                src="/images/runaway/occupation-control.png"
                alt="Sistema de ocupacion y control"
                className="min-h-[240px]"
              />
              <InfoCard title="Occupation Control">
                Estructuras de vigilancia y dominio que empujan a las ciudades y
                facciones hacia un estado de tension permanente.
              </InfoCard>
            </article>
            <article className="space-y-3">
              <MediaPanel
                src="/images/runaway/nuevo-mundo-brokers.png"
                alt="Brokers de Nuevo Mundo"
                className="min-h-[240px]"
              />
              <InfoCard title="Nuevo Mundo Brokers">
                Redes de mercado negro, intermediacion y circulacion de poder
                que complican la recuperacion de las Stones.
              </InfoCard>
            </article>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)]">
          <InfoCard title="DOSSIER">
            La serie se plantea como una mezcla de sci-fi, dossier editorial y
            experiencia visual expansible, lista para crecer con nuevos
            personajes, planetas, facciones y materiales audiovisuales.
          </InfoCard>
          <InfoCard title="STATUS">
            <p className="text-white/78">
              In development / Season One planned for 2026
            </p>
          </InfoCard>
        </section>
      </section>
    </main>
  );
}
