import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Target,
  GraduationCap,
  Briefcase,
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  CheckCircle2,
  Trophy,
  Rocket,
  ChevronRight
} from 'lucide-react';

// --- Components ---

const Logo = ({ light = false, hideText = false }) => (
  <img
    src={hideText ? "/logo.png" : "/personalogo.png"}
    alt="PERSONA+"
    className={`h-8 md:h-10 w-auto object-contain transition-all ${light ? 'brightness-0 invert' : ''}`}
  />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Oportunidades', href: '#oportunidades' },
    { name: 'Referências', href: '#referencias' },
    { name: 'Emprego', href: '#emprego' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between gap-4">
        <a href="/" className="flex-shrink-0">
          <Logo />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-primary font-semibold text-sm xl:text-base hover:text-accent whitespace-nowrap transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button className="btn btn-accent px-6 py-2.5 text-sm whitespace-nowrap ml-2">
            Aceder Plataforma
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary hover:bg-blue-50 rounded-xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full glass shadow-2xl overflow-hidden border-t border-gray-100"
          >
            <div className="container flex flex-col py-8 gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg text-primary font-bold hover:text-accent transition-colors flex items-center justify-between"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <ChevronRight size={20} className="text-accent" />
                </a>
              ))}
              <hr className="border-gray-100" />
              <button className="btn btn-accent w-full py-4 text-lg">Aceder Plataforma</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="shape shape-1" />
    <div className="shape shape-2" />

    <div className="container grid grid-2 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
          Onde a sua marca ganha vida
        </span>
        <h1 className="leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
          Construa uma Marca Pessoal <span className="text-gradient">Forte e Estratégica</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '540px', lineHeight: '1.6' }}>
          A PERSONA+ ajuda profissionais e líderes a posicionarem-se com clareza, autoridade e impacto no mercado global.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-accent">
            Peça sua Formação, Mentoria ou Capacitação <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn" style={{ border: '2px solid var(--primary)', color: 'var(--primary)' }}>
            Nossos Programas
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ border: '8px solid white' }}>
          <img src="/hero.png" alt="Persona+ Hero" className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 glass p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-primary">#1 em Posicionamento</div>
              <div className="text-xs text-muted">Liderança e Carreira</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="section bg-white">
    <div className="container">
      <div className="text-center max-width-800 mx-auto mb-16">
        <h2 className="text-4xl mb-6">Nossa Identidade</h2>
        <p className="text-xl text-muted">
          A PERSONA+ é mais do que uma consultoria; somos o seu parceiro estratégico na jornada de construção de autoridade.
        </p>
      </div>

      <div className="grid grid-3">
        {[
          { icon: <Target />, title: 'Missão', text: 'Capacitar profissionais para que revelem sua melhor versão e conquistem espaços de relevância através de um posicionamento autêntico.' },
          { icon: <Rocket />, title: 'Visão', text: 'Ser a plataforma de referência internacional em desenvolvimento de marcas pessoais e liderança estratégica.' },
          { icon: <Users />, title: 'Propósito', text: 'Transformar habilidades técnicas em autoridade percebida, gerando impacto real nas carreiras e negócios.' }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl glass text-center"
          >
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              {React.cloneElement(item.icon, { size: 32 })}
            </div>
            <h3 className="mb-4">{item.title}</h3>
            <p className="text-muted">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="servicos" className="section relative overflow-hidden">
    <div className="container">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl mb-4">Serviços Especializados</h2>
          <p className="text-lg text-muted">Acompanhamento completo para o seu desenvolvimento profissional.</p>
        </div>
        <button className="btn btn-primary">Ver Catálogo Completo</button>
      </div>

      <div className="grid grid-3">
        {[
          { title: 'Mentoria de Marca Pessoal', desc: 'Sessões exclusivas para definição de arquétipo, narrativa e presença digital.' },
          { title: 'Posicionamento Estratégico', desc: 'Análise de mercado e ferramentas para destacar-se na sua área de atuação.' },
          { title: 'Formação e Capacitação', desc: 'Cursos técnicos e comportamentais para o mercado de trabalho moderno.' },
          { title: 'Workshops e Programas', desc: 'Treinamentos dinâmicos focados em networking e desenvolvimento contínuo.' },
          { title: 'Consultoria de Liderança', desc: 'Desenvolvimento de competências para gestores e futuros líderes.' },
          { title: 'Gestão de Imagem', desc: 'Consultoria estética e comportamental alinhada aos seus objetivos.' }
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-10 rounded-3xl bg-white border border-gray-100 hover:border-accent transition-all group"
          >
            <h3 className="mb-4 group-hover:text-accent">{service.title}</h3>
            <p className="text-muted mb-6">{service.desc}</p>
            <a href="#" className="flex items-center gap-2 text-primary font-bold">Saiba mais <ArrowRight size={18} /></a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Opportunities = () => (
  <section id="oportunidades" className="section bg-primary text-white">
    <div className="container">
      <div className="grid grid-2 items-center">
        <div>
          <h2 className="text-4xl mb-6 text-white">Oportunidades & <span style={{ color: 'var(--accent)' }}>Crescimento</span></h2>
          <p className="text-lg mb-8 opacity-90">
            Aceda a programas exclusivos, bolsas de estudo, eventos de networking e parcerias estratégicas que aceleram o seu sucesso.
          </p>
          <div className="flex flex-col gap-4">
            {[
              'Programas de Bolsas Nacionais e Internacionais',
              'Eventos VIP de Networking',
              'Acesso a Projetos em Parceria',
              'Workshops Gratuitos'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-accent mt-10">Explorar Oportunidades</button>
        </div>
        <div className="relative group">
          <div className="aspect-square bg-blue-950 rounded-full scale-90 border-4 border-accent border-dashed animate-spin-slow absolute inset-0 opacity-20" />
          <div className="relative glass p-10 rounded-3xl text-center">
            <Rocket size={64} className="mx-auto mb-6 text-accent" />
            <h3 className="text-2xl mb-4 text-white">Próximo Workshop</h3>
            <div className="bg-white/10 p-6 rounded-2xl mb-6">
              <div className="text-sm font-bold uppercase mb-1">DATA: 25 MARÇO 2024</div>
              <div className="text-2xl font-bold">Liderança 4.0 & Marca Pessoal</div>
            </div>
            <button className="btn btn-white bg-white text-primary w-full">Inscrever-se Agora</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="referencias" className="section">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-4xl mb-4">Referências de Sucesso</h2>
        <p className="text-muted">O que dizem os nossos parceiros e mentorados.</p>
      </div>
      <div className="grid grid-3">
        {[
          { name: 'Dr. Ricardo Santos', role: 'CEO TechAfrica', text: 'A PERSONA+ transformou a forma como comunicamos o meu perfil. Hoje a autoridade é percebida antes mesmo da primeira reunião.' },
          { name: 'Ana Oliveira', role: 'Executive Coach', text: 'O acompanhamento estratégico foi o divisor de águas que eu precisava para o meu reposicionamento internacional.' },
          { name: 'Pedro Mateus', role: 'Inovador Digital', text: 'As oportunidades de networking geradas pela plataforma são de alto nível. Recomendo vivamente.' }
        ].map((t, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white shadow-sm border border-gray-50">
            <div className="flex gap-1 text-accent mb-4">
              {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
            </div>
            <p className="italic text-muted mb-6">"{t.text}"</p>
            <div>
              <div className="font-bold text-primary">{t.name}</div>
              <div className="text-sm text-accent">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Careers = () => (
  <section id="emprego" className="section bg-gray-50">
    <div className="container">
      <div className="glass p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h2 className="text-4xl mb-6">Junte-se à Nossa Equipa</h2>
          <p className="text-lg text-muted mb-6">
            Procuramos talentos apaixonados por desenvolvimento humano e branding. Se queres transformar vidas, o teu lugar é aqui.
          </p>
          <div className="flex items-center gap-6">
            <div>
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted">Vagas Abertas</div>
            </div>
            <div className="w-[1px] h-10 bg-gray-200" />
            <div>
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted">Países</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <button className="btn btn-primary w-full">Ver Vagas Atuais</button>
          <button className="btn btn-accent w-full">Enviar Candidatura Espontânea</button>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contacto" className="section bg-white">
    <div className="container grid grid-2 gap-16">
      <div>
        <h2 className="text-4xl mb-6">Vamos Conversar?</h2>
        <p className="text-lg text-muted mb-10">
          Estamos prontos para ajudar no seu próximo grande passo. Preencha o formulário ou use os nossos canais diretos.
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
              <Mail />
            </div>
            <div>
              <div className="text-sm text-muted">Email</div>
              <div className="font-bold">info@personaplus.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
              <Phone />
            </div>
            <div>
              <div className="text-sm text-muted">Telefone</div>
              <div className="font-bold">+244 9XX XXX XXX</div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary hover:bg-accent hover:text-white"><Linkedin size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary hover:bg-accent hover:text-white"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      <form className="glass p-8 rounded-3xl flex flex-col gap-6">
        <div className="grid grid-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Nome</label>
            <input type="text" className="p-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-accent" placeholder="Seu nome" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Email</label>
            <input type="email" className="p-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-accent" placeholder="seu@email.com" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold">Serviço de Interesse</label>
          <select className="p-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-accent">
            <option>Mentoria de Marca Pessoal</option>
            <option>Posicionamento Estratégico</option>
            <option>Formação e Capacitação</option>
            <option>Outro</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold">Mensagem</label>
          <textarea className="p-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-accent h-32" placeholder="Como podemos ajudar?"></textarea>
        </div>
        <button type="submit" className="btn btn-accent w-full py-4">Enviar Mensagem</button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-primary text-white">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-10 pb-10 border-b border-white/10">
        <Logo light />
        <div className="flex gap-8">
          <a href="#sobre" className="hover:text-accent">Sobre Nós</a>
          <a href="#servicos" className="hover:text-accent">Serviços</a>
          <a href="#contacto" className="hover:text-accent">Apoio</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-60 text-center">
        <div>© 2024 PERSONA+ . Todos os direitos reservados.</div>
        <div className="flex gap-6">
          <a href="#">Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Opportunities />
      <Testimonials />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}
