import React from 'react';
import { MapPin, Clock, Star, Phone, MessageCircle, Navigation, CheckCircle2, Scissors } from 'lucide-react';
import { config } from './config';
import { getWhatsAppLink } from './utils';

function App() {
  const wpGeral = getWhatsAppLink(config.barbearia.telefone, 'Olá! Gostaria de agendar um horário.');

  return (
    <div className="min-h-screen bg-brand-black text-brand-light font-sans">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-brand-black/95 backdrop-blur-md z-50 border-b border-brand-gray">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-brand-gold uppercase tracking-widest flex items-center gap-2">
            <Scissors size={28} />
            {config.barbearia.nome}
          </h1>
          <nav className="hidden md:flex gap-8">
            <a href="#servicos" className="text-sm font-semibold hover:text-brand-gold transition">Serviços</a>
            <a href="#galeria" className="text-sm font-semibold hover:text-brand-gold transition">Galeria</a>
            <a href="#localizacao" className="text-sm font-semibold hover:text-brand-gold transition">Localização</a>
          </nav>
          <a href={wpGeral} target="_blank" rel="noreferrer" className="bg-brand-gold text-brand-black px-5 py-2 rounded font-bold hover:bg-brand-goldHover transition flex items-center gap-2 text-sm md:text-base">
            <MessageCircle size={20} />
            Agendar
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-20 h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={config.imagens.hero} alt="Interior Barbearia" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mt-12">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">{config.barbearia.slogan}</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">{config.barbearia.descricao}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={wpGeral} target="_blank" rel="noreferrer" className="bg-brand-gold text-brand-black px-8 py-4 rounded font-bold text-lg hover:bg-brand-goldHover transition shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2">
              <MessageCircle size={24} />
              Agendar Horário
            </a>
            <a href="#servicos" className="border border-brand-gold text-brand-gold px-8 py-4 rounded font-bold text-lg hover:bg-brand-gold/10 transition flex items-center justify-center">
              Ver Serviços e Preços
            </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-brand-gold mb-4 uppercase tracking-wide">Por que escolher a {config.barbearia.nome}?</h3>
            <p className="text-gray-400">Dados demonstrativos para ilustrar os diferenciais do negócio.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { titulo: 'Atendimento Premium', desc: 'Foco total no seu estilo e preferência.' },
              { titulo: 'Ambiente Climatizado', desc: 'Conforto garantido enquanto você aguarda.' },
              { titulo: 'Profissionais Experientes', desc: 'Barbeiros atualizados nas tendências.' },
              { titulo: 'Cerveja Gelada', desc: 'Cortesia da casa para clientes em atendimento.' }
            ].map((item, i) => (
              <div key={i} className="bg-brand-black p-8 rounded-lg border border-gray-800 hover:border-brand-gold/30 transition">
                <CheckCircle2 className="text-brand-gold mb-4" size={32} />
                <h4 className="text-xl font-bold text-white mb-2">{item.titulo}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS E PREÇOS */}
      <section id="servicos" className="py-24 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-brand-gold mb-4 uppercase tracking-wide">Nossos Serviços</h3>
            <p className="text-gray-400 mb-2">Valores demonstrativos — Consulte-nos para confirmar os preços reais.</p>
          </div>
          <div className="space-y-4">
            {config.servicos.map(servico => (
              <div key={servico.id} className="bg-brand-gray p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-800 hover:border-brand-gold/50 transition group">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-xl font-bold text-white group-hover:text-brand-gold transition">{servico.nome}</h4>
                  <p className="text-gray-400 text-sm mt-1">{servico.descricao}</p>
                </div>
                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t border-gray-700 md:border-none pt-4 md:pt-0">
                  <span className="text-2xl font-bold text-brand-gold">{servico.preco}</span>
                  <a 
                    href={getWhatsAppLink(config.barbearia.telefone, `Olá! Gostaria de agendar o serviço: ${servico.nome}.`)}
                    target="_blank" rel="noreferrer"
                    className="bg-brand-black border border-brand-gold text-brand-gold px-6 py-2 rounded font-semibold hover:bg-brand-gold hover:text-brand-black transition text-sm whitespace-nowrap"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-24 bg-brand-gray">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-brand-gold mb-4 uppercase tracking-wide">Galeria de Estilos</h3>
            <p className="text-gray-400">Imagens ilustrativas. Substitua pelas fotos reais dos cortes da barbearia.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {config.imagens.galeria.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg group aspect-[4/5] relative">
                <img src={img.url} alt={`Estilo ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                   <span className="text-brand-gold font-bold text-lg border border-brand-gold px-4 py-2 rounded">{img.estilo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="py-24 bg-brand-black border-y border-brand-gray">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-brand-gold mb-4 uppercase tracking-wide">O que dizem nossos clientes</h3>
          <p className="text-gray-400 mb-16 bg-gray-900 inline-block px-4 py-2 rounded text-sm border border-gray-700">
             * Avaliações demonstrativas — Exemplos ilustrativos para modelo de portfólio *
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {config.depoimentos.map(dep => (
              <div key={dep.id} className="bg-brand-gray p-8 rounded-lg border border-gray-800 text-left relative">
                <div className="flex gap-1 mb-6 text-brand-gold">
                  {[...Array(dep.estrelas)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed">"{dep.texto}"</p>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center font-bold text-brand-gold border border-brand-gold/30">
                     {dep.nome.charAt(0)}
                   </div>
                   <p className="font-bold text-white">{dep.nome}</p>
                </div>
              </div>
            ))}
          </div>
          <a href={config.barbearia.googleReviewLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-brand-gold text-brand-gold px-8 py-4 rounded-lg font-bold hover:bg-brand-gold hover:text-brand-black transition">
            <Star size={24} /> Avalie-nos no Google
          </a>
        </div>
      </section>

      {/* LOCALIZAÇÃO E CONTATO */}
      <section id="localizacao" className="py-24 bg-brand-gray">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-brand-gold mb-10 uppercase tracking-wide">Venha nos conhecer</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <MapPin className="text-brand-gold shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-xl text-white mb-2">Endereço</h4>
                    <p className="text-gray-400">{config.barbearia.endereco}</p>
                    <p className="text-xs text-brand-gold mt-2 bg-brand-gold/10 inline-block px-2 py-1 rounded">* Endereço de demonstração *</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <Clock className="text-brand-gold shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-xl text-white mb-2">Horário de Funcionamento</h4>
                    <p className="text-gray-400">{config.barbearia.horarios}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <Phone className="text-brand-gold shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-xl text-white mb-2">Contato</h4>
                    <p className="text-gray-400">WhatsApp: +55 {config.barbearia.telefone.substring(2,4)} {config.barbearia.telefone.substring(4)}</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <a href={`https://maps.google.com/?q=${encodeURIComponent(config.barbearia.endereco)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-brand-black border border-gray-600 px-8 py-4 rounded text-white font-semibold hover:border-brand-gold hover:text-brand-gold transition">
                  <Navigation size={20} /> Como chegar (Google Maps)
                </a>
              </div>
            </div>
            
            {/* Mapa Demonstrativo (Iframe Fictício) */}
            <div className="h-[450px] w-full bg-brand-black rounded-lg overflow-hidden border border-gray-700 relative shadow-xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-brand-black/85 z-10 backdrop-blur-sm">
                    <MapPin size={56} className="text-brand-gold mb-6 animate-bounce" />
                    <h4 className="text-2xl font-bold text-white mb-4">Mapa Demonstrativo</h4>
                    <p className="text-gray-400 text-base max-w-sm">No projeto real do cliente, este quadro exibirá o Google Maps exato do estabelecimento via Iframe.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-black pt-16 pb-8 border-t border-gray-800 text-center md:text-left">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-2xl font-bold text-brand-gold mb-6 uppercase flex items-center justify-center md:justify-start gap-2">
               <Scissors size={24} /> {config.barbearia.nome}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">{config.barbearia.descricao}</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold text-white mb-6">Navegação</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#servicos" className="hover:text-brand-gold transition">Serviços e Preços</a></li>
              <li><a href="#galeria" className="hover:text-brand-gold transition">Nossos Trabalhos</a></li>
              <li><a href="#localizacao" className="hover:text-brand-gold transition">Endereço e Horários</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold text-white mb-6">Pronto para o seu corte?</h4>
            <a href={wpGeral} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-brand-gold text-brand-black px-6 py-3 rounded font-bold hover:bg-brand-goldHover transition">
              <MessageCircle size={20} /> Agendar Agora
            </a>
          </div>
        </div>
        
        {/* Créditos Gomark */}
        <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold border border-gray-800 px-3 py-1 rounded">
             Site de Demonstração
          </p>
          <p className="text-sm text-gray-500">
             © {new Date().getFullYear()} {config.barbearia.nome}. Todos os direitos reservados.
          </p>
          <a href={config.gomark.link} target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-brand-gold transition flex items-center gap-2">
            {config.gomark.credito}
          </a>
        </div>
      </footer>
      
      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a href={wpGeral} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-black/50 hover:scale-110 hover:-translate-y-1 transition duration-300 z-50 flex items-center justify-center group" aria-label="WhatsApp">
        <MessageCircle size={32} />
        <span className="absolute right-16 bg-white text-black text-sm px-3 py-1 rounded shadow-lg font-bold opacity-0 pointer-events-none group-hover:opacity-100 transition whitespace-nowrap">
           Agendar Horário
        </span>
      </a>
    </div>
  );
}

export default App;