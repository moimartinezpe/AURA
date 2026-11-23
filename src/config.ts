/* ══════════════════════════════════════════════════════════════════
   CONFIGURACIÓN GENERAL DE AURA JOYERÍA
   Todo lo que cambia los datos de contacto de la web está aquí.
   Después de editar, guarda el archivo: la web se vuelve a publicar sola.
   ══════════════════════════════════════════════════════════════════ */

/**
 * NÚMERO DE WHATSAPP (el único lugar donde se escribe).
 * Formato: 51 + celular, todo junto, sin "+", espacios ni guiones.
 * Formato correcto → "51912345678"   ·   Incorrecto → "+51 912 345 678"
 * TODO: escribir el número real de AURA.
 */
export const WHATSAPP = '';

export const SITIO = {
  nombre: 'AURA Joyería',
  lema: 'Detalles que iluminan',
  ciudad: 'Lima, Perú',
  /** TODO: tu dominio cuando lo tengas, por ejemplo "https://www.tudominio.pe".
   *  Mientras esté vacío se usa la dirección gratuita que da Vercel o Netlify. */
  dominio: '',
};

export const REDES = {
  usuario: '@tiendaaura.pe',
  tiktok: 'https://www.tiktok.com/@tiendaaura.pe',
  instagram: '', // TODO: link de Instagram
  facebook: '', // TODO: link de Facebook
};

/** Mensajes que se escriben solos al abrir WhatsApp. */
export const MENSAJES = {
  general: '¡Hola AURA! ✨ Quiero personalizar una joya. ¿Me ayudan?',
  mascotas: '¡Hola AURA! 🐾 Quiero una medalla con la foto de mi mascota. Les envío la foto:',
};

/** Acabados que se pueden elegir y filtrar en el catálogo. */
export const ACABADOS = ['Plateado', 'Dorado', 'Oro rosa'] as const;

/** Textos que se repiten en todas las joyas (vienen del catálogo 2026). */
export const TEXTOS = {
  grabadoTrasero:
    'Dale un toque personal con un grabado trasero: nombres, frases, fechas o símbolos especiales.',
  incluye: 'Incluye estuche Aura, tarjeta de dedicatoria y pañito de limpieza.',
};

/** Archivos del logo (carpeta public/archivos). Reemplaza los SVG manteniendo el mismo nombre. */
export const LOGOS = {
  chocolate: '/archivos/00-logo-chocolate.svg',
  crema: '/archivos/00-logo-crema.svg',
  /** ancho y alto del logo, solo para reservar su espacio mientras carga */
  proporcion: { ancho: 580, alto: 385 },
  estrellaChocolate: '/archivos/00-isotipo-estrella-chocolate.svg',
  estrellaCrema: '/archivos/00-isotipo-estrella-crema.svg',
  estrellaDorado: '/archivos/00-isotipo-estrella-dorado.svg',
};
