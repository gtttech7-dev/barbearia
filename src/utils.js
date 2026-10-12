export const getWhatsAppLink = (telefone, mensagem) => {
  const msg = encodeURIComponent(mensagem);
  return `https://wa.me/${telefone}?text=${msg}`;
};