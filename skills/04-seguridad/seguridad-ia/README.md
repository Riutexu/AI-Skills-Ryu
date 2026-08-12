# Seguridad de IA

Skills para asegurar aplicaciones con modelos de lenguaje (LLMs), agentes y RAG: desde los riesgos básicos (prompt injection, fugas, salidas no controladas) hasta un programa profesional de gobierno con OWASP LLM Top 10, MITRE ATLAS y NIST AI RMF.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
|---|---|---|
| [seguridad-ia-basico](seguridad-ia-basico/SKILL.md) | Básico | Riesgos de LLMs en simple, filtros de entradas/salidas, datos y herramientas |
| [seguridad-ia-avanzado](seguridad-ia-avanzado/SKILL.md) | Avanzado | OWASP LLM Top 10, MITRE ATLAS, guardrails (NeMo, custom) y red teaming de prompts |
| [seguridad-ia-profesional](seguridad-ia-profesional/SKILL.md) | Profesional | NIST AI RMF (Govern/Map/Measure/Manage), adversarial ML, programa medible |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
|---|---|---|---|
| `entradas` | Chat simple | Chat + URLs + archivos | Multi-servicio / RAG |
| `herramientas` | Ninguna o mínimas | Varias con permisos | Agentes con agencia real |
| `marco` | Checklist propia | OWASP LLM Top 10 + ATLAS | NIST AI RMF + programa |
| `salida` | Protecciones básicas | Guardrails verificados | Registro de riesgos + métricas |

## Instalación

```
xcopy seguridad-ia C:\Users\%USERNAME%\.config\opencode\skills\seguridad-ia /E /I
```

Compatible con `.claude/skills/` y `.agents/skills/`.

## Ruta de aprendizaje

1. **Básico**: entiende los riesgos y pon los frenos mínimos.
2. **Avanzado**: defiende con estándares (OWASP/ATLAS) y red teaming propio.
3. **Profesional**: gobierna el riesgo de IA en una organización.

## Referencias clave

- [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [MITRE ATLAS](https://atlas.mitre.org/) — ataques a sistemas de ML/IA
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) — inspiración de esta familia (MITRE/NIST)