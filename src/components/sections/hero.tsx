import { ArrowDown } from "lucide-react"
import { Flower } from "@/components/flower"
import { WhatsAppButton } from "@/components/cta"
import type { CSSProperties } from "react"

const i = (n: number) => ({ "--i": n }) as CSSProperties

const facts = [
  "Preparación y experiencia",
  "Estrategia a tu medida",
  "Confianza y resultados",
]

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="mx-auto max-w-[88rem] px-5 pt-10 pb-20 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16 lg:pb-28"
    >
      <div className="rise flex items-center gap-5 text-eyebrow font-semibold text-ink-soft uppercase" style={i(0)}>
        <span>Nutrición Clínica</span>
        <span aria-hidden className="hidden h-px flex-1 bg-salvia sm:block" />
        <span className="hidden sm:inline">Navojoa, Sonora</span>
      </div>

      <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <h1
            id="hero-title"
            className="font-serif text-display tracking-[-0.02em] text-bosque"
          >
            <span className="rise block" style={i(1)}>La mejor versión</span>
            <span className="rise block text-jade-ink" style={i(2)}>
              de ti.
            </span>
          </h1>

          <p
            className="rise mt-9 max-w-[34rem] text-lede text-ink-soft"
            style={i(4)}
          >
            Cuidar lo que más amas es también cuidarte a ti. Agenda tu cita de
            valoración y comienza hoy mismo un nuevo estilo de vida.
          </p>

          <div className="rise mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7" style={i(5)}>
            <WhatsAppButton />
            <a
              href="#dalia"
              className="group inline-flex min-h-11 items-center gap-2 self-start text-[0.9375rem] font-semibold text-bosque outline-none sm:self-auto"
            >
              <span className="draw-link pb-0.5">Acerca de mí</span>
              <ArrowDown
                className="size-4 transition-transform duration-200 ease-[var(--ease-out)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-y-0.5"
                strokeWidth={1.75}
              />
            </a>
          </div>
        </div>

        <aside
          aria-label="En resumen"
          className="relative flex flex-col justify-between gap-10 lg:col-span-4 lg:border-l lg:border-salvia lg:pl-10"
        >
          <div className="flex items-center gap-6 lg:block">
            <Flower className="bloom size-28 shrink-0 text-jade sm:size-36 lg:size-[min(19vw,15rem)]" />
            <p className="rise text-eyebrow font-semibold text-jade-ink uppercase lg:mt-8" style={i(4)}>
              Vida en equilibrio
            </p>
          </div>

          <ul className="border-t border-salvia">
            {facts.map((fact, n) => (
              <li
                key={fact}
                className="rise flex items-baseline gap-4 border-b border-salvia py-4 text-[0.9375rem] text-bosque"
                style={i(5 + n)}
              >
                <span aria-hidden className="font-serif text-lg text-jade-ink">
                  {String(n + 1).padStart(2, "0")}
                </span>
                {fact}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
