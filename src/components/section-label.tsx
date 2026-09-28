import { cn } from "cn"

export function SectionLabel({
  n,
  children,
  tone = "dark",
}: {
  n: string
  children: React.ReactNode
  tone?: "dark" | "light"
}) {
  return (
    <p
      // Plain concat: tailwind-merge reads text-eyebrow and text-jade-ink as a conflict
      className={`flex items-center gap-4 text-eyebrow font-semibold uppercase ${
        tone === "dark" ? "text-jade-ink" : "text-salvia"
      }`}
    >
      <span>{n}</span>
      <span aria-hidden className={cn("h-px w-10", tone === "dark" ? "bg-jade" : "bg-salvia/60")} />
      <span>{children}</span>
    </p>
  )
}
