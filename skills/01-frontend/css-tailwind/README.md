# css-tailwind

Conjunto de skills para dominar CSS y Tailwind CSS de forma progresiva: desde los fundamentos del lenguaje (selectores, especificidad, box model, flexbox y grid) hasta la arquitectura CSS profesional con BEM/ITCSS, design tokens, dark mode, rendimiento con CSS layers y container queries, pasando por la configuración avanzada de Tailwind con `@theme` y utilidades personalizadas. Resuelve el problema de "CSS que funciona pero no escala": consistencia, mantenibilidad y rendimiento.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| [css-tailwind-basico](./css-tailwind-basico/SKILL.md) | Básico | Selectores, especificidad, box model, unidades, flexbox, grid, media queries y pseudoclases para layouts responsive. |
| [css-tailwind-avanzado](./css-tailwind-avanzado/SKILL.md) | Avanzado | Variables CSS, funciones clamp/min/max, grid-template-areas, configuración de Tailwind con @theme y estructuración de componentes con utilidades. |
| [css-tailwind-profesional](./css-tailwind-profesional/SKILL.md) | Profesional | Arquitectura CSS (BEM/ITCSS), design tokens y dark mode, rendimiento (CSS layers, purging, container queries), variantes avanzadas y estilos accesibles. |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| alcance | Layouts responsive con CSS puro | Layouts modernos + configuración Tailwind | Arquitectura del CSS de todo el producto |
| herramientas | CSS vanilla en el navegador | Tailwind v3/v4 con config | Tailwind + capas + tooling (PurgeCSS/Lightning CSS) |
| selectores | Simples y clases | Variables y funciones CSS | BEM/ITCSS + capas de cascada |
| layout | Flexbox y Grid básicos | grid-template-areas, clamp | Container queries y diseño fluido |
| mantenibilidad | CSS comentado y ordenado | Utilidades personalizadas reutilizables | Design tokens, dark mode, variantes |
| accesibilidad | focus-visible y contrastes | Estados por pseudoclases | prefers-reduced-motion y estilos a11y |

## Instalación

Copia la carpeta del tema dentro de la biblioteca de skills de opencode. Opción por proyecto:

```powershell
Copy-Item -Recurse "01-frontend\css-tailwind" -Destination ".opencode\skills\css-tailwind"
```

Opción global en el equipo:

```powershell
Copy-Item -Recurse "01-frontend\css-tailwind" -Destination "$HOME\.config\opencode\skills\css-tailwind"
```

En macOS o Linux: `cp -r 01-frontend/css-tailwind ~/.config/opencode/skills/`. Verifica que los tres skills aparecen disponibles en opencode.

## Ruta de aprendizaje

1. **Básico → Avanzado**: domina selectores, especificidad y los dos sistemas de layout antes de las variables y Tailwind; sin box model ni unidades claras, la configuración no se entiende.
2. **Avanzado → Profesional**: domina variables, funciones CSS y la configuración de Tailwind antes de la arquitectura; las capas y BEM organizan lo que ya escribes.
3. **Profesional**: gestiona el CSS como producto: tokens centralizados, temas, rendimiento medido y accesibilidad como parte de la arquitectura.

## Referencias clave

- [MDN: CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [MDN: Flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_flexible_box_layout)
- [MDN: Grid](https://developer.mozilla.org/es/docs/Web/CSS/CSS_grid_layout)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [web.dev: CSS moderno](https://web.dev/learn/css)
- [caniuse.com](https://caniuse.com/)
- [Spec de CSS del W3C (borradores)](https://drafts.csswg.org/)