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
  { label: "Catálogo", href: "#catalogo" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
] as const;

export type CatalogCondition = "nuevo" | "exhibicion" | "segunda-mano";
export type CatalogAvailability =
  | "disponible"
  | "pocas-unidades"
  | "bajo-pedido"
  | "agotado";

export type CatalogItem = {
  id: string;
  model: string;
  storage: string;
  color: string;
  condition: CatalogCondition;
  availability: CatalogAvailability;
  /** Precio en COP. null = consultar por WhatsApp */
  price: number | null;
  /** Ruta en /public — foto de referencia del equipo */
  image: string;
  note?: string;
};

export const CATALOG_FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "nuevo", label: "Nuevos" },
  { id: "exhibicion", label: "Exhibición" },
  { id: "segunda-mano", label: "Segunda mano" },
] as const;

export const CONDITION_LABELS: Record<CatalogCondition, string> = {
  nuevo: "Nuevo sellado",
  exhibicion: "Exhibición",
  "segunda-mano": "Segunda mano",
};

export const AVAILABILITY_LABELS: Record<CatalogAvailability, string> = {
  disponible: "Disponible",
  "pocas-unidades": "Pocas unidades",
  "bajo-pedido": "Bajo pedido",
  agotado: "Agotado",
};

/**
 * Inventario de ejemplo — reemplaza con tu disponibilidad real.
 * Edita este array para actualizar el catálogo en la web.
 * Sustituye las imágenes en public/images/catalog/ por fotos reales cuando las tengas.
 */
export const CATALOG: CatalogItem[] = [
  {
    id: "iphone-16-pro-max-256-nuevo",
    model: "iPhone 16 Pro Max",
    storage: "256 GB",
    color: "Titanio negro",
    condition: "nuevo",
    availability: "disponible",
    price: null,
    image: "/images/catalog/iphone-black.png",
    note: "Sellado · Importado desde EEUU",
  },
  {
    id: "iphone-16-pro-128-nuevo",
    model: "iPhone 16 Pro",
    storage: "128 GB",
    color: "Titanio natural",
    condition: "nuevo",
    availability: "pocas-unidades",
    price: null,
    image: "/images/catalog/iphone-natural.png",
    note: "Sellado · Importado desde EEUU",
  },
  {
    id: "iphone-16-128-nuevo",
    model: "iPhone 16",
    storage: "128 GB",
    color: "Negro",
    condition: "nuevo",
    availability: "disponible",
    price: null,
    image: "/images/catalog/iphone-black.png",
  },
  {
    id: "iphone-15-pro-max-256-exhibicion",
    model: "iPhone 15 Pro Max",
    storage: "256 GB",
    color: "Titanio azul",
    condition: "exhibicion",
    availability: "disponible",
    price: null,
    image: "/images/catalog/iphone-blue-titanium.png",
    note: "Leve uso · Excelente estado",
  },
  {
    id: "iphone-15-pro-128-exhibicion",
    model: "iPhone 15 Pro",
    storage: "128 GB",
    color: "Titanio blanco",
    condition: "exhibicion",
    availability: "pocas-unidades",
    price: null,
    image: "/images/catalog/iphone-white.png",
  },
  {
    id: "iphone-15-128-segunda",
    model: "iPhone 15",
    storage: "128 GB",
    color: "Rosa",
    condition: "segunda-mano",
    availability: "disponible",
    price: null,
    image: "/images/catalog/iphone-pink.png",
    note: "Verificado · Batería saludable",
  },
  {
    id: "iphone-14-pro-256-segunda",
    model: "iPhone 14 Pro",
    storage: "256 GB",
    color: "Morado oscuro",
    condition: "segunda-mano",
    availability: "disponible",
    price: null,
    image: "/images/catalog/iphone-purple.png",
  },
  {
    id: "iphone-14-128-segunda",
    model: "iPhone 14",
    storage: "128 GB",
    color: "Azul",
    condition: "segunda-mano",
    availability: "bajo-pedido",
    price: null,
    image: "/images/catalog/iphone-blue.png",
  },
  {
    id: "iphone-13-128-segunda",
    model: "iPhone 13",
    storage: "128 GB",
    color: "Medianoche",
    condition: "segunda-mano",
    availability: "agotado",
    price: null,
    image: "/images/catalog/iphone-midnight.png",
  },
];

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
