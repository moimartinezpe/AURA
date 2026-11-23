import { WHATSAPP } from '../config';

/** Número limpio (solo dígitos), listo para wa.me */
export const numeroWhatsApp = WHATSAPP.replace(/\D/g, '');

if (!numeroWhatsApp) {
  console.warn('\n⚠️  [AURA] Falta el número de WhatsApp en src/config.ts (los botones abrirán WhatsApp sin destinatario).\n');
}

/** Enlace que abre el chat de AURA con el mensaje ya escrito. */
export function enlaceWhatsApp(mensaje = ''): string {
  const texto = mensaje ? `?text=${encodeURIComponent(mensaje)}` : '';
  return `https://wa.me/${numeroWhatsApp}${texto}`;
}
