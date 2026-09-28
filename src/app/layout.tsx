import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { site } from "@/lib/site"
import "./globals.css"
import "./landing.css"

// Prata: tipografía del logotipo y de todos los títulos.
const serif = localFont({
  src: "./fonts/prata-latin-400-normal.woff",
  variable: "--font-serif",
  weight: "400",
  display: "swap",
})

const sans = localFont({
  src: "./fonts/source-sans-3-latin-600-normal.woff",
  weight: "600",
  variable: "--font-sans",
  display: "swap",
})

const title = "Dalia Ulloa · Nutrición Clínica en Navojoa, Sonora"
const description =
  "Consulta de nutrición clínica con la Lic. Dalia Ulloa en Navojoa desde 2012. Control de peso, diabetes, hipertensión y planes de alimentación personalizados, con seguimiento. También en línea."

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "Dalia Ulloa Nutrición Clínica",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
}

export const viewport: Viewport = {
  themeColor: "#f5f1e9",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${serif.variable} ${sans.variable} antialiased`}>
      <body className="min-h-full bg-marfil text-bosque">{children}</body>
    </html>
  )
}
