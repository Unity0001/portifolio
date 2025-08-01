export const whatsappNumber = 5519989817312;

export const whatsappMessage =
  "Olá! Vi seu trabalho e gostaria de saber mais sobre seus serviços digitais.";

export const getWhatsAppUrl = () =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const handleWhatsAppClick = () => {
  window.open(getWhatsAppUrl(), "_blank");
};