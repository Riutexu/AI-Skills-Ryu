---
name: webservices-php-versionado-api-profesional
description: Versionado de APIs · nivel Profesional · Servicios web y APIs en PHP. Evolucionar sin romper clientes: versionado por URL/header, deprecaciones y estrategias de transición. Objetivo del nivel: estrategia de evolución
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "versionado-api"
  nivel: profesional
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Versionado de APIs — Profesional

## Qué hace este skill

Evolucionar sin romper clientes: versionado por URL/header, deprecaciones y estrategias de transición. En este nivel se entrega: **estrategia de evolución**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Versionado de APIs** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la estrategia de evolución de la plataforma (contract-first)
2. Implementar cambios compatibles (additive-only) por defecto
3. Gestionar acuerdos con consumidores externos (SLA de deprecación)
4. Publicar changelogs y guías de migración

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | estrategia de evolución | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Diseñar la estrategia de evolución de la plataforma (contract-first) · Implementar cambios compatibles (additive-only) por defecto · Gestionar acuerdos con consumidores externos (SLA de deprecación) · Publicar changelogs y guías de migración | lista | sí | 3-4 pasos |
| $criterios_clave | El 90%+ de cambios son aditivos sin versionado nuevo · La guía de migración v1->v2 cubre todos los cambios | lista | sí | calidad verificable |
| $prompt_guia | Diseña la estrategia de evolución de mi plataforma: aditivo por defecto y guías de migración | texto | no | "Versionado de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El 90%+ de cambios son aditivos sin versionado nuevo
- [ ] La guía de migración v1->v2 cubre todos los cambios

## Ejemplos de prompts

- "Diseña la estrategia de evolución de mi plataforma: aditivo por defecto y guías de migración"
- "Aplica Versionado de APIs (nivel profesional) a mi trabajo actual con Servicios web y APIs en PHP: prioriza El 90%+ de cambios son aditivos sin versionado nuevo"
- "Revisa mi webservices-php y dime qué pasos de Versionado de APIs me faltan en este nivel"