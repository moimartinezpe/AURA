import productosJson from '../data/productos.json';
import categoriasJson from '../data/categorias.json';

export interface Producto {
  id: string;
  nombre: string;
  categorias: string[];
  coleccion: string;
  material: string;
  acabados: string[];
  medidas: string;
  /** Opción → precio en soles. null = precio por confirmar. */
  precios: Record<string, number | null>;
  /** "texto": nombre/fecha/frase · "foto": fotograbado · "ninguna": no se graba */
  personalizacion: 'texto' | 'foto' | 'ninguna';
  nota: string;
  fotos: string[];
  destacado: boolean;
  agotado: boolean;
}

export interface Categoria {
  id: string;
  nombre: string;
  foto: string;
  enlace?: string;
}

export const productos = productosJson as Producto[];
export const categorias = categoriasJson as Categoria[];

export const destacados = productos.filter((p) => p.destacado && !p.agotado);

/** "S/ 59.90" */
export function soles(monto: number): string {
  return `S/ ${monto.toFixed(2)}`;
}

/** Precio más bajo del producto, o null si aún no tiene precio. */
export function precioDesde(p: Producto): number | null {
  const valores = Object.values(p.precios).filter((v): v is number => typeof v === 'number');
  return valores.length ? Math.min(...valores) : null;
}

export function textoPrecio(p: Producto): string {
  const desde = precioDesde(p);
  if (desde === null) return 'Consulta el precio';
  return Object.keys(p.precios).length > 1 ? `Desde ${soles(desde)}` : soles(desde);
}

export function enlaceCategoria(c: Categoria): string {
  return c.enlace ?? `/catalogo/?categoria=${c.id}`;
}
