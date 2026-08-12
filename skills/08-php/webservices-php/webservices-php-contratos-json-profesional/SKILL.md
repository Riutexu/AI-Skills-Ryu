---
name: webservices-php-contratos-json-profesional
description: Contratos JSON y respuestas · nivel Profesional · Servicios web y APIs en PHP. Respuestas JSON coherentes como contrato: envelopes, errores, paginación y código correcto. Objetivo del nivel: contratos evolutivos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "contratos-json"
  nivel: profesional
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Contratos JSON y respuestas — Profesional

## Qué hace este skill

Respuestas JSON coherentes como contrato: envelopes, errores, paginación y código correcto. En este nivel se entrega: **contratos evolutivos**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Contratos JSON y respuestas** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la evolución del contrato sin breaking changes
2. Implementar ids idempotentes y versiones de payload
3. Probar el contrato con tests de regresión (contract tests)
4. Documentar cambios por versión y deprecaciones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | contratos evolutivos | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Diseñar la evolución del contrato sin breaking changes · Implementar ids idempotentes y versiones de payload · Probar el contrato con tests de regresión (contract tests) · Documentar cambios por versión y deprecaciones | lista | sí | 3-4 pasos |
| $criterios_clave | La evolución v1->v2 es compatible durante el periodo marcado · Los contract tests se ejecutan en CI | lista | sí | calidad verificable |
| $prompt_guia | Diseña la evolución del contrato de mi API sin breaking changes con contract tests en CI | texto | no | "Contratos JSON y respuestas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La evolución v1->v2 es compatible durante el periodo marcado
- [ ] Los contract tests se ejecutan en CI

## Ejemplos de prompts

- "Diseña la evolución del contrato de mi API sin breaking changes con contract tests en CI"
- "Aplica Contratos JSON y respuestas (nivel profesional) a mi trabajo actual con Servicios web y APIs en PHP: prioriza La evolución v1->v2 es compatible durante el periodo marcado"
- "Revisa mi webservices-php y dime qué pasos de Contratos JSON y respuestas me faltan en este nivel"