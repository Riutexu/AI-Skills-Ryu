# METODOLOGÍA — La Ciencia de AI Skills Ryu

Este documento explica las bases técnicas y psicológicas del proyecto: por qué una biblioteca de skills calibradas produce mejor código, menos gasto de tokens y trabajo más creíble que un agente "genérico".

---

## 1. El problema: la IA genérica tiene un sesgo de nivel

Cuando a un agente de IA se le pide "hazme una landing page", produce el tipo de output que su distribución de entrenamiento considera "mejor": código de nivel intermedio-avanzado, con librerías, componentes y abstracciones que el autor promedio no puede explicar, modificar ni defender.

**Consecuencias:**
- Un autoaprendiz firma código que no entiende → imposible defenderlo ante un jurado.
- Un arquitecto recibe tutoriales de nivel básico → pierde tiempo y respeto por la herramienta.
- En ambos casos el agente desperdició tokens en la profundidad equivocada.

## 2. La solución: calibración de experiencia (Regla 1 del AGENTS.md)

Toda sesión comienza con una pregunta obligatoria e innegociable:

> "Para hacer el trabajo más creíble y más humano a nivel personal: ¿usted considera que es bueno programando, o está aplicando conocimientos que todavía está aprendiendo en este momento?"

**Por qué funciona:**
- La respuesta establece el **registro** de toda la sesión: jerga permitida, profundidad de explicación, ambición de diseño, tamaño de las soluciones.
- Es una pregunta honesta que no humilla: contempla ambas vías ("bueno programando" o "aplicando conocimientos que está aprendiendo") sin juicio.
- Un jurado no evalúa la calidad absoluta: evalúa la **coherencia** entre el autor y su obra. La credibilidad es coherencia con tu nivel real, no ocultar el uso de IA.

La meta-skill `calibracion-experiencia` incluye:
- `resources/rubrica-niveles.md` — 11 niveles, de "nunca ha abierto un editor" a "arquitecto con décadas", con señales para detectar la respuesta real detrás de la declarada.
- `resources/preguntas-calibracion.md` — preguntas de sondeo para refinar el nivel cuando la primera respuesta es ambigua.
- `resources/guia-defensa.md` — el protocolo de las 3 frases (qué hace / cómo funciona / por qué está hecho así) que prepara a cualquier autor para sustentar su trabajo.

## 3. Economía de tokens: progressive disclosure

El contexto de los agentes es caro y finito. La biblioteca usa carga por demanda:

```
1. El framework registra CADA skill como un parche de ~100 tokens:
   name + description (qué hace, cuándo aplicarla).
2. La tarea del usuario se compara contra esas descripciones.
3. Solo la skill cuyos metadatos coinciden carga su SKILL.md completo.
4. Dentro de la skill, primero se cargan secciones urgentes
   (parámetros, checklist) y el código completo viene en resources/.
```

**Números del diseño:** 70 skills × ~4.000 tokens de instrucciones completas ≈ 280.000 tokens si todo se cargara a la vez. Con progressive disclosure, una sesión típica gasta entre 1.000 y 5.000 tokens de instrucciones.

## 4. Tres niveles por tema: basico · avanzado · profesional

Cada skill existe en 3 profundidades independientes porque el costo de la complejidad es doble: tokens al generarla y **comprensión al mantenerla**.

| Nivel | Qué entrega | Para quién |
|---|---|---|
| `-basico` | Solución correcta, mínima, comentada en lenguaje claro | Autoaprendiz declarado |
| `-avanzado` | Solución robusta con patrones, configuración y errores contemplados | Nivel medio confirmado |
| `-profesional` | Solución optimizada, escalable, con observabilidad y pruebas | Profesional o superior |

El agente nunca mezcla niveles: una sesión calibrada como basico no recibe fragmentos de la skill profesional, aunque "mejore" el resultado. Mezclar destruye la coherencia que da credibilidad.

## 5. Nomenclatura y estructura de skills

- Nombres kebab-case: `^[a-z0-9]+(-[a-z0-9]+)*$` (verificables con grep), precedidos por familia, tema y nivel: `01-frontend/landing-pages/landing-pages-basico/`.
- Cada SKILL.md usa frontmatter obligatorio:
  - `name` y `description` (los únicos metadatos expuestos al modelo)
  - `license: MIT`, `compatibility: opencode` (portabilidad Cross-Security-Framework)
  - `metadata:` con comunidad/categoría/nivel/jurado para búsqueda.
- 9 secciones fijas: propuesta de valor, más importante (con minimidad calibrada por nivel), advertencias (nunca entregar registro no calibrado, nunca mezclar niveles, nunca prometer seguridad absoluta), parámetros concretos (mínimo 6 filas), checklist, workflow no-code de despliegue, entrega en 3 frases.

## 6. Portabilidad universal

- `AGENTS.md` es leído de forma nativa por Claude Code, Gemini CLI, Google Antigravity, opencode, Cursor y Copilot: un solo archivo contrata a todos los agentes con el protocolo de calibración.
- `SKILL.md` con frontmatter `name`/`description` funciona en los frameworks de skills de Claude Code, opencode y los agentes compatibles.
- El orden de precedencia global → proyecto evita conflictos cuando la biblioteca se instala en varias máquinas.

## 7. Contrato de sesión (resumen ejecutivo)

1. Cargar `calibracion-experiencia` SIEMPRE primero.
2. Hacer la pregunta obligatoria antes de escribir una sola línea.
3. Refinar el nivel con la rúbrica si la respuesta es ambigua.
4. Cargar solo la skill del tema + nivel calibrado.
5. Entregar con la defensa de 3 frases lista para el jurado.
6. Cerrar la sesión dejando el registro por escrito en el README de la skill usada.