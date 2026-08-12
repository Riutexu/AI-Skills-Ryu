# Batería de preguntas de calibración

Este archivo es un RECURSO AUXILIAR. La determinación del nivel se basa en la declaración del usuario (skill `calibracion-experiencia`, SKILL.md). Elige MÁXIMO 1-2 de estas preguntas solo si falta contexto clave. Nunca conviertas la calibración en un interrogatorio: el registro por defecto de un usuario con stack profesional declarado es Senior/Arquitecto, y no se le pregunta nada más.

## Pregunta de calibración (núcleo)

1. **Pregunta de calibración** (definida en el SKILL.md): "¿prefieres que asuma tu nivel por el stack que usas, o quieres indicarme el nivel para esta tarea?"
   - Respuesta con stack profesional → nivel Senior/Arquitecto por defecto. Fin de la calibración.
   - Respuesta vaga o sin stack → elige 1-2 preguntas de contexto de abajo.

## Sobre el proyecto

2. "¿Qué quieres conseguir exactamente hoy con esta tarea?" → define el objetivo medible.
3. "¿Este código es para trabajo, un curso, un proyecto personal o una evaluación?"
4. "¿Quién va a ver o juzgar el resultado? (profesor, jefe, cliente, jurado, nadie)"
5. "¿Tienes código anterior en este proyecto? ¿Qué estilo usas en él?"

## Sobre el nivel técnico (contexto específico)

6. "¿Cuánto tiempo llevas con [tecnología/stack]?" → meses, semanas, años, hoy mismo.
7. "¿Entiendes qué hace cada parte de [X] hoy, o te lo explico con calma?"
8. "¿Te sientes cómodo con [concepto concreto: funciones, promesas, clases, hooks]?"
9. "¿Qué es lo más difícil que has construido hasta ahora en [stack]?"

## Sobre el registro del trabajo

10. "¿Prefieres que te explique mientras avanzo, o pocas explicaciones y el resultado limpio?"
11. "¿Te importa que use términos técnicos en inglés (fetch, deploy, hook) o los traduzco?"
12. "¿Quieres que el código lleve comentarios en cada paso, o comentarios solo donde hace falta?"

## Verificación de cierre (antes de entregar)

13. "Si un jurado te pregunta '¿y esto cómo funciona?', ¿puedes contestar en 3 frases?"
14. "¿Hay alguna parte del resultado que no entiendes? La repasamos antes de terminar."
15. "¿Este nivel de complejidad es el que querías, o lo subimos/bajamos?"

## Reglas de uso

- Si el usuario responde cualquier cosa como "no sé", "apenas", "estoy empezando" → nivel bajo garantizado, jerga mínima, todo explicado, sin estructuras avanzadas.
- Si el usuario pide "hazlo profesional" pero no declaró stack → aclara: "¿profesional para quién te evalúa?": eso cambia el registro.
- Si las respuestas se contradicen (dice "soy senior" pero no conoce herramientas básicas del stack) → usa el menor nivel real, con tacto.
- Registra el nivel en la sesión: `Nivel [X] · Registro [Y] · Verificado con [preguntas usadas]`.