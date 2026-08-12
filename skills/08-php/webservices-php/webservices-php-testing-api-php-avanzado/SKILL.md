---
name: webservices-php-testing-api-php-avanzado
description: Testing de APIs · nivel Avanzado · Servicios web y APIs en PHP. Pruebas de API de verdad: happy paths, errores, contratos y fuzzing controlado. Objetivo del nivel: matrices y regresión
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "testing-api-php"
  nivel: avanzado
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Testing de APIs — Avanzado

## Qué hace este skill

Pruebas de API de verdad: happy paths, errores, contratos y fuzzing controlado. En este nivel se entrega: **matrices y regresión**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de APIs** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear data providers para casos de borde
2. Testear auth y rate limits con estado
3. Mantener regresión del contrato (snapshots)
4. Paralelizar los tests sin estado compartido

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | matrices y regresión | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Crear data providers para casos de borde · Testear auth y rate limits con estado · Mantener regresión del contrato (snapshots) · Paralelizar los tests sin estado compartido | lista | sí | 3-4 pasos |
| $criterios_clave | Los casos de borde están cubiertos con data providers · La regresión del contrato detecta cambios accidentales | lista | sí | calidad verificable |
| $prompt_guia | Fortalece los tests de mi API: data providers, auth, rate limits y snapshots de contrato | texto | no | "Testing de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los casos de borde están cubiertos con data providers
- [ ] La regresión del contrato detecta cambios accidentales

## Ejemplos de prompts

- "Fortalece los tests de mi API: data providers, auth, rate limits y snapshots de contrato"
- "Aplica Testing de APIs (nivel avanzado) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Los casos de borde están cubiertos con data providers"
- "Revisa mi webservices-php y dime qué pasos de Testing de APIs me faltan en este nivel"