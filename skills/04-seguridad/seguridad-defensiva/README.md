# Seguridad defensiva

Skills para defender sistemas y organizar la seguridad con estándares reales: desde higiene básica (hardening, backups, secretos) hasta operación de blue team (NIST CSF 2.0, D3FEND, threat hunting, CTI y métricas de SOC).

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
|---|---|---|
| [seguridad-defensiva-basico](seguridad-defensiva-basico/SKILL.md) | Básico | Hardening, backups 3-2-1, secretos, logs y plan de incidente en 10 minutos |
| [seguridad-defensiva-avanzado](seguridad-defensiva-avanzado/SKILL.md) | Avanzado | NIST CSF 2.0, monitorización central, alertas accionables, técnicas D3FEND |
| [seguridad-defensiva-profesional](seguridad-defensiva-profesional/SKILL.md) | Profesional | Blue team: hunting, IR playbooks, CTI, Sigma, métricas de mejora |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
|---|---|---|---|
| `servicios_publicos` | Qué expones | Inventario de activos | Red completa |
| `stack` | Linux simple | Wazuh/Elastic | SIEM + SOAR + CTI |
| `marco` | Checklist propia | NIST CSF 2.0 | NIST + D3FEND + Sigma |
| `salida` | Servidor endurecido | Matriz + alertas | Playbooks + métricas |

## Instalación

```
xcopy seguridad-defensiva C:\Users\%USERNAME%\.config\opencode\skills\seguridad-defensiva /E /I
```

Compatible con `.claude/skills/` y `.agents/skills/`.

## Ruta de aprendizaje

1. **Básico**: resolver el caos (hardening, backups, secretos).
2. **Avanzado**: organizar la defensa con NIST CSF 2.0 y detección real.
3. **Profesional**: operar como blue team con proceso y métricas.

## Referencias clave

- [NIST CSF 2.0](https://www.nist.gov/cyberframework) — las 6 funciones (Govern, Identify, Protect, Detect, Respond, Recover)
- [MITRE D3FEND](https://d3fend.mitre.org/) — vocabulario de técnicas de defensa
- [MITRE ATT&CK](https://attack.mitre.org/) — tácticas y técnicas del adversario
- [SigmaHQ/sigma](https://github.com/SigmaHQ/sigma) — reglas de detección genéricas
- [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) — inspiración de esta familia (817 skills, frameworks MITRE/NIST)