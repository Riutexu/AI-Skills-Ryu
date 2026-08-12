---
name: webservices-php-contratos-json-avanzado
description: Contratos JSON y respuestas · nivel Avanzado · Servicios web y APIs en PHP. Respuestas JSON coherentes como contrato: envelopes, errores, paginación y código correcto. Objetivo del nivel: paginación y filtros de contrato
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "contratos-json"
  nivel: avanzado
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Contratos JSON y respuestas — Avanzado

## Qué hace este skill

Respuestas JSON coherentes como contrato: envelopes, errores, paginación y código correcto. En este nivel se entrega: **paginación y filtros de contrato**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Contratos JSON y respuestas** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir paginación (page/limit o cursor) con metadatos
2. Filtros, orden y proyección de campos controlados
3. Versionar el contrato (v1/v2) con deprecación
4. Escribir el esquema OpenAPI del contrato

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | paginación y filtros de contrato | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Definir paginación (page/limit o cursor) con metadatos · Filtros, orden y proyección de campos controlados · Versionar el contrato (v1/v2) con deprecación · Escribir el esquema OpenAPI del contrato | lista | sí | 3-4 pasos |
| $criterios_clave | La paginación tiene metadatos y se documenta en OpenAPI · Los filtros rechazan campos no permitidos | lista | sí | calidad verificable |
| $prompt_guia | Define el contrato de listados de mi API: paginación con metadatos, filtros y OpenAPI | texto | no | "Contratos JSON y respuestas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La paginación tiene metadatos y se documenta en OpenAPI
- [ ] Los filtros rechazan campos no permitidos

## Ejemplos de prompts

- "Define el contrato de listados de mi API: paginación con metadatos, filtros y OpenAPI"
- "Aplica Contratos JSON y respuestas (nivel avanzado) a mi trabajo actual con Servicios web y APIs en PHP: prioriza La paginación tiene metadatos y se documenta en OpenAPI"
- "Revisa mi webservices-php y dime qué pasos de Contratos JSON y respuestas me faltan en este nivel"