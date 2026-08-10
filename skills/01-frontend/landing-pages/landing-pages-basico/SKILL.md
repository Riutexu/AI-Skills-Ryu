---
name: landing-pages-basico
description: Crea landing pages funcionales con HTML5 y CSS puro: hero, secciones, CTA, formulario con validación nativa y diseño responsive con media queries.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "landing-pages"
  nivel: basico
  stack: "HTML5, CSS3"
---

# Landing page con HTML y CSS (nivel básico)

## Qué hace este skill

Construye landing pages estáticas completas y funcionales usando únicamente HTML5 semántico y CSS3 puro. Produce una estructura de conversión ordenada (hero, beneficios, CTA, formulario y footer), estilos reutilizables con variables CSS y un layout que responde a móvil, tablet y escritorio mediante media queries.

## Cuándo usarlo

- Cuando el proyecto aún no requiere framework ni build y se necesita una landing que funcione al abrir el archivo en el navegador.
- Para páginas de producto, servicios o captura de correos en fases tempranas o MVPs.
- Para aprender la base, sin abstracciones: todo el HTML y CSS es visible y editable.
- Cuando hay un solo objetivo claro: presentar la propuesta y convertir al visitante en una acción (escribir, reservar, comprar, contactar).

## Requisitos previos

- Nociones mínimas de HTML (etiquetas, atributos) y CSS (propiedades, selectores simples).
- Un editor de texto y un navegador moderno (Chrome, Firefox, Edge) para probar el resultado.
- Contenido real del proyecto: propuesta de valor, beneficios, datos de contacto y CTA. Sin contenido real no se escribe código.

## Workflow paso a paso

1. Define el objetivo de la página (la única conversión que se busca) y la audiencia en una frase cada uno.
2. Recolecta el contenido real: título, subtítulo, 3-6 beneficios, testimonios o datos, CTA y datos de contacto.
3. Crea la estructura HTML semántica: `header` con navegación, `main` con secciones `section` y `article`, y `footer`.
4. Construye el hero: `h1` único, subtítulo, dos CTA (principal y secundario) y una ilustración SVG o imagen con `alt` descriptivo.
5. Añade la sección de beneficios en tres tarjetas dentro de `section`, con encabezados `h2` y `h3` jerárquicos.
6. Añade una sección de proceso o testimonios que apoye el mensaje (diferencia frente a la competencia).
7. Crea el formulario de captura en una sección: `form` con `label` asociado a cada campo y validación nativa (`required`, `type="email"`, `minlength`).
8. Cierra con el CTA final y el `footer` (contacto, enlaces legales, redes).
9. Escribe `styles.css`: reset ligero, variables CSS (color, tipografía, espaciado) y tipografía con unidades `rem`.
10. Maqueta con flexbox el nav y con Grid las tarjetas; define el ancho máximo del contenedor y el flujo de lectura.
11. Aplica responsive con media queries (típicamente `max-width: 768px` y `1024px`): menú apilado, tarjetas a una columna y formulario de ancho completo.
12. Estiliza estados interactivos: `:hover`, `:focus-visible` y el mensaje de éxito del formulario.
13. Valida el resultado: abre en el navegador, redimensiona la ventana y comprueba el contraste de los textos sobre los fondos.
14. Entrega una nota mínima de mantenimiento: dónde cambiar colores, textos y destino del formulario.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| objetivo | Conversión única de la landing | string | Sí | "Capturar correos para la demo del producto" |
| stack | Tecnologías permitidas | string | Sí | "HTML5, CSS3, sin frameworks" |
| nivel_usuario | Experiencia del usuario que editará el código | string | Sí | "Junior: entiende HTML y CSS básico" |
| url_referencia | Página o referencia de diseño a imitar | url | No | "https://ejemplo.com/landing-referencia" |
| secciones_landing | Secciones requeridas separadas por coma | string | No | "hero, beneficios, proceso, testimonios, formulario" |
| idioma_contenido | Idioma del contenido final | string | No | "es" |
| paleta_colores | Colores de marca principales | string | No | "#1a365d, #38a169, #f7fafc" |
| criterios_aceptacion | Condiciones para dar por terminada la página | string | No | "HTML válido, responsive en 320/768/1024 px, formulario funcional" |

## Reglas y checklist

- [ ] Un único `h1` por página y jerarquía de encabezados sin saltos.
- [ ] Estructura semántica: `header`, `main`, `section`, `footer` correctamente anidados.
- [ ] Todas las imágenes con atributo `alt` descriptivo.
- [ ] Formulario con `label` asociado a cada campo y validación nativa sin depender de JavaScript.
- [ ] Solo las consultas de medios necesarias (menos de 3 breakpoints típico).
- [ ] Contraste de texto sobre fondo mínimo 4.5:1 para texto normal.
- [ ] Archivos con nombres en minúsculas y separación por guiones.
- [ ] Comprobación manual a 320 px, 768 px y 1024 px sin scroll horizontal.
- [ ] Estados `:hover` y `:focus-visible` presentes en todos los elementos interactivos.

## Ejemplos de prompts

- "Crea una landing page estática en HTML y CSS para un estudio de yoga: hero, clases, precios, formulario de reserva y footer. Sin frameworks."
- "Haz el HTML semántico de una landing para un podcast de tecnología con secciones: portada, episodios destacados, newsletter y footer."
- "Convierte esta página en responsive: en móvil el menú debe ser vertical y las tarjetas apilarse en una columna."
- "Agrega un formulario de contacto con validación nativa (nombre, email, mensaje) y mensaje de éxito al enviar."
- "Revisa mi landing y dime qué secciones faltan para una página de captura de una consultora; muéstrame un checklist."

## Plantillas y recursos

- [templates/index.html](./templates/index.html) — Estructura completa de una landing en español: hero, beneficios, clases, testimonios, formulario de reserva y footer.
- [templates/styles.css](./templates/styles.css) — Estilos con variables CSS, flexbox, Grid y media queries para la plantilla anterior.
- [resources/checklist.md](./resources/checklist.md) — Lista de verificación de calidad del nivel básico.