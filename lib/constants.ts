export const SITE = {
  name: "iPhone House",
  tagline: "Tu primer Apple, con confianza",
  description:
    "Venta de iPhones nuevos, de exhibición y de segunda mano, además de accesorios Apple originales. Importados desde EEUU, con entrega en Neiva, Huila.",
  url: "https://iphonehouse.co",
  locale: "es_CO",
} as const;

export const CONTACT = {
  phone: "3024274290",
  phoneDisplay: "302 427 4290",
  whatsapp: "573024274290",
  email: "juanchosorio845@gmail.com",
  city: "Neiva",
  region: "Huila",
  country: "Colombia",
  locationNote:
    "Operamos de forma virtual. Al concretar tu compra, coordinamos entrega presencial en Neiva, Huila.",
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/iphone.house_11/",
  facebook: "https://web.facebook.com/profile.php?id=61573273683138",
  tiktok: "https://www.tiktok.com/@iphone_house2349",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const PRODUCTS = [
  {
    id: "nuevos",
    title: "iPhone nuevos",
    description:
      "Equipos totalmente sellados y nuevos, importados directamente desde Estados Unidos.",
    icon: "smartphone",
  },
  {
    id: "exhibicion",
    title: "iPhone de exhibición",
    description:
      "Equipos con leve uso, en excelente estado, traídos desde EEUU a precios accesibles.",
    icon: "store",
  },
  {
    id: "segunda-mano",
    title: "iPhone de segunda mano",
    description:
      "Equipos recibidos como permuta cuando adquieres uno nuevo. Calidad verificada.",
    icon: "refresh-cw",
  },
  {
    id: "accesorios",
    title: "Accesorios Apple",
    description:
      "Forros, protectores de vidrio, cables, cargadores, AirPods, MacBooks, iMac y más.",
    icon: "headphones",
  },
] as const;

export const BENEFITS = [
  {
    title: "Seguridad",
    description:
      "Cada equipo pasa por verificación rigurosa. Compra con total tranquilidad.",
    icon: "shield-check",
  },
  {
    title: "Confiabilidad",
    description:
      "Productos importados desde EEUU con garantía de autenticidad y calidad.",
    icon: "badge-check",
  },
  {
    title: "Tu primera experiencia Apple",
    description:
      "Te acompañamos para que vivas la magia de tu primer producto Apple como debe ser.",
    icon: "sparkles",
  },
] as const;

export const PAYMENT_METHODS = [
  { value: "efectivo", label: "Efectivo" },
  { value: "transferencia", label: "Transferencia bancaria" },
  { value: "permuta", label: "Permuta (entregar equipo usado como parte de pago)" },
] as const;

export const PAYMENT_NOTE =
  "Por el momento no contamos con crédito ni financiación. Todas las compras se realizan con pago de contado.";

export const TRUST_STATS = [
  { value: "100%", label: "Equipos verificados" },
  { value: "EE.UU.", label: "Importación directa" },
  { value: "Neiva", label: "Entrega presencial" },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Cuéntanos qué buscas",
    description: "Completa el formulario con el equipo y forma de pago.",
  },
  {
    step: "02",
    title: "Recibe tu cotización",
    description: "Te respondemos por WhatsApp con precio y disponibilidad.",
  },
  {
    step: "03",
    title: "Cierra tu compra",
    description: "Coordinamos entrega presencial en Neiva, Huila.",
  },
] as const;
