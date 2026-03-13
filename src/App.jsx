import React, { useState, useEffect } from 'react';
import {
  Users,
  Target,
  ArrowRight,
  Menu,
  X,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  CheckCircle2,
  Trophy,
  Rocket
} from 'lucide-react';

// --- Components ---

const Logo = ({ light = false }) => (
  <div style={{ height: '35px', display: 'flex', alignItems: 'center' }}>
    <img
      src="/personalogo.png"
      alt="PERSONA+"
      style={{
        height: '100%',
        width: 'auto',
        filter: light ? 'brightness(0) invert(1)' : 'none'
      }}
    />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-content">
        <a href="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </a>

        <div className="nav-links">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href}>{item.name}</a>
          ))}
          <button className="btn btn-accent" style={{ padding: '8px 24px', fontSize: '0.9rem' }}>
            Plataforma
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--primary)'
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: 'white',
          padding: '20px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 'bold' }}
            >
              {item.name}
            </a>
          ))}
          <button className="btn btn-accent" style={{ width: '100%' }}>Plataforma</button>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

const Hero = () => (
  <section className="hero">
    <div className="container hero-grid">
      <div className="hero-text">
        <div style={{
          display: 'inline-block',
          background: 'rgba(0, 59, 126, 0.05)',
          padding: '6px 16px',
          borderRadius: '50px',
          color: 'var(--primary)',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
          ESTRATÉGIA DE MARCA PESSOAL
        </div>
        <h1>Construa uma <span className="text-gradient">Marca Pessoal</span> Forte e Estratégica</h1>
        <p>A PERSONA+ ajuda profissionais e líderes a posicionarem-se com clareza, autoridade e impacto no mercado global.</p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }} className="hero-flex-center">
          <button className="btn btn-accent">Peça sua Formação <ArrowRight size={20} /></button>
          <button className="btn" style={{ background: 'white', border: '1px solid #ddd', color: 'var(--primary)' }}>Nossos Serviços</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/hero.png" alt="Persona Hero" />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="section" style={{ background: 'white' }}>
    <div className="container">
      <div className="section-title">
        <span style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem' }}>QUEM SOMOS</span>
        <h2>Nossa Identidade</h2>
        <p style={{ maxWidth: '600px', margin: '20px auto', color: 'var(--text-muted)' }}>
          A PERSONA+ é o seu parceiro estratégico na jornada de construção de autoridade pessoal.
        </p>
      </div>

      <div className="grid-3">
        {[
          { icon: <Target />, title: 'Missão', text: 'Capacitar profissionais para que revelem sua melhor versão e conquistem espaços de relevância.' },
          { icon: <Rocket />, title: 'Visão', text: 'Ser a plataforma de referência internacional em desenvolvimento de marcas pessoais.' },
          { icon: <Users />, title: 'Propósito', text: 'Transformar habilidades técnicas em autoridade percebida, gerando impacto real.' }
        ].map((item, i) => (
          <div key={i} className="card" style={{ textAlign: 'center' }}>
            <div style={{ background: 'rgba(0,59,126,0.05)', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifySelf: 'center', marginBottom: '20px', marginInline: 'auto' }}>
              <div style={{ color: 'var(--primary)', margin: 'auto' }}>{item.icon}</div>
            </div>
            <h3>{item.title}</h3>
            <p style={{ color: 'var(--text-muted)' }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="servicos" className="section">
    <div className="container">
      <div className="section-title">
        <h2>Serviços Especializados</h2>
        <p>Soluções completas para destacar o seu potencial.</p>
      </div>
      <div className="grid-3">
        {[
          { title: 'Mentoria de Marca Pessoal', desc: 'Sessões exclusivas para definição de arquétipo e narrativa.' },
          { title: 'Posicionamento Estratégico', desc: 'Análise de mercado e ferramentas para destacar-se.' },
          { title: 'Formação e Capacitação', desc: 'Cursos técnicos e comportamentais de alto nível.' },
          { title: 'Workshops e Programas', desc: 'Treinamentos dinâmicos focados em networking.' },
          { title: 'Consultoria de Liderança', desc: 'Desenvolvimento de competências para gestores.' },
          { title: 'Gestão de Imagem', desc: 'Consultoria estética focada em autoridade.' }
        ].map((s, i) => (
          <div key={i} className="card">
            <h3 style={{ fontSize: '1.25rem' }}>{s.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>{s.desc}</p>
            <a href="#contacto" style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              Saber mais <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contacto" className="section" style={{ background: 'white' }}>
    <div className="container">
      <div className="hero-grid" style={{ alignItems: 'start' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px' }}>Vamos Conversar?</h2>
          <p style={{ marginBottom: '40px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>Estamos prontos para ajudar no seu próximo grande passo estratégico.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Mail className="text-accent" />
              <span>info@personaplus.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Phone className="text-accent" />
              <span>+244 9XX XXX XXX</span>
            </div>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <Linkedin className="text-accent" />
              <Instagram className="text-accent" />
            </div>
          </div>
        </div>
        <form style={{ background: 'var(--bg-light)', padding: '40px', borderRadius: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="text" placeholder="Seu Nome" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd' }} />
          <input type="email" placeholder="Seu Email" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd' }} />
          <select style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd' }}>
            <option>Selecione um Serviço...</option>
            <option>Mentoria</option>
            <option>Posicionamento</option>
            <option>Workshops</option>
          </select>
          <textarea placeholder="Sua Mensagem" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', height: '120px' }}></textarea>
          <button className="btn btn-accent" style={{ width: '100%' }}>Enviar Mensagem</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <Logo light />
        <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>© 2024 PERSONA+ . Todos os direitos reservados.</div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
