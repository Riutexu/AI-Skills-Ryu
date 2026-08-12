---
name: webservices-php-documentacion-openapi-basico
description: OpenAPI y documentación · nivel Básico · Servicios web y APIs en PHP. API documentada de verdad: esquemas OpenAPI, generación de clientes y pruebas de contrato. Objetivo del nivel: primera documentación
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "documentacion-openapi"
  nivel: basico
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# OpenAPI y documentación — Básico

## Qué hace este skill

API documentada de verdad: esquemas OpenAPI, generación de clientes y pruebas de contrato. En este nivel se entrega: **primera documentación**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **OpenAPI y documentación** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escribir un openapi.yaml de un CRUD
2. Documentar respuestas y errores
3. Visualizarla con Swagger UI

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | primera documentación | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Escribir un openapi.yaml de un CRUD · Documentar respuestas y errores · Visualizarla con Swagger UI | lista | sí | 3-4 pasos |
| $criterios_clave | La documentación refleja los endpoints reales · Los errores están documentados | lista | sí | calidad verificable |
| $prompt_guia | Documenta mi CRUD en openapi.yaml y muéstralo en Swagger UI | texto | no | "OpenAPI y documentación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La documentación refleja los endpoints reales
- [ ] Los errores están documentados

## Ejemplos de prompts

- "Documenta mi CRUD en openapi.yaml y muéstralo en Swagger UI"
- "Aplica OpenAPI y documentación (nivel basico) a mi trabajo actual con Servicios web y APIs en PHP: prioriza La documentación refleja los endpoints reales"
- "Revisa mi webservices-php y dime qué pasos de OpenAPI y documentación me faltan en este nivel"