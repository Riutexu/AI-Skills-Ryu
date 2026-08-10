# Web design

Conjunto de skills para diseñar interfaces web con criterio: fundamentos visuales (color, tipografía, espaciado, alineación), sistemas de tokens de diseño, jerarquía y ritmo, y design systems de producción con Tailwind, theming, motion y testing visual. Resuelve el paso de "una idea" a "una interfaz coherente y accesible" en cualquier punto del proceso: desde una mini página de muestra hasta un sistema completo con componentes versionados.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| [web-design-basico](./web-design-basico/SKILL.md) | Básico | Fundamentos de diseño: color, tipografía, espaciado, alineación, unidades CSS (rem/em/%), grid y flexbox para layouts equilibrados. |
| [web-design-avanzado](./web-design-avanzado/SKILL.md) | Avanzado | Design tokens en variables CSS, jerarquía visual, ritmo vertical, sistemas de grid, conversión Figma a código y principios UX (proximidad, contraste). |
| [web-design-profesional](./web-design-profesional/SKILL.md) | Profesional | Design systems de producción: Tailwind + shadcn/ui, theming con dark mode, microinteracciones con motion, visual regression testing y guías de marca. |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| paleta | Paleta simple de 3-5 colores con armonía básica | Tokens de color por escalas y roles | Design tokens completos integrados al sistema |
| tipografía | 1-2 familias con escala base | Escala modular con ritmo vertical | Variable fonts y tokens de fuente en config |
| layout | Flexbox y Grid básicos | Sistema de grid de 12 columnas | Layout system + breakpoints gestionados |
| herramientas | HTML y CSS en el navegador | Figma a código, tokens CSS | Tailwind, shadcn/ui, Playwright, motion |
| calidad | Contraste y alineación revisados | Revisión heurística UX (leyes de percepción) | Visual regression testing en CI |
| entregable | Página de muestra | tokens.css + página demo | Design system con theming y dark mode |

## Instalación

Copia la carpeta del tema dentro de la biblioteca de skills de opencode. Opción por proyecto:

```powershell
Copy-Item -Recurse "01-frontend\web-design" -Destination ".opencode\skills\web-design"
```

Opción global en el equipo:

```powershell
Copy-Item -Recurse "01-frontend\web-design" -Destination "$HOME\.config\opencode\skills\web-design"
```

En macOS o Linux: `cp -r 01-frontend/web-design ~/.config/opencode/skills/`. Verifica que los tres skills aparecen disponibles en opencode.

## Ruta de aprendizaje

1. **Básico → Avanzado**: domina la retícula, la escala tipográfica y la paleta antes de hablar de tokens; sin fundamentos, los tokens son solo variables.
2. **Avanzado → Profesional**: domina los tokens y la conversión de Figma a código antes de montar un design system; el sistema formaliza decisiones que ya tomas de forma consistente.
3. **Profesional**: trabaja con el sistema como producto: documentación, versionado, testing visual y gobiernos de cambio de tokens.

## Referencias clave

- [MDN: color y diseño CSS](https://developer.mozilla.org/es/docs/Web/CSS/color)
- [Material Design 3 (esquemas de color)](https://m3.material.io/styles/color/overview)
- [Google Fonts](https://fonts.google.com/)
- [Documentación de theming de Tailwind CSS](https://tailwindcss.com/docs/theme)
- [shadcn/ui](https://ui.shadcn.com/)
- [Playwright: testing visual](https://playwright.dev/docs/test-snapshots)
- [Motion (Framer Motion)](https://motion.dev/)