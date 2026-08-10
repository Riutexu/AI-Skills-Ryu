# html5-base-structure

Conjunto de skills para construir documentos HTML con base sólida y conforme a estándares: estructura semántica correcta desde el primer archivo, accesibilidad ARIA y WCAG, datos estructurados con JSON-LD, multimedia con fallbacks, Web Components y validación con herramientas oficiales. Resuelve el problema de "HTML que funciona pero no cumple": navegadores, buscadores, lectores de pantalla y equipos que mantienen el código lo agradecen por igual.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| [html5-base-structure-basico](./html5-base-structure-basico/SKILL.md) | Básico | Doctype, charset/viewport, metadatos, semántica (header/nav/main/section/article/aside/footer), formularios con validación nativa e indentación limpia. |
| [html5-base-structure-avanzado](./html5-base-structure-avanzado/SKILL.md) | Avanzado | Roles ARIA y landmarks, WCAG básico, multimedia con fallbacks (picture/video/audio), microdatos y schema.org con JSON-LD y SEO técnico de estructura. |
| [html5-base-structure-profesional](./html5-base-structure-profesional/SKILL.md) | Profesional | Estándares W3C/WHATWG vigentes, Web Components (custom elements y shadow DOM), atributos globales avanzados, critical rendering path y validación con herramientas oficiales. |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| estructura | Documento semántico correcto | Landmarks + ARIA donde aplica | Documento validado conforme a spec (W3C/WHATWG) |
| accesibilidad | Formularios con label y validación nativa | WCAG 2.x AA con roles y texto alternativo | Focus, rendimiento y compatibilidad cross-browser |
| multimedia | Imágenes con alt y dimensiones | picture/video/audio con fallbacks y track | Estrategia de recursos y preloads |
| datos estructurados | Ninguno | JSON-LD básico validado en schema.org | JSON-LD de negocio completo |
| componentes | Ninguno | Ninguno | Web Components con shadow DOM y eventos |
| validación | Validator de W3C sin errores | Lighthouse accesibilidad ≥ 90 | Lighthouse + spec checks + caniuse por feature |

## Instalación

Copia la carpeta del tema dentro de la biblioteca de skills de opencode. Opción por proyecto:

```powershell
Copy-Item -Recurse "01-frontend\html5-base-structure" -Destination ".opencode\skills\html5-base-structure"
```

Opción global en el equipo:

```powershell
Copy-Item -Recurse "01-frontend\html5-base-structure" -Destination "$HOME\.config\opencode\skills\html5-base-structure"
```

En macOS o Linux: `cp -r 01-frontend/html5-base-structure ~/.config/opencode/skills/`. Verifica que los tres skills aparecen disponibles en opencode.

## Ruta de aprendizaje

1. **Básico → Avanzado**: domina la semántica y los formularios nativos antes de añadir ARIA; la mayor parte de la accesibilidad se logra con elementos correctos, no con roles.
2. **Avanzado → Profesional**: domina landmarks, WCAG y JSON-LD antes de los Web Components; los componentes encapsulan la estructura que ya sabes escribir.
3. **Profesional**: valida cada entrega con herramientas oficiales y diseña con el rendimiento de renderizado como requisito, no como mejora.

## Referencias clave

- [WHATWG: especificación HTML](https://html.spec.whatwg.org/)
- [W3C: especificación HTML](https://html.spec.whatwg.org/multipage/)
- [Validador de HTML del W3C](https://validator.w3.org/)
- [MDN: HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN: ARIA](https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA)
- [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [schema.org](https://schema.org/)