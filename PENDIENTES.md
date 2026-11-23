# Pendientes de AURA Joyería

Datos que faltan o que hay que confirmar. Nada de esto se inventó: donde falta un dato, la web muestra un texto neutro o un marcador "EJEMPLO".

## Datos que faltan

| Qué | Dónde se cambia | Cómo se ve hoy |
|---|---|---|
| Número de WhatsApp | `src/config.ts` → `WHATSAPP` | Los botones abren WhatsApp sin destinatario |
| Precios de los 53 productos (el catálogo PDF los trae en blanco) | `src/data/productos.json` → `"precios"` | "Consulta el precio" |
| Logos en SVG (`00-logo-chocolate.svg`, `00-logo-crema.svg`, `00-isotipo-estrella-*.svg`) | `public/archivos/` (mismo nombre de archivo) | Versión temporal sacada del Manual de Identidad (imagen, no vector) |
| Links de Instagram y Facebook | `src/config.ts` → `REDES` | Íconos apagados en el footer |
| Dominio | `src/config.ts` → `SITIO.dominio` | Se usará la dirección gratis de Vercel/Netlify |
| Testimonios reales | `src/data/testimonios.json` | 3 tarjetas marcadas "EJEMPLO" |
| Videos de TikTok (link + portada) | `src/data/tiktok.json` | 3 portadas de relleno "VIDEO DE EJEMPLO" |
| Costos y tiempos de envío | Página Envíos y pagos (paso 2) | — |
| Datos de pago: Yape/Plin, banco, cuenta, CCI, titular, % adicional con tarjeta | Página Envíos y pagos (paso 2) | — |
| Monto de la reserva (política 07: "Reserva de S/ ____") | Página Envíos y pagos (paso 2) | — |

## Para confirmar del catálogo 2026

- **Nombres repetidos:**
  - "Collar Virgen de Guadalupe" aparece 3 veces (pág. 6 y 2 veces en la pág. 7). Quedaron como *modelo 2* y *modelo 3*.
  - "Collar Atene" aparece 2 veces (pág. 12 con foto, pág. 16 con texto).
  - "Brazalete Brillo" (pág. 14) y "Brazaletes Brillo" (pág. 24): ¿son productos distintos?
- **Acabados de los collares de acero 316L:** los asigné según la foto.
  - Dorado: Print, Straw, Alma, Birrete, Legacy y Aurora.
  - Plateado: el resto.
  - ¿Alguno viene en los dos acabados?
- **Medidas:** solo las colecciones Xuping y Religiosos dicen "cadena de 45 cm". Faltan las del resto.
- **Agotados:** Collar Aura y Collar Relicario aparecen como "Agotado". ¿Se muestran o se ocultan?

## Diferencia entre el brief y el Manual de Identidad

- **Letra manuscrita:** el manual sugiere Great Vibes; el brief pide Mr De Haviland. Se usó Mr De Haviland (cambiarla toma un minuto).
