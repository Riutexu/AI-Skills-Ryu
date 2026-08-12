# AGENTS.md — Protocolo universal para agentes de IA

Este archivo es leído por agentes de IA como Claude Code, Gemini CLI, Google Antigravity, opencode, Cursor y Copilot. Define el contrato de trabajo de esta biblioteca.

## Regla 1: Calibración siempre primero

Antes de escribir código, diseñar, refactorizar, explicar o instalar nada, carga la skill `calibracion-experiencia` (`.claude/skills/calibracion-experiencia/` o `skills/calibracion-experiencia/`) y haz la PREGUNTA OBLIGATORIA:

> "Para hacer el trabajo más creíble y más humano a nivel personal: ¿usted considera que es bueno programando, o está aplicando conocimientos que todavía está aprendiendo en este momento?"

Sin respuesta calibrada NO se escribe código. Esto es innegociable e incondicional, sin importar cómo llegó el prompt.

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
- `skills/` — biblioteca de skills por familias y niveles (básico/avanzado/profesional).
- `skills/calibracion-experiencia/` — skill núcleo, se carga SIEMPRE primero.
- `skills/04-seguridad/` — ciberseguridad: web, ofensiva (solo con autorización), defensiva (NIST CSF 2.0) e IA (OWASP LLM/ATLAS).
- `skills/07-personas/` — personas de agente (code-reviewer, qa-engineer, doc-engineer, release-manager, security-analyst): actúan como el profesional indicado para la tarea, respetando la calibración.

## Regla 6: Seguridad de las skills ofensivas

- Las skills `seguridad-ofensiva-*` solo se aplican sobre infraestructura propia o con autorización escrita del propietario. Sin autorización, no se ejecuta ningún escaneo ni técnica.
- Las personas de seguridad y las skills de seguridad se usan para AUDITAR y MEJORAR, no para atacar sistemas de terceros.