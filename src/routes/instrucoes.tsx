import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, Phone, Mail, Sparkles } from "lucide-react";

export const Route = createFileRoute("/instrucoes")({
  component: InstructionsPage,
});

function InstructionsPage() {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-[#F1F0FB] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#D4AF37] hover:underline mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para o Início
        </Link>

        <div className="bg-[#232938] border border-[#D4AF37]/30 rounded-2xl p-8 md:p-12 shadow-luxury">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37]">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif text-[#D4AF37]">
                Como Usar Este Template
              </h1>
              <p className="text-sm text-gray-400">
                Guia de personalização e boas práticas para corretores de alto padrão
              </p>
            </div>
          </div>

          <div className="space-y-8 text-gray-300">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
                1. Personalização de Dados
              </h2>
              <p>
                Para adaptar este site para a sua marca pessoal ou imobiliária, você pode editar os textos principais em <code className="bg-black/40 text-[#D4AF37] px-2 py-1 rounded text-sm">src/routes/index.tsx</code>:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-400">
                <li>Nome da corretora / empresa e slogan no Hero e Footer.</li>
                <li>Número de telefone do WhatsApp para captação automática de leads por imóvel.</li>
                <li>CRECI, e-mail de contato, Instagram e endereços de atendimento.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
                2. Imagens e Mídia
              </h2>
              <p>
                As imagens atuais utilizam fotografias curadas de altíssima qualidade de propriedades de luxo (Unsplash). Para inserir seus próprios imóveis, substitua as URLs no array de imóveis localizado no arquivo principal.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
                3. Integração com WhatsApp
              </h2>
              <p>
                Os botões "Tenho Interesse" já vêm configurados para abrir o WhatsApp com mensagens personalizadas contendo o nome do imóvel selecionado, garantindo alta conversão e agilidade no atendimento.
              </p>
            </section>

            <div className="bg-black/30 p-6 rounded-xl border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white">Precisa de suporte ou customização avançada?</h3>
                <p className="text-sm text-gray-400">Entre em contato com nossa equipe técnica.</p>
              </div>
              <a
                href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20suporte%20para%20customizar%20meu%20site%20imobiliário"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#D4AF37] text-[#1A1F2C] font-bold rounded-xl shadow-gold hover:bg-[#c29d2f] transition-all"
              >
                Falar com Suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
