---
name: javascript-moderno-template-literals-avanzado
description: Template literals · nivel Avanzado · JavaScript moderno: ES2024. Interpolás strings, multiline y usás tagged templates para construir textos y plantillas seguras. Objetivo del nivel: Usar tagged templates para escapar y transformar textos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "template-literals"
  nivel: avanzado
  stack: "Node 22, ESM, Vite, Vitest"
---

# Template literals — Avanzado

## Qué hace este skill

Interpolás strings, multiline y usás tagged templates para construir textos y plantillas seguras. En este nivel se entrega: **Usar tagged templates para escapar y transformar textos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Template literals** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un tag que escape HTML para evitar XSS
2. Crear un tag de resaltado de variables
3. Usar nested templates para listas y tablas
4. Formatear números y fechas dentro de plantillas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Usar tagged templates para escapar y transformar textos | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Crear un tag que escape HTML para evitar XSS · Crear un tag de resaltado de variables · Usar nested templates para listas y tablas · Formatear números y fechas dentro de plantillas | lista | sí | 3-4 pasos |
| $criterios_clave | El tag de escape neutraliza etiquetas peligrosas · Las plantillas anidadas generan estructura válida | lista | sí | calidad verificable |
| $prompt_guia | Implementá un tag html que escape las variables interpoladas antes de armar el markup; usalo en el render de comentarios de usuarios. | texto | no | "Template literals" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El tag de escape neutraliza etiquetas peligrosas
- [ ] Las plantillas anidadas generan estructura válida

## Ejemplos de prompts

- "Implementá un tag html que escape las variables interpoladas antes de armar el markup; usalo en el render de comentarios de usuarios."
- "Aplica Template literals (nivel avanzado) a mi trabajo actual con JavaScript moderno: ES2024: prioriza El tag de escape neutraliza etiquetas peligrosas"
- "Revisa mi javascript-moderno y dime qué pasos de Template literals me faltan en este nivel"