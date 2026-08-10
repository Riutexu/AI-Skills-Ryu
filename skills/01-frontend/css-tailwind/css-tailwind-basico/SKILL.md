---
name: css-tailwind-basico
description: CSS desde los fundamentos: selectores, especificidad, box model, unidades, flexbox, grid, media queries y pseudoclases para layouts responsive.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "css-tailwind"
  nivel: basico
  stack: "CSS3"
---

# CSS desde los fundamentos (nivel básico)

## Qué hace este skill

Escribe CSS sólido desde cero: selectores correctos con especificidad controlada, box model entendido y aprovechado, unidades adecuadas a cada caso, layouts con flexbox y Grid, breakpoints con media queries y estados interactivos con pseudoclases. Produce hojas de estilo ordenadas y comentadas para layouts responsive completos, listas para crecer.

## Cuándo usarlo

- Al estilizar una página por primera vez sin framework: la base decide si el CSS escala o se vuelve un bosque.
- Cuando un layout "se rompe" al añadir un margen o padding: hace falta dominio del box model.
- Cuando hay que corregir reglas que no aplican por especificidad o que requieren `!important` para vencer.
- Cuando la página debe verse bien en móvil y escritorio con flexbox y Grid, no con tablas ni floats.
- Cuando quieres comentar un CSS para que otra persona (o tú mismo en 3 meses) lo entienda.

## Requisitos previos

- HTML básico: saber escribir estructura con clases e ids.
- Saber lo que son selectores simples (etiqueta, clase, id).
- Un navegador con DevTools para inspeccionar elementos.

## Workflow paso a paso

1. Analiza el HTML que vas a estilizar: identifica bloques repetidos (tarjetas, enlaces, botones) que merecen clase propia.
2. Decide la estrategia de selección: clases para todo lo repetible; tipos solo para reset y base; ids jamás como gancho de estilo.
3. Escribe el reset: box-sizing global, márgenes a cero para el body y bordes visibles de ayuda durante el desarrollo.
4. Define las variables base: colores de marca, fuente y espaciado de la escala en `:root`.
5. Estiliza la tipografía: tamaños en `rem`, line-height adecuado y estados de enlace (`:link`, `:visited`, `:hover`, `:focus-visible`).
6. Usa el box model con intención: `padding` dentro del elemento, `margin` para separar elementos, y `border-box` como modelo global.
7. Elige unidades por rol: `rem` para tipografía, `rem` para espaciado, `%` y `fr` para proporciones, `vw`/`vh` solo para contenedores completos.
8. Maqueta con flexbox los flujos lineales: barra de navegación, filas de acciones, pies de tarjeta.
9. Maqueta con Grid las retículas: tarjetas, columnas de contenido y galerías con `repeat(auto-fit, minmax(...))`.
10. Aplica las media queries mínimas necesarias: reorganiza con `max-width` los flujos que se rompen en móvil.
11. Estiliza pseudoclases útiles: `:hover`, `:focus-visible`, `:disabled`, `:nth-child` para filas alternas y `:not()` para excepciones limpias.
12. Depura con DevTools: examina el box model de un elemento que desborda, localiza el culpable de la especificidad y elimina `!important` si apareció.
13. Comenta el código por bloques (reset, base, componentes, responsive) con secciones claras.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| objetivo | Página o layout a estilizar | string | Sí | "Landing de servicios con 6 tarjetas" |
| paleta_colores | Colores de la herramienta o marca | string | No | "#0f766e, #f8fafc, #334155" |
| tipografia | Familia tipográfica principal | string | No | "Inter con respaldo system-ui" |
| disposicion | Estrategia de layout solicitada | string | No | "Grid para tarjetas, flexbox para nav" |
| niveles_especificidad | Regla para mantener la especificidad baja | string | No | "solo clases, sin ids ni !important" |
| url_referencia | Referencia visual del resultado | url | No | "https://ejemplo.com/referencia" |
| breakpoints | Puntos de quiebre a contemplar | string | No | "640, 768, 1024" |
| criterios_aceptacion | Condiciones de entrega | string | No | "Sin scroll horizontal en móvil, sin !important, CSS comentado por bloques" |

## Reglas y checklist

- [ ] Solo clases y tipos base; sin ids como selectores de estilo.
- [ ] `box-sizing: border-box` global y box model dominado (padding vs. margin).
- [ ] Tipografía y espaciado en `rem`; `%`/`fr` solo para proporciones.
- [ ] Flexbox para flujos lineales y Grid para retículas; sin floats.
- [ ] Media queries mínimas y organizadas; layout correcto a 320, 768 y 1024 px.
- [ ] `:focus-visible` en todos los elementos interactivos.
- [ ] Sin `!important` y sin reglas anidadas profundas (máximo 3 niveles).
- [ ] Misma especificidad por componente; los estilos de tarjeta no se pisan entre sí.
- [ ] CSS comentado por bloques y con nombres de clase descriptivos en kebab-case.

## Ejemplos de prompts

- "Crea el CSS completo de una landing con hero, tarjetas de servicios y pie: Grid para las tarjetas y flexbox para el nav."
- "Mi margen rompe el ancho del contenedor en móvil: explica el box model del elemento y muéstrame la corrección."
- "Estas reglas no aplican aunque las escribo después: encuentra el conflicto de especificidad y propón la solución sin !important."
- "Escribe los estilos de un formulario completo: campos, focus-visible, estados de error y validación nativa visible."
- "Ordena este CSS por bloques (reset, base, componentes, responsive) y elimina lo obsoleto."

## Plantillas y recursos

- [templates/estilos.css](./templates/estilos.css) — Hoja de estilos completa y comentada de un layout responsive (nav, hero, tarjetas, formulario y pie).
- [templates/demo-layout.html](./templates/demo-layout.html) — Página de demostración que usa estilos.css con estructura semántica.
- [resources/checklist.md](./resources/checklist.md) — Lista de verificación de calidad del nivel básico.