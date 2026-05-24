import Link from "next/link";
import { ReactNode } from "react";

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
        <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-white/74">
          {title}
        </h2>
        <div className="mt-4 text-sm leading-7 text-white/58 sm:text-base">
          {children}
        </div>
      </div>
    </article>
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
            ← BACK TO HOME
          </Link>
        </div>

        <header className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 shadow-[0_0_34px_rgba(255,255,255,0.04)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.09),transparent_42%),radial-gradient(circle_at_78%_18%,rgba(251,191,36,0.08),transparent_26%)]" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/38 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-8 h-px w-36 bg-gradient-to-r from-amber-200/40 to-transparent" />

          <div className="relative z-10 grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.88fr)] xl:items-start">
            <div className="min-w-0">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/42">
                THE ASSET HERO ORIGINAL
              </p>
              <h1 className="mt-5 max-w-4xl text-[2.8rem] font-semibold tracking-[-0.05em] text-white sm:text-[3.6rem] lg:text-[4.6rem] lg:leading-[0.96]">
                Runaway 2150
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/76 sm:text-[1.2rem]">
                Serie cinematográfica producida por The Asset Hero.
              </p>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/56 sm:text-base">
                Se producirá este 2026 la primera temporada de Runaway 2150,
                totalmente producida por The Asset Hero.
              </p>
              <p className="mt-8 max-w-3xl text-sm leading-7 text-white/58 sm:text-base">
                Runaway 2150 ocurre en un universo donde múltiples planetas,
                facciones y ciudades conviven bajo tensión. Danniel y Alexis
                deben recuperar las Stones antes de que una guerra inevitable
                comience.
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/48 sm:text-base">
                Danniel fue responsable de vender las Stones por separado,
                dispersándolas por distintos planetas, facciones y redes de
                mercado negro. Ahora la misión se convierte en una búsqueda casi
                interminable para recuperarlas antes de que sea demasiado tarde.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/70 shadow-[0_0_26px_rgba(74,222,128,0.08)]">
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
        </header>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <InfoCard title="PROJECT OVERVIEW">
            <p>
              Runaway 2150 combina producción asistida por IA, storytelling
              cinematográfico y construcción de universo para desarrollar una
              serie con identidad visual propia.
            </p>
            <p className="mt-4">
              Imagen, voz, música, sonido, ritmo de edición y dirección visual
              conviven como un sistema creativo donde la inteligencia artificial
              funciona como soporte de exploración, iteración y producción.
            </p>
          </InfoCard>

          <InfoCard title="STATUS">
            <p className="text-white/78">
              In development / Season One planned for 2026
            </p>
          </InfoCard>
        </section>

        <section className="space-y-5">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/38">
              WORLD / PLANETS
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2.2rem]">
              Nodos del universo narrativo
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <InfoCard title="Nuevo Mundo">
              Territorio en crecimiento donde convergen tecnología, tensión
              política y rutas clave para el movimiento de recursos.
            </InfoCard>
            <InfoCard title="Caribe Azul">
              Zona estratégica conectada a tránsitos marítimos, facciones
              periféricas y enclaves de intercambio clandestino.
            </InfoCard>
            <InfoCard title="Ciudad Azteca">
              Centro urbano denso y simbólico donde distintas fuerzas disputan
              poder, memoria y control territorial.
            </InfoCard>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="MAIN CHARACTERS / Danniel">
            <p>
              Protagonista pelirrojo vinculado directamente a la venta y
              dispersión de las Stones. Su pasado activa el conflicto y también
              la urgencia de corregirlo.
            </p>
          </InfoCard>

          <InfoCard title="MAIN CHARACTERS / Alexis">
            <p>
              Protagonista de vestimenta negra, táctico, enfocado y central en
              la misión de recuperación. Su lectura estratégica sostiene el
              avance de la búsqueda.
            </p>
          </InfoCard>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <InfoCard title="THE STONES">
            <p>
              Las Stones son el núcleo del conflicto. Su dispersión detonó el
              desequilibrio entre facciones, mercados y territorios.
            </p>
            <p className="mt-4">
              Si no son recuperadas a tiempo, la guerra que se aproxima no podrá
              detenerse y el universo de Runaway 2150 entrará en un punto de no
              retorno.
            </p>
          </InfoCard>

          <InfoCard title="DOSSIER">
            <p>
              La serie se plantea como una mezcla de sci-fi, dossier editorial y
              experiencia visual expansible, lista para crecer con nuevos
              personajes, planetas, facciones y materiales audiovisuales.
            </p>
          </InfoCard>
        </section>
      </section>
    </main>
  );
}
