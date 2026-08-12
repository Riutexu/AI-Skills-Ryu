---
name: js-seguridad-tokens-storage-seguro-profesional
description: Tokens y storage seguro · nivel Profesional · Seguridad web JS. Guardás y transmitís tokens con cookies httpOnly o memoria, nunca en localStorage. Objetivo del nivel: Diseñar el modelo de credenciales del cliente
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tokens-storage-seguro"
  nivel: profesional
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Tokens y storage seguro — Profesional

## Qué hace este skill

Guardás y transmitís tokens con cookies httpOnly o memoria, nunca en localStorage. En este nivel se entrega: **Diseñar el modelo de credenciales del cliente**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tokens y storage seguro** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la política de storage y rotación del proyecto
2. Crear la capa de auth que centralice el manejo
3. Auditar el código por credenciales filtradas
4. Documentar riesgos y mitigaciones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el modelo de credenciales del cliente | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Definir la política de storage y rotación del proyecto · Crear la capa de auth que centralice el manejo · Auditar el código por credenciales filtradas · Documentar riesgos y mitigaciones | lista | sí | 3-4 pasos |
| $criterios_clave | La capa de auth centraliza todo el manejo de credenciales · Las auditorías se automatizan | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el modelo de credenciales del cliente: política de storage, capa de auth centralizada, auditoría automática de secretos y la documentación de riesgos. | texto | no | "Tokens y storage seguro" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La capa de auth centraliza todo el manejo de credenciales
- [ ] Las auditorías se automatizan

## Ejemplos de prompts

- "Diseñá el modelo de credenciales del cliente: política de storage, capa de auth centralizada, auditoría automática de secretos y la documentación de riesgos."
- "Aplica Tokens y storage seguro (nivel profesional) a mi trabajo actual con Seguridad web JS: prioriza La capa de auth centraliza todo el manejo de credenciales"
- "Revisa mi js-seguridad y dime qué pasos de Tokens y storage seguro me faltan en este nivel"