---
name: js-seguridad-csrf-frontend-basico
description: CSRF en frontend · nivel Básico · Seguridad web JS. Protegés las peticiones de estado contra CSRF con tokens, SameSite y doble envío. Objetivo del nivel: Entender y mitigar CSRF básico
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "csrf-frontend"
  nivel: basico
  stack: "CSP, fetch, storage seguro, npm audit"
---

# CSRF en frontend — Básico

## Qué hace este skill

Protegés las peticiones de estado contra CSRF con tokens, SameSite y doble envío. En este nivel se entrega: **Entender y mitigar CSRF básico**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CSRF en frontend** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Explicar el ataque CSRF con un ejemplo propio
2. Verificar que las cookies usen SameSite
3. Enviar el token CSRF en las peticiones de mutación
4. Manejar el token provisto por el backend

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender y mitigar CSRF básico | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Explicar el ataque CSRF con un ejemplo propio · Verificar que las cookies usen SameSite · Enviar el token CSRF en las peticiones de mutación · Manejar el token provisto por el backend | lista | sí | 3-4 pasos |
| $criterios_clave | Las cookies sensibles tienen SameSite · Las mutaciones envían el token CSRF | lista | sí | calidad verificable |
| $prompt_guia | El backend usa tokens CSRF: integrá el envío del token en las peticiones de mutación de la SPA y verificá que las cookies usen SameSite. | texto | no | "CSRF en frontend" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las cookies sensibles tienen SameSite
- [ ] Las mutaciones envían el token CSRF

## Ejemplos de prompts

- "El backend usa tokens CSRF: integrá el envío del token en las peticiones de mutación de la SPA y verificá que las cookies usen SameSite."
- "Aplica CSRF en frontend (nivel basico) a mi trabajo actual con Seguridad web JS: prioriza Las cookies sensibles tienen SameSite"
- "Revisa mi js-seguridad y dime qué pasos de CSRF en frontend me faltan en este nivel"