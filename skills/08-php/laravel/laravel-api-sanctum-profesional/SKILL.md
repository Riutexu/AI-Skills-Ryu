---
name: laravel-api-sanctum-profesional
description: APIs con Sanctum · nivel Profesional · Laravel 11: framework productivo. APIs REST autenticadas con tokens, rate limiting, respuestas JSON y versionado pragmático. Objetivo del nivel: API de producto: versionado y observabilidad
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "api-sanctum"
  nivel: profesional
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# APIs con Sanctum — Profesional

## Qué hace este skill

APIs REST autenticadas con tokens, rate limiting, respuestas JSON y versionado pragmático. En este nivel se entrega: **API de producto: versionado y observabilidad**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **APIs con Sanctum** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Versionar la API (v1/v2) con deprecaciones gestionadas
2. Documentar OpenAPI y generar clientes tipados
3. Implementar idempotencia de mutaciones (Idempotency-Key)
4. Observabilidad: request ids, logs de error por endpoint y dashboards
5. Realizar pruebas de contrato (Pact) del cliente

6. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
7. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | API de producto: versionado y observabilidad | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Versionar la API (v1/v2) con deprecaciones gestionadas · Documentar OpenAPI y generar clientes tipados · Implementar idempotencia de mutaciones (Idempotency-Key) · Observabilidad: request ids, logs de error por endpoint y dashboards · Realizar pruebas de contrato (Pact) del cliente | lista | sí | 3-4 pasos |
| $criterios_clave | Dos versiones de API coexisten con deprecación controlada · Las mutaciones idempotentes se prueban ante reintentos | lista | sí | calidad verificable |
| $prompt_guia | Evoluciona mi API a producto: versionado v1/v2, OpenAPI generado, idempotencia y contrato Pact | texto | no | "APIs con Sanctum" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Dos versiones de API coexisten con deprecación controlada
- [ ] Las mutaciones idempotentes se prueban ante reintentos

## Ejemplos de prompts

- "Evoluciona mi API a producto: versionado v1/v2, OpenAPI generado, idempotencia y contrato Pact"
- "Aplica APIs con Sanctum (nivel profesional) a mi trabajo actual con Laravel 11: framework productivo: prioriza Dos versiones de API coexisten con deprecación controlada"
- "Revisa mi laravel y dime qué pasos de APIs con Sanctum me faltan en este nivel"