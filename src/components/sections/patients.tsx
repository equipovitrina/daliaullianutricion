import { Reveal } from "@/components/reveal"
import { SectionLabel } from "@/components/section-label"

const groups = [
  {
    title: "Quieres bajar o controlar tu peso",
    body: "Sin dietas extremas ni listas de alimentos prohibidos. Un plan que aguante una semana pesada de trabajo, una comida familiar y un domingo sin ganas de cocinar.",
  },
  {
    title: "Quieres cuidar tu salud",
    body: "Diabetes, presión alta, colesterol o triglicéridos elevados. La alimentación se ajusta a tu diagnóstico y va de la mano con lo que indica tu médico.",
  },
]

export function Patients() {
  return (
    <section
      id="pacientes"
      aria-labelledby="pacientes-title"
      className="border-t border-salvia bg-hueso"
    >
      <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <SectionLabel n="03">Pacientes</SectionLabel>
          <h2
            id="pacientes-title"
            className="mt-6 font-serif text-h2 tracking-[-0.015em] text-bosque"
          >
            Un plan para cada necesidad
          </h2>
          <p className="mt-6 max-w-[26rem] text-lede text-ink-soft">
            No solo es bajar de peso. Es cuidarte a ti y a tu salud.
          </p>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:col-span-7 lg:pt-3">
          {groups.map((g, n) => (
            <Reveal key={g.title} delay={n * 0.06} className="border-t-2 border-bosque pt-6">
              <h3 className="font-serif text-h3 text-bosque">{g.title}</h3>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-soft">{g.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
