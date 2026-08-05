import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Mail,
  Menu,
  MonitorSmartphone,
  Phone,
  Server,
  Sparkles,
} from 'lucide-react'
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import { MdBrush, MdGroups, MdMovieCreation } from 'react-icons/md'
import { SiGooglecloud, SiMysql, SiNestjs, SiPostgresql } from 'react-icons/si'
import './App.css'

const sections = ['inicio', 'proyectos', 'habilidades', 'enfoque', 'contacto']

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const sectionItems = document.querySelectorAll('[data-section]')

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      { threshold: 0.22 },
    )

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-30% 0px -45% 0px', threshold: [0.2, 0.45, 0.7] },
    )

    revealItems.forEach((item) => revealObserver.observe(item))
    sectionItems.forEach((item) => sectionObserver.observe(item))

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  const profile = {
    siteName: 'joshipanda',
    name: 'Edgar Josías Cán Ajquejay',
    role: 'Desarrollador web',
    email: 'josiascan2002@gmail.com',
    phone: '+502 3762 4286',
    github: 'https://github.com/joshi20022021',
    linkedin: 'https://www.linkedin.com/in/edgar-josías-cán-ajquejay-07143a245',
    summary:
      'Desarrollo interfaces web y servicios backend combinando React, Node.js, Python, bases de datos y herramientas cloud. Actualmente estoy aprendiendo NestJS para fortalecer mi arquitectura backend.',
  }

  const projectSlots = [
    {
      title: 'Proyecto documentado en GitHub',
      type: 'Próximamente',
      description:
        'Espacio reservado para un proyecto que documentaré, corregiré y conectaré con su repositorio.',
      stack: ['React', 'Node.js', 'GitHub'],
      preview: 'frontend',
    },
    {
      title: 'API o servicio backend',
      type: 'Próximamente',
      description:
        'Aquí irá una API, servicio o integración backend con detalles técnicos y vista previa.',
      stack: ['Node.js', 'NestJS', 'PostgreSQL'],
      preview: 'backend',
    },
    {
      title: 'Proyecto full stack',
      type: 'Próximamente',
      description:
        'Tarjeta preparada para mostrar imagen, explicación, stack, estado y enlace al repositorio.',
      stack: ['React', 'Docker', 'Cloud'],
      preview: 'fullstack',
    },
  ]

  const skillGroups = [
    {
      title: 'Frontend',
      text: 'Construcción visual y funcional para interfaces web responsive.',
      items: [
        { name: 'HTML', icon: FaHtml5 },
        { name: 'CSS', icon: FaCss3Alt },
        { name: 'JavaScript', icon: FaJs },
        { name: 'React', icon: FaReact },
      ],
    },
    {
      title: 'Backend',
      text: 'Lógica de servidor, APIs y aprendizaje continuo de arquitectura backend.',
      items: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Python', icon: FaPython },
        { name: 'Aprendiendo NestJS', icon: SiNestjs },
      ],
    },
    {
      title: 'Bases de datos',
      text: 'Modelado y conexión de datos para aplicaciones web.',
      items: [
        { name: 'MySQL', icon: SiMysql },
        { name: 'PostgreSQL', icon: SiPostgresql },
      ],
    },
    {
      title: 'Nube y herramientas',
      text: 'Control de versiones, contenedores y servicios cloud.',
      items: [
        { name: 'AWS', icon: FaAws },
        { name: 'GCP', icon: SiGooglecloud },
        { name: 'Docker', icon: FaDocker },
        { name: 'GitHub', icon: FaGithub },
        { name: 'GitLab', icon: FaGitlab },
      ],
    },
    {
      title: 'Contenido audiovisual',
      text: 'Creación visual para complementar productos digitales y comunicación.',
      items: [
        { name: 'Photoshop', icon: MdBrush },
        { name: 'Illustrator', icon: MdBrush },
        { name: 'After Effects', icon: MdMovieCreation },
      ],
    },
    {
      title: 'Comunicación',
      text: 'Trabajo colaborativo con claridad para avanzar en equipo.',
      items: [
        { name: 'Trabajo en equipo', icon: MdGroups },
        { name: 'Buena comunicación', icon: MdGroups },
        { name: 'Inglés B1', icon: MdGroups },
      ],
    },
  ]

  const focusAreas = [
    {
      icon: MonitorSmartphone,
      title: 'Frontend con intención',
      text: 'Interfaces claras, ordenadas y responsive con HTML, CSS, JavaScript y React.',
    },
    {
      icon: Server,
      title: 'Backend en crecimiento',
      text: 'APIs y servicios con Node.js, Python, bases de datos y aprendizaje activo de NestJS.',
    },
    {
      icon: Layers3,
      title: 'Perfil técnico-creativo',
      text: 'Desarrollo web acompañado de criterio visual para contenido, documentación y presentación.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b1020]/88 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a className="flex min-w-0 items-center gap-2 font-semibold" href="#inicio">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#00d1b2] text-[#071118]">
              <Code2 size={20} />
            </span>
            <span className="truncate">{profile.siteName}</span>
          </a>
          <div className="hidden items-center gap-1 text-sm text-slate-300 md:flex">
            {sections.map((section) => (
              <a
                className={activeSection === section ? 'nav-link is-active' : 'nav-link'}
                href={`#${section}`}
                key={section}
              >
                {section}
              </a>
            ))}
          </div>
          <button className="icon-button md:hidden" type="button" aria-label="Abrir menú">
            <Menu size={21} />
          </button>
        </nav>
      </header>

      <section
        id="inicio"
        data-section
        className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24"
      >
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#00d1b2]/30 bg-[#00d1b2]/10 px-3 py-2 text-sm font-medium text-[#75f6e0]">
            <Sparkles size={16} />
            {profile.siteName}
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-4 text-2xl font-bold text-[#75f6e0]">{profile.role}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="primary-button" href="#proyectos">
              Ver proyectos
              <ArrowUpRight size={18} />
            </a>
            <a className="secondary-button" href="#contacto">
              Contáctame
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="relative reveal">
          <div className="portfolio-window">
            <div className="window-top">
              <span />
              <span />
              <span />
            </div>
            <div className="space-y-5 p-5">
              <div>
                <p className="text-sm text-[#75f6e0]">Stack principal</p>
                <h2 className="mt-2 text-2xl font-bold">React + Node.js + Python</h2>
              </div>
              <div className="grid gap-3">
                {[
                  { label: 'Frontend con React', icon: FaReact },
                  { label: 'Backend con Node.js', icon: FaNodeJs },
                  { label: 'Aprendiendo NestJS', icon: SiNestjs },
                ].map((item) => (
                  <div
                    className="flex items-center justify-between rounded-md bg-white/8 p-4"
                    key={item.label}
                  >
                    <span className="flex items-center gap-3">
                      <item.icon className="text-[#75f6e0]" size={22} />
                      {item.label}
                    </span>
                    <ArrowUpRight className="text-[#00d1b2]" size={18} />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <Stat value="8+" label="Tecnologías" />
                <Stat value="2" label="Bases de datos" />
                <Stat value="B1" label="Inglés" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        data-section
        className="border-y border-white/10 bg-white/[0.03] px-5 py-16"
      >
        <div className="mx-auto max-w-6xl reveal">
          <SectionTitle
            kicker="Repositorio y documentación"
            title="Proyectos en preparación"
            text="Este apartado está listo para conectar proyectos documentados en GitHub, mostrar capturas dentro de la web y actualizar cada tarjeta cuando corrijas errores o publiques avances."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {projectSlots.map((project) => (
              <article className="project-card" key={project.title}>
                <ProjectPreview type={project.preview} />
                <div className="mt-5 flex items-center justify-between">
                  <span className="rounded-md bg-[#00d1b2]/10 px-3 py-1 text-sm font-semibold text-[#75f6e0]">
                    {project.type}
                  </span>
                  <span className="text-sm text-slate-400">GitHub pendiente</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      className="rounded-md border border-white/10 px-3 py-1 text-sm text-slate-300"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="habilidades" data-section className="mx-auto max-w-6xl px-5 py-16">
        <div className="reveal">
          <SectionTitle
            kicker="Stack técnico"
            title="Habilidades"
            text="Cada grupo representa una parte de mi perfil actual: desarrollo web, backend, datos, nube, herramientas y comunicación."
          />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article className="service-card reveal" key={group.title}>
              <h3 className="text-xl font-bold">{group.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{group.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span className="skill-pill" key={skill.name}>
                    <skill.icon className="skill-icon" size={18} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="enfoque" data-section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="reveal">
          <SectionTitle kicker="Cómo puedo aportar" title="Áreas de enfoque" />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article className="service-card reveal" key={area.title}>
              <area.icon className="text-[#00d1b2]" size={28} />
              <h3 className="mt-5 text-xl font-bold">{area.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer id="contacto" data-section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between reveal">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#75f6e0]">
              Contacto
            </p>
            <h2 className="mt-2 text-3xl font-bold">Hablemos de tu próximo proyecto.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="secondary-button" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              {profile.email}
            </a>
            <a className="secondary-button" href={`tel:${profile.phone.replaceAll(' ', '')}`}>
              <Phone size={18} />
              {profile.phone}
            </a>
            <a className="secondary-button" href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub size={18} />
              GitHub
            </a>
            <a className="secondary-button" href={profile.linkedin} target="_blank" rel="noreferrer">
              <ArrowUpRight size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function SectionTitle({ kicker, title, text }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#75f6e0]">
        {kicker}
      </p>
      <h2 className="mt-2 text-3xl font-black sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 max-w-3xl leading-7 text-slate-300">{text}</p> : null}
    </div>
  )
}

function ProjectPreview({ type }) {
  const rows = {
    frontend: ['Nav.jsx', 'Hero.jsx', 'ProjectCard.jsx'],
    backend: ['auth.controller.ts', 'users.service.ts', 'schema.sql'],
    fullstack: ['client/', 'server/', 'docker-compose.yml'],
  }

  return (
    <div className={`project-preview preview-${type}`}>
      <div className="preview-toolbar">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-screen">
        <div className="preview-sidebar">
          {rows[type].map((row) => (
            <span key={row}>{row}</span>
          ))}
        </div>
        <div className="preview-canvas">
          <div className="preview-line w-3/4" />
          <div className="preview-line w-1/2" />
          <div className="preview-grid">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div className="rounded-md border border-white/10 bg-[#111a2f] p-4">
      <p className="text-2xl font-black text-[#00d1b2]">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  )
}

export default App
