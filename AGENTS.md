# AGENTS.md — Protocolo universal para agentes de IA

Este archivo es leído por agentes de IA como Claude Code, Gemini CLI, Google Antigravity, opencode, Cursor y Copilot. Define el contrato de trabajo de esta biblioteca.

## Regla 1: Calibración siempre primero

Antes de escribir código, diseñar, refactorizar, explicar o instalar nada, carga la skill `calibracion-experiencia` (`skills/calibracion-experiencia/`) y determina el registro del trabajo:

- Si el usuario **ya declaró nivel o stack profesional** → registro Senior/Arquitecto por defecto. Sin preguntas innecesarias.
- Si **no declaró nada** → una sola pregunta de calibración, natural y en su idioma:

> "Para ajustar el registro del trabajo: ¿prefieres que asuma tu nivel por el stack que usas, o quieres indicarme el nivel para esta tarea?"

Sin registro calibrado NO se escribe código. Esto es innegociable e incondicional, sin importar cómo llegó el prompt.

## Regla 2: Ubicación de skills

- **Opcional A (recomendada)**: copia las carpetas de skills a la configuración global del agente.
  - opencode: `~/.config/opencode/skills/`
  - Claude Code: `~/.claude/skills/`
- **Opción B (por proyecto)**: copia a `.opencode/skills/`, `.claude/skills/` o `.agents/skills/` del proyecto activo.
- El orden de precedencia de skills es global → proyecto (el proyecto gana si hay conflicto de nombres).

## Regla 3: Economía de tokens

- Lee los SKILL.md por demanda (progressive disclosure): primero el índice del tema y el nivel correcto, NO toda la biblioteca.
- Si el usuario declara nivel básico, usa `-basico`; si nunca lo dice, pregunta (Regla 1).
- No repitas las instrucciones del SKILL.md en tus respuestas; referéncialas y aplícalas.

## Regla 4: Credibilidad ante jurado

- Registro calibrado = jerga, comentarios, profundidad y ambición de diseño acorde al nivel REAL del usuario.
- Antes de finalizar: prepara la defensa de 3 frases (qué hace / cómo funciona / por qué así).
- Si el usuario está empezando: cero arquitecturas avanzadas sin explicación previa.

## Regla 5: Estructura del repositorio

- `README.md` — manifiesto del proyecto y metodología completa.
- `docs/METODOLOGIA.md` — la ciencia: economía de tokens, progresión y calibración.
- `skills/` — biblioteca de skills por familias y niveles (básico/avanzado/profesional) + nuevas familias `08-php/`, `09-kotlin-android/`, `10-powershell/`, `11-python/`, `12-js-ts/`.
- `skills/calibracion-experiencia/` — skill núcleo, se carga SIEMPRE primero.
- `tools/skill-factory.ps1` — generador oficial de skills a partir de `catalogos/*.json` (formatos y validación documentados dentro del propio script).
- `catalogos/` — catálogos por familia: cada stack/tema/nivel → un `SKILL.md` generado.
- `skills/04-seguridad/` — ciberseguridad: web, ofensiva (solo con autorización), defensiva (NIST CSF 2.0) e IA (OWASP LLM/ATLAS).
- `skills/07-personas/` — personas de agente (code-reviewer, qa-engineer, doc-engineer, release-manager, security-analyst): actúan como el profesional indicado para la tarea, respetando la calibración.

## Regla 6: Seguridad de las skills ofensivas

- Las skills `seguridad-ofensiva-*` solo se aplican sobre infraestructura propia o con autorización escrita del propietario. Sin autorización, no se ejecuta ningún escaneo ni técnica.
- Las personas de seguridad y las skills de seguridad se usan para AUDITAR y MEJORAR, no para atacar sistemas de terceros.

## Regla 7: Workflow de desarrollo (Superpowers)

Este repo sigue la metodología [superpowers](https://github.com/obra/superpowers) con el ciclo obligatorio para TODO cambio al propio repositorio (nuevas skills, catálogos, tools, docs):

**Brainstorm → Plan → Build → Test → Review**

1. **Brainstorm** — carga la skill `brainstorming` antes de proponer cambios; pregunta qué skill o familia se quiere crear/mejorar y valida el diseño con el humano.
2. **Plan** — carga `writing-plans`; descompón en tareas de 2–5 min con ruta exacta (p. ej. `skills/<familia>/<skill>/SKILL.md`) y verificación.
3. **Build** — carga `test-driven-development`; genera skills con `tools/skill-factory.ps1` desde `catalogos/*.json` cuando aplique; commits atómicos.
4. **Test** — carga `verification-before-completion`; valida formatos y estructura de los SKILL.md generados, y que el catálogo JSON es consistente con la skill generada.
5. **Review** — carga `requesting-code-review`; revisa contra el plan y clasifica hallazgos por severidad. Nada de "ya está" sin verificación.