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
  ChevronRight,
  Monitor
} from 'lucide-react';

// --- Small Logo Component ---
const Logo = ({ light = false }) => (
  <div className="flex items-center">
    <img
      src="/personalogo.png"
      alt="PERSONA+"
      className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 ${light ? 'brightness-0 invert-100' : ''}`}
    />
  </div>
);

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-3' : 'bg-transparent py-6'}`}>
      <div className="section-container flex items-center justify-between">
        <a href="/" className="hover:scale-105 transition-transform duration-300 flex-shrink-0">
          <Logo light={false} />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div className="flex items-center gap-5 xl:gap-7">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary font-semibold text-sm xl:text-base hover:text-accent transition-all duration-300 transform hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button className="bg-accent px-7 py-2.5 rounded-full text-white font-bold text-sm xl:text-base hover:bg-accent-light shadow-lg hover:shadow-orange-500/30 transition-all duration-300 active:scale-95 ml-2">
            Aceder Plataforma
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary hover:bg-blue-50/50 rounded-xl transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl overflow-hidden border-t border-gray-100"
          >
            <div className="section-container flex flex-col py-8 gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg text-primary font-bold hover:text-accent transition-all duration-300 flex items-center justify-between"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <ChevronRight size={20} className="text-accent" />
                </a>
              ))}
              <hr className="border-gray-100" />
              <button className="bg-accent w-full py-4 text-white font-bold text-xl rounded-2xl hover:bg-accent-light transition-colors active:scale-95">
                Aceder Plataforma
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Animated shapes */}
    <div className="shape-blur bg-primary w-[500px] h-[500px] -top-64 -right-32 animate-pulse" />
    <div className="shape-blur bg-accent w-[400px] h-[400px] bottom-32 -left-64 animate-pulse duration-7000" />

    <div className="section-container relative grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary-dark font-bold text-xs md:text-sm uppercase tracking-wider mb-8 border border-primary/10">
          <Rocket size={16} className="text-accent" />
          <span>Sua Marca, Sua Estratégia, Seu Impacto</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.15] mb-8 text-primary">
          Construa uma <br />
          <span className="text-gradient">Marca Pessoal</span> <br />
          Forte e Estratégica
        </h1>
        <p className="text-lg md:text-xl text-text-muted mb-10 max-w-xl leading-relaxed">
          A <span className="font-bold text-primary">PERSONA+</span> ajuda profissionais e líderes a posicionarem-se com total clareza, autoridade inquestionável e impacto no mercado global.
        </p>
        <div className="flex flex-wrap gap-4 md:gap-6">
          <button className="bg-accent px-8 py-4 rounded-full text-white font-bold text-base md:text-lg hover:bg-accent-light shadow-xl shadow-orange-500/20 transition-all duration-300 flex items-center gap-3">
            Começar Agora <ArrowRight size={20} />
          </button>
          <button className="border-2 border-primary/20 px-8 py-4 rounded-full text-primary font-bold text-base md:text-lg hover:bg-primary/5 hover:border-primary transition-all duration-300 flex items-center gap-3">
            Sobre a Plataforma
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative px-4 lg:px-0"
      >
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-blue-100 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white group-hover:scale-[1.02] transition-transform duration-700">
            <img
              src="/hero.png"
              alt="PERSONA+ Expertise"
              className="w-full h-full object-cover grayscale-0 group-hover:grayscale-0 transition-all duration-1000"
            />
            {/* Overlay float elements */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center">
                <Trophy size={24} />
              </div>
              <div>
                <div className="font-extrabold text-primary text-sm">#1 em Autoridade</div>
                <div className="text-[10px] text-text-muted font-bold">Liderança Corporativa</div>
              </div>
            </div>

            <div className="absolute bottom-10 right-8 bg-blue-900/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl flex items-center gap-4 border border-white/20 animate-pulse">
              <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center">
                <Monitor size={24} />
              </div>
              <div className="text-white">
                <div className="font-extrabold text-sm text-accent">5.0 ★ Rating</div>
                <div className="text-[10px] opacity-80 font-bold">Baseado em +500 Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Section Components ---
const About = () => (
  <section id="sobre" className="py-24 md:py-32 bg-white">
    <div className="section-container">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
        <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-4">A NOSSA IDENTIDADE</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
          Mais do que uma Consultoria, <br /> Seu Parceiro de <span className="text-gradient">Legado.</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-text-muted leading-relaxed">
          A <span className="font-bold text-primary">PERSONA+</span> é o epicentro do desenvolvimento humano estratégico, onde talentos individuais são transformados em marcas de autoridade mundial.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Target className="w-10 h-10" />, title: 'Missão', text: 'Capacitar profissionais para que revelem sua melhor versão e conquistem espaços de relevância através de um posicionamento autêntico.' },
          { icon: <Rocket className="w-10 h-10" />, title: 'Visão', text: 'Ser a plataforma de referência internacional em desenvolvimento de marcas pessoais e liderança estratégica nos próximos 5 anos.' },
          { icon: <Users className="w-10 h-10" />, title: 'Propósito', text: 'Transformar habilidades técnicas em autoridade percebida, gerando impacto real em carreiras, negócios e na sociedade.' }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -12 }}
            className="p-10 rounded-[3rem] bg-bg-light border border-primary/5 hover:border-accent/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5 group"
          >
            <div className="w-20 h-20 bg-white text-primary rounded-[2rem] flex items-center justify-center mb-8 shadow-inner border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              {item.icon}
            </div>
            <h3 className="text-2xl font-extrabold text-primary mb-5 group-hover:text-accent transition-colors duration-500">{item.title}</h3>
            <p className="text-text-muted leading-relaxed text-balance">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="servicos" className="py-24 md:py-32 relative">
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div className="max-w-xl">
          <span className="text-primary font-extrabold uppercase tracking-widest text-sm mb-4 block">SERVIÇOS DE ELITE</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-none">Soluções que Criam <span className="text-accent underline decoration-4 decoration-accent/20 underline-offset-8">Autoridade</span></h2>
        </div>
        <button className="bg-primary/5 text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 active:scale-95 border border-primary/10">Ver Catálogo Completo</button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Mentoria de Marca Pessoal', desc: 'Definição estratégica de arquétipo, narrativa pessoal e presença digital para impacto total.' },
          { title: 'Posicionamento Estratégico', desc: 'Engenharia de mercado e ferramentas premium para destacar-se em cenários competitivos.' },
          { title: 'Formação e Capacitação', desc: 'Desenvolvimento técnico e comportamental intensivo para líderes do futuro.' },
          { title: 'Workshops e Programas', desc: 'Treinamentos dinâmicos focados em networking prático e aceleração de competências.' },
          { title: 'Consultoria de Liderança', desc: 'Cimentação de competências executivas para gestores e futuros C-Levels.' },
          { title: 'Gestão de Carreira Especializada', desc: 'Acompanhamento taylor-made para transição e crescimento exponencial no mercado.' }
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="p-12 rounded-[3.5rem] bg-white border border-gray-100 hover:border-accent/30 transition-all duration-500 group relative overflow-hidden shadow-sm hover:shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/5 to-transparent rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-2xl font-extrabold mb-6 text-primary group-hover:text-accent transition-colors duration-300 leading-tight">{service.title}</h3>
            <p className="text-text-muted mb-8 leading-relaxed h-20 overflow-hidden">{service.desc}</p>
            <a href="#" className="inline-flex items-center gap-3 text-primary font-bold group-hover:gap-5 transition-all duration-300">
              Consultar detalhes <ArrowRight size={18} className="text-accent" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Opportunities = () => (
  <section id="oportunidades" className="py-24 md:py-32 bg-primary relative overflow-hidden text-white">
    {/* Decorative background circle */}
    <div className="absolute -top-24 -left-24 w-[1000px] h-[1000px] bg-blue-950/40 rounded-full blur-[120px] pointer-events-none" />

    <div className="section-container relative z-10">
      <div className="grid lg:grid-cols-2 lg:items-center gap-16">
        <div>
          <span className="bg-white/10 text-accent font-black py-1 px-4 rounded-full text-xs uppercase tracking-widest mb-6 inline-block border border-white/10">EXCLUSIVO PERSONA+</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">Oportunidades que <br /> <span className="text-accent italic">Aceleram</span> seu Sucesso</h2>
          <p className="text-xl mb-10 opacity-80 leading-relaxed font-medium">
            Aceda a um ecossistema exclusivo de programas internacionais, bolsas estratégicas e eventos de networking de alta influência.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Programas de Bolsas Internacionais',
              'Eventos VIP de Networking',
              'Acesso a Projetos em Parceria',
              'Aconselhamento Global'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <span className="font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
          <button className="bg-accent px-10 py-5 rounded-full text-white font-black text-lg mt-12 hover:bg-accent-light shadow-2xl shadow-accent/20 transition-all active:scale-95 group flex items-center gap-4">
            Explorar Oportunidades <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-accent/20 blur-[100px] animate-pulse" />
          <div className="relative rounded-[4rem] border-4 border-white/10 bg-white/5 backdrop-blur-3xl p-10 md:p-16 text-center transform hover:rotate-2 transition-transform duration-700 h-full flex flex-col justify-center shadow-inner">
            <div className="w-24 h-24 bg-white text-primary rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full animate-ping opacity-50" />
              <Rocket size={40} />
            </div>
            <h3 className="text-3xl font-black mb-6">Próximo Masterclass</h3>
            <div className="bg-primary-dark/80 p-8 rounded-[2.5rem] mb-10 border border-white/5 shadow-2xl">
              <div className="text-accent font-black text-sm uppercase mb-3 tracking-widest">Aberto para Inscrição</div>
              <div className="text-2xl md:text-3xl font-extrabold text-white leading-tight">Liderança Híbrida & Branding Pessoal</div>
              <div className="mt-6 flex items-center justify-center gap-3 text-white/60 font-bold">
                <span>25 DE MARÇO</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>ONLINE VIP</span>
              </div>
            </div>
            <button className="bg-white text-primary px-10 py-5 rounded-full font-black text-lg w-full hover:bg-gray-100 transition-colors shadow-2xl active:scale-95 uppercase tracking-wider">Garanta sua Vaga</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="referencias" className="py-24 md:py-32 bg-bg-light">
    <div className="section-container">
      <div className="text-center mb-20">
        <span className="text-accent font-extrabold text-sm uppercase tracking-[0.3em] mb-4 block">FEEDBACK DE ELITE</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Referências de <span className="text-gradient">Sucesso</span></h2>
        <p className="max-w-xl mx-auto mt-6 text-text-muted font-medium text-lg">Histórias reais de profissionais que redesenharam suas carreiras.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {[
          { name: 'Dr. Ricardo Santos', role: 'CEO TechAfrica', text: 'A PERSONA+ transformou a forma como comunicamos o meu perfil. Hoje a autoridade é percebida antes mesmo da primeira reunião formal.' },
          { name: 'Ana Oliveira', role: 'Executive Coach', text: 'O acompanhamento estratégico foi o divisor de águas crucial que eu precisava para o meu bem-sucedido reposicionamento digital.' },
          { name: 'Pedro Mateus', role: 'Inovador Digital', text: 'As oportunidades de networking geradas pela plataforma são de altíssimo nível internacional. Recomendo com total confiança.' }
        ].map((t, i) => (
          <div key={i} className="p-12 rounded-[3.5rem] bg-white shadow-xl shadow-primary/5 border border-gray-50 flex flex-col justify-between hover:scale-105 transition-transform duration-500">
            <div>
              <div className="flex gap-1 text-accent mb-8">
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-2xl leading-none">★</span>)}
              </div>
              <p className="text-xl font-bold text-primary italic leading-relaxed mb-10">"{t.text}"</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-black text-xl">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="font-extrabold text-primary-dark">{t.name}</div>
                <div className="text-xs text-accent font-black uppercase tracking-widest">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Careers = () => (
  <section id="emprego" className="py-24 md:py-32">
    <div className="section-container">
      <div className="bg-white rounded-[4rem] p-8 md:p-20 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16 border border-gray-100">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-2xl relative z-10 text-center lg:text-left">
          <span className="text-accent font-black text-sm uppercase mb-4 inline-block">FAÇA PARTE DO TIME</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">Construa o Futuro <br /> da <span className="text-gradient">Marca Pessoal</span> Connosco</h2>
          <p className="text-xl text-text-muted leading-relaxed font-medium mb-10">
            Buscamos talentos obcecados por excelência e desenvolvimento humano. Se queres transformar vidas em escala global, o teu lugar é aqui.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-10">
            <div>
              <div className="text-4xl font-extrabold text-primary">15+</div>
              <div className="text-xs font-black text-accent uppercase tracking-widest">Cargos Abertos</div>
            </div>
            <div className="w-[2px] h-12 bg-gray-100 hidden sm:block" />
            <div>
              <div className="text-4xl font-extrabold text-primary">4+</div>
              <div className="text-xs font-black text-accent uppercase tracking-widest">Países Ativos</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-80 relative z-10 flex-shrink-0">
          <button className="bg-primary text-white py-5 rounded-3xl font-black text-xl hover:bg-primary-dark shadow-xl hover:-translate-y-1 transition-all active:scale-95">Ver Vagas Atuais</button>
          <button className="bg-accent/5 text-accent py-5 rounded-3xl font-black text-xl hover:bg-accent hover:text-white border border-accent/20 transition-all active:scale-95">Candidatura Livre</button>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contacto" className="py-24 md:py-32 bg-white">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <span className="text-accent font-extrabold text-sm uppercase tracking-[0.3em] mb-4 block text-center lg:text-left">HUB DE CONTACTOS</span>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary text-center lg:text-left mb-8">Vamos Desenhar <br /> sua <span className="text-gradient">Estratégia</span></h2>
          <p className="text-xl text-text-muted mb-12 leading-relaxed text-center lg:text-left max-w-lg mx-auto lg:mx-0 font-medium">
            Estamos prontos para impulsionar sua autoridade. Cada grande marca pessoal começa com uma única conversa estratégica.
          </p>

          <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0">
            <div className="p-6 rounded-3xl bg-bg-light border border-gray-100 flex items-center gap-6 hover:border-accent transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-inner border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs font-black text-accent uppercase tracking-widest mb-1">EMAIL DIRETO</div>
                <div className="font-extrabold text-primary text-sm sm:text-base">info@personaplus.com</div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-bg-light border border-gray-100 flex items-center gap-6 hover:border-accent transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-inner border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-xs font-black text-accent uppercase tracking-widest mb-1">ATENDIMENTO</div>
                <div className="font-extrabold text-primary text-sm sm:text-base">+244 9XX XXX XXX</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12 justify-center lg:justify-start">
            {[<Linkedin />, <Instagram />].map((icon, i) => (
              <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-bg-light flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:-translate-y-2 transition-all duration-500 border border-gray-100">
                {React.cloneElement(icon, { size: 24 })}
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] blur-2xl -z-10" />
          <form className="bg-white p-8 md:p-12 rounded-[4rem] shadow-2xl border border-gray-100 flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <label className="text-xs font-black text-primary uppercase ml-4">SEU NOME</label>
                <input type="text" className="w-full p-5 rounded-2xl bg-bg-light border border-transparent focus:border-accent focus:bg-white focus:outline-none transition-all font-bold text-primary" placeholder="Ex: João Silva" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs font-black text-primary uppercase ml-4">SEU EMAIL</label>
                <input type="email" className="w-full p-5 rounded-2xl bg-bg-light border border-transparent focus:border-accent focus:bg-white focus:outline-none transition-all font-bold text-primary" placeholder="joao@dominio.com" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xs font-black text-primary uppercase ml-4">ÁREA DE INTERESSE</label>
              <select className="w-full p-5 rounded-2xl bg-bg-light border border-transparent focus:border-accent focus:bg-white focus:outline-none transition-all font-bold text-primary cursor-pointer appearance-none">
                <option>Selecione um Serviço...</option>
                <option>Mentoria de Marca Pessoal</option>
                <option>Posicionamento Estratégico</option>
                <option>Formação e Capacitação</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xs font-black text-primary uppercase ml-4">COMO PODEMOS AJUDAR?</label>
              <textarea className="w-full p-5 rounded-2xl bg-bg-light border border-transparent focus:border-accent focus:bg-white focus:outline-none transition-all font-bold text-primary h-40 resize-none" placeholder="Conte-nos seus objetivos..."></textarea>
            </div>
            <button type="submit" className="bg-accent w-full py-5 rounded-[2rem] text-white font-black text-xl hover:bg-accent-light shadow-2xl shadow-accent/20 transition-all active:scale-95 group flex items-center justify-center gap-4">
              Solicitar Contacto <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-primary text-white relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[150px] opacity-30 select-none pointer-events-none" />
    <div className="section-container relative z-10">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 mb-20 pb-16 border-b border-white/10">
        <div className="flex flex-col items-center lg:items-start max-w-sm">
          <div className="mb-8 scale-150 origin-center lg:origin-left">
            <Logo light />
          </div>
          <p className="text-lg opacity-70 font-medium text-center lg:text-left leading-relaxed">
            Elevando o padrão de posicionamento estratégico no mercado lusófono. Autoridade que gera legado.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-20">
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-accent mb-8">NAVEGAÇÃO</h4>
            <div className="flex flex-col gap-4 font-bold opacity-80">
              <a href="#sobre" className="hover:text-accent transition-colors">Sobre Nós</a>
              <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
              <a href="#referencias" className="hover:text-accent transition-colors">Cases</a>
            </div>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-accent mb-8">CARREIRAS</h4>
            <div className="flex flex-col gap-4 font-bold opacity-80">
              <a href="#emprego" className="hover:text-accent transition-colors">Vagas Abertas</a>
              <a href="#emprego" className="hover:text-accent transition-colors">Equipa Global</a>
              <a href="#contacto" className="hover:text-accent transition-colors">Candidatura</a>
            </div>
          </div>
          <div className="hidden sm:block">
            <h4 className="font-black text-sm uppercase tracking-widest text-accent mb-8">SUPORTE</h4>
            <div className="flex flex-col gap-4 font-bold opacity-80">
              <a href="#contacto" className="hover:text-accent transition-colors">Help Center</a>
              <a href="#contacto" className="hover:text-accent transition-colors">Contactos</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-bold opacity-40">
        <div>© 2024 PERSONA+ . Todos os direitos reservados.</div>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white">Privacidade</a>
          <a href="#" className="hover:text-white">Termos</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---
export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white cursor-default">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Opportunities />
        <Testimonials />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
