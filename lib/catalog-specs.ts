/**
 * Specs y beneficios base por familia de modelo.
 * Se fusionan con los datos de cada ítem del catálogo.
 */
export const MODEL_SPECS: Record<
  string,
  { features: string[]; benefits: string[]; series: "pro" | "standard" }
> = {
  "iPhone 16 Pro Max": {
    series: "pro",
    features: [
      "Pantalla Super Retina XDR 6.9\"",
      "Chip A18 Pro",
      "Sistema de cámaras Pro 48 MP",
      "Grabación de video espacial",
      "Botón de Cámara y Acción",
    ],
    benefits: [
      "Máximo rendimiento profesional",
      "Ideal para foto, video y juegos",
      "Batería de larga duración",
    ],
  },
  "iPhone 16 Pro": {
    series: "pro",
    features: [
      "Pantalla Super Retina XDR 6.3\"",
      "Chip A18 Pro",
      "Cámara Pro 48 MP",
      "Diseño en titanio",
      "USB-C de alta velocidad",
    ],
    benefits: [
      "Potencia Pro en formato compacto",
      "Excelente para productividad",
      "Construcción premium en titanio",
    ],
  },
  "iPhone 16": {
    series: "standard",
    features: [
      "Pantalla Super Retina XDR 6.1\"",
      "Chip A18",
      "Cámara Fusion 48 MP",
      "Botón de Cámara",
      "USB-C",
    ],
    benefits: [
      "Equilibrio perfecto precio/rendimiento",
      "Gran cámara para el día a día",
      "Ideal como primer iPhone",
    ],
  },
  "iPhone 15 Pro Max": {
    series: "pro",
    features: [
      "Pantalla Super Retina XDR 6.7\"",
      "Chip A17 Pro",
      "Cámara teleobjetivo 5x",
      "Marco de titanio",
      "USB-C",
    ],
    benefits: [
      "Experiencia Pro a mejor precio",
      "Zoom óptico avanzado",
      "Excelente estado de exhibición",
    ],
  },
  "iPhone 15 Pro": {
    series: "pro",
    features: [
      "Pantalla Super Retina XDR 6.1\"",
      "Chip A17 Pro",
      "Cámara Pro 48 MP",
      "Titanio ligero",
      "USB-C",
    ],
    benefits: [
      "Rendimiento de gama alta",
      "Diseño ligero y resistente",
      "Ideal si buscas Pro sin Max",
    ],
  },
  "iPhone 15": {
    series: "standard",
    features: [
      "Pantalla Super Retina XDR 6.1\"",
      "Chip A16 Bionic",
      "Cámara principal 48 MP",
      "Dynamic Island",
      "USB-C",
    ],
    benefits: [
      "Diseño moderno y colorido",
      "Cámara de gran calidad",
      "Opción verificada y accesible",
    ],
  },
  "iPhone 14 Pro": {
    series: "pro",
    features: [
      "Pantalla Super Retina XDR 6.1\"",
      "Chip A16 Bionic",
      "Cámara Pro 48 MP",
      "Dynamic Island",
      "Always-On Display",
    ],
    benefits: [
      "Funciones Pro a menor costo",
      "Pantalla Always-On",
      "Gran relación calidad-precio",
    ],
  },
  "iPhone 14": {
    series: "standard",
    features: [
      "Pantalla Super Retina XDR 6.1\"",
      "Chip A15 Bionic",
      "Sistema de cámara dual",
      "Detección de choques",
      "Ceramic Shield",
    ],
    benefits: [
      "Confiable para uso diario",
      "Buen rendimiento y batería",
      "Entrada accesible al ecosistema Apple",
    ],
  },
  "iPhone 13": {
    series: "standard",
    features: [
      "Pantalla Super Retina XDR 6.1\"",
      "Chip A15 Bionic",
      "Cámara dual 12 MP",
      "Modo Cine",
      "Ceramic Shield",
    ],
    benefits: [
      "Opción económica verificada",
      "Sigue siendo rápido y fluido",
      "Perfecto para redes y WhatsApp",
    ],
  },
};

/** Colores hex aproximados para el mockup visual */
export const COLOR_SWATCHES: Record<string, { body: string; frame: string }> = {
  "Titanio negro": { body: "#2c2c2e", frame: "#1c1c1e" },
  "Titanio natural": { body: "#c4b8a5", frame: "#9a8f7e" },
  "Titanio azul": { body: "#3a4a5c", frame: "#2a3644" },
  "Titanio blanco": { body: "#e8e6e1", frame: "#cfcbc4" },
  Negro: { body: "#1d1d1f", frame: "#000000" },
  Rosa: { body: "#f2cdd0", frame: "#e0b4b8" },
  "Morado oscuro": { body: "#3c2a4f", frame: "#2a1c38" },
  Azul: { body: "#3a5a7c", frame: "#2a4460" },
  Medianoche: { body: "#1a2332", frame: "#0d1219" },
};
