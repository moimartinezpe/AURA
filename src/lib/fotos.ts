import type { ImageMetadata } from 'astro';

// Todas las fotos dentro de src/assets/fotos (y sus subcarpetas).
// Astro las convierte a WebP en varios tamaños al publicar.
const archivos = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/fotos/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true },
);

/** Busca una foto por su nombre de archivo, por ejemplo "collar-aldo.jpg". */
export function foto(nombre: string): ImageMetadata {
  const ruta = Object.keys(archivos).find((r) => r.split('/').pop() === nombre);
  if (!ruta) {
    throw new Error(
      `[AURA] No encuentro la foto "${nombre}". Súbela a src/assets/fotos/productos/ o revisa que el nombre en el JSON sea idéntico.`,
    );
  }
  return archivos[ruta].default;
}
