---
name: mvc-propio-logueo-errores-framework-profesional
description: Logging y errores del framework · nivel Profesional · Framework MVC propio. El framework que informa: manejo central de excepciones, logging estructurado y errores bonitos. Objetivo del nivel: observabilidad del framework
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "logueo-errores-framework"
  nivel: profesional
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Logging y errores del framework — Profesional

## Qué hace este skill

El framework que informa: manejo central de excepciones, logging estructurado y errores bonitos. En este nivel se entrega: **observabilidad del framework**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logging y errores del framework** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Integrar tracing (OpenTelemetry) si la app escala
2. Correlacionar errores con métricas de negocio
3. Diseñar la taxonomía de errores del framework (dominio, infra)
4. Dashboards de errores y alertas por severidad

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | observabilidad del framework | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Integrar tracing (OpenTelemetry) si la app escala · Correlacionar errores con métricas de negocio · Diseñar la taxonomía de errores del framework (dominio, infra) · Dashboards de errores y alertas por severidad | lista | sí | 3-4 pasos |
| $criterios_clave | Los errores se correlacionan con métricas en el dashboard · Las alertas por severidad están activas y verificadas | lista | sí | calidad verificable |
| $prompt_guia | Convierte el logging de mi framework en observabilidad: tracing, métricas correlacionadas y alertas | texto | no | "Logging y errores del framework" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los errores se correlacionan con métricas en el dashboard
- [ ] Las alertas por severidad están activas y verificadas

## Ejemplos de prompts

- "Convierte el logging de mi framework en observabilidad: tracing, métricas correlacionadas y alertas"
- "Aplica Logging y errores del framework (nivel profesional) a mi trabajo actual con Framework MVC propio: prioriza Los errores se correlacionan con métricas en el dashboard"
- "Revisa mi mvc-propio y dime qué pasos de Logging y errores del framework me faltan en este nivel"