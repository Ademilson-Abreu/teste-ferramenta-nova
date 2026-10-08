import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  Instagram,
  MapPin,
  ShieldCheck,
  Award,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Building2,
  Home,
  Key,
  FileText,
  Star,
  Menu,
  X,
  MessageCircle
}
from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const PROPERTIES = [
  {
    id: 1,
    title: "Penthouse Lumière Skyline",
    location: "Jardins, São Paulo - SP",
    price: "R$ 14.800.000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    features: [
      "620m² de área útil",
      "4 Suítes Master com closet",
      "Piscina privativa na cobertura",
      "5 Vagas de garagem demarcadas"
    ]
  },
  {
    id: 2,
    title: "Villa Azur Paradise",
    location: "Jurerê Internacional, Florianópolis - SC",
    price: "R$ 22.500.000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    features: [
      "950m² de terreno beira-mar",
      "Piscina infinity com borda infinita",
      "Espaço gourmet integrado",
      "Segurança armada 24h"
    ]
  },
  {
    id: 3,
    title: "Residence Riviera di Mare",
    location: "Leblon, Rio de Janeiro - RJ",
    price: "R$ 19.900.000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Frente mar espetacular",
      "Acabamento em mármore italiano",
      "Automação residencial completa",
      "Adega climatizada subterrânea"
    ]
  }
];

const SERVICES = [
  {
    title: "Consultoria de Compra Premium",
    description: "Busca ativa e personalizada de propriedades exclusivas que atendem aos mais rigorosos critérios de exigência.",
    icon: Home
  },
  {
    title: "Gestão e Venda de Alto Padrão",
    description: "Estratégias de marketing de luxo, filmagens cinematográficas e rede discreta de compradores qualificados.",
    icon: Building2
  },
  {
    title: "Acompanhamento Jurídico",
    description: "Segurança absoluta em todas as etapas da transação com assessoria jurídica especializada em direito imobiliário.",
    icon: FileText
  },
  {
    title: "Curadoria de Imóveis Exclusivos",
    description: "Acesso a portfólio off-market de propriedades ultra-luxuosas que nunca chegam aos portais públicos.",
    icon: Key
  }
];

const TESTIMONIALS = [
  {
    name: "Dr. Roberto Vasconcelos",
    role: "Empresário & Investidor",
    content: "A discrição, o profissionalismo e a curadoria impecável superaram todas as minhas expectativas. Encontrei o penthouse ideal em tempo recorde."
  },
  {
    name: "Camila Montenegro",
    role: "Arquiteta & Proprietária",
    content: "Vender minha villa em Jurerê exigia um nível de refinamento que poucas agências possuem. A Victória & Saint-Germain entregou um resultado extraordinário."
  },
  {
    name: "Carlos Eduardo Diniz",
    role: "CEO de Multinacional",
    content: "Atendimento consultivo impecável do início ao pós-venda. É o padrão ouro em assessoria imobiliária de luxo no Brasil."
  }
];

const REGIONS = [
  { name: "Jardins - São Paulo", status: "Premium" },
  { name: "Leblon & Ipanema - Rio de Janeiro", status: "Exclusivo" },
  { name: "Jurerê Internacional - Florianópolis", status: "Alto Padrão" },
  { name: "Alphaville - Barueri/SP", status: "Premium" },
  { name: "Praia Brava - Itajaí/SC", status: "Exclusivo" },
  { name: "Quintal do Lago - Curitiba", status: "Alto Padrão" }
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappNumber = "5511999999999";

  return (
    <div className="bg-[#1A1F2C] text-[#F1F0FB] min-h-screen selection:bg-[#D4AF37] selection:text-[#1A1F2C]">
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#1A1F2C]/90 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#inicio" className="text-xl md:text-2xl font-serif font-bold text-[#D4AF37] tracking-wider">
            VICTÓRIA & SAINT-GERMAIN
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">Início</a>
            <a href="#imoveis" className="hover:text-[#D4AF37] transition-colors">Imóveis</a>
            <a href="#servicos" className="hover:text-[#D4AF37] transition-colors">Serviços</a>
            <a href="#depoimentos" className="hover:text-[#D4AF37] transition-colors">Depoimentos</a>
            <a href="#sobre" className="hover:text-[#D4AF37] transition-colors">Sobre</a>
            <a href="#regioes" className="hover:text-[#D4AF37] transition-colors">Regiões</a>
            <a
              href="#contato"
              className="px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#1A1F2C] font-semibold shadow-gold hover:bg-[#c29d2f] transition-all"
            >
              Contato
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#D4AF37] p-2"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A1F2C] border-b border-[#D4AF37]/20 px-6 py-6 space-y-4 animate-fadeIn">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg hover:text-[#D4AF37]"
            >
              Início
            </a>
            <a
              href="#imoveis"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg hover:text-[#D4AF37]"
            >
              Imóveis
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg hover:text-[#D4AF37]"
            >
              Serviços
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg hover:text-[#D4AF37]"
            >
              Depoimentos
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg hover:text-[#D4AF37]"
            >
              Sobre
            </a>
            <a
              href="#regioes"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg hover:text-[#D4AF37]"
            >
              Regiões
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center px-5 py-3 rounded-xl bg-[#D4AF37] text-[#1A1F2C] font-bold"
            >
              Contato Privado
            </a>
          </div>
        )}
      </header>

      {/* 1. HERO SECTION */}
      <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
            alt="Casa de luxo moderna à beira-mar ao pôr do sol, arquitetura contemporânea com vidro e concreto"
            className="w-full h-full object-cover scale-105 animate-pulse duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-[#1A1F2C]/60 to-black/45"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs md:text-sm uppercase tracking-widest font-semibold">
            <ShieldCheck className="w-4 h-4" /> Portfolio Imobiliário Ultra Premium
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight">
            VICTÓRIA & SAINT-GERMAIN
          </h1>

          <p className="text-lg sm:text-2xl text-gray-200 font-light max-w-2xl mx-auto font-serif italic">
            Redefinindo o conceito de viver bem com propriedades exclusivas e atendimento absoluto de excelência.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contato"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D4AF37] text-[#1A1F2C] font-bold text-base shadow-gold hover:bg-[#c29d2f] transition-all transform hover:-translate-y-0.5"
            >
              Agendar Visita
            </a>
            <a
              href="#imoveis"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-[#D4AF37] text-[#D4AF37] font-semibold text-base hover:bg-[#D4AF37]/10 transition-all"
            >
              Catálogo de Imóveis
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-gray-400 animate-bounce">
          <span className="text-xs tracking-widest uppercase mb-1 text-[#D4AF37]">Explorar</span>
          <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
        </div>
      </section>

      {/* 2. IMÓVEIS EM DESTAQUE */}
      <section id="imoveis" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
            Imóveis em Destaque
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Propriedades cuidadosamente selecionadas que representam o melhor do mercado de luxo
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((property) => (
            <div
              key={property.id}
              className="bg-[#232938] rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-luxury hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#1A1F2C]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] font-bold text-sm shadow-lg">
                  {property.price}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center text-xs text-[#D4AF37] font-semibold uppercase tracking-wider gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {property.location}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {property.title}
                  </h3>

                  <ul className="space-y-2 pt-2 border-t border-gray-700/50">
                    {property.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Olá, tenho interesse em ${property.title} (${property.price}). Poderia me enviar mais detalhes?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#D4AF37] text-[#1A1F2C] font-bold text-center flex items-center justify-center gap-2 shadow-gold hover:bg-[#c29d2f] transition-all"
                >
                  <MessageCircle className="w-5 h-5" /> Tenho Interesse
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SERVIÇOS EXCLUSIVOS */}
      <section id="servicos" className="py-24 bg-gradient-luxury border-y border-[#D4AF37]/20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
              Serviços Exclusivos
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              Uma experiência completa e personalizada para cada etapa da sua jornada imobiliária
            </p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#1A1F2C]/80 backdrop-blur-md p-8 rounded-2xl border border-[#D4AF37]/30 shadow-luxury hover:border-[#D4AF37] transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-[#1A1F2C] transition-all duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
            Experiência do Cliente
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Depoimentos de quem confiou em nosso trabalho para realizar seus sonhos
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              className="bg-[#232938] p-8 rounded-2xl border border-[#D4AF37]/20 shadow-luxury flex flex-col justify-between relative"
            >
              <div className="absolute top-6 right-6 flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-8 font-serif leading-relaxed">
                "{t.content}"
              </p>

              <div>
                <h4 className="font-serif font-bold text-white text-lg">{t.name}</h4>
                <p className="text-xs text-[#D4AF37] uppercase tracking-wider font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SOBRE O CORRETOR */}
      <section id="sobre" className="py-24 bg-gradient-luxury border-y border-[#D4AF37]/20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#D4AF37]/20 rounded-3xl blur-xl"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
                alt="Corretor profissional em terno em escritório moderno e elegante"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-[#1A1F2C]/90 backdrop-blur-md px-6 py-3 rounded-xl border border-[#D4AF37]/40 flex items-center gap-3 shadow-gold">
              <Award className="w-7 h-7 text-[#D4AF37]" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Credenciamento</p>
                <p className="text-white font-bold font-serif">CRECI 45892-F</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">
              Especialista em Luxo
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
              Victória Saint-Germain
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed font-serif">
              Com mais de 15 anos de trajetória no mercado imobiliário de alto padrão, construí uma reputação sólida baseada na absoluta discrição, profundo conhecimento técnico das regiões mais nobres e negociações estratégicas de alto valor.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              Minha missão é proporcionar uma experiência fluida, segura e sofisticada para clientes que buscam não apenas um imóvel, mas um ativo imobiliário exclusivo que reflita seu estilo de vida e conquistas.
            </p>

            <div className="pt-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#D4AF37] text-[#1A1F2C] font-bold shadow-gold hover:bg-[#c29d2f] transition-all"
              >
                Consultoria Privada <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REGIÕES DE ATUAÇÃO */}
      <section id="regioes" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
            Regiões de Atuação
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Presença consolidada nas áreas mais valorizadas e exclusivas do país
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REGIONS.map((reg, index) => (
            <div
              key={index}
              className="bg-[#232938] p-6 rounded-2xl border border-[#D4AF37]/20 shadow-luxury flex items-center justify-between hover:border-[#D4AF37]/60 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-lg">{reg.name}</h3>
                  <p className="text-xs text-gray-400">Portfólio verificado</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                {reg.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FOOTER & CONTATO */}
      <footer id="contato" className="bg-gradient-luxury border-t border-[#D4AF37]/30 text-white pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-[#D4AF37]">
              VICTÓRIA & SAINT-GERMAIN
            </h3>
            <p className="text-gray-300 text-sm font-serif italic">
              Experiências Imobiliárias Exclusivas
            </p>
            <p className="text-xs text-gray-400">
              CRECI 45892-F
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-[#D4AF37] text-lg">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#inicio" className="hover:text-[#D4AF37] transition-colors">Início</a></li>
              <li><a href="#imoveis" className="hover:text-[#D4AF37] transition-colors">Imóveis</a></li>
              <li><a href="#servicos" className="hover:text-[#D4AF37] transition-colors">Serviços</a></li>
              <li><a href="#depoimentos" className="hover:text-[#D4AF37] transition-colors">Depoimentos</a></li>
              <li><a href="#sobre" className="hover:text-[#D4AF37] transition-colors">Sobre</a></li>
              <li><a href="#regioes" className="hover:text-[#D4AF37] transition-colors">Regiões</a></li>
              <li><a href="#contato" className="hover:text-[#D4AF37] transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-[#D4AF37] text-lg">Canais Diretos</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" /> +55 (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/victoria.saintgermain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#D4AF37]" /> @victoria.saintgermain
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@victoriasaintgermain.com.br"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37]" /> contato@victoriasaintgermain.com.br
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-[#D4AF37] text-lg">Template & Ajuda</h4>
            <p className="text-sm text-gray-300">
              Gostou da estrutura deste site de alto padrão?
            </p>
            <a
              href="/instrucoes"
              className="inline-block px-5 py-2.5 rounded-xl border border-[#D4AF37] text-[#D4AF37] text-sm font-semibold hover:bg-[#D4AF37]/10 transition-all"
            >
              Como Usar Este Template
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Victória & Saint-Germain Imóveis de Luxo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
