---
name: css-tailwind-avanzado
description: CSS moderno y Tailwind: variables CSS, clamp/min/max, grid-template-areas, configuración con @theme y extensión de utilidades personalizadas.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "css-tailwind"
  nivel: avanzado
  stack: "CSS moderno, Tailwind CSS"
---

# CSS moderno y configuración de Tailwind (nivel avanzado)

## Qué hace este skill

Aplica las capacidades modernas de CSS y la configuración real de Tailwind: variables CSS vivas, funciones `clamp()`/`min()`/`max()` para tipografía y contenedores fluidos, composición de layouts con `grid-template-areas`, configuración del tema con `@theme` (Tailwind v4) o `theme.extend` (v3), y utilidades personalizadas para estructurar componentes sin repetir clases largas.

## Cuándo usarlo

- Cuando el CSS crece y los valores repetidos piden variables: es el momento de centralizar en tokens CSS.
- Cuando la tipografía debe escalar con la pantalla sin puntos de quiebre: `clamp()` es la respuesta.
- Cuando un layout tiene zonas complejas que grid por líneas no describe bien: `grid-template-areas` nombra el diseño.
- Cuando el proyecto adopta Tailwind y hay que extender el tema con la marca real.
- Cuando los componentes de Tailwind repiten utilidades y necesitan personalización propia en capas.

## Requisitos previos

- Nivel básico de este tema dominado: selectores, box model, flexbox y grid.
- Tailwind instalado en el proyecto (v4 con `@import "tailwindcss"` o v3 con `tailwind.config.js`).
- Nociones de variables CSS y del flujo de build (npx tailwindcss o Vite).

## Workflow paso a paso

1. Inventaría los valores repetidos del CSS actual: colores, tamaños, radios y sombras que aparecen más de 3 veces.
2. Declara las variables en `:root` con nombres por rol (`--color-primario`, `--radio-md`) y organizadas con comentarios de bloque.
3. Sustituye los valores sueltos por las variables en las reglas existentes; deja cero valores repetibles fuera de `:root`.
4. Convierte la tipografía fluida a `clamp()`: define mínimo, preferido y máximo (`clamp(1.5rem, 1rem + 2vw, 2.5rem)`) para los títulos.
5. Usa `min()` y `max()` para anchos condicionados: contenedor que encoge con el viewport pero no pasa del máximo.
6. Rediseña los layouts complejos con `grid-template-areas`: nombra cada zona (hero, lateral, contenido) y declara su posición de forma legible.
7. Configura el tema de Tailwind: en v3 extiende `theme` (colores de marca, fuentes, radios); en v4 declara `@theme` con las variables nuevas.
8. Crea utilidades personalizadas: en v3 con `@layer utilities` dentro del CSS de entrada; en v4 con `@utility` para una utilidad aislada.
9. Estructura los componentes con capas: estilos de componente en `@layer components` y utilidades de apoyo en `@layer utilities`.
10. Mapea los tokens CSS a Tailwind (`--color-primario: var(--color-primario)`) para usar ambos mundos sin duplicar decisiones.
11. Verifica el build: ejecuta el compilador de Tailwind y comprueba que las utilidades nuevas aparecen en el CSS final.
12. Revisa el resultado en los breakpoints del proyecto y confirma que `clamp()` y las áreas de grid se comportan como se diseñó.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| version_tailwind | Versión de Tailwind del proyecto | string | Sí | "v4" o "v3" |
| objetivo | Página o componente a trabajar | string | Sí | "Sistema de tarjetas de la web de prensa" |
| paleta_colores | Colores de marca para el tema | string | No | "#134e4a, #f59e0b, #f8fafc" |
| tipografia_fluida | Rango de tamaños fluidos deseados | string | No | "clamp(1rem, 1rem + 1vw, 1.5rem) para cuerpo de sección" |
| zonas_layout | Áreas del layout a nombrar | string | No | "cabecera, lateral, contenido, pie" |
| utilidades_personalizadas | Utilidades a crear | string | No | "ancho-contenido (min/max), sombra-suave" |
| url_referencia | Referencia de configuración | url | No | "https://tailwindcss.com/docs/theme" |
| criterios_aceptacion | Condiciones de entrega | string | No | "Build de Tailwind correcto, utilidades nuevas en el CSS final, sin valores duplicados" |

## Reglas y checklist

- [ ] Todos los valores repetibles centralizados en variables o en el tema de Tailwind.
- [ ] Tipografía fluida con `clamp()`; sin escalas de títulos por breakpoint.
- [ ] Layouts complejos con `grid-template-areas` nombradas y legibles.
- [ ] `min()`/`max()` para anchos condicionados sin media queries extras.
- [ ] Configuración del tema coherente entre v3 (`theme.extend`) y v4 (`@theme`).
- [ ] Utilidades personalizadas definidas en la capa correcta (`utilities`/`@utility`).
- [ ] Componentes estructurados en `@layer components`; sin clases de 20 utilidades en la misma línea.
- [ ] Los tokens CSS alimentan a Tailwind sin duplicar decisiones de valores.
- [ ] Build de Tailwind verificado en terminal y utilidades nuevas presentes en la salida.

## Ejemplos de prompts

- "Convierte los tamaños de título de esta página a clamp(): 3 escalas fluidas con mínimo, preferido y máximo razonables."
- "Rediseña el layout del panel con grid-template-areas: cabecera, lateral, contenido y pie, y haz que el lateral colapse bajo 900 px."
- "Configura Tailwind v4 con @theme: colores de marca, escala de radios y una utilidad personalizada para la sombra de las tarjetas."
- "Refactoriza estas tarjetas que repiten 15 utilidades: muévelas a @layer components con una clase compuesta."
- "Centraliza en :root los valores repetidos de este CSS (colores, radios, sombras) y sustituyelos sin cambiar el diseño."

## Plantillas y recursos

- [templates/tailwind.config.js](./templates/tailwind.config.js) — Configuración de Tailwind con tokens de marca, animaciones y plugins de utilidades.
- [templates/utilidades.css](./templates/utilidades.css) — CSS de entrada con @tailwind, capas de componentes, @theme de v4 y utilidades personalizadas.
- [resources/checklist.md](./resources/checklist.md) — Lista de verificación de calidad del nivel avanzado.