---
name: webservices-php-documentacion-openapi-profesional
description: OpenAPI y documentación · nivel Profesional · Servicios web y APIs en PHP. API documentada de verdad: esquemas OpenAPI, generación de clientes y pruebas de contrato. Objetivo del nivel: contrato como fuente de verdad
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "documentacion-openapi"
  nivel: profesional
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# OpenAPI y documentación — Profesional

## Qué hace este skill

API documentada de verdad: esquemas OpenAPI, generación de clientes y pruebas de contrato. En este nivel se entrega: **contrato como fuente de verdad**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **OpenAPI y documentación** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la API contract-first con el equipo
2. Versionar y deprecar operaciones en el contrato
3. Contract testing (Pact) entre servicios
4. Automatizar docs públicas con changelog

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | contrato como fuente de verdad | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Diseñar la API contract-first con el equipo · Versionar y deprecar operaciones en el contrato · Contract testing (Pact) entre servicios · Automatizar docs públicas con changelog | lista | sí | 3-4 pasos |
| $criterios_clave | El contrato es la fuente de verdad del desarrollo · Los contract tests entre servicios corren en CI | lista | sí | calidad verificable |
| $prompt_guia | Migra mi equipo a contract-first: contrato como fuente de verdad y Pact entre servicios | texto | no | "OpenAPI y documentación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El contrato es la fuente de verdad del desarrollo
- [ ] Los contract tests entre servicios corren en CI

## Ejemplos de prompts

- "Migra mi equipo a contract-first: contrato como fuente de verdad y Pact entre servicios"
- "Aplica OpenAPI y documentación (nivel profesional) a mi trabajo actual con Servicios web y APIs en PHP: prioriza El contrato es la fuente de verdad del desarrollo"
- "Revisa mi webservices-php y dime qué pasos de OpenAPI y documentación me faltan en este nivel"