// ATENÇÃO: Edite todas as informações comerciais, textos e imagens do site neste arquivo.
export const config = {
  barbearia: {
    nome: "The Classic Barber",
    slogan: "Seu estilo começa aqui",
    descricao: "Tradição, cortes precisos e um ambiente pensado para o homem moderno. Experiência premium de barbearia.",
    telefone: "5564999999999", // Apenas números, com DDI (55) e DDD
    endereco: "Av. Fictícia, 123 - Centro, Piracanjuba - GO",
    horarios: "Segunda a Sábado: 09h às 20h",
    googleReviewLink: "https://g.page/r/exemplo/review", // Link de avaliação do Google do cliente real
  },
  gomark: {
    credito: "Site desenvolvido por Gomark",
    link: "https://portifolio-vibecoding.vercel.app/"
  },
  servicos: [
    { id: 1, nome: "Corte Masculino", preco: "R$ 40,00", descricao: "Corte tradicional na tesoura ou máquina." },
    { id: 2, nome: "Corte Degradê", preco: "R$ 45,00", descricao: "Fade impecável, do low ao high." },
    { id: 3, nome: "Barba", preco: "R$ 25,00", descricao: "Modelagem, toalha quente e navalha." },
    { id: 4, nome: "Corte + Barba", preco: "R$ 60,00", descricao: "O combo completo com desconto especial." },
    { id: 5, nome: "Sobrancelha", preco: "R$ 10,00", descricao: "Alinhamento perfeito na navalha." },
    { id: 6, nome: "Acabamento (Pezinho)", preco: "R$ 10,00", descricao: "Desenho das linhas e limpeza da nuca." },
  ],
  imagens: {
    // Para trocar as fotos, basta colar o novo link (URL) da imagem real entre as aspas.
    hero: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074",
    galeria: [
      { url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800", estilo: "Corte Degradê" },
      { url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800", estilo: "Corte com Barba" },
      { url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", estilo: "Clássico" },
      { url: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&q=80&w=800", estilo: "Ambiente" },
      { url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800", estilo: "Trabalho Detalhado" },
      { url: "https://images.unsplash.com/photo-1512496015851-a1cbfc3b8c2c?auto=format&fit=crop&q=80&w=800", estilo: "Estrutura" }
    ]
  },
  depoimentos: [
    { id: 1, nome: "Lucas Silva", texto: "Melhor degradê da cidade. Atendimento nota 10!", estrelas: 5 },
    { id: 2, nome: "Fernando Costa", texto: "Ambiente muito bacana e os barbeiros são profissionais demais. Recomendo.", estrelas: 5 },
    { id: 3, nome: "Rodrigo Almeida", texto: "Sempre faço barba e cabelo. Sou cliente fiel, o serviço é impecável.", estrelas: 5 },
  ]
};