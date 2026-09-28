import Image from "next/image"
import { ArrowRight, ArrowUpRight, UserRound, UsersRound, Mail, Sprout, Heart, Ruler, Video, ClipboardList, CalendarDays, MessageCircle, Phone, MapPin } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Wordmark } from "@/components/wordmark"
import { Flower } from "@/components/flower"
import { InstagramIcon } from "@/components/icons"
import { site } from "@/lib/site"

const shortcuts = [
  { href: "#sobre-mi", title: "Sobre mí", text: <>Mi historia y<br />mi enfoque</>, icon: UserRound, tone: "sage" },
  { href: "#servicios", title: "Servicios", text: <>Nutrición personalizada<br />para cada etapa</>, icon: Sprout, tone: "sand" },
  { href: "#pacientes", title: "Pacientes", text: <>Un plan para ti,<br />para tu vida real</>, icon: UsersRound, tone: "clay" },
  { href: "#contacto", title: "Contacto", text: <>Agenda tu consulta<br />fácilmente</>, icon: Mail, tone: "forest" },
]
const services = [
  { icon: ClipboardList, name: "Consulta nutricional", text: "Un espacio para conocer tu historia, tus hábitos y lo que necesitas." },
  { icon: Heart, name: "Control de peso", text: "Un plan adaptado a ti, con metas realistas y acompañamiento." },
  { icon: Sprout, name: "Nutrición clínica", text: "Atención nutricional para enfermedades crónicas, en coordinación con tu tratamiento." },
  { icon: CalendarDays, name: "Planes personalizados", text: "Alimentación que se adapta a tus necesidades, tus horarios y tu día a día." },
  { icon: Ruler, name: "Evaluación corporal", text: "Peso y mediciones para conocer tu punto de partida y seguir tus avances." },
  { icon: MessageCircle, name: "Seguimiento", text: "Revisamos cómo te sientes y ajustamos tu plan a lo largo del proceso." },
]
function Appointment({ light = false, children = "Agenda tu consulta" }: { light?: boolean; children?: React.ReactNode }) {
  return <a className={`v1-button${light ? " light" : ""}`} href={site.whatsapp} target="_blank" rel="noopener noreferrer">{children}<ArrowRight size={19} strokeWidth={1.4} aria-hidden="true" /><span className="sr-only"> por WhatsApp (abre en otra pestaña)</span></a>
}
function Ornament() {
  return <div className="v1-ornament" aria-hidden="true"><Flower /><span /></div>
}

export default function Home() {
  return <>
    <a href="#contenido" className="v1-skip">Saltar al contenido</a>
    <SiteHeader />
    <main id="contenido" className="v1-main">
      <section id="inicio" className="v1-hero" aria-labelledby="hero-title">
        <Image src="/images/v1/hero.webp" alt="Retrato ilustrativo de Dalia Ulloa creado con IA a partir de sus fotografías de referencia" fill preload sizes="100vw" className="v1-hero-image" />
        <div className="v1-hero-inner">
          <div className="v1-hero-copy">
            <p className="v1-eyebrow">Nutrición clínica · Navojoa, Sonora</p>
            <h1 id="hero-title">Nutrición <br />para una vida<br />que disfrutas.</h1>
            <Ornament />
            <p className="v1-hero-quote">Cuidar lo que amas,<br />es cuidarte a ti también.</p>
            <Appointment />
          </div>
        </div>
      </section>

      <nav className="v1-shortcuts" aria-label="Conoce el consultorio">
        {shortcuts.map(({ href, title, text, icon: Icon, tone }) => <a href={href} key={href} className="v1-shortcut">
          <span className={`v1-circle ${tone}`}><Icon strokeWidth={1.15} aria-hidden="true" /></span>
          <span className="v1-shortcut-title">{title}</span><span className="v1-shortcut-text">{text}</span>
        </a>)}
      </nav>

      <section className="v1-editorial" aria-label="Hábitos para una vida que disfrutas">
        <div className="v1-food">
          <Image src="/images/v1/food.webp" alt="Plato de alimentos variados con aguacate, pollo, quinoa y hojas verdes" fill sizes="(max-width: 600px) 100vw, 36vw" />
          <div className="v1-food-note"><p>Comer bien<br />también es<br />una forma<br />de cuidarte.</p><Ornament /></div>
        </div>
        <div className="v1-changes">
          <Image src="/images/v1/botanical.webp" alt="" fill sizes="(max-width: 600px) 50vw, 30vw" />
          <div><p>Pequeños<br />cambios,<br />grandes<br />resultados.</p><Ornament /></div>
        </div>
        <div className="v1-habits">
          <div className="v1-drink"><Image src="/images/v1/drink.webp" alt="Una bebida verde sobre una mesa iluminada por luz natural" fill sizes="(max-width: 600px) 50vw, 34vw" /></div>
          <div className="v1-habits-copy"><p>Hábitos reales<br />para tu vida real.</p><Ornament /></div>
        </div>
      </section>

      <section className="v1-approach" aria-labelledby="enfoque-title">
        <div className="v1-ritual"><Image src="/images/v1/ritual.webp" alt="Libreta, té y una rama de olivo en una mesa cálida" fill sizes="(max-width: 700px) 100vw, 44vw" /><span>Salud · Bienestar · Equilibrio</span></div>
        <div className="v1-approach-copy"><p className="v1-eyebrow">Un paso a la vez</p><h2 id="enfoque-title">Mi enfoque</h2><p>Te acompaño a crear hábitos de alimentación realistas y sostenibles, adaptados a tu estilo de vida, para que te sientas bien hoy y en el futuro.</p><a className="v1-button" href="#sobre-mi">Conoce más sobre mí<ArrowRight size={18} aria-hidden="true" /></a></div>
      </section>

      <section id="sobre-mi" className="v1-about v1-container v1-section" aria-labelledby="about-title">
        <figure className="v1-about-portrait"><Image src="/images/v1/dalia-perfil.webp" alt="Dalia Ulloa, con bata blanca y una sonrisa, en un retrato con fondo botánico editado con IA" fill sizes="(max-width: 700px) calc(100vw - 50px), (max-width: 1180px) 43vw, 458px" /></figure>
        <div className="v1-about-copy"><p className="v1-eyebrow">Sobre mí</p><h2 id="about-title">Hola, soy <br />Dalia Ulloa.</h2><Ornament /><p className="v1-lead">Creo en una nutrición que encuentra su lugar en tu vida.</p><p>Soy licenciada en Nutrición y desde 2012 me dedico a la consulta nutricional en Navojoa, Sonora. Mi trabajo comienza por escucharte: entender tus necesidades, tus hábitos y lo que quieres lograr.</p><p>Cada persona llega con una historia distinta. Por eso, tu alimentación y tu seguimiento se construyen contigo, con atención personalizada, cercanía y confidencialidad.</p><p className="v1-signoff">Que tu salud sea lo más importante.</p></div>
      </section>

      <section id="servicios" className="v1-services v1-section" aria-labelledby="services-title">
        <div className="v1-container"><div className="v1-section-heading"><p className="v1-eyebrow">Servicios</p><h2 id="services-title">Cuidado que se adapta a ti.</h2><p>Atención profesional para cada etapa de tu proceso.</p></div>
          <div className="v1-service-grid">{services.map(({ icon: Icon, name, text }) => <article key={name} className="v1-service"><Icon size={27} strokeWidth={1.25} aria-hidden="true" /><h3>{name}</h3><p>{text}</p></article>)}</div>
          <div className="v1-online"><div className="v1-online-label"><Video size={26} strokeWidth={1.25} aria-hidden="true" /><h3>También, desde donde estés.</h3></div><p>Consulta en línea con atención personalizada y seguimiento.</p><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="v1-text-link">Agenda en línea<ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> por WhatsApp</span></a></div>
        </div>
      </section>

      <section id="pacientes" className="v1-patients v1-container v1-section" aria-labelledby="patients-title"><div className="v1-section-heading"><p className="v1-eyebrow">Pacientes</p><h2 id="patients-title">Tu historia. Tu ritmo. Tu plan.</h2><p>Ya sea que busques cuidar tu peso o mejorar tu salud,<br className="v1-desktop-break" /> aquí hay un espacio para ti.</p></div>
        <div className="v1-patient-grid"><article><span className="v1-mini-label">01 / Control de peso</span><h3>Sentirte bien contigo.</h3><p>Construimos hábitos de alimentación que puedas mantener, considerando tus gustos, tus horarios y tus necesidades.</p></article><article><span className="v1-mini-label">02 / Salud y bienestar</span><h3>Cuidar lo que importa.</h3><p>Atención nutricional para diabetes, hipertensión y otras enfermedades crónicas, como parte del cuidado de tu salud.</p></article></div>
        <div className="v1-process"><h3>Así comenzamos</h3><ol><li><span>1</span><div><strong>Platicamos</strong><p>Conocemos tu historia y tus objetivos.</p></div></li><li><span>2</span><div><strong>Creamos tu plan</strong><p>Evaluamos tus necesidades y lo adaptamos a ti.</p></div></li><li><span>3</span><div><strong>Te acompaño</strong><p>Revisamos tus avances y hacemos ajustes.</p></div></li></ol></div>
      </section>

      <section id="contacto" className="v1-contact" aria-labelledby="contact-title"><div className="v1-container v1-contact-inner"><div><p className="v1-eyebrow">Demos el primer paso</p><h2 id="contact-title">Tu bienestar<br />empieza contigo.</h2><p>Escríbeme y encontremos un momento para tu consulta.</p><Appointment light /><span className="v1-appointment-note">Atención con cita previa · Presencial y en línea</span></div><div className="v1-contact-details"><div className="v1-contact-row"><MapPin aria-hidden="true" /><div><span>Consultorio</span><p>{site.address.street}<br />{site.address.colony}<br />{site.address.city}, {site.address.state}</p><a href={site.maps} target="_blank" rel="noopener noreferrer">Cómo llegar<ArrowUpRight size={15} aria-hidden="true" /></a></div></div><div className="v1-contact-row"><InstagramIcon /><div><span>Sigamos en contacto</span><a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}<ArrowUpRight size={15} aria-hidden="true" /></a></div></div><div className="v1-contact-row"><Phone aria-hidden="true" /><div><span>Teléfono</span><a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a></div></div><div className="v1-contact-row"><Mail aria-hidden="true" /><div><span>Correo</span><a href="mailto:daliaulloa4@gmail.com">daliaulloa4@gmail.com</a></div></div></div></div></section>
    </main>
    <footer className="v1-footer v1-container"><a href="#inicio" aria-label="Volver al inicio"><Wordmark /></a><p>© {new Date().getFullYear()} Dalia Ulloa Nutrición Clínica</p><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="v1-footer-message">Cuidar lo que amas, es cuidarte a ti también.<ArrowUpRight size={15} aria-hidden="true" /></a></footer>
  </>
}
