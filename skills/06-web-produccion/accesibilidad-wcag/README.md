# Accesibilidad (WCAG)

Skills para hacer tu web usable por todas las personas: contraste, semántica y teclado primero, después ARIA y auditorías automatizadas con axe/Lighthouse en el pipeline.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
|---|---|---|
| [accesibilidad-wcag-basico](accesibilidad-wcag-basico/SKILL.md) | Básico | Contraste, alt, landmarks, labels, foco visible y navegación por teclado |
| [accesibilidad-wcag-avanzado](accesibilidad-wcag-avanzado/SKILL.md) | Avanzado | ARIA, focus trapping, skip links, lectores de pantalla y prefers-reduced-motion |
| [accesibilidad-wcag-profesional](accesibilidad-wcag-profesional/SKILL.md) | Profesional | WCAG 2.2 AA, auditorías axe/Lighthouse CI, E2E de a11y y cumplimiento legal |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
|---|---|---|---|
| `nivel_conformidad` | Buenas prácticas | WCAG AA selectivo | WCAG 2.2 AA completo |
| `experiencia` | Sitios estáticos | Apps interactivas (modales) | Design systems completos |
| `auditoria` | Manual | Manual + lectores | Automatizada en CI |
| `legal` | — | — | Normativas por región |

## Instalación

```
xcopy accesibilidad-wcag C:\Users\%USERNAME%\.config\opencode\skills\accesibilidad-wcag /E /I
```

## Ruta de aprendizaje

1. **Básico**: HTML semántico, contraste y teclado: el 80% del valor.
2. **Avanzado**: ARIA con moderación, foco y lectores de pantalla.
3. **Profesional**: procesos: auditorías en CI, E2E a11y y conformidad AA.

## Referencias clave

- [Pautas WCAG 2.2 (W3C)](https://www.w3.org/WAI/WCAG22/quickref/)
- [WebAIM (checklist y artículos)](https://webaim.org/standards/wcag/checklist)
- [axe-core](https://github.com/dequeaxe/axe-core)
- [Criterios de conformidad (MDN)](https://developer.mozilla.org/es/docs/Web/Accessibility/Understanding_WCAG)