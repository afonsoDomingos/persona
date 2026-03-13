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
    { name: 'Estágio', href: '#estagio' },
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

const Hero = () => {
  const images = [
    '/persona01.jpeg',
    '/persona02.jpeg',
    '/persona03.jpeg',
    '/persona04.jpeg',
    '/persona05.jpeg',
    '/persona06.jpeg',
    '/persona07.jpeg',
    '/persona08.jpeg',
  ];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
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
        <div className="hero-image" style={{ position: 'relative', overflow: 'hidden' }}>
          {images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Persona ${idx + 1}`}
              style={{
                position: idx === 0 ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                opacity: currentIdx === idx ? 1 : 0,
                transition: 'opacity 1.5s ease-in-out',
                zIndex: currentIdx === idx ? 2 : 1
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

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

const Opportunities = () => (
  <section id="oportunidades" className="section section-primary">
    <div className="absolute -top-24 -left-24 w-[1000px] h-[1000px] bg-blue-950/40 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="container relative" style={{ zIndex: 10 }}>
      <div className="hero-grid">
        <div>
          <span className="badge badge-light">EXCLUSIVO PERSONA+</span>
          <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '30px' }}>Oportunidades que <br /> <span className="text-accent italic">Aceleram</span> seu Sucesso</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.8 }}>
            Aceda a um ecossistema exclusivo de programas internacionais, bolsas estratégicas e eventos de networking de alta influência.
          </p>
          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {[
              'Programas de Bolsas Internacionais',
              'Eventos VIP de Networking',
              'Acesso a Projetos em Parceria',
              'Aconselhamento Global'
            ].map((item, i) => (
              <div key={i} className="feature-item">
                <div className="feature-icon"><CheckCircle2 size={16} /></div>
                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{item}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-accent" style={{ marginTop: '40px' }}>
            Explorar Oportunidades <ArrowRight size={20} />
          </button>
        </div>

        <div className="glass-card">
          <div style={{ background: 'white', color: 'var(--primary)', width: '80px', height: '80px', borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <Rocket size={32} />
          </div>
          <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '20px' }}>Próximo Masterclass</h3>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '30px', borderRadius: '30px', marginBottom: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="text-accent" style={{ fontWeight: '900', fontSize: '0.8rem', marginBottom: '10px', letterSpacing: '2px' }}>ABERTO PARA INSCRIÇÃO</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>Liderança Híbrida & Branding Pessoal</div>
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: 0.6, fontSize: '0.9rem' }}>
              <span>25 DE MARÇO</span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}></span>
              <span>ONLINE VIP</span>
            </div>
          </div>
          <button className="btn" style={{ background: 'white', color: 'var(--primary)', width: '100%' }}>Garanta sua Vaga</button>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="referencias" className="section section-muted">
    <div className="container">
      <div className="section-title">
        <span className="text-accent" style={{ fontWeight: '900', fontSize: '0.8rem', letterSpacing: '3px' }}>FEEDBACK DE ELITE</span>
        <h2>Referências de <span className="text-gradient">Sucesso</span></h2>
        <p>Histórias reais de profissionais que redesenharam suas carreiras.</p>
      </div>

      <div className="grid-3">
        {[
          { name: 'Dr. Ricardo Santos', role: 'CEO TechAfrica', text: 'A PERSONA+ transformou a forma como comunicamos o meu perfil. Hoje a autoridade é percebida antes mesmo da primeira reunião formal.', img: '/persona02.jpeg' },
          { name: 'Ana Oliveira', role: 'Executive Coach', text: 'O acompanhamento estratégico foi o divisor de águas crucial que eu precisava para o meu bem-sucedido reposicionamento digital.', img: '/persona03.jpeg' },
          { name: 'Pedro Mateus', role: 'Inovador Digital', text: 'As oportunidades de networking geradas pela plataforma são de altíssimo nível internacional. Recomendo com total confiança.', img: '/persona04.jpeg' }
        ].map((t, i) => (
          <div key={i} className="testimonial-card">
            <div>
              <div className="stars">★★★★★</div>
              <p style={{ fontSize: '1.25rem', fontWeight: '600', fontStyle: 'italic', color: 'var(--primary)', marginBottom: '30px' }}>"{t.text}"</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                <img src={t.img} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontWeight: '800', color: 'var(--primary-dark)' }}>{t.name}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--accent)', textTransform: 'uppercase' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Careers = () => (
  <section id="emprego" className="section">
    <div className="container">
      <div className="career-banner">
        <div style={{ flex: 1 }}>
          <span className="text-accent" style={{ fontWeight: '900', fontSize: '0.8rem', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>FAÇA PARTE DO TIME</span>
          <h2 style={{ fontSize: '3rem', color: 'var(--primary)', lineHeight: 1.1, marginBottom: '25px' }}>Construa o Futuro da <span className="text-gradient">Marca Pessoal</span> Connosco</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '35px', maxWidth: '600px' }}>
            Buscamos talentos obcecados por excelência e desenvolvimento humano. Se queres transformar vidas em escala global, o teu lugar é aqui.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <h4>15+</h4>
              <span>Cargos Abertos</span>
            </div>
            <div style={{ width: '1px', background: '#eee', height: '50px' }}></div>
            <div className="stat-item">
              <h4>4+</h4>
              <span>Países Ativos</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' }}>
          <button className="btn" style={{ background: 'var(--primary)', color: 'white' }}>Ver Vagas Atuais</button>
          <button className="btn" style={{ background: 'rgba(232, 108, 23, 0.05)', color: 'var(--accent)', border: '1px solid rgba(232, 108, 23, 0.2)' }}>Candidatura Livre</button>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contacto" className="section" style={{ background: 'white' }}>
    <div className="container">
      <div className="hero-grid" style={{ alignItems: 'start' }}>
        <div>
          <span className="text-accent" style={{ fontWeight: '900', fontSize: '0.8rem', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>HUB DE CONTACTOS</span>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '20px', lineHeight: 1.1 }}>Vamos Desenhar sua <span className="text-gradient">Estratégia</span></h2>
          <p style={{ marginBottom: '40px', fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '500px' }}>Estamos prontos para impulsionar sua autoridade. Cada grande marca pessoal começa com uma única conversa estratégica.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'var(--bg-light)', padding: '20px', borderRadius: '20px' }}>
              <div style={{ background: 'white', padding: '15px', borderRadius: '15px', color: 'var(--primary)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                <Mail />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--accent)' }}>EMAIL DIRETO</div>
                <div style={{ fontWeight: 'bold' }}>info@personaplus.com</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'var(--bg-light)', padding: '20px', borderRadius: '20px' }}>
              <div style={{ background: 'white', padding: '15px', borderRadius: '15px', color: 'var(--primary)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                <Phone />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--accent)' }}>ATENDIMENTO</div>
                <div style={{ fontWeight: 'bold' }}>+244 9XX XXX XXX</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              {[<Linkedin />, <Instagram />].map((icon, i) => (
                <a key={i} href="#" style={{ background: 'var(--bg-light)', padding: '15px', borderRadius: '15px', color: 'var(--primary)', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-light)'; e.currentTarget.style.color = 'var(--primary)'; }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <form style={{ background: 'white', padding: '40px', borderRadius: '40px', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', border: '1px solid #eee' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <input type="text" placeholder="Seu Nome" style={{ padding: '18px', borderRadius: '15px', border: '1px solid #eee', background: 'var(--bg-light)', fontWeight: 'bold' }} />
            <input type="email" placeholder="Seu Email" style={{ padding: '18px', borderRadius: '15px', border: '1px solid #eee', background: 'var(--bg-light)', fontWeight: 'bold' }} />
          </div>
          <select style={{ padding: '18px', borderRadius: '15px', border: '1px solid #eee', background: 'var(--bg-light)', fontWeight: 'bold', appearance: 'none' }}>
            <option>Selecione um Serviço...</option>
            <option>Mentoria</option>
            <option>Posicionamento</option>
            <option>Workshops</option>
          </select>
          <textarea placeholder="Sua Mensagem" style={{ padding: '18px', borderRadius: '15px', border: '1px solid #eee', background: 'var(--bg-light)', height: '150px', fontWeight: 'bold', resize: 'none' }}></textarea>
          <button className="btn btn-accent" style={{ width: '100%', padding: '20px', fontSize: '1.1rem' }}>Solicitar Contacto <ArrowRight size={20} /></button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ background: 'var(--primary)', color: 'white', padding: '100px 0 40px' }}>
    <div className="container">
      <div className="footer-content" style={{ paddingBottom: '60px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '40px' }}>
        <div style={{ maxWidth: '400px' }}>
          <Logo light />
          <p style={{ marginTop: '30px', opacity: 0.7, fontSize: '1.1rem' }}>Elevando o padrão de posicionamento estratégico no mercado lusófono. Autoridade que gera legado.</p>
        </div>
        <div className="nav-links" style={{ gap: '60px' }}>
          <div>
            <h4 style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: '900', marginBottom: '25px', letterSpacing: '2px' }}>NAVEGAÇÃO</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <a href="#sobre" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Sobre Nós</a>
              <a href="#servicos" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Serviços</a>
              <a href="#referencias" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Cases</a>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: '900', marginBottom: '25px', letterSpacing: '2px' }}>CARREIRAS</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <a href="#emprego" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Vagas Abertas</a>
              <a href="#estagio" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Estágio</a>
              <a href="#emprego" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Equipa Global</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.4, fontSize: '0.8rem', fontWeight: '700' }}>
        <div>© 2024 PERSONA+ . Todos os direitos reservados.</div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacidade</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Termos</a>
        </div>
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
      <Opportunities />
      <Testimonials />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}
