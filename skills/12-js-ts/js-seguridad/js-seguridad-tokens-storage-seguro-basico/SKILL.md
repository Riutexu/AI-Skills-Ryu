---
name: js-seguridad-tokens-storage-seguro-basico
description: Tokens y storage seguro · nivel Básico · Seguridad web JS. Guardás y transmitís tokens con cookies httpOnly o memoria, nunca en localStorage. Objetivo del nivel: Evitar el almacenamiento inseguro de tokens
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tokens-storage-seguro"
  nivel: basico
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Tokens y storage seguro — Básico

## Qué hace este skill

Guardás y transmitís tokens con cookies httpOnly o memoria, nunca en localStorage. En este nivel se entrega: **Evitar el almacenamiento inseguro de tokens**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tokens y storage seguro** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar los tokens guardados en localStorage
2. Mover los tokens a cookies httpOnly con SameSite
3. No loguear ni exponer tokens en el frontend
4. Entender los riesgos de cada storage

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Evitar el almacenamiento inseguro de tokens | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Identificar los tokens guardados en localStorage · Mover los tokens a cookies httpOnly con SameSite · No loguear ni exponer tokens en el frontend · Entender los riesgos de cada storage | lista | sí | 3-4 pasos |
| $criterios_clave | No hay tokens en localStorage o en código visible · Las cookies tienen httpOnly y SameSite correctos | lista | sí | calidad verificable |
| $prompt_guia | La SPA guarda el token en localStorage y no es seguro: auditá dónde quedan tokens, mové el manejo a cookies httpOnly con SameSite y limpia el código. | texto | no | "Tokens y storage seguro" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] No hay tokens en localStorage o en código visible
- [ ] Las cookies tienen httpOnly y SameSite correctos

## Ejemplos de prompts

- "La SPA guarda el token en localStorage y no es seguro: auditá dónde quedan tokens, mové el manejo a cookies httpOnly con SameSite y limpia el código."
- "Aplica Tokens y storage seguro (nivel basico) a mi trabajo actual con Seguridad web JS: prioriza No hay tokens en localStorage o en código visible"
- "Revisa mi js-seguridad y dime qué pasos de Tokens y storage seguro me faltan en este nivel"