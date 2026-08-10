---
name: accesibilidad-wcag-basico
description: Aplica accesibilidad desde el HTML: contraste AA, alts descriptivos, landmarks, labels en formularios, foco visible y navegación por teclado
license: MIT
compatibility: opencode
metadata:
  familia: "06-web-produccion"
  tema: "accesibilidad-wcag"
  nivel: basico
  stack: "HTML, CSS"
---

# Accesibilidad (WCAG) — Nivel básico

## Qué hace este skill

Guía para implementar los fundamentos de accesibilidad que benefician a todos: contraste AA, texto alternativo, landmarks semánticos, labels en formularios, foco visible y navegación completa por teclado. Casi siempre es más semántica que ARIA.

## Cuándo usarlo

- Estás creando o rediseñando páginas y quieres accesibilidad por defecto.
- Un usuario con lector de pantalla o solo teclado no puede usar tu web.
- Requieres cumplir al menos buenas prácticas antes de la auditoría formal.

## Requisitos previos

- HTML y CSS básicos (landmarks, forms, hover/focus).

## Workflow paso a paso

1. **Contraste AA**: texto normal ≥ 4.5:1 y grande (≥ 24px o 18.7px bold) ≥ 3:1 contra su fondo; comprueba cada combinación de color en uso (prueba en sitios como WebAIM Contrast Checker).
2. **Texto alternativo**: `alt` descriptivo en imágenes informativas, `alt=""` en decorativas; imágenes con texto dentro llevan ese texto en el `alt`.
3. **Landmarks**: usa `header`, `nav`, `main`, `section(aria-labelledby)`, `article`, `footer`; un solo `main` por página y `lang="es"` en `<html>`.
4. **Formularios**: todo input con `label` asociado (`for` + `id`), `aria-describedby` en el mensaje de ayuda/error, y error con `aria-invalid` + texto en pantalla.
5. **Teclado y foco**: todos los controles (links, botones, inputs) alcanzables con Tab y accionables con Enter/Espacio; foco visible siempre (estilo `:focus-visible` claro: outline de 2-3 px).
6. **Orden de foco lógico**: el DOM sigue el orden visual; evita `tabindex` > 0.
7. **Reducir movimiento**: respeta `prefers-reduced-motion` para animaciones grandes (nivel avanzado, pero desde ahora evita movimiento innecesario).
8. **Texto legible**: párrafos con alto de línea ≥ 1.5, sin bloques justificados que dificulten leer, zoom del navegador al 200% sin romper layout.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `conformidad` | Nivel objetivo | texto | sí | "AA" |
| `colores` | Paleta principal | lista | no | "#0f172a sobre #f8fafc" |
| `formularios` | Campos existentes | lista | no | nombre, email, mensaje |
| `imagenes` | ¿Imágenes informativas? | booleano | no | true |
| `componentes_teclado` | Controles interactivos | lista | no | botones, tabs, modal |
| `nivell_usuario` | Rol del solicitante | texto | no | "básico" |

## Reglas y checklist

- [ ] Contrastes AA verificados en todas las combinaciones de color
- [ ] Imágenes con alt descriptivo (o vacío si decorativa)
- [ ] Un `<main>`, landmarks semánticos y lang correcto
- [ ] Inputs con label asociado y errores claros
- [ ] Todo interactivo operable por teclado con foco visible
- [ ] Sin `tabindex` > 0 innecesarios
- [ ] Zoom 200% sin pérdida de contenido

## Ejemplos de prompts

- "Revisa el contraste de mi paleta y dime qué colores cambian para pasar AA"
- "Añade labels y mensajes de error accesibles a mi formulario de contacto"
- "Mi página usa divs para el layout: conviértela en landmarks semánticos"
- "Haz que los botones de mi header funcionen con tabulación y visible focus"

## Plantillas y recursos

- [templates/formulario-accesible.html](templates/formulario-accesible.html) — formulario completo con labels, errores y aria
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel