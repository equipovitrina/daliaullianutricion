export const site = {
  name: "Dalia Ulloa",
  descriptor: "Nutrición Clínica",
  motto: "Vida en equilibrio",
  // TODO: fijar NEXT_PUBLIC_SITE_URL cuando exista el dominio definitivo
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  phoneDisplay: "642 104 7743",
  phoneE164: "+526421047743",
  whatsapp:
    "https://wa.me/526421047743?text=" +
    encodeURIComponent("Hola, me gustaría agendar una consulta con la Lic. Dalia Ulloa."),
  instagram: "https://www.instagram.com/daliaulloanutricion/",
  instagramHandle: "@daliaulloanutricion",
  address: {
    street: "Pedro Moreno #1501",
    colony: "Col. Constitución",
    city: "Navojoa",
    state: "Sonora",
    country: "MX",
  },
  maps:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Pedro Moreno 1501, Constitución, Navojoa, Sonora, México"
    ),
  since: 2012,
} as const

export const nav = [
  { href: "#dalia", label: "Acerca de mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#pacientes", label: "Pacientes" },
  { href: "#contacto", label: "Contacto" },
] as const
