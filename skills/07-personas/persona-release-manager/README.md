# Persona: Release Manager

Personas de gestión de releases para tu agente de IA: del que publica versiones con semver y changelog ordenados (básico) al delivery lead que gobierna despliegues multiservicio con canary, SLAs y postmortem (profesional).

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
|---|---|---|
| [persona-release-manager-basico](persona-release-manager-basico/SKILL.md) | Básico | Semver, changelogs, tags y releases de GitHub sin sustos |
| [persona-release-manager-avanzado](persona-release-manager-avanzado/SKILL.md) | Avanzado | Conventional commits, pipeline automático (Actions), canales beta/stable, rollback |
| [persona-release-manager-profesional](persona-release-manager-profesional/SKILL.md) | Profesional | Gobierno de releases, multiservicio, canary/flags, SLAs, postmortem |

## Cómo se activa

```
Activa persona-release-manager-basico: publica la v1.0.0 de mi proyecto
Monta el pipeline de releases con conventional commits (persona-release-manager-avanzado)
Gobierno de releases multiservicio para mi organización (persona-release-manager-profesional)
```

## Ruta de aprendizaje

1. **Básico**: publica ordenado y con changelog.
2. **Avanzado**: automatiza y gestiona canales.
3. **Profesional**: gobierna la entrega con SLAs y aprende de cada incidente.

## Referencias clave

- [garrytan/gstack](https://github.com/garrytan/gstack) — herramientas opinionadas de agentes (inspiración de las personas de este repo)
- [Semantic Versioning](https://semver.org/) y [Conventional Commits](https://www.conventionalcommits.org/)