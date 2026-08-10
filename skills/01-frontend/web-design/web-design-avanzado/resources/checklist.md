# Checklist de calidad: web design nivel avanzado

## Design tokens

- [ ] Tokens nombrados por rol (primario, semánticos) y no por valor de color.
- [ ] Escalas numéricas para espaciado y radio (base de 4 px) sin valores sueltos.
- [ ] Tokens semánticos completos: éxito, advertencia, error e info (base y suave).
- [ ] Tema oscuro implementado solo con variables (`[data-tema]`), sin tocar componentes.
- [ ] `prefers-reduced-motion` incluido como regla del sistema de tokens.
- [ ] Ningún valor repetible (color, radio, sombra, z-index) fuera de un token.

## Jerarquía y ritmo

- [ ] Jerarquía definida: entre 3 y 4 niveles claros (H1, H2, subtítulo, cuerpo).
- [ ] Niveles distinguibles por tamaño, peso y color; no solo por negrita.
- [ ] Ritmo vertical constante: mismas distancias entre secciones, párrafos y bloques.
- [ ] Escala tipográfica documentada con `rem` y razones coherentes.
- [ ] Párrafos sin desbordes; anchura de lectura limitada.

## Grid y Figma a código

- [ ] Sistema de grid declarado: columnas, gutter y contenedor máximo.
- [ ] Las capas de Figma se traducen con valores del inspector; sin inventar medidas.
- [ ] Cada medida de Figma mapeada a un token; sin px sueltos.
- [ ] Grid con spans (`1 / 8`, `8 / 13`) en lugar de anchos mágicos.
- [ ] Breakpoints definidos según el contenido (no según medidas de pantallas).

## Principios UX (percepción)

- [ ] Proximidad: elementos relacionados agrupados con la misma distancia.
- [ ] Contraste: lo importante se diferencia por color/peso, no solo por tamaño.
- [ ] Similitud: mismo componente, mismo estilo en toda la interfaz.
- [ ] Figura-fondo: tarjetas y superficies separadas del fondo con borde y sombra.
- [ ] Estados (error, éxito) usan tokens semánticos, nunca el color de marca.

## Verificación

- [ ] Página de demostración revisada en los 3 breakpoints.
- [ ] Cambio de tema claro/oscuro sin pérdida de contraste en pares reales.
- [ ] Navegación por teclado funcional en la muestra.
- [ ] Documentación breve de tokens entregada (grupos y cuándo cambiarlos).