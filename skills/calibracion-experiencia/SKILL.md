---
name: calibracion-experiencia
description: Calibración OBLIGATORIA al inicio de toda sesión de programación asistida. Pregunta al usuario por su nivel real y ajusta jerga, profundidad y ambición del trabajo para que el resultado sea creíble por un jurado
license: MIT
compatibility: opencode
metadata:
  familia: "00-nucleo"
  tema: "calibracion-experiencia"
  nivel: universal
  stack: "cualquier stack"
---

# Calibración de Experiencia — Núcleo del Proyecto

## Qué hace este skill

Es el PRIMER skill que se carga en cualquier sesión de programación asistida por IA (Claude Code, Gemini CLI, Google Antigravity, opencode, Cursor, Copilot y cualquier otro agente). Su función: **calibrar el trabajo al nivel real del usuario** antes de escribir una sola línea, para que el resultado parezca creado por el propio usuario y no por una IA genérica.

Un jurado que evalúa el trabajo no juzga tanto la calidad absoluta del código, sino su **coherencia con el nivel del autor**. Un principiante que entrega arquitectura hexagonal es sospechoso; un senior que entrega código juvenil, también. Este skill elimina ese desajuste.

## Cuándo usarlo

- **SIEMPRE**. Al inicio de toda tarea de programación, antes de escribir código, diseñar, refactorizar o explicar.
- Cuando el usuario inicia un proyecto nuevo, retoma uno existente o pide ayuda con una tecnología que no domina.
- Cuando el usuario está empezando con la programación (crítico: la calibración evita frustración, jerga incomprensible y código que no puede defender).

## Regla de oro: la pregunta obligatoria

Al iniciar la sesión, pregunta AL USUARIO, de forma natural y respetando su lenguaje (en español si habla español), esta pregunta EXACTA en su contenido y forma:

> **"Para hacer el trabajo más creíble y más humano a nivel personal: ¿usted considera que es bueno programando, o está aplicando conocimientos que todavía está aprendiendo en este momento?"**

Esta pregunta no es opcional ni decorativa. Motivo: la respuesta fija el REJISTRO del trabajo entero (nivel de jerga, complejidad, cantidad de explicaciones, ambición de la solución).

## Workflow paso a paso

1. **Pregunta obligatoria** (la de arriba, textualmente). Espera la respuesta con calma; no asumas nivel.
2. **Refuerza con 2-3 preguntas de calibración** del archivo `resources/preguntas-calibracion.md` según el contexto (proyecto, stack, urgencia). Mínimo: qué tarea concreta, en qué tecnología, y cuánto tiempo lleva con ella.
3. **Clasifica el nivel** con la rúbrica de `resources/rubrica-niveles.md` (Autoaprendiz 0-1 → Junior → Intermedio → Senior → Arquitecto).
4. **Ajusta el registro** del trabajo según la tabla de calibración (abajo). Aplica TODA la sesión: código, mensajes, explicaciones y documentación.
5. **Vigila desviaciones**: si la tarea pide saltar de nivel (el nivel del código se dispara por encima del nivel del usuario), regresa al nivel calibrado y explica la decisión.
6. **Confirma con el usuario** el registro antes de escribir más de 20 líneas o 10 minutos de trabajo: "Trabajo calibrado a nivel X. ¿Confirmas?".
7. **Entrega final**: antes de terminar, haz que el usuario pueda defender la solución en 3 frases; si no puede, reduce jerga o añade las explicaciones faltantes.

## Tabla de calibración (ajuste de registro)

| Nivel detectado | Jerga técnica | Profundidad del código | Explicaciones | Ambición del diseño |
|---|---|---|---|---|
| Autoaprendiz (0-1) | Nula o mínima, cada término explicado | Simple, comentado, con nombres claros | Paso a paso, con analogías; preguntar si entiende | Evitar abstracciones; solo lo necesario para la tarea |
| Junior (1-3) | Básica; explicar patrones no comunes | Correcto, directo, sin magia; comentarios útiles | Explicar decisiones importantes, no cada línea | Solución funcional primero; patrones evidentes |
| Intermedio (3-5) | Natural, con patrones y librerías del ecosistema | Buenas prácticas estándar, testing básico incluido | Decisiones y trade-offs; riesgos y alternativas | Arquitectura razonable; mención de mejoras futuras |
| Senior (5-8) | Avanzada y precisa; usa el vocabulario del dominio | Código de producción: testing, errores, performance | Breve y al grano; documenta lo no obvio | Arquitectura sólida con trade-offs explícitos |
| Arquitecto (8-10) | Total; discute estándares y RFC | Nivel sistema: escalabilidad, operación, seguridad | Decisiones de arquitectura y costos de cada opción | Solución a escala con evolución planificada |

## Reglas de credibilidad (importante si el usuario está empezando)

- [ ] NUNCA generar código que el usuario no pueda explicar línea por línea si se lo piden
- [ ] NUNCA aplicar patrones avanzados (DI, hexagonal, genéricos salvajes) en niveles bajos sin avisar
- [ ] SIEMPRE terminar con un resumen en lenguaje humano: "qué hace, cómo funciona, por qué así"
- [ ] Si la tarea es demasiado grande para el nivel, proponer dividirla en pasos pequeños
- [ ] El código debe parecer hecho por el usuario: comentarios en su idioma, convenciones de su proyecto, sin estructuras de IA genérica
- [ ] Antes de entregar: ¿parecería creíble este trabajo como propio del usuario ante un jurado? Si no, recalibrar

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `nivel_usuario` | Nivel detectado (autoaprendiz→arquitecto) | texto | sí | "junior" |
| `pregunta_obligatoria` | ¿Se hizo la pregunta exacta? | booleano | sí | true |
| `registro` | Jerga/profundidad aplicada | texto | sí | "bajo, explicado" |
| `stack` | Tecnología de la tarea | texto | no | "HTML, CSS, JS" |
| `tiempo_experiencia` | Meses/años con esa tecnología | texto | no | "3 meses" |
| `criterios_jurado` | Quién evaluará el trabajo | texto | no | "profesor de bootcamp" |

## Ejemplos de prompts

- "Empieza la sesión: calibra mi nivel antes de tocar código"
- "Soy nuevo en esto: hazme una web básica pero que parezca hecha por mí"
- "Revisé que entiendo lo que haces: aplica un nivel intermedio a esta tarea"
- "Mi trabajo se evalúa ante un jurado: quiero que cada decisión la pueda explicar"
- "No uses palabras técnicas sin explicármelas"

## Plantillas y recursos

- [resources/preguntas-calibracion.md](resources/preguntas-calibracion.md) — batería de preguntas de calibración por contexto
- [resources/rubrica-niveles.md](resources/rubrica-niveles.md) — rúbrica detallada para clasificar el nivel con honestidad
- [resources/guia-defensa.md](resources/guia-defensa.md) — cómo preparar que el usuario defienda el trabajo en 3 frases