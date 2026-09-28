import { Reveal } from "@/components/reveal"
import { SectionLabel } from "@/components/section-label"

const services = [
  {
    name: "Consulta nutricional",
    body: "Una primera cita sin prisas para entender tu historia, tus hábitos y lo que buscas.",
  },
  {
    name: "Control de peso",
    body: "Metas que se pueden cumplir, con alimentos accesibles para ti y tu familia.",
  },
  {
    name: "Enfermedades crónicas",
    body: "Control nutricional para pacientes con diabetes, hipertensión y colesterol alto, en coordinación con tu tratamiento.",
  },
  {
    name: "Planes de alimentación personalizados",
    body: "Armados con la comida que sí compras y los horarios que sí tienes.",
  },
  {
    name: "Mediciones y evaluación corporal",
    body: "Peso y medidas en cada cita, para medir avances reales y no solo un número.",
  },
  {
    name: "Seguimiento",
    body: "Revisiones periódicas. El plan cambia cuando tú cambias.",
  },
  {
    name: "Consulta en línea",
    body: "Si no estás en Navojoa o no te da el tiempo de venir, también puedes consultar a distancia.",
  },
]

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-28">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-32">
            <SectionLabel n="02">Servicios</SectionLabel>
            <h2
              id="servicios-title"
              className="mt-6 font-serif text-h2 tracking-[-0.015em] text-bosque"
            >
              Lo que hacemos en consulta
            </h2>
            <p className="mt-6 max-w-[22rem] text-[1.0625rem] leading-relaxed text-ink-soft">
              Nutrición clínica de verdad: con mediciones, seguimiento y un plan
              que se revisa paso a paso.
            </p>
          </Reveal>
        </div>

        <ol className="border-t border-bosque lg:col-span-7 lg:col-start-6">
          {services.map((s, n) => (
            <Reveal
              as="li"
              key={s.name}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-salvia py-7 sm:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.1fr)] sm:gap-x-6"
            >
              <span aria-hidden className="pt-1 font-serif text-lg text-jade-ink">
                {String(n + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-[1.625rem] leading-[1.1] text-bosque">
                {s.name}
              </h3>
              <p className="col-start-2 mt-3 text-base leading-relaxed text-ink-soft sm:col-start-3 sm:mt-1">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
