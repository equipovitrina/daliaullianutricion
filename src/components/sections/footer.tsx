import { Wordmark } from "@/components/wordmark"
import { InstagramIcon, WhatsAppIcon } from "@/components/icons"
import { nav, site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-bosque text-marfil">
      <div className="mx-auto max-w-[88rem] px-5 pt-16 pb-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Wordmark tone="light" />
            <p className="mt-6 text-eyebrow font-semibold text-salvia uppercase">
              {site.motto}
            </p>
          </div>

          <nav aria-label="Pie de página">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[0.9375rem] text-salvia">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="draw-link rounded-sm pb-0.5 outline-none hover:text-marfil focus-visible:text-marfil">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-2">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Dalia Ulloa Nutrición"
              className="press inline-flex size-11 items-center justify-center rounded-full border border-salvia/40 text-marfil outline-none focus-visible:ring-3 focus-visible:ring-salvia/70 [@media(hover:hover)_and_(pointer:fine)]:hover:border-salvia"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir por WhatsApp"
              className="press inline-flex size-11 items-center justify-center rounded-full border border-salvia/40 text-marfil outline-none focus-visible:ring-3 focus-visible:ring-salvia/70 [@media(hover:hover)_and_(pointer:fine)]:hover:border-salvia"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-salvia/30 pt-6 text-sm text-salvia sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Dalia Ulloa Nutrición Clínica · Navojoa, Sonora</p>
          <p>
            Built with Claude Web Builder by{" "}
            <a href="https://tododeia.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-marfil">
              Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
