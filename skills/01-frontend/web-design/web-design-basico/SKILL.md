---
name: web-design-basico
description: Fundamentos de diseño web: color, tipografía, espaciado, alineación, unidades CSS (rem/em/%), grid y flexbox para construir layouts limpios y equilibrados.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "web-design"
  nivel: basico
  stack: "HTML5, CSS3"
---

# Fundamentos de diseño web (nivel básico)

## Qué hace este skill

Aplica los fundamentos de diseño visual a páginas web reales: elección de paleta con armonía de color, tipografía legible con escala, espaciado y ritmo, alineación consciente y layouts con Grid y flexbox. Produce mini páginas o secciones de muestra con estos criterios aplicados, siempre con HTML y CSS puro.

## Cuándo usarlo

- Cuando empiezas una interfaz desde cero y necesitas tomar decisiones de diseño con criterio, no por intuición.
- Cuando hay que rediseñar un componente o página "fea pero funcional" con cambios de color, tipografía y espaciado.
- Cuando quieres definir una paleta y una escala tipográfica coherentes para un proyecto sin framework.
- Cuando necesitas explicar o justificar decisiones de diseño a otra persona.
- Para practicar: construir mini páginas de muestra que ejerciten grid, flexbox y jerarquía.

## Requisitos previos

- Nociones de HTML (estructura de secciones) y CSS básico (selectores y propiedades).
- Navegador moderno para inspeccionar y probar; un editor de texto.
- No se necesita experiencia previa en diseño: este skill da el criterio mínimo aplicable.

## Workflow paso a paso

1. Define el propósito de la página y una sola acción principal que el usuario debe poder hacer.
2. Determina la audiencia: qué tono (formal, cercano) y qué nivel de contraste requiere.
3. Elige la paleta: parte de 1 color de marca, añade 1 neutro formado y 1 acento; regla 60-30-10 para repartirlos.
4. Verifica contraste: texto normal ≥ 4.5:1 y texto grande ≥ 3:1 entre cada par usado.
5. Define la tipografía: máximo 2 familias (una para títulos con carácter y una legible para texto), escala de 4 tamaños como mínimo (base, título pequeño, medio, grande).
6. Establece el espaciado: usa una escala de 4 u 8 px (4, 8, 12, 16, 24, 32, 48, 64) para márgenes y paddings.
7. Elige unidades: `rem` para tamaños de fuente y espaciado, `%` o `fr` para proporciones de layout, `em` solo para elementos dependientes del contexto.
8. Maqueta con flexbox los flujos lineales (nav, listas de acciones) y con Grid las retículas (tarjetas, columnas).
9. Alinea de forma consciente: un solo eje claro por sección; evita centros arbitrarios en bloques largos de texto.
10. Aplica el ritmo: consistencia de espaciados repetida (por ejemplo, margen inferior uniforme entre secciones).
11. Crea jerarquía con tamaño, peso y color, no solo con negritas: el título más importante destaca primero.
12. Revisa el resultado a 320 px, 768 px y 1024 px; comprueba que la alineación y el ritmo se mantienen.
13. Entrega una breve nota de decisiones: paleta, tipografía y espaciado elegidos y por qué.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| objetivo | Propósito de la página o componente a diseñar | string | Sí | "Página de servicios para una consultora" |
| paleta_colores | Colores de marca o preferencia de gama | string | No | "Verde azulado con neutros cálidos" |
| tipografia | Familia o estilo tipográfico deseado | string | No | "Geométrica para títulos, sans legible para texto" |
| nivel_usuario | Experiencia previa de quien revisa el diseño | string | No | "Sin conocimientos de diseño" |
| unidad_espaciado | Escala de espaciado a usar | string | No | "escala de 4 px (4, 8, 12, 16, 24...)" |
| url_referencia | Referencia visual a analizar o imitar | url | No | "https://stripe.com/es" |
| secciones | Secciones o componentes a diseñar | string | No | "hero, servicios, equipo, contacto" |
| criterios_aceptacion | Condiciones de calidad del resultado | string | No | "Contraste AA en textos, grid y flexbox usados, 3 breakpoints revisados" |

## Reglas y checklist

- [ ] Máximo 2 familias tipográficas y una escala de al menos 3 tamaños coherentes.
- [ ] Paleta con 3-5 colores y un neutro de fondo; sin arcoíris.
- [ ] Contraste AA (4.5:1) verificado en los pares de texto reales.
- [ ] Espaciados tomados de la escala de 4 u 8 px, sin valores aleatorios.
- [ ] `rem` en tipografía y espaciado; `%`/`fr` en layout.
- [ ] Flexbox para flujos lineales y Grid para tarjetas o columnas.
- [ ] Un eje de alineación claro por sección; sin centros mezclados arbitrariamente.
- [ ] Títulos pequeños de más nivel que los bloques de texto: jerarquía por tamaño y peso.
- [ ] Revisión a 320 px y 768 px sin desplazamiento horizontal.

## Ejemplos de prompts

- "Diseña la paleta y la escala tipográfica de una web para una cafetería de especialidad; genera la guía con los valores en CSS."
- "Crea una mini página de muestra para un servicio de mensajería local usando Grid para las tarjetas y flexbox para la barra de navegación."
- "Revisa esta sección y dime qué espaciados están fuera de la escala de 4 px: propón los valores correctos."
- "Elige tipografía para una web de estudios de arquitectura: una para títulos y una para el cuerpo, con su escala en rem."
- "Esta página usa 7 colores. Redúcela a una paleta de 4 respetando marca y contraste."

## Plantillas y recursos

- [templates/guia-paleta.html](./templates/guia-paleta.html) — Guía visual de armonías de color, escala tipográfica, espaciado y contraste.
- [templates/mini-pagina.html](./templates/mini-pagina.html) — Mini página de muestra que aplica paleta, ritmo, grid y flexbox.
- [resources/checklist.md](./resources/checklist.md) — Lista de verificación de calidad del nivel básico.