# Checklist de calidad: CSS y Tailwind nivel avanzado

## Variables y funciones modernas

- [ ] Valores repetibles centralizados en `:root` o en el tema de Tailwind.
- [ ] Nombres de variables por rol y escala, con comentarios de bloque.
- [ ] Tipografía fluida con `clamp()`; títulos sin breakpoints de tamaño.
- [ ] `min()`/`max()` para anchos condicionados (contenedor, lectura).
- [ ] Cero valores mágicos repetidos fuera de las variables.

## Grid avanzado

- [ ] Layouts complejos con `grid-template-areas` nombradas y legibles.
- [ ] Áreas reorganizadas con media queries sin romper el orden visual.
- [ ] Gaps y gutters tomados de la escala de espaciado.

## Configuración de Tailwind

- [ ] Tema extendido con la marca real (colores, fuentes, radios, sombras).
- [ ] `@theme` (v4) o `theme.extend` (v3) coherentes entre sí en valores.
- [ ] Utilidades personalizadas en la capa correcta (`utilities` o `@utility`).
- [ ] El build de Tailwind compila sin errores y emite las utilidades nuevas.
- [ ] Capas `base`, `components` y `utilities` usadas en su orden real.

## Componentes

- [ ] Componentes definidos con `@apply` en `@layer components`; sin líneas de 20 utilidades en HTML.
- [ ] Variantes de estado cubiertas (hover, focus-visible, disabled).
- [ ] Las utilidades personalizadas no duplican clases core de Tailwind.
- [ ] El HTML final se lee como estructura, no como ruido de clases.

## Verificación

- [ ] Resultado revisado en los breakpoints del proyecto.
- [ ] `clamp()` y áreas de grid verificados a 320 px y a 1440 px.
- [ ] Sin regresión visual en componentes refactorizados (comparación antes/después).