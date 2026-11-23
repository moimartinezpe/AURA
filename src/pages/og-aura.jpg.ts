import type { APIRoute } from 'astro';
import { imagenOg } from '../lib/imagenes-marca';

export const GET: APIRoute = async () =>
  new Response(new Uint8Array(await imagenOg()), { headers: { 'Content-Type': 'image/jpeg' } });
