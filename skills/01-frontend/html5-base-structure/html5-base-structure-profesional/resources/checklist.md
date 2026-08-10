# Checklist de calidad: estructura HTML5 nivel profesional

## Conformidad con la spec (W3C/WHATWG)

- [ ] Documento validado en el validador del W3C con 0 errores.
- [ ] Elementos y atributos vigentes; sin etiquetas obsoletas (`center`, `font`, `frame`...).
- [ ] Atributos globales usados con su semántica real: `hidden`, `inert`, `translate`, `data-*`.
- [ ] `popover` y `togglepopover` (si se usan) con soporte verificado en caniuse y fallback.
- [ ] Una sola `main`, un solo `h1` y landmarks coherentes.

## Web Components

- [ ] Nombre del custom element con guion obligatorio.
- [ ] Clase que extiende `HTMLElement` con `observedAttributes` de las APIs públicas.
- [ ] `connectedCallback` registra listeners y `disconnectedCallback` los elimina.
- [ ] Estilos encapsulados en shadow DOM; `::part()` disponible para personalización externa.
- [ ] Contenido proyectado con `slot` y zonas nombradas.
- [ ] Eventos personalizados con `bubbles: true` y `composed: true`.
- [ ] Comportamiento correcto sin JavaScript (fallback visible) y con él.

## Critical rendering path

- [ ] CSS crítico inline y hoja completa diferida (media swap o carga condicional).
- [ ] Scripts con `defer` o `type="module"`; ninguno bloquea el primer pintado.
- [ ] `preload` del recurso del LCP con `fetchpriority="high"`.
- [ ] `preconnect` a los dominios de la primera petición externa.
- [ ] Medios con `width`/`height` y fuentes con `font-display` para CLS nulo.
- [ ] DOM mínimo: sin divs vacíos ni carga de librerías innecesarias.

## Rendimiento y a11y integrada

- [ ] Lighthouse rendimiento ≥ 90 y accesibilidad ≥ 90.
- [ ] Foco visible en todos los componentes (incluido shadow DOM).
- [ ] `inert` usado para bloquear regiones realmente inactivas.
- [ ] Enlace "saltar al contenido" presente y operable.
- [ ] `aria-current` en la navegación de la página activa.

## Compatibilidad cross-browser

- [ ] caniuse revisado para cada feature nueva.
- [ ] Navegadores objetivo probados con fallbacks documentados.
- [ ] Sin dependencia de features experimentales sin polyfill o degradación planificada.