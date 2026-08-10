---
name: accesibilidad-wcag-avanzado
description: ARIA con criterio, focus trapping en modales, skip links, pruebas con lectores de pantalla y prefers-reduced-motion en apps dinámicas
license: MIT
compatibility: opencode
metadata:
  familia: "06-web-produccion"
  tema: "accesibilidad-wcag"
  nivel: avanzado
  stack: "HTML, ARIA, JavaScript"
---

# Accesibilidad (WCAG) — Nivel avanzado

## Qué hace este skill

Guía para componentes dinámicos accesibles: ARIA usado con criterio (no decorativo), modales con focus trapping y restauración, skip links, regiones vivas para anuncios (aria-live), pruebas manuales con lectores de pantalla (NVDA/VoiceOver) y respeto a `prefers-reduced-motion`.

## Cuándo usarlo

- La app tiene componentes complejos: modales, acordeones, tabs, toasts.
- Quieres validar de verdad con lectores de pantalla, no solo "dejar aria".
- Hay animaciones que pueden marear a usuarios sensibles.

## Requisitos previos

- Nivel básico de este tema (semántica, teclado, labels).
- Acceso a un lector de pantalla (NVDA + Firefox en Windows o VoiceOver en macOS).

## Workflow paso a paso

1. **ARIA solo cuando falta HTML**: un `<button>` nativo no necesita `role`; no pongas `aria-label` redundante con texto visible. Usa ARIA para: estados (`aria-expanded`, `aria-selected`), relaciones (`aria-controls`, `aria-describedby`), regiones vivas y menús/combos complejos.
2. **Modales**: `role="dialog"` + `aria-modal="true"` + `aria-labelledby` al título; al abrir: guarda el foco previo y muévelo al modal; bloquea Tab fuera (focus trap) pero **cuidado**: trap solo mientras esté abierto; al cerrar: devuelve el foco al elemento que lo abrió.
3. **Acordeones**: `button` como cabecera con `aria-expanded` + `aria-controls` al panel; contenido colapsable con `hidden` (no solo CSS) para que desaparezca del árbol de accesibilidad.
4. **Tabs**: roles de tablist con `aria-selected`, y solo el tab activo en el orden de tabulación (`tabindex=-1` en inactivos); manejo con flechas.
5. **Regiones vivas**: `aria-live="polite"` para toasts/anuncios (los cambios se anuncian); `role="status"` para éxito silenciosos; `aria-live="assertive"` solo en errores urgentes.
6. **Skip link**: primer enlace de la página (`a href="#contenido"`) visible al recibir foco, que salte a `main`; oculto visualmente hasta focus.
7. **prefers-reduced-motion**: en CSS `@media (prefers-reduced-motion: reduce) { * { animation: none; transition: none; } }` como mínimo; en JS usa `matchMedia` para desactivar animaciones de scroll suave/parallax.
8. **Prueba con lector**: recorre la página: order (NVDA: flechas / VoiceOver: VO+flechas), formularios, modales, anuncios de toasts, estado de los controles.
9. **Lector en tablas**: caption, `scope="col/row"` en headers; en listas anidadas, estructura correcta.
10. Corrige lo que el lector anuncia mal y repite el recorrido hasta que sea comprensible sin ver la pantalla.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `componentes` | Componentes a auditar | lista | sí | modal, tabs, acordeón |
| `lector` | Lector de pantalla para probar | texto | no | "NVDA" |
| `animaciones` | Animaciones presentes | lista | no | parallax, marquee |
| `toasts` | ¿Notificaciones dinámicas? | booleano | no | true |
| `browser_prueba` | Navegadores | lista | no | Firefox, Chrome |

## Reglas y checklist

- [ ] Nada de ARIA redundante con elementos nativos
- [ ] Modal: focus trap solo abierto, restauración al cerrar, aria-modal
- [ ] Acordeones con aria-expanded y paneles con hidden
- [ ] Tabs con aria-selected y solo activo en tab order
- [ ] Toasts con aria-live polite (status) sin lectores duplicados
- [ ] Skip link presente y visible en foco
- [ ] prefers-reduced-motion respetado en CSS y JS
- [ ] Recorrido con lector de pantalla sin anuncios confusos

## Ejemplos de prompts

- "Haz este modal accesible: focus trap, aria-modal y retorno de foco"
- "Crea un acordeón con aria-expanded y panel realmente oculto para el lector"
- "Añade aria-live a mis toasts para que se anuncien sin interrumpir"
- "Revisa mis tabs: teclado con flechas y aria-selected correctos"
- "Configura prefers-reduced-motion en mi app (CSS y JS)"

## Plantillas y recursos

- [templates/modal-accesible.html](templates/modal-accesible.html) — modal con focus trap, aria-modal y skip link
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel