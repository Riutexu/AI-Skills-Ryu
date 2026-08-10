# Checklist de calidad: web design nivel profesional

## Tokens y theming

- [ ] Tokens por rol en Tailwind (background, foreground, primary, muted, destructive).
- [ ] Ningún color suelto en componentes: todos usan tokens o variantes.
- [ ] Dark mode por clase y por sistema, sincronizado con `prefers-color-scheme`.
- [ ] Cambio de tema sin parpadeo (script aplica el tema antes del primer render).
- [ ] Pares de contraste verificados en ambos temas (AA).
- [ ] Tokens de tipografía con pesos e interlineados completos en la config.

## Componentes

- [ ] Variantes de componente tipadas y limitadas (3-5 por componente).
- [ ] Estados: `:hover`, `:focus-visible`, `:disabled` cubiertos en cada variante.
- [ ] Componentes de shadcn/ui usados sin forks salvo necesidad documentada.
- [ ] Avisos y estados usan tokens semánticos (success, warning, destructive, info).
- [ ] Navegación por teclado y roles ARIA correctos en componentes complejos.

## Motion y accesibilidad

- [ ] Microinteracciones solo donde aportan feedback (hover, dialog, cambio de tema).
- [ ] `prefers-reduced-motion` desactiva o simplifica todas las animaciones.
- [ ] Ninguna animación depende de mantener el cursor sobre el elemento.
- [ ] Duración y curva centralizadas en tokens de movimiento.

## Testing visual y CI

- [ ] Snapshots de Playwright para los componentes clave en claro y oscuro.
- [ ] La suite de regresión visual corre en CI y rompe con la imagen de diferencia.
- [ ] Cambios de token o componente quedan en changelog con versión.
- [ ] Accesibilidad ≥ 90 en Lighthouse para páginas reales del sistema.

## Documentación y gobierno

- [ ] Guías por componente: cuándo usarlo, variantes y ejemplos de código.
- [ ] Tabla de tokens con usos correctos e incorrectos.
- [ ] Definido quién puede alterar tokens y con qué prueba asociada.
- [ ] Principios del sistema escritos (2-3) que guían las decisiones futuras.