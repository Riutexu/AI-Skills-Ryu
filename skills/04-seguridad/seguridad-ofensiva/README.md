# Seguridad ofensiva

Skills para ejecutar actividades ofensivas **éticas y legales** (hacking ético, pentest, red team) sobre infraestructura propia o con autorización explícita, con metodología, mapeo a MITRE ATT&CK y reporte profesional.

> ⚠️ Solo usar sobre sistemas que te pertenecen o sobre los que tienes permiso escrito. El uso sin autorización es ilegal.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
|---|---|---|
| [seguridad-ofensiva-basico](seguridad-ofensiva-basico/SKILL.md) | Básico | Reconocimiento pasivo/activo, escaneo, inspección web y reporte de hallazgos |
| [seguridad-ofensiva-avanzado](seguridad-ofensiva-avanzado/SKILL.md) | Avanzado | OWASP Top 10 explotable vs corregido, fuzzing, PoC controladas, mapeo MITRE ATT&CK |
| [seguridad-ofensiva-profesional](seguridad-ofensiva-profesional/SKILL.md) | Profesional | Engagement de red team completo: planificación, escalada, movimiento lateral, reportes |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
|---|---|---|---|
| `objetivo` | Dominio propio | Host en scope | Red completa autorizada |
| `autorizacion` | Sí, obligatoria | Contrato/bug bounty | Contrato firmado |
| `alcance` | Un host | Lista de hosts | Redes + reglas de impacto |
| `herramientas` | nmap, curl | ffuf, sqlmap, Burp | C2, BloodHound, Metasploit |
| `salida` | Reporte de hallazgos | PoC + severidad CVSS | Ejecutivo + técnico |

## Instalación

```
xcopy seguridad-ofensiva C:\Users\%USERNAME%\.config\opencode\skills\seguridad-ofensiva /E /I
```

Compatible con `.claude/skills/` y `.agents/skills/`.

## Ruta de aprendizaje

1. **Básico**: recon y reporte ético antes de tocar nada.
2. **Avanzado**: demuestra vulnerabilidades con PoC controladas en lab.
3. **Profesional**: ejecuta engagements completos con disciplina de servicio.

## Referencias clave

- [MITRE ATT&CK](https://attack.mitre.org/) — taxonomía de tácticas y técnicas
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) y [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) — 817 skills de ciberseguridad para agentes IA (inspiración de esta familia)
- [Trail of Bits skills](https://github.com/trailofbits/skills) — auditorías estáticas con agentes
