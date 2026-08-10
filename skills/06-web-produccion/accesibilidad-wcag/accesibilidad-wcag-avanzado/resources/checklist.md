# Checklist avanzado: Accesibilidad WCAG

- [ ] ARIA solo donde el HTML nativo no alcanza (sin redundancias)
- [ ] Modales: role="dialog", aria-modal, focus trap activo solo abierto
- [ ] Foco restaurado al elemento que abrió el modal al cerrar
- [ ] Acordeones con aria-expanded + paneles con `hidden`
- [ ] Tabs: aria-selected, solo activo en tab order, flechas
- [ ] Toasts con aria-live polite / role="status"
- [ ] Skip link funcional y visible en focus
- [ ] prefers-reduced-motion aplicado (CSS y JS)
- [ ] Recorrido completo validado con lector de pantalla (NVDA/VoiceOver)
- [ ] Anuncios del lector comprensibles sin ver la pantalla