const WHATSAPP_MESSAGE =
  "Hi! I'm interested in your travel services and would like to discuss my travel plans and how you can help me create an unforgettable experience.";

export function getWhatsAppLink(phoneNumber: string): string {
  const whatsappNumber = phoneNumber.replace(/[\s+]/g, "");
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}
