---
name: webservices-php-contratos-json-basico
description: Contratos JSON y respuestas · nivel Básico · Servicios web y APIs en PHP. Respuestas JSON coherentes como contrato: envelopes, errores, paginación y código correcto. Objetivo del nivel: responder JSON consistente
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "contratos-json"
  nivel: basico
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Contratos JSON y respuestas — Básico

## Qué hace este skill

Respuestas JSON coherentes como contrato: envelopes, errores, paginación y código correcto. En este nivel se entrega: **responder JSON consistente**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Contratos JSON y respuestas** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Devolver JSON con header correcto y envelope data
2. Estructurar errores uniformes (code, message)
3. Manejar 404/405 con cuerpo JSON

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | responder JSON consistente | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Devolver JSON con header correcto y envelope data · Estructurar errores uniformes (code, message) · Manejar 404/405 con cuerpo JSON | lista | sí | 3-4 pasos |
| $criterios_clave | Todas las respuestas siguen el mismo envelope · Los errores tienen formato y códigos coherentes | lista | sí | calidad verificable |
| $prompt_guia | Estructura las respuestas JSON de mi API con envelope, errores uniformes y 404 JSON | texto | no | "Contratos JSON y respuestas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todas las respuestas siguen el mismo envelope
- [ ] Los errores tienen formato y códigos coherentes

## Ejemplos de prompts

- "Estructura las respuestas JSON de mi API con envelope, errores uniformes y 404 JSON"
- "Aplica Contratos JSON y respuestas (nivel basico) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Todas las respuestas siguen el mismo envelope"
- "Revisa mi webservices-php y dime qué pasos de Contratos JSON y respuestas me faltan en este nivel"