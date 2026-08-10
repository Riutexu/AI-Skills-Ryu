---
name: web-design-avanzado
description: Design tokens en variables CSS, jerarquía visual, ritmo vertical, sistemas de grid, conversión de Figma a código y principios UX de percepción.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "web-design"
  nivel: avanzado
  stack: "Design tokens (CSS custom properties), Figma, UX"
---

# Design tokens y jerarquía visual (nivel avanzado)

## Qué hace este skill

Construye sistemas de estilos a partir de design tokens en variables CSS, con jerarquía visual explícita, ritmo vertical tipográfico y un sistema de grid de 12 columnas. Traduce capas de Figma a código con nombres y valores consistentes y aplica principios UX de percepción (proximidad, contraste, similitud, figura-fondo) para justificar cada decisión.

## Cuándo usarlo

- Cuando un proyecto crece y los colores o espaciados empiezan a repetirse sueltos: es el momento de centralizarlos en tokens.
- Cuando hay un diseño de Figma que debe pasar a código sin inventar valores.
- Cuando la interfaz "no respira": las secciones necesitan ritmo vertical y jerarquía clara.
- Cuando quieres que varias páginas o componentes compartan un grid y unas reglas de espaciado.
- Cuando se revisa una interfaz con criterios UX básicos (leyes de percepción) antes de entregarla.

## Requisitos previos

- Nivel básico de este tema dominado: paleta, tipografía, grid y flexbox.
- CSS intermedio: custom properties (variables), herencia y unidades.
- Uso básico de Figma o cualquier herramienta de diseño (inspeccionar medidas).
- Nociones mínimas de UX: qué es la jerarquía visual y por qué importa el espaciado.

## Workflow paso a paso

1. Haz el inventario del diseño: lista todos los colores, tipografías, tamaños, radios y sombras que usa la interfaz real.
2. Define los nombres de los tokens por rol, no por valor: `--color-primario` y no `--color-verde-claro`; escala numérica para espaciados.
3. Escribe `tokens.css`: colores (marca, neutrales, semánticos: éxito, advertencia, error, info), tipografía (familias y escala), espaciados, radios, sombras y z-index.
4. Establece la jerarquía visual: qué contiene cada nivel (H1 a cuerpo) y con qué combinación de tamaño, peso y color se logra; evita dos niveles iguales.
5. Define el ritmo vertical: line-height por nivel y un multiplicador de margen (por ejemplo, `--espaciado-seccion` y `--espaciado-bloque`) consistente.
6. Configura el sistema de grid: contenedor máximo, 12 columnas con gutters de la escala de espaciado y márgenes laterales.
7. Convierte las capas de Figma: usa el inspector para leer tamaños, espacios y colores; traduce cada valor a su token correspondiente.
8. Aplica las leyes de percepción: proximidad (agrupa lo relacionado), contraste (distingue lo importante), similitud (mismos estilos para mismas funciones), figura-fondo (fondo y tarjeta claros).
9. Revisa que no existan valores "virgenes": todo valor repetible proviene de un token.
10. Prueba la página con los tokens en los 3 breakpoints principales y valida que el ritmo se mantiene.
11. Documenta los tokens: qué significa cada grupo y cuándo cambiarlos (los semánticos cambian según estado, los de marca según identidad).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| fuente_figma | Archivo o capa de Figma a convertir | string | No | "Pagina-servicios: Frame principal 1440 px" |
| tema | Nombre del producto o proyecto | string | Sí | "Sistema de estilos de Banca Norte" |
| grid_columnas | Número de columnas del sistema | número | No | "12" |
| escala_espaciado | Base de la escala de espaciado | número | No | "4" |
| tipografia_principal | Familia para títulos | string | No | "Inter SemiBold" |
| paleta_colores | Colores detectados en el diseño | string | No | "0f766e, 1e293b, f8fafc, b91c1c" |
| url_referencia | Referencia de sistema de diseño | url | No | "https://tokens.studio" |
| criterios_aceptacion | Condiciones de entrega | string | No | "Todo valor repetible proviene de un token; ritmo vertical constante; chat sin valores sueltos" |

## Reglas y checklist

- [ ] Tokens nombrados por rol, con escalas numéricas para espaciados y radios.
- [ ] Colores semánticos (éxito, advertencia, error, info) presentes además de los de marca.
- [ ] Jerarquía visual definida: entre 3 y 4 niveles claros de contenido.
- [ ] Ritmo vertical constante: mismas distancias entre secciones y entre párrafos.
- [ ] Grid de 12 columnas con gutter de la escala; sin anchos mágicos.
- [ ] Traducción de Figma sin inventar valores: cada medida leída del inspector mapeada a un token.
- [ ] Proximidad aplicada: los elementos relacionados comparten espacio visual.
- [ ] Contraste de similitud: los botones iguales se ven iguales en toda la interfaz.
- [ ] Ningún valor suelto de color, radio o espaciado fuera de los tokens.

## Ejemplos de prompts

- "Convierte este diseño de Figma (adjunto) a código usando los tokens de tokens.css; no inventes ningún valor que no esté en el archivo."
- "Crea tokens.css para una landing de un banco: marca, neutrales, semánticos, tipografía, espaciados, radios, sombras y z-index."
- "La sección no respira: revisa el ritmo vertical de esta página y propón los espaciados correctos usando la escala de 4 px."
- "Aplica la ley de proximidad a esta tarjeta: agrupa los datos relacionados y separa el CTA del resto."
- "Estado de validación: el error debe usar el token semántico, no el rojo de la marca. Revisa los usos en la página."

## Plantillas y recursos

- [templates/tokens.css](./templates/tokens.css) — Archivo completo de design tokens en variables CSS: color, tipografía, espaciado, radios, sombras y z-index.
- [templates/uso-tokens.html](./templates/uso-tokens.html) — Página de demostración del ritmo vertical, la jerarquía y el grid construida con los tokens.
- [resources/checklist.md](./resources/checklist.md) — Lista de verificación de calidad del nivel avanzado.