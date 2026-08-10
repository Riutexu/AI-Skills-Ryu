---
name: web-design-profesional
description: Design systems de producción: Tailwind y shadcn/ui, theming con dark mode, microinteracciones con motion, visual regression testing y guías de marca.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "web-design"
  nivel: profesional
  stack: "Tailwind CSS, shadcn/ui, React, motion, Playwright"
---

# Design systems de producción (nivel profesional)

## Qué hace este skill

Diseña y opera design systems web de producción: configuración de tokens en Tailwind, componentes generados con shadcn/ui, theming con dark mode (clase y sistema), microinteracciones con motion que respetan accesibilidad, visual regression testing con Playwright y documentación de marca y componentes que el equipo puede gobernar.

## Cuándo usarlo

- Cuando un producto tiene varios equipos y debe compartir colores, componentes y reglas sin descuadrarse.
- Cuando el styling crece dentro de una aplicación React/Next y hace falta una base formal (Tailwind + shadcn/ui).
- Cuando se pide dark mode y theming sin romper la UI existente.
- Cuando un cambio de estilo rompe algo en producción: hace falta visual regression testing en CI.
- Cuando la marca crece y hay que documentar el uso correcto de colores, tipografía y componentes.

## Requisitos previos

- Nivel avanzado de este tema dominado: tokens, jerarquía y grid.
- React y TypeScript (componentes, props, contexto) y Tailwind CSS.
- Proyecto con Tailwind instalado; experiencia con shadcn/ui o voluntad de instalarlo.
- Nociones de testing (Playwright) y de CI (GitHub Actions u otro runner).
- Figma o herramienta de diseño para la documentación visual de marca.

## Workflow paso a paso

1. Audita la marca y la UI actual: colores, tipografía, componentes repetidos e inconsistencias detectadas.
2. Define los principios del sistema: 2-3 principios (por ejemplo, "predecible", "accesible", "eficiente") que guían cada decisión.
3. Escribe los tokens en `tailwind.config.js`: escalas de color de marca y neutros, fuentes, radios, sombras y transiciones; cada token con nombre de rol.
4. Instala la base de componentes: `npx shadcn@latest init` y agrega solo los componentes que la UI usa hoy (button, card, input, dialog...).
5. Implementa theming con dark mode: opción de clase sincronizada con sistema (`prefers-color-scheme`) y selector manual; tokens con variable CSS para el modo claro/oscuro.
6. Define las variantes de los componentes con tokens semánticos, no colores sueltos: `bg-background`, `text-foreground`, `bg-primary`.
7. Añade microinteracciones con motion solo donde dan feedback de valor: hover del botón, aparición de dialog, cambio de tema; nunca por decoración.
8. Configura preferencia de usuario: `prefers-reduced-motion` desactiva o simplifica las animaciones de motion.
9. Escribe la guía de uso: por cada componente, cuándo usarlo, variantes disponibles y ejemplos de código; los colores con pares de contraste verificados.
10. Configura visual regression testing: Playwright con comparación de capturas de pantalla de los componentes clave en ambos temas.
11. La prueba de regresión corre en CI: cualquier cambio de token o componente que altere la UI rompe el pipeline con la imagen de diferencia visible.
12. Versiona el sistema: changelog por cambios de tokens y componentes; las versiones permiten diferenciar "rotura visual" de "nueva versión".
13. Revisa a11y del sistema: foco, contraste en ambos temas y navegación por teclado de cada componente.
14. Documenta el gobierno: quién puede cambiar tokens, en qué ticket y con qué prueba asociada.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| plataforma | Aplicación donde vive el design system | string | Sí | "Next.js 15 con Tailwind" |
| temas | Modos de tema a soportar | string | No | "claro, oscuro (clase + sistema)" |
| componentes | Componentes a incluir | string | No | "button, card, input, dialog, select" |
| motion | Uso de animaciones esperado | string | No | "hover del botón y transición de tema" |
| testing_visual | Herramienta de regresión visual | string | No | "Playwright snapshots en CI" |
| guia_marca | Formato de la documentación de marca | string | No | "README por componente + tabla de tokens" |
| url_referencia | Sistema de referencia | url | No | "https://ui.shadcn.com/themes" |
| criterios_aceptacion | Condiciones de entrega | string | No | "Dark mode sin regresión, CI verde, guías por componente, a11y 90+" |

## Reglas y checklist

- [ ] Tokens por rol en Tailwind (background, foreground, primary) y ningún color suelto en componentes.
- [ ] Dark mode funcional por clase y por sistema, sin parpadeo al cargar.
- [ ] Componentes de shadcn/ui usados de forma nativa (sin forks del generador salvo necesidad).
- [ ] Microinteracciones aportan feedback; ninguna depende de mantener el cursor.
- [ ] `prefers-reduced-motion` respetado por todas las animaciones del sistema.
- [ ] Visual regression cubre los componentes clave en claro y oscuro y corre en CI.
- [ ] Guías de marca documentadas: pares de contraste, usos correctos y ejemplos de código.
- [ ] Changelog con versiones; todo cambio de token o componente queda registrado.
- [ ] Accesibilidad ≥ 90 en Lighthouse para páginas reales del sistema.
- [ ] Foco visible y orden de tabulación correctos en todos los componentes.

## Ejemplos de prompts

- "Configura el theming de mi app Next.js con Tailwind: tokens por rol, dark mode con clase y con sistema, sin parpadeo al primer render."
- "Genera el design system con shadcn/ui: inicia la base y agrega button, card, input y dialog con variantes tipadas en TypeScript."
- "Añade microinteracciones con motion al dialog y al hover del botón principal, respetando prefers-reduced-motion."
- "Configura visual regression testing con Playwright para los 6 componentes clave en tema claro y oscuro, con corrida en GitHub Actions."
- "Documéntame la guía de marca del sistema: tokens con pares de contraste, usos correctos e incorrectos de cada color."

## Plantillas y recursos

- [templates/tailwind.config.js](./templates/tailwind.config.js) — Configuración completa del tema: tokens de color, fuentes, radios, sombras y dark mode.
- [templates/componente-themable.tsx](./templates/componente-themable.tsx) — Componente React themable con variantes y soporte claro/oscuro sobre tokens.
- [resources/checklist.md](./resources/checklist.md) — Lista de verificación de calidad del nivel profesional.