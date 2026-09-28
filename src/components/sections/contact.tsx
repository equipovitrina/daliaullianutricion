import { ArrowUpRight, CalendarCheck, MapPin, Phone, Video } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionLabel } from "@/components/section-label"
import { WhatsAppButton } from "@/components/cta"
import { InstagramIcon } from "@/components/icons"
import { site } from "@/lib/site"

const linkClass =
  "draw-link inline-flex items-center gap-1.5 rounded-sm pb-0.5 font-semibold text-bosque outline-none"

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title">
      <div className="mx-auto grid max-w-[88rem] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-28">
        <Reveal className="lg:col-span-6">
          <SectionLabel n="04">Contacto</SectionLabel>
          <h2
            id="contacto-title"
            className="mt-6 font-serif text-[clamp(2.75rem,2rem+3.4vw,5rem)] leading-[0.98] tracking-[-0.02em] text-bosque"
          >
            Agenda tu{" "}
            <span className="font-normal text-jade-ink">consulta.</span>
          </h2>
          <p className="mt-7 max-w-[28rem] text-lede text-ink-soft">
            Mándanos un mensaje por WhatsApp con el día que te acomoda y te
            confirmamos el horario.
          </p>
          <WhatsAppButton className="mt-10" />
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
          <dl className="border-t border-bosque">
            <div className="grid gap-2 border-b border-salvia py-7 sm:grid-cols-[9rem_1fr]">
              <dt className="flex items-center gap-2 text-eyebrow font-semibold text-jade-ink uppercase">
                <MapPin className="size-4" strokeWidth={1.75} aria-hidden />
                Consultorio
              </dt>
              <dd className="text-[1.0625rem] leading-relaxed text-bosque">
                <address className="not-italic">
                  {site.address.street}
                  <br />
                  {site.address.colony}, {site.address.city}, {site.address.state}
                </address>
                <a href={site.maps} target="_blank" rel="noopener noreferrer" className={`${linkClass} mt-3 text-[0.9375rem]`}>
                  Cómo llegar
                  <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
                  <span className="sr-only">(abre Google Maps)</span>
                </a>
              </dd>
            </div>

            <div className="grid gap-2 border-b border-salvia py-7 sm:grid-cols-[9rem_1fr]">
              <dt className="flex items-center gap-2 text-eyebrow font-semibold text-jade-ink uppercase">
                <CalendarCheck className="size-4" strokeWidth={1.75} aria-hidden />
                Horario
              </dt>
              <dd className="text-[1.0625rem] leading-relaxed text-bosque">
                Atención con cita previa.
              </dd>
            </div>

            <div className="grid gap-2 border-b border-salvia py-7 sm:grid-cols-[9rem_1fr]">
              <dt className="flex items-center gap-2 text-eyebrow font-semibold text-jade-ink uppercase">
                <Phone className="size-4" strokeWidth={1.75} aria-hidden />
                Teléfono
              </dt>
              <dd>
                <a href={`tel:${site.phoneE164}`} className={`${linkClass} text-[1.0625rem] font-normal`}>
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>

            <div className="grid gap-2 border-b border-salvia py-7 sm:grid-cols-[9rem_1fr]">
              <dt className="flex items-center gap-2 text-eyebrow font-semibold text-jade-ink uppercase">
                <Video className="size-4" strokeWidth={1.75} aria-hidden />
                En línea
              </dt>
              <dd className="text-[1.0625rem] leading-relaxed text-bosque">
                Consultas a distancia para quien no puede venir al consultorio.
              </dd>
            </div>

            <div className="grid gap-2 border-b border-salvia py-7 sm:grid-cols-[9rem_1fr]">
              <dt className="flex items-center gap-2 text-eyebrow font-semibold text-jade-ink uppercase">
                <InstagramIcon className="size-4" />
                Instagram
              </dt>
              <dd>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={`${linkClass} text-[1.0625rem] font-normal`}>
                  {site.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
