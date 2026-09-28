"use client"

import { useState } from "react"
import { Menu, ArrowRight } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Wordmark } from "@/components/wordmark"
import { site } from "@/lib/site"

const links = [{ href: "#inicio", label: "Inicio" }, { href: "#sobre-mi", label: "Sobre mí" }, { href: "#servicios", label: "Servicios" }, { href: "#pacientes", label: "Pacientes" }, { href: "#contacto", label: "Contacto" }]
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="v1-header"><div className="v1-header-inner">
    <a href="#inicio" className="v1-logo" aria-label="Dalia Ulloa Nutrición Clínica, inicio"><Wordmark /></a>
    <nav aria-label="Principal" className="v1-nav">{links.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}</nav>
    <a className="v1-button v1-header-cta" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Agenda tu consulta<ArrowRight size={17} aria-hidden="true" /><span className="sr-only"> por WhatsApp</span></a>
    <Sheet open={open} onOpenChange={setOpen}><SheetTrigger className="v1-menu-button" aria-label="Abrir menú"><Menu strokeWidth={1.5} /></SheetTrigger><SheetContent side="right" className="v1-mobile-panel"><SheetTitle className="sr-only">Menú principal</SheetTitle><SheetDescription className="sr-only">Secciones de Dalia Ulloa Nutrición Clínica</SheetDescription><Wordmark /><nav aria-label="Menú móvil">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</nav><a className="v1-button" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Agenda tu consulta<ArrowRight size={18} aria-hidden="true" /><span className="sr-only"> por WhatsApp</span></a></SheetContent></Sheet>
  </div></header>
}
