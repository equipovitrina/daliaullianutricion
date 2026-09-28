import { Reveal } from "@/components/reveal"

// TODO: TESTIMONIOS DE MUESTRA. Reemplazar por comentarios reales de
// pacientes (con su permiso) antes de publicar el sitio.
// Se firman por motivo de consulta y no por nombre, por confidencialidad.
const testimonials = [
  {
    quote:
      "Llegué con la glucosa descontrolada y mucho miedo. Dalia me explicó todo con calma y por primera vez entendí qué comer sin sentir que me estaban castigando.",
    who: "Paciente con diabetes tipo 2",
  },
  {
    quote:
      "Ya había intentado de todo. Lo que cambió fue el seguimiento: cada dos semanas ajustábamos algo pequeño.",
    who: "Paciente de control de peso",
  },
  {
    quote:
      "Vivo fuera de Navojoa y llevo mis consultas en línea. Se siente igual de cercano.",
    who: "Paciente en consulta en línea",
  },
]

export function Testimonials() {
  const [lead, ...rest] = testimonials
  return (
    <section aria-labelledby="testimonios-title" className="bg-hueso">
      <div className="mx-auto max-w-[88rem] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <Reveal>
          <h2
            id="testimonios-title"
            className="border-t border-salvia pt-16 max-w-none font-serif text-h2 tracking-[-0.015em] text-bosque"
          >
            Lo que cuentan quienes ya pasaron por consulta
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <Reveal as="article" className="lg:col-span-7">
            <figure>
              <blockquote className="font-serif text-[clamp(1.75rem,1.3rem+1.8vw,2.875rem)] leading-[1.12] text-bosque">
                <p>“{lead.quote}”</p>
              </blockquote>
              <figcaption className="mt-8 text-eyebrow font-semibold text-jade-ink uppercase">
                {lead.who}
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex flex-col gap-10 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-salvia lg:pl-10">
            {rest.map((t, n) => (
              <Reveal as="article" key={t.who} delay={0.06 * (n + 1)}>
                <figure className="border-t border-salvia pt-6 lg:border-0 lg:pt-0">
                  <blockquote className="text-[1.125rem] leading-relaxed text-bosque">
                    <p>“{t.quote}”</p>
                  </blockquote>
                  <figcaption className="mt-4 text-eyebrow font-semibold text-jade-ink uppercase">
                    {t.who}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
