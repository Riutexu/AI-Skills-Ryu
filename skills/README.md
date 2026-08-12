# Biblioteca de Skills Full Stack para opencode

Biblioteca de 1237 skills de programación, ciberseguridad y personas de agente, organizadas en 12 familias y 3 niveles (básico, avanzado y profesional). Cada skill es una carpeta con `SKILL.md` (instrucciones cargables por opencode), plantillas funcionales y recursos.

## Estructura

| Familia | Tema | Ruta |
|---|---|---|
| 01-frontend | Landing pages | [01-frontend/landing-pages](01-frontend/landing-pages/README.md) |
| 01-frontend | Diseño web | [01-frontend/web-design](01-frontend/web-design/README.md) |
| 01-frontend | Estructura base HTML5 | [01-frontend/html5-base-structure](01-frontend/html5-base-structure/README.md) |
| 01-frontend | CSS moderno y Tailwind | [01-frontend/css-tailwind](01-frontend/css-tailwind/README.md) |
| 01-frontend | JavaScript moderno | [01-frontend/javascript-moderno](01-frontend/javascript-moderno/README.md) |
| 01-frontend | TypeScript | [01-frontend/typescript](01-frontend/typescript/README.md) |
| 01-frontend | React y Next.js | [01-frontend/react-nextjs](01-frontend/react-nextjs/README.md) |
| 01-frontend | Three.js (3D web) | [01-frontend/three-js](01-frontend/three-js/README.md) |
| 02-backend | APIs REST con Node | [02-backend/node-api-rest](02-backend/node-api-rest/README.md) |
| 02-backend | Diseño de APIs | [02-backend/api-design](02-backend/api-design/README.md) |
| 02-backend | Autenticación y autorización | [02-backend/autenticacion-autorizacion](02-backend/autenticacion-autorizacion/README.md) |
| 02-backend | Arquitectura de código | [02-backend/arquitectura-codigo](02-backend/arquitectura-codigo/README.md) |
| 03-datos | Programación de bases de datos | [03-datos/database-programming](03-datos/database-programming/README.md) |
| 03-datos | SQL y PostgreSQL | [03-datos/sql-postgresql](03-datos/sql-postgresql/README.md) |
| 03-datos | ORMs y migraciones | [03-datos/orm-migraciones](03-datos/orm-migraciones/README.md) |
| 04-seguridad | Ciberseguridad web y protección de datos | [04-seguridad/web-cybersecurity](04-seguridad/web-cybersecurity/README.md) |
| 04-seguridad | Seguridad ofensiva (hacking ético) | [04-seguridad/seguridad-ofensiva](04-seguridad/seguridad-ofensiva/README.md) |
| 04-seguridad | Seguridad defensiva (NIST CSF 2.0, D3FEND) | [04-seguridad/seguridad-defensiva](04-seguridad/seguridad-defensiva/README.md) |
| 04-seguridad | Seguridad de IA (OWASP LLM, ATLAS, AI RMF) | [04-seguridad/seguridad-ia](04-seguridad/seguridad-ia/README.md) |
| 05-ingenieria | Git y control de versiones | [05-ingenieria/git-control-versiones](05-ingenieria/git-control-versiones/README.md) |
| 05-ingenieria | Testing y calidad | [05-ingenieria/testing-calidad](05-ingenieria/testing-calidad/README.md) |
| 05-ingenieria | DevOps y CI/CD | [05-ingenieria/devops-cicd](05-ingenieria/devops-cicd/README.md) |
| 05-ingenieria | Performance web | [05-ingenieria/performance-web](05-ingenieria/performance-web/README.md) |
| 05-ingenieria | Observabilidad | [05-ingenieria/observabilidad](05-ingenieria/observabilidad/README.md) |
| 06-web-produccion | SEO técnico | [06-web-produccion/seo-tecnico](06-web-produccion/seo-tecnico/README.md) |
| 06-web-produccion | Accesibilidad (WCAG) | [06-web-produccion/accesibilidad-wcag](06-web-produccion/accesibilidad-wcag/README.md) |
| 07-personas | Code Reviewer (revisión de código) | [07-personas/persona-code-reviewer](07-personas/persona-code-reviewer/README.md) |
| 07-personas | QA Engineer (calidad) | [07-personas/persona-qa-engineer](07-personas/persona-qa-engineer/README.md) |
| 07-personas | Doc Engineer (documentación) | [07-personas/persona-doc-engineer](07-personas/persona-doc-engineer/README.md) |
| 07-personas | Release Manager (versiones) | [07-personas/persona-release-manager](07-personas/persona-release-manager/README.md) |
| 07-personas | Security Analyst (seguridad) | [07-personas/persona-security-analyst](07-personas/persona-security-analyst/README.md) |

## Niveles de cada skill

| Nivel | Carpeta | Para quién | Resultado esperado |
|---|---|---|---|
| Básico | `<tema>-basico/` | Quien empieza o retoma un tema | Código sencillo y funcional, fundamentos claros, parámetros mínimos |
| Avanzado | `<tema>-avanzado/` | Desarrollador con experiencia | Buenas prácticas, herramientas del ecosistema, parámetros de configuración reales |
| Profesional full stack | `<tema>-profesional/` | Dev senior en producción | Arquitectura, seguridad, rendimiento, testing, despliegue y parámetros de operación |

## Instalación

Las skills funcionan en **opencode** (nativo) y son compatibles con Claude Code. Hay dos modos:

1. **Global** (disponible en todos tus proyectos):
   - `Copia la carpeta del tema deseado a ~/.config/opencode/skills/` (Windows: `%USERPROFILE%\.config\opencode\skills\`)
   - Ejemplo: `Copiar 01-frontend/landing-pages/ a %USERPROFILE%\.config\opencode\skills\`
2. **Por proyecto**:
   - Copia el tema a `.opencode/skills/` dentro de tu repositorio
   - Compatible también con `.claude/skills/` y `.agents/skills/`

Cada nivel es una skill independiente (ej. `landing-pages-basico`, `landing-pages-avanzado`, `landing-pages-profesional`), de modo que puedes instalar solo el nivel que necesitas.

Requisitos de nombres (validados por opencode): minúsculas, kebab-case, sin acentos: `^[a-z0-9]+(-[a-z0-9]+)*$`.

## Cómo usar

Pide la tarea y menciona el tema; el asistente cargará la skill correspondiente. Ejemplos:

```
Crea una landing page para un SaaS con #landing-pages-basico (nivel básico)
```
```
Implementa autenticación JWT con refresh tokens siguiendo autenticacion-autorizacion-avanzado
```
```
Quiero una auditoría OWASP Top 10 de mi app según web-cybersecurity-profesional
```

## Parámetros comunes entre skills

Cada `SKILL.md` incluye una tabla de parámetros propia. Los más habituales:

| Parámetro | Tipo | Requerido | Ejemplo |
|---|---|---|---|
| `objetivo` | texto | sí | "Landing de venta de un SaaS de facturación" |
| `nivel_usuario` | texto | sí | "básico" / "avanzado" / "profesional" |
| `stack` | texto | no | "Next.js + Tailwind + PostgreSQL" |
| `framework` | texto | no | "Express", "Prisma", "React" |
| `tipo_db` | texto | no | "postgres", "mysql", "sqlite" |
| `url_referencia` | url | no | "https://ejemplo.com/diseno-de-referencia" |
| `criterios_aceptacion` | lista | no | "LCP < 2.5s, WCAG AA, tests verdes" |

## Referencias y fuentes

- [anthropics/skills](https://github.com/anthropics/skills) — skills oficiales de Anthropic (docx, pdf, frontend-design, web-artifacts-builder...)
- [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) — directorio curado de skills de la comunidad
- [obra/superpowers](https://github.com/obra/superpowers) — metodología TDD de 7 fases (brainstorm, spec, plan, TDD, review, finalize)
- [trailofbits/skills](https://github.com/trailofbits/skills) — skills de seguridad estática (CodeQL, Semgrep, auditorías)
- [shadcn/ui docs - skills](https://ui.shadcn.com/docs/skills) — patrones de componentes shadcn/ui
- [Documentación de skills de opencode](https://opencode.ai/docs/skills/)
- [Skills Explained (Anthropic)](https://claude.com/blog/skills-explained) — arquitectura de progressive disclosure y mejores prácticas

## Notas

- Todo el contenido está en español y orientado a un stack moderno JS/TS (Next.js/React, Node, PostgreSQL/Prisma, Tailwind), con familias nuevas de ciberseguridad (MITRE/NIST) y personas de agente (inspiradas en garrytan/gstack).
- Cada tema tiene su propio `README.md` con la tabla completa de skills y parámetros por nivel.
- Revisa siempre el contenido antes de instalar skills de terceros: una skill puede ejecutar código en tu entorno.
- Las skills de seguridad ofensiva solo deben usarse sobre infraestructura propia o con autorización escrita.