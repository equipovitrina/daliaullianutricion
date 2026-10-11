import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Dalia Ulloa · Nutrición Clínica en Navojoa, Sonora"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const dynamic = "force-static"

const PETAL = "M44 -60C82.8 -150.5 68.1 -218.9 0 -267C-68.1 -218.9 -82.8 -150.5 -44 -60A74 74 0 0 1 44 -60Z"
const SHORT = "M0 -116C13.2 -156.3 63.1 -194.8 61.1 -199C48.7 -225.1 32.3 -253.2 0 -274C-32.3 -253.2 -48.7 -225.1 -61.1 -199C-63.1 -194.8 -13.2 -156.3 0 -116Z"

export default async function OpengraphImage() {
  const name = "Dalia Ulloa"
  const desc = "NUTRICIÓN CLÍNICA · NAVOJOA, SONORA"
  const [serif, sans] = await Promise.all([
    readFile(join(process.cwd(), "src/app/fonts/prata-latin-400-normal.woff")),
    readFile(join(process.cwd(), "src/app/fonts/source-sans-3-latin-600-normal.woff")),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f1e9",
          color: "#315849",
        }}
      >
        <svg width="150" height="150" viewBox="-274 -274 548 548" fill="#459c95">
          <g>
            {[45, 135, 225, 315].map((r) => (
              <path key={r} d={PETAL} transform={`rotate(${r})`} />
            ))}
            {[0, 90, 180, 270].map((r) => (
              <path key={r} d={SHORT} transform={`rotate(${r})`} />
            ))}
            <circle r="49" />
          </g>
        </svg>
        <div style={{ fontFamily: "Prata", fontSize: 140, lineHeight: 1, marginTop: 24, letterSpacing: "-0.06em" }}>
          {name}
        </div>
        <div
          style={{
            fontFamily: "Source",
            fontSize: 26,
            letterSpacing: "0.24em",
            color: "#315849",
            marginTop: 28,
          }}
        >
          {desc}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Prata", data: serif, weight: 400 },
        { name: "Source", data: sans, weight: 600 },
      ],
    }
  )
}
