---
name: webservices-php-documentacion-openapi-avanzado
description: OpenAPI y documentación · nivel Avanzado · Servicios web y APIs en PHP. API documentada de verdad: esquemas OpenAPI, generación de clientes y pruebas de contrato. Objetivo del nivel: esquemas y generación
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "documentacion-openapi"
  nivel: avanzado
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# OpenAPI y documentación — Avanzado

## Qué hace este skill

API documentada de verdad: esquemas OpenAPI, generación de clientes y pruebas de contrato. En este nivel se entrega: **esquemas y generación**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **OpenAPI y documentación** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Modelar esquemas con refs y composición
2. Validar requests/responses contra el esquema
3. Generar clientes tipados desde el OpenAPI
4. Mantener el contrato en CI (diff)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | esquemas y generación | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Modelar esquemas con refs y composición · Validar requests/responses contra el esquema · Generar clientes tipados desde el OpenAPI · Mantener el contrato en CI (diff) | lista | sí | 3-4 pasos |
| $criterios_clave | La validación contra esquema funciona en tests · El cliente generado se usa en el frontend | lista | sí | calidad verificable |
| $prompt_guia | Estructura mi OpenAPI con esquemas, validación y generación de cliente tipado | texto | no | "OpenAPI y documentación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La validación contra esquema funciona en tests
- [ ] El cliente generado se usa en el frontend

## Ejemplos de prompts

- "Estructura mi OpenAPI con esquemas, validación y generación de cliente tipado"
- "Aplica OpenAPI y documentación (nivel avanzado) a mi trabajo actual con Servicios web y APIs en PHP: prioriza La validación contra esquema funciona en tests"
- "Revisa mi webservices-php y dime qué pasos de OpenAPI y documentación me faltan en este nivel"