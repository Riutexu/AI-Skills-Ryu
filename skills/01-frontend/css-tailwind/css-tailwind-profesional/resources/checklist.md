# Checklist de calidad: CSS y Tailwind nivel profesional

## Arquitectura

- [ ] Estructura ITCSS declarada: Settings, Generic, Elements, Objects, Components, Utilities.
- [ ] Capas `@layer` ordenadas y documentadas en el CSS de entrada.
- [ ] Cero `!important` (salvo reglas globales de reduced-motion, comentadas).
- [ ] BEM en componentes propios; utilidades solo como excepciones.
- [ ] Reglas sueltas fuera de las capas son 0.
- [ ] Documentación breve de la arquitectura entregada (carpertas y orden).

## Tokens y temas

- [ ] Tokens por rol (background, foreground, primary, muted...) sin colores sueltos.
- [ ] Dark mode con un único set de variables; ningún componente cambia color por modo.
- [ ] Sin parpadeo al cargar en dark (script antes del primer render o media query).
- [ ] Pares de contraste AA verificados en claro y oscuro.

## Rendimiento

- [ ] Purging activo y medido: el CSS final solo contiene lo usado.
- [ ] Reglas duplicadas eliminadas y peso del CSS documentado antes/después.
- [ ] CSS crítico en línea para el primer render; hoja completa diferida.
- [ ] Container queries para módulos reutilizables; media queries solo para la página.

## Variantes y a11y

- [ ] Variantes `group-*`, `aria-*`, `data-*` y `supports-*` usadas con criterio.
- [ ] `prefers-reduced-motion` global en la base, no por componente.
- [ ] `:focus-visible` visible en ambos temas en todos los controles.
- [ ] Errores con apoyo textual además del color (mensaje + icono).
- [ ] `sr-only` correcto (sin display: none) para texto de lectores de pantalla.

## Verificación

- [ ] Lighthouse rendimiento ≥ 90 y accesibilidad ≥ 90.
- [ ] Navegación con teclado completa incluyendo diálogos y menús.
- [ ] Zoom al 200 % sin pérdida de layout.
- [ ] Dark mode revisado en navegadores con y sin preferencia de sistema.