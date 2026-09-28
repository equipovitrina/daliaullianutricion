import { WhatsAppIcon } from "@/components/icons"
import { site } from "@/lib/site"
import { cn } from "cn"

export function WhatsAppButton({
  className,
  label = "Agenda por WhatsApp",
  tone = "dark",
}: {
  className?: string
  label?: string
  tone?: "dark" | "light"
}) {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "press inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[0.9375rem] font-semibold tracking-[0.01em] outline-none focus-visible:ring-3 focus-visible:ring-jade/60 focus-visible:ring-offset-2",
        tone === "dark"
          ? "bg-bosque text-marfil focus-visible:ring-offset-marfil [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#274a3c]"
          : "bg-marfil text-bosque focus-visible:ring-offset-bosque [@media(hover:hover)_and_(pointer:fine)]:hover:bg-salvia",
        className
      )}
    >
      <WhatsAppIcon className="size-5" />
      {label}
      <span className="sr-only">(se abre en WhatsApp)</span>
    </a>
  )
}
