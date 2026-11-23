import type { APIRoute } from 'astro';
import { iconoEstrella } from '../lib/imagenes-marca';

export const GET: APIRoute = async () =>
  new Response(new Uint8Array(await iconoEstrella(180)), { headers: { 'Content-Type': 'image/png' } });
