import { cn } from "cn"

// Logo horizontal maestro, exportado desde marca/herramientas. No se recrea
// con texto: es el mismo archivo que se usa en impresos y redes.
export function Wordmark({
  className,
  tone = "dark",
}: {
  className?: string
  tone?: "dark" | "light"
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- SVG vectorial; next/image no aporta nada aquí
    <img
      src={
        tone === "dark"
          ? "/marca/dalia-ulloa-logo-horizontal-positivo.svg"
          : "/marca/dalia-ulloa-logo-horizontal-negativo-marfil.svg"
      }
      alt="Dalia Ulloa · Nutrición Clínica"
      width={2575}
      height={698}
      className={cn("block h-10 w-auto", className)}
    />
  )
}
