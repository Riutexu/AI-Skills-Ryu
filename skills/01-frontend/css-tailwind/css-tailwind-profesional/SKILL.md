---
name: css-tailwind-profesional
description: Arquitectura CSS profesional: BEM e ITCSS, design tokens y dark mode, rendimiento con CSS layers y purging, variantes avanzadas y container queries.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "css-tailwind"
  nivel: profesional
  stack: "Arquitectura CSS, BEM, ITCSS, Tailwind avanzado"
---

# Arquitectura CSS profesional (nivel profesional)

## Qué hace este skill

Organiza el CSS de productos completos con criterio de arquitectura: metodología BEM para nombrar componentes, ITCSS para capas de especificidad y orden, design tokens con theming y dark mode sobre Tailwind, rendimiento real (CSS layers, purging de utilidades no usadas, container queries), variantes avanzadas y estilos accesibles con `prefers-reduced-motion`.

## Cuándo usarlo

- Cuando el CSS ya no cabe en la cabeza de una persona y aparecen conflictos de especificidad entre equipos.
- Cuando el producto necesita dark mode sin duplicar hojas de estilo.
- Cuando el CSS final pesa demasiado por utilidades no usadas o reglas redundantes.
- Cuando los componentes adaptan su tamaño por su contenedor (módulos reutilizables), no por la ventana.
- Cuando la accesibilidad (foco, movimiento reducido, contraste) debe estar garantizada por la arquitectura, no por recuerdos.

## Requisitos previos

- Niveles básico y avanzado de este tema dominados.
- Experiencia real estilizando un producto con Tailwind y CSS.
- Nociones de build y optimización: qué compila cada herramienta y cómo medir el CSS resultante.
- Documentación de la marca disponible: colores, tipografías y usos.

## Workflow paso a paso

1. Audita el CSS actual: tamaño, duplicaciones, `!important`, especificidad accidental y utilidades sobrantes.
2. Decide el modelo de nombres: BEM para los componentes propios (`bloque__elemento--modificador`) y clases de utilidad para excepciones.
3. Establece el orden ITCSS: Settings (tokens) → Tools (mixins) → Generic (reset) → Elements (etiquetas) → Objects (layout) → Components → Utilities; las utilidades al final ganan lo necesario.
4. Traffica los tokens en la capa Settings: colores por rol, fuentes, radios y sombras; declara un tema claro y un tema oscuro con las mismas variables.
5. Implementa dark mode con Tailwind: estrategia de clase (`darkMode: 'class'`) o v4 con `@custom-variant dark`, y sincronización con `prefers-color-scheme`.
6. Ordena la cascada con capas: `@layer` para reset/base, componentes y utilidades; documenta el orden para que nadie necesite `!important`.
7. Activa el purging correcto: `content` de Tailwind apuntando a los archivos reales; en v4 el purge es automático; mide la reducción de peso.
8. Convierte los módulos reutilizables a container queries: el componente se adapta al ancho de su contenedor con `@container` y `cqw`.
9. Aplica variantes avanzadas: `group-*` para estados agrupados, `aria-*`, `data-*` y `supports-*` para capacidades.
10. Protege la accesibilidad por arquitectura: regla global de `prefers-reduced-motion`, `:focus-visible` con anillo visible y utilidades de contraste con pares verificados.
11. Mide el resultado: peso del CSS final, reglas duplicadas y Lighthouse rendimiento ≥ 90 (CSS es parte del primer render).
12. Verifica ambos temas: contraste en claro y oscuro, foco visible y comportamiento con reducción de movimiento activa.
13. Documenta la arquitectura: estructura de carpetas, orden de capas, regla contra `!important` y cómo añadir un componente nuevo.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| objetivo | Producto o sistema a arquitecturar | string | Sí | "CSS de la app de gestión de pedidos" |
| metodologia | Metodología de nomenclatura/orden | string | No | "BEM + ITCSS" |
| tema_requerido | Modos de tema a soportar | string | No | "claro y oscuro" |
| container_queries | Módulos que deben adaptarse a su contenedor | string | No | "tarjeta de producto, panel de filtros" |
| peso_max_css | Límite de peso del CSS compilado | número | No | "menos de 60 KB" |
| variantes | Variantes avanzadas necesarias | string | No | "group, aria-expanded, supports" |
| url_referencia | Referencia de arquitectura | url | No | "https://developer.mozilla.org/es/learn/css" |
| criterios_aceptacion | Condiciones de entrega | string | No | "Cero !important, CSS purgado medido, dark mode sin regresiones, Lighthouse >= 90" |

## Reglas y checklist

- [ ] Nomenclatura BEM consistente y sin selectores heredados entre bloques.
- [ ] Orden ITCSS respetado; las utilidades son lo último y ganan por orden, no por fuerza.
- [ ] Cero `!important` salvo excepciones documentadas (y entonces, comentadas).
- [ ] Dark mode con tokens únicos; sin hojas duplicadas ni colores sueltos.
- [ ] Capas `@layer` ordenadas y documentadas en el CSS de entrada.
- [ ] Purging activo y medido: el CSS final solo contiene lo usado.
- [ ] Container queries en los módulos reutilizables; media queries solo para la página.
- [ ] `prefers-reduced-motion` como regla global, no como parche por componente.
- [ ] `:focus-visible` visible en ambos temas.
- [ ] Pares de contraste AA verificados en claro y oscuro.
- [ ] Documentation breve: estructura, capas y regla de no-`!important`.

## Ejemplos de prompts

- "Refactoriza el CSS de este proyecto con BEM e ITCSS: organiza por capas Settings, Generic, Objects, Components y Utilities conservando el diseño."
- "Implementa dark mode sobre los tokens existentes: un único set de variables, sincronización con el sistema y selector manual."
- "Convierte la tarjeta de producto a container queries: que reordene su contenido según el ancho del contenedor, no de la pantalla."
- "Mide y reduce el CSS final del proyecto: activa el purging, encuentra reglas duplicadas y dime el peso antes y después."
- "Añade la regla global de prefers-reduced-motion y la utilidad de foco visible en ambos temas; verifica la accesibilidad del resultado."

## Plantillas y recursos

- [templates/config-capas.css](./templates/config-capas.css) — CSS de entrada con capas declaradas, @theme, tokens y utilidades del sistema.
- [templates/utilidades-a11y.css](./templates/utilidades-a11y.css) — Utilidades accesibles: foco visible, skip-link, reducción de movimiento y contraste.
- [resources/checklist.md](./resources/checklist.md) — Lista de verificación de calidad del nivel profesional.