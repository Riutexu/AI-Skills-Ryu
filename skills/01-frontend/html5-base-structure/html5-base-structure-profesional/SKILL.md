---
name: html5-base-structure-profesional
description: HTML conforme a W3C/WHATWG: Web Components con shadow DOM, atributos globales avanzados, critical rendering path y validación con validator.w3.org y Lighthouse.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "html5-base-structure"
  nivel: profesional
  stack: "Web Components, shadow DOM, W3C/WHATWG, rendimiento"
---

# HTML profesional conforme a estándares (nivel profesional)

## Qué hace este skill

Construye documentos y componentes HTML conforme a las especificaciones vigentes de W3C y WHATWG: Web Components con custom elements y shadow DOM, atributos globales avanzados (`data-*`, `hidden`, `inert`, `translate`, `popover`), rendimiento del renderizado inicial (critical rendering path), y validación con herramientas oficiales (validador del W3C, Lighthouse) y soporte cross-browser verificado con caniuse.

## Cuándo usarlo

- Cuando un equipo necesita componentes reutilizables de UI sin framework (custom elements).
- Cuando la página debe cumplir estándares de forma verificable: validación oficial y conformidad.
- Cuando el rendimiento de la primera impresión importa: DOM pequeño, CSS crítico y sin bloqueos.
- Cuando hay que auditar documentos existentes frente a la spec vigente (elementos obsoletos, atributos incorrectos).
- Cuando el soporte cross-browser es un requisito formal, no una esperanza.

## Requisitos previos

- Niveles básico y avanzado de este tema dominados: semántica, ARIA, WCAG y JSON-LD.
- JavaScript intermedio: clases, eventos y módulos ES.
- Conocimiento práctico de DevTools (rendimiento, red) y del flujo de renderizado del navegador.
- Nociones de testing manual en varios navegadores (o BrowserStack/Playwright).

## Workflow paso a paso

1. Verifica la base del documento frente a la spec: doctype, lang, charset, viewport y metadatos en el orden correcto.
2. Revisa elementos y atributos vigentes; sustituye los obsoletos (por ejemplo, atributos de presentación) por CSS o atributos modernos.
3. Diseña el componente: define nombre con guion obligatorio (`tarjeta-precio`), API pública (atributos, propiedades y eventos) y contenido por `slot`.
4. Escribe el custom element: clase que extiende `HTMLElement`, `observedAttributes`, `connectedCallback` y `disconnectedCallback` con limpieza de listeners.
5. Encapsula el estilo en shadow DOM: los estilos del componente no afectan a la página y viceversa.
6. Proyecta contenido con `slot` y nombrado de slots cuando el componente tiene varias zonas.
7. Expone eventos personalizados (`CustomEvent` con `bubbles: true`) para la integración desde fuera.
8. Respeta las prácticas de a11y en el componente: `part` para estilo externo del host y roles ARIA internos.
9. Aplica atributos globales avanzados: `hidden` (y su variante `until-found` si aplica), `inert` para regiones inactivas y `data-*` para estado en pruebas.
10. Explota `popover` y `togglepopover` para menús y avisos nativos cuando el navegador lo soporte (verifica con caniuse y aporta fallback).
11. Optimiza el critical rendering path: CSS crítico inline, hojas diferidas, `preload` para el recurso del primer render y scripts `defer`/`type="module"`.
12. Controla el CLS: dimensiones explícitas en medios y fuentes con `font-display`.
13. Valida con herramientas oficiales: validador del W3C sin errores, Lighthouse rendimiento y accesibilidad ≥ 90, y Compliance de spec.
14. Verifica soporte cross-browser: caniuse por cada feature nueva y pruebas manuales en los navegadores objetivo con su fallback documentado.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| componente | Nombre del custom element a construir | string | Sí | "tarjeta-precio" |
| navegadores_objetivo | Navegadores y versiones mínimas a soportar | string | No | "Chrome 120+, Firefox 121+, Safari 17+" |
| features_nuevas | Features modernas a usar (popover, inert...) | string | No | "popover, inert, CSS nesting" |
| critical_css | Estrategia de CSS crítico | string | No | "inline inicial + hoja diferida" |
| tipo_componente | Complejidad del componente | string | No | "widget con shadow DOM y slots" |
| url_referencia | Referencia oficial de la spec | url | No | "https://html.spec.whatwg.org/multipage/custom-elements.html" |
| criterios_aceptacion | Condiciones de entrega | string | No | "Validator W3C 0 errores, Lighthouse >= 90, caniuse verificado, fallback documentado" |

## Reglas y checklist

- [ ] Documento sin errores en el validador del W3C.
- [ ] Elementos y atributos vigentes según WHATWG; sin etiquetas obsoletas.
- [ ] Custom element con nombre con guion, APIs documentadas y listener limpios en `disconnectedCallback`.
- [ ] Estilos encapsulados en shadow DOM; contenido proyectado con `slot`.
- [ ] Eventos personalizados con `bubbles: true` y payload tipado.
- [ ] `hidden`, `inert`, `data-*` y `popover` usados con su semántica real y fallback verificado.
- [ ] CSS crítico inline, resto diferido; scripts no bloqueantes.
- [ ] Imágenes y medios con dimensiones; fuentes con `font-display` para evitar CLS.
- [ ] Lighthouse rendimiento y accesibilidad ≥ 90.
- [ ] caniuse revisado por feature nueva y navegadores objetivo probados.

## Ejemplos de prompts

- "Implementa el custom element tarjeta-precio con shadow DOM, slots para título y precio, y evento seleccionar-plan que burbujee fuera del componente."
- "Sustituye 3 atributos obsoletos en esta página por las prácticas modernas de la spec; valida luego con el validador del W3C."
- "Crea el menú de notificaciones con el atributo popover nativo y verifica el soporte en los navegadores objetivo con caniuse."
- "Optimiza el critical rendering path de esta página: CSS crítico inline, preload del recurso del LCP y scripts con defer."
- "Audita este documento: elementos obsoletos, ARIA innecesario y problemas de spec; entrega un informe con las líneas exactas."

## Plantillas y recursos

- [templates/componente-personalizado.js](./templates/componente-personalizado.js) — Custom element completo con shadow DOM, slots, atributos observables y eventos.
- [templates/estructura-app.html](./templates/estructura-app.html) — Estructura de aplicación HTML completa con atributos globales avanzados y rendimiento del primer render.
- [resources/checklist.md](./resources/checklist.md) — Lista de verificación de calidad del nivel profesional.