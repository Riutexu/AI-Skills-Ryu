---
name: js-seguridad-autenticacion-cliente-avanzado
description: Autenticación en el cliente · nivel Avanzado · Seguridad web JS. Manejás la sesión y las credenciales en el cliente sin exponer secretos. Objetivo del nivel: Integrar flujos de auth complejos con el backend
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "autenticacion-cliente"
  nivel: avanzado
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Autenticación en el cliente — Avanzado

## Qué hace este skill

Manejás la sesión y las credenciales en el cliente sin exponer secretos. En este nivel se entrega: **Integrar flujos de auth complejos con el backend**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Autenticación en el cliente** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Manejar refresh tokens con las cookies correctas
2. Sincronizar el estado de auth entre pestañas
3. Manejar la revocación de sesión por el servidor
4. Redirigir con intención de retorno al login

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Integrar flujos de auth complejos con el backend | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Manejar refresh tokens con las cookies correctas · Sincronizar el estado de auth entre pestañas · Manejar la revocación de sesión por el servidor · Redirigir con intención de retorno al login | lista | sí | 3-4 pasos |
| $criterios_clave | El refresh no expone tokens al JS · El estado de auth es consistente entre pestañas | lista | sí | calidad verificable |
| $prompt_guia | El backend renovó la autenticación: integrá el flujo de refresh con cookies httpOnly, sincronizá el estado entre pestañas y preservá el destino al redirigir al login. | texto | no | "Autenticación en el cliente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El refresh no expone tokens al JS
- [ ] El estado de auth es consistente entre pestañas

## Ejemplos de prompts

- "El backend renovó la autenticación: integrá el flujo de refresh con cookies httpOnly, sincronizá el estado entre pestañas y preservá el destino al redirigir al login."
- "Aplica Autenticación en el cliente (nivel avanzado) a mi trabajo actual con Seguridad web JS: prioriza El refresh no expone tokens al JS"
- "Revisa mi js-seguridad y dime qué pasos de Autenticación en el cliente me faltan en este nivel"