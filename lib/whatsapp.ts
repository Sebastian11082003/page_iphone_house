import { CONTACT } from "./constants";

export type InquiryFormData = {
  name: string;
  phone: string;
  device: string;
  paymentMethod: string;
  message?: string;
};

const PAYMENT_LABELS: Record<string, string> = {
  efectivo: "Efectivo",
  transferencia: "Transferencia bancaria",
  permuta: "Permuta (equipo usado como parte de pago)",
};

export function buildWhatsAppUrl(data: InquiryFormData): string {
  const paymentLabel = PAYMENT_LABELS[data.paymentMethod] ?? data.paymentMethod;

  const lines = [
    "¡Hola! Me interesa un producto de iPhone House.",
    "",
    `*Nombre:* ${data.name}`,
    `*Teléfono:* ${data.phone}`,
    `*Equipo de interés:* ${data.device}`,
    `*Forma de pago:* ${paymentLabel}`,
  ];

  if (data.message?.trim()) {
    lines.push("", `*Mensaje adicional:* ${data.message.trim()}`);
  }

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${CONTACT.whatsapp}?text=${text}`;
}

export function buildCatalogWhatsAppUrl(deviceLabel: string): string {
  const text = encodeURIComponent(
    [
      "¡Hola! Vi el catálogo de iPhone House y me interesa este equipo:",
      "",
      `*Equipo:* ${deviceLabel}`,
      "",
      "¿Me confirmas disponibilidad, precio y formas de pago?",
    ].join("\n")
  );
  return `https://wa.me/${CONTACT.whatsapp}?text=${text}`;
}
