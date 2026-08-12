---
name: js-seguridad-hardening-navegador-avanzado
description: Hardening del navegador · nivel Avanzado · Seguridad web JS. Reducís la superficie de ataque con headers, iframes, referrers y políticas de privacidad. Objetivo del nivel: Endurecer iframes, navegación y políticas del navegador
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "hardening-navegador"
  nivel: avanzado
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Hardening del navegador — Avanzado

## Qué hace este skill

Reducís la superficie de ataque con headers, iframes, referrers y políticas de privacidad. En este nivel se entrega: **Endurecer iframes, navegación y políticas del navegador**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Hardening del navegador** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Bloquear aperturas no seguras con rel=noopener
2. Manejar las políticas de COOP y COEP
3. Restringir permisos del navegador con Permissions-Policy
4. Verificar el comportamiento de los iframes propios

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Endurecer iframes, navegación y políticas del navegador | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Bloquear aperturas no seguras con rel=noopener · Manejar las políticas de COOP y COEP · Restringir permisos del navegador con Permissions-Policy · Verificar el comportamiento de los iframes propios | lista | sí | 3-4 pasos |
| $criterios_clave | Los links externos usan noopener · Las políticas de permisos están definidas | lista | sí | calidad verificable |
| $prompt_guia | Endurecé la SPA: rel=noopener en todos los links externos, Permissions-Policy que limite lo que no se usa y verificación del comportamiento de los iframes. | texto | no | "Hardening del navegador" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los links externos usan noopener
- [ ] Las políticas de permisos están definidas

## Ejemplos de prompts

- "Endurecé la SPA: rel=noopener en todos los links externos, Permissions-Policy que limite lo que no se usa y verificación del comportamiento de los iframes."
- "Aplica Hardening del navegador (nivel avanzado) a mi trabajo actual con Seguridad web JS: prioriza Los links externos usan noopener"
- "Revisa mi js-seguridad y dime qué pasos de Hardening del navegador me faltan en este nivel"