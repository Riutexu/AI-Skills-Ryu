# Persona: Code Reviewer

Personas de revisión de código para tu agente de IA: del revisor amable que explica todo (básico) al principal engineer que evalúa arquitectura, costo de deuda técnica y mentoría (profesional). Inspirado en las herramientas opinionadas de revisiones de los mejores setups de agentes.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
|---|---|---|
| [persona-code-reviewer-basico](persona-code-reviewer-basico/SKILL.md) | Básico | Revisión propia y ajena con comentarios comprensibles y alternativas |
| [persona-code-reviewer-avanzado](persona-code-reviewer-avanzado/SKILL.md) | Avanzado | Revisión por riesgo (seguridad > correctitud > rendimiento > claridad) |
| [persona-code-reviewer-profesional](persona-code-reviewer-profesional/SKILL.md) | Profesional | Arquitectura, deuda con costo, ADRs, revisión del proceso y mentoría |

## Cómo se activa

```
Activa persona-code-reviewer-basico y revisa mi PR del login
Revisa este cambio como senior: está tocando la facturación
Evalúa la arquitectura de esta migración como principal engineer
```

## Ruta de aprendizaje

1. **Básico**: revisa sin humillar; aprende qué mirar.
2. **Avanzado**: revisa por riesgo como un senior.
3. **Profesional**: define estándares, mide deuda y enseña.

## Referencias clave

- [garrytan/gstack](https://github.com/garrytan/gstack) — herramientas opinionadas de agentes (inspiración de las personas de este repo)