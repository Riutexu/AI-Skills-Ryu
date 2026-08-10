---
name: landing-pages-avanzado
description: Landing pages con Tailwind CSS: componentes reutilizables, SEO on-page, accesibilidad ARIA, animaciones con IntersectionObserver y formularios con estado y validación.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "landing-pages"
  nivel: avanzado
  stack: "Tailwind CSS, JavaScript"
---

# Landing page con Tailwind CSS (nivel avanzado)

## Qué hace este skill

Construye landing pages modernas con Tailwind CSS y JavaScript de mejora progresiva. Combina utilidades de Tailwind con componentes reutilizables, metadatos SEO y Open Graph completos, accesibilidad con roles ARIA, animaciones de aparición con IntersectionObserver que respetan `prefers-reduced-motion`, y formularios con validación y estado en vivo.

## Cuándo usarlo

- Cuando la landing ya no cabe en un archivo HTML suelto y necesitas componentes y consistencia visual respaldada por un sistema de utilidades.
- Cuando el proyecto pide SEO on-page: título, descripción, canonical, Open Graph y miniaturas correctos.
- Cuando necesitas animaciones de entrada (reveal, contadores) sin cargar librerías pesadas.
- Cuando el formulario requiere feedback en vivo: validación por campo, estado de envío y mensajes accesibles vía `aria-live`.
- Cuando el stack del proyecto ya usa Tailwind (CDN o build con Vite) y no se quiere introducir un framework todavía.

## Requisitos previos

- Nivel básico de este tema dominado (o equivalente): estructura semántica y responsive con media queries.
- Tailwind CSS instalado y funcionando (CDN con config inline o build con Vite).
- JavaScript intermedio: eventos, `fetch`, promesas e IntersectionObserver.
- Contenido real: propuesta de valor, beneficios, testimonios, datos de contacto y destino del formulario.

## Workflow paso a paso

1. Define el objetivo de conversión y escribe los textos finales en un documento de contenido.
2. Configura Tailwind: extensiones de `theme` (colores de marca, fuentes, animaciones) o config inline en el CDN.
3. Define el mapa de secciones: hero, prueba social, beneficios, cómo funciona, testimonios, FAQ y formulario.
4. Crea clases compuestas en `@layer components` (`.btn`, `.contenedor-landing`, `.tarjeta`) para no repetir utilidades.
5. Construye el hero: `h1` escalado (`text-4xl sm:text-5xl lg:text-6xl`) y CTA con atributos `data-` preparados para tracking futuro.
6. Aplica utilidades responsive por breakpoint (`sm`, `md`, `lg`) en todas las secciones; sin media queries manuales.
7. Añade SEO on-page en el `head`: title de 50-60 caracteres, meta description, canonical, Open Graph y theme-color.
8. Implementa accesibilidad: nav con `aria-label`, `main` como región de contenido, `aria-live` en el estado del formulario y contraste mínimo 4.5:1.
9. Marca los elementos animables con `data-reveal` y `data-retraso`; escribe el observador único en `animaciones.js`.
10. Implementa el formulario: validación HTML5 más mensajes en vivo, estados "enviando / enviado / error" y envío con `fetch` y fallback visible.
11. Respeta `prefers-reduced-motion`: sin reveal ni animaciones si el usuario lo solicita.
12. Prueba en archivo local y en red: navegación, focus visible, orden de tabulación y zoom al 200 %.
13. Corre una auditoría Lighthouse: SEO y accesibilidad sobre 90; corrige contraste y elementos sin `alt`.
14. Documenta dónde se editan textos, colores y el endpoint del formulario.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| objetivo | Conversión principal de la página | string | Sí | "Solicitudes de demo del producto" |
| stack | Stack técnico de la página | string | Sí | "Tailwind CSS con CDN y JavaScript" |
| modo_tailwind | Método de uso de Tailwind | string | No | "cdn" o "build con vite" |
| url_referencia | Referencia visual o funcional | url | No | "https://tailwindui.com" |
| secciones_landing | Secciones en orden de aparición | string | No | "hero, beneficios, proceso, faq, formulario" |
| endpoint_formulario | URL de destino del envío | url | No | "https://ejemplo.com/api/lead" |
| animaciones | Tipos de animación esperados | string | No | "reveal, contador" |
| criterios_aceptacion | Condiciones de finalización | string | No | "Lighthouse SEO >= 90, reduce-motion respetado, form con estado" |

## Reglas y checklist

- [ ] Título único entre 50 y 60 caracteres y meta description entre 120 y 160.
- [ ] Open Graph completo (title, description, image, type, url) en todas las páginas compartibles.
- [ ] Un solo `h1`; jerarquía `h2`/`h3` consistente por sección.
- [ ] Textos con contraste ≥ 4.5:1 (texto pequeño) o ≥ 3:1 (texto grande).
- [ ] Animaciones solo mediante `data-reveal`; desactivadas si `prefers-reduced-motion: reduce`.
- [ ] Formulario con etiquetas visibles, validación en vivo y región `aria-live` de estado.
- [ ] Focus visible y orden de tabulación lógico, incluido el menú móvil.
- [ ] Sin scroll horizontal en 320 px; utilidades responsive en lugar de media queries sueltas.
- [ ] Lighthouse: SEO ≥ 90 y Accesibilidad ≥ 90 medido sobre el build.
- [ ] CTA principal repetido al menos dos veces (hero y cierre) con el mismo destino de conversión.

## Ejemplos de prompts

- "Crea una landing con Tailwind CSS para una app de finanzas personales: hero con CTA, beneficios con iconos SVG, testimonios, FAQ con accordion y formulario de lista de espera."
- "Uso el CDN de Tailwind; dame una config inline con colores de marca #0f766e y #f59e0b y una fuente de Google Fonts."
- "Añade animación de aparición con IntersectionObserver a las tarjetas: subir y desvanecer con retraso escalonado, respetando prefers-reduced-motion."
- "Revisa el SEO de esta landing: dime qué metadatos y Open Graph faltan y genera el bloque completo en español."
- "El formulario debe validar en vivo: email correcto, mensaje mínimo de 10 caracteres y estado 'enviando' con respuesta accesible."

## Plantillas y recursos

- [templates/secciones.html](./templates/secciones.html) — Página de ejemplo con secciones construidas con utilidades de Tailwind y configuración inline del CDN.
- [templates/animaciones.js](./templates/animaciones.js) — Observador de aparición (reveal) con retrasos escalonados, contadores y respeto a prefers-reduced-motion.
- [resources/checklist.md](./resources/checklist.md) — Lista de verificación de calidad del nivel avanzado.