// Genera imágenes PNG/JPG a partir de los SVG del logo (para redes y favicon).
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { LOGOS } from '../config';

const CREMA = '#F4EEE4';
const leer = (ruta: string) => fs.readFile(path.join(process.cwd(), 'public', ruta));

async function centrar(svg: string, ancho: number, alto: number, maxAncho: number, maxAlto: number) {
  const logo = await sharp(await leer(svg), { density: 600 })
    .resize({ width: maxAncho, height: maxAlto, fit: 'inside' })
    .png()
    .toBuffer();
  return sharp({ create: { width: ancho, height: alto, channels: 3, background: CREMA } }).composite([
    { input: logo, gravity: 'center' },
  ]);
}

/** Imagen para compartir (Open Graph): logo chocolate sobre crema, 1200×630 */
export async function imagenOg() {
  return (await centrar(LOGOS.chocolate, 1200, 630, 620, 380)).jpeg({ quality: 90 }).toBuffer();
}

/** Ícono cuadrado con la estrella (favicon / ícono del celular) */
export async function iconoEstrella(lado: number) {
  return (await centrar(LOGOS.estrellaChocolate, lado, lado, Math.round(lado * 0.78), Math.round(lado * 0.78)))
    .png()
    .toBuffer();
}
