/**
 * Flor maestra de Dalia Ulloa. Geometría exportada de marca/herramientas/flor.mjs
 * (no editar a mano: regenerar desde ahí). Unidades de la retícula maestra.
 */
const PRINCIPAL = "M44 -60C82.8 -150.5 68.1 -218.9 0 -267C-68.1 -218.9 -82.8 -150.5 -44 -60A74 74 0 0 1 44 -60Z"
const SECUNDARIO = "M0 -116C13.2 -156.3 63.1 -194.8 61.1 -199C48.7 -225.1 32.3 -253.2 0 -274C-32.3 -253.2 -48.7 -225.1 -61.1 -199C-63.1 -194.8 -13.2 -156.3 0 -116Z"

export function Flower({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="-274 -274 548 548"
      className={className}
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {[45, 135, 225, 315].map((r) => (
        <path key={r} d={PRINCIPAL} transform={`rotate(${r})`} />
      ))}
      {[0, 90, 180, 270].map((r) => (
        <path key={r} d={SECUNDARIO} transform={`rotate(${r})`} />
      ))}
      <circle r="49" />
    </svg>
  )
}
