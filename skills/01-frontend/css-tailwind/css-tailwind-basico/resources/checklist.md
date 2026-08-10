# Checklist de calidad: CSS nivel básico

## Selectores y especificidad

- [ ] Solo clases y selectores de tipo base; sin ids como ganchos de estilo.
- [ ] Sin `!important`; la especificidad se resuelve con orden y clases.
- [ ] Máximo 3 niveles de anidamiento o combinación por regla.
- [ ] Nombres de clase descriptivos en kebab-case (`tarjeta__precio`).

## Box model

- [ ] `box-sizing: border-box` global al inicio.
- [ ] `padding` usado dentro del elemento y `margin` para separar elementos, sin mezclar por azar.
- [ ] Elementos que desbordan inspeccionados con DevTools antes de "arreglar a ciegas".

## Unidades

- [ ] Tipografía y espaciados en `rem`; `%`/`fr` solo para proporciones de layout.
- [ ] `vw`/`vh` usados únicamente en contenedores de pantalla completa.
- [ ] Títulos con `clamp()` cuando escalan con la ventana.

## Layout

- [ ] Flexbox en flujos lineales (nav, acciones, filas de tarjeta).
- [ ] Grid en retículas (tarjetas, columnas) con `auto-fit`/`minmax` o columnas explícitas.
- [ ] Sin floats ni tablas de layout.
- [ ] Media queries mínimas y agrupadas al final del archivo.

## Interacción y estados

- [ ] `:hover`, `:focus-visible` y `:disabled` en todos los elementos interactivos.
- [ ] Estados de validación visibles (`:user-invalid` u otro mecanismo).
- [ ] Contraste del texto base sobre los fondos elegidos ≥ 4.5:1.

## Organización

- [ ] CSS comentado por bloques: reset, variables, base, componentes, responsive.
- [ ] Sin reglas duplicadas ni valores mágicos fuera de las variables.
- [ ] El layout funciona a 320, 768 y 1024 px sin scroll horizontal.