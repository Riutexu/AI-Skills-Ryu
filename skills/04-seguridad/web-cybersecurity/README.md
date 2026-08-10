# Ciberseguridad web y protección de datos

Skills para proteger aplicaciones web: desde HTTPS y cabeceras de seguridad hasta auditorías OWASP, cumplimiento GDPR/LGPD y seguridad en el pipeline de desarrollo.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
|---|---|---|
| [web-cybersecurity-basico](web-cybersecurity-basico/SKILL.md) | Básico | HTTPS, cabeceras de seguridad, sanitización, bcrypt y tokens CSRF |
| [web-cybersecurity-avanzado](web-cybersecurity-avanzado/SKILL.md) | Avanzado | OWASP Top 10, CSP, CORS, rate limiting, JWT seguro y secrets |
| [web-cybersecurity-profesional](web-cybersecurity-profesional/SKILL.md) | Profesional | GDPR/LGPD, Semgrep/CodeQL, CI seguro, threat modeling, cifrado y zero trust |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
|---|---|---|---|
| `stack` | Node/Express simple | Cualquier stack web | Producción multi-servicio |
| `alcance` | Cabeceras y entradas | OWASP Top 10 completo | Normativas + pipeline + auditorías |
| `herramientas` | bcrypt, helmet | CSP, rate limit, JWT | Semgrep, CodeQL, gitleaks, ZAP |
| `datos_personales` | — | Minimización | GDPR/LGPD completo |
| `equipo` | Individual | Individual/equipo | Equipo + compliance |

## Instalación

```
xcopy web-cybersecurity C:\Users\%USERNAME%\.config\opencode\skills\web-cybersecurity /E /I
```

Compatible con `.claude/skills/` y `.agents/skills/`.

## Ruta de aprendizaje

1. **Básico**: HTTPS, cabeceras y saneamiento de entradas antes que nada.
2. **Avanzado**: domina OWASP Top 10 con ejemplos explotables vs. corregidos.
3. **Profesional**: automatiza auditorías y alinea el producto con normas.

## Referencias clave

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Cheat Sheets de OWASP](https://cheatsheetseries.owasp.org/)
- [helmet.js](https://helmetjs.github.io/)
- [Content Security Policy (MDN)](https://developer.mozilla.org/es/docs/Web/HTTP/CSP)
- [trailofbits/skills (auditorías estáticas)](https://github.com/trailofbits/skills)