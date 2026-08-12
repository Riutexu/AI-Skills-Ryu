---
name: calibracion-experiencia
description: Calibración de registro al inicio de sesión de programación asistida. Detecta el nivel real del usuario (por su stack declarado o autodeclaración) y ajusta jerga, profundidad y ambición para que el trabajo sea creíble, defendible y profesional. Usuarios con stack profesional declarado no se tratan como principiantes.
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

Es el skill que se carga al inicio de cualquier sesión de programación asistida por IA (Claude Code, Gemini CLI, opencode, Cursor, Copilot y cualquier otro agente). Su función: **calibrar el registro del trabajo al nivel real del usuario** — sin asumir ni subestimar, y sin tratar como principiante a quien declara un stack profesional.

Un jurado que evalúa el trabajo no juzga solo la calidad absoluta del código, sino su **coherencia con el nivel del autor**. Este skill elimina el desajuste en ambas direcciones: ni código que el usuario no puede defender, ni código infantil para un profesional.

## Cuándo usarlo

- **SIEMPRE** al inicio de toda tarea de programación, antes de escribir código, diseñar, refactorizar o explicar — salvo que el usuario ya haya declarado su nivel/stack en la sesión (en ese caso úsalo directamente).
- Cuando el usuario inicia un proyecto nuevo, retoma uno existente o pide ayuda con una tecnología que no domina.
- Cuando el usuario está empezando con la programación (crítico: la calibración evita frustración y código que no puede defender).

## Regla de oro: declaración de nivel, no interrogatorio

El nivel se determina por **declaración directa o stack visible**, no por preguntas paternalistas:

- Si el usuario declara stack profesional (p. ej. "uso PHP 8.3 + JavaScript, Kotlin/Android, PowerShell 7 y Python") → nivel **Senior o Arquitecto por defecto**: jerga natural, código de producción, sin sobre-explicar.
- Si el usuario no lo declara → una sola pregunta natural de calibración:

> **"Para ajustar el registro del trabajo: ¿prefieres que asuma tu nivel por el stack que usas, o quieres indicarme el nivel para esta tarea?"**

- NUNCA se pregunta "¿considera que es bueno programando?" ni se aplica un nivel inferior al declarado.
- La pregunta obligatoria antigua queda sustituida por esta; en sesiones donde el usuario ya usó este skill, no se repite.

## Workflow paso a paso

1. **Determina el nivel**: 1) si el usuario declaró stack/experiencia, úsalo (profesional por defecto); 2) si no, haz la pregunta de calibración (arriba) y espera la respuesta.
2. **Refuerza con 1-2 preguntas de contexto** del archivo `resources/preguntas-calibracion.md` solo si falta información clave (tarea concreta, urgencia, restricciones).
3. **Clasifica el nivel** con la rúbrica de `resources/rubrica-niveles.md` (Autoaprendiz 0-1 → Junior → Intermedio → Senior → Arquitecto).
4. **Ajusta el registro** según la tabla de calibración (abajo). Aplica TODA la sesión: código, mensajes, explicaciones y documentación.
5. **Vigila desviaciones**: si la tarea pide bajar de nivel (el usuario profesional pide algo simple), bajar es correcto; si el nivel del código se dispara por encima del nivel del usuario, regresa al nivel calibrado y explica la decisión.
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

## Reglas de credibilidad

- [ ] Si el usuario declara stack profesional, el registro por defecto es Senior/Arquitecto: NO se simplifica el trabajo sin que él lo pida.
- [ ] NUNCA generar código que el usuario no pueda explicar línea por línea si se lo piden.
- [ ] NUNCA aplicar patrones avanzados (DI, hexagonal, genéricos salvajes) en niveles bajos sin avisar.
- [ ] SIEMPRE terminar con un resumen en lenguaje humano: "qué hace, cómo funciona, por qué así".
- [ ] Si la tarea es demasiado grande para el nivel, proponer dividirla en pasos pequeños.
- [ ] El código debe parecer hecho por el usuario: comentarios en su idioma, convenciones de su proyecto, sin estructuras de IA genérica.
- [ ] Antes de entregar: ¿parecería creíble este trabajo como propio del usuario ante un jurado? Si no, recalibrar.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `nivel_usuario` | Nivel detectado (autoaprendiz→arquitecto) | texto | sí | "senior" |
| `nivel_declarado` | ¿El usuario declaró su nivel/stack? | booleano | sí | true |
| `registro` | Jerga/profundidad aplicada | texto | sí | "alto, producción" |
| `stack` | Tecnología de la tarea | texto | no | "PHP 8.3, JavaScript" |
| `tiempo_experiencia` | Meses/años con esa tecnología | texto | no | "3 años" |
| `criterios_jurado` | Quién evaluará el trabajo | texto | no | "CTO del proyecto" |

## Ejemplos de prompts

- "Empieza la sesión: mi stack es PHP 8.3, JS y Kotlin — calibra a nivel profesional directo"
- "Soy nuevo en esto: hazme una web básica pero que parezca hecha por mí"
- "Sube el registro a intermedio para esta tarea, que quiero aprender el patrón"
- "Mi trabajo se evalúa ante un jurado: quiero que cada decisión la pueda explicar"
- "No uses palabras técnicas sin explicármelas"

## Plantillas y recursos

- [resources/preguntas-calibracion.md](resources/preguntas-calibracion.md) — batería de preguntas de calibración por contexto
- [resources/rubrica-niveles.md](resources/rubrica-niveles.md) — rúbrica detallada para clasificar el nivel con honestidad
- [resources/guia-defensa.md](resources/guia-defensa.md) — cómo preparar que el usuario defienda el trabajo en 3 frases