import Image from "next/image"
import { Flower } from "@/components/flower"
import { Reveal } from "@/components/reveal"
import { SectionLabel } from "@/components/section-label"

export function About() {
  return (
    <section id="dalia" aria-labelledby="dalia-title">
      <div className="mx-auto grid max-w-[88rem] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <figure>
            <div className="relative">
            {/* Bloque Salvia desplazado detrás de la foto: marco de marca, sin sombras */}
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 bg-salvia sm:translate-x-6 sm:translate-y-6" />
            <div className="relative aspect-[3/4] overflow-hidden bg-hueso">
              <Image
                src="/images/dalia-ulloa-retrato.webp"
                alt="Retrato de la Lic. Dalia Ulloa, sonriente, con bata blanca sobre vestido azul y la mano en la cintura, frente a un fondo gris claro"
                fill
                sizes="(min-width: 1024px) 36vw, 92vw"
                className="object-cover object-top"
              />
            </div>
            <Flower className="absolute -top-6 -right-2 size-16 text-jade sm:-right-4 sm:size-20" />
            </div>
            <figcaption className="mt-12 flex items-center gap-4 text-eyebrow font-semibold text-bosque uppercase">
              <span className="font-serif text-2xl tracking-normal normal-case lining-nums">2012</span>
              <span aria-hidden className="h-px w-8 bg-jade" />
              Nutrición clínica en Navojoa, Sonora
            </figcaption>
          </figure>
        </Reveal>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <Reveal>
            <SectionLabel n="01">Acerca de mí</SectionLabel>
            <h2
              id="dalia-title"
              className="mt-6 font-serif text-h2 tracking-[-0.015em] text-bosque"
            >
              Licenciada en Nutrición Dalia Ulloa
            </h2>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                ¡Hola! Gracias por visitar mi página. Mi nombre es Dalia Ulloa y
                soy Licenciada en Nutrición Clínica. Egresé de la Universidad de
                Navojoa en el año 2012 y desde entonces me he dedicado a la
                consulta nutricional.
              </p>
              <p>
                A lo largo de estos años me he preparado en diferentes áreas de
                especialidad de la nutrición, lo que me permite ayudar a
                pacientes con distintas características y crear estrategias
                específicas para sus necesidades.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <blockquote className="mt-12 border-l-2 border-jade pl-6">
              <p className="font-serif text-[clamp(1.75rem,1.4rem+1.4vw,2.5rem)] leading-[1.1] text-bosque">
                Que tu salud sea lo más importante.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
