---
name: mvc-propio-despliegue-propio-profesional
description: Despliegue y producción · nivel Profesional · Framework MVC propio. Llevar el framework propio a producción: FPM, nginx, opcache, entorno y deployments. Objetivo del nivel: operaciones a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "despliegue-propio"
  nivel: profesional
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Despliegue y producción — Profesional

## Qué hace este skill

Llevar el framework propio a producción: FPM, nginx, opcache, entorno y deployments. En este nivel se entrega: **operaciones a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Despliegue y producción** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la arquitectura de producción (HA, colas, BD)
2. Implementar deployments zero-downtime (proceso)
3. Instrumentar métricas de negocio y rendimiento
4. Preparar runbooks de incidentes y escalado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | operaciones a escala | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Diseñar la arquitectura de producción (HA, colas, BD) · Implementar deployments zero-downtime (proceso) · Instrumentar métricas de negocio y rendimiento · Preparar runbooks de incidentes y escalado | lista | sí | 3-4 pasos |
| $criterios_clave | Los deploy zero-downtime están probados de punta a punta · Los runbooks cubren degradación y escalado | lista | sí | calidad verificable |
| $prompt_guia | Opera mi framework a escala: zero-downtime, HA, métricas de negocio y runbooks | texto | no | "Despliegue y producción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los deploy zero-downtime están probados de punta a punta
- [ ] Los runbooks cubren degradación y escalado

## Ejemplos de prompts

- "Opera mi framework a escala: zero-downtime, HA, métricas de negocio y runbooks"
- "Aplica Despliegue y producción (nivel profesional) a mi trabajo actual con Framework MVC propio: prioriza Los deploy zero-downtime están probados de punta a punta"
- "Revisa mi mvc-propio y dime qué pasos de Despliegue y producción me faltan en este nivel"