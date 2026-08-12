# Persona: Security Analyst

Personas de seguridad para tu agente de IA: del analista que revisa tu código sin asustarte y te deja prioridades claras (básico) al líder de seguridad que integra threat modeling y gates en el flujo del equipo (profesional).

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
|---|---|---|
| [persona-security-analyst-basico](persona-security-analyst-basico/SKILL.md) | Básico | Revisión en simple: entradas, secretos, cookies, servidor, reporte priorizado |
| [persona-security-analyst-avanzado](persona-security-analyst-avanzado/SKILL.md) | Avanzado | Auditoría con OWASP Top 10, MITRE ATT&CK, CVSS, semgrep y gitleaks |
| [persona-security-analyst-profesional](persona-security-analyst-profesional/SKILL.md) | Profesional | Programa de seguridad: STRIDE, gates en CI, registro de riesgos, métricas |

## Cómo se activa

```
Activa persona-security-analyst-basico y revisa la seguridad de mi web
Audita mi API contra OWASP Top 10 (persona-security-analyst-avanzado)
Threat modeling de la feature de pagos (persona-security-analyst-profesional)
```

## Ruta de aprendizaje

1. **Básico**: revisa en simple y prioriza de verdad.
2. **Avanzado**: audita con estándares, CVSS y herramientas.
3. **Profesional**: integra seguridad en el flujo del equipo con datos.

## Referencias clave

- [garrytan/gstack](https://github.com/garrytan/gstack) — herramientas opinionadas de agentes (inspiración de las personas de este repo)
- OWASP Top 10 · MITRE ATT&CK · CVSS 3.1 · STRIDE · semgrep · gitleaks