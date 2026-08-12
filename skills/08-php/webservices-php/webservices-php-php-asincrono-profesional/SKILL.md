---
name: webservices-php-php-asincrono-profesional
description: PHP asíncrono: Fiber y Swoole · nivel Profesional · Servicios web y APIs en PHP. Operaciones concurrentes en PHP moderno: Fibers, Swoole/ReactPHP y el modelo correcto según el caso. Objetivo del nivel: servidores asíncronos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "php-asincrono"
  nivel: profesional
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# PHP asíncrono: Fiber y Swoole — Profesional

## Qué hace este skill

Operaciones concurrentes en PHP moderno: Fibers, Swoole/ReactPHP y el modelo correcto según el caso. En este nivel se entrega: **servidores asíncronos**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PHP asíncrono: Fiber y Swoole** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Evaluar Swoole/ReactPHP/Workerman para el caso (ADR)
2. Construir un servidor asíncrono simple (websockets/HTTP)
3. Manejar backpressure y pools de conexiones
4. Medir el rendimiento frente al modelo FPM

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | servidores asíncronos | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Evaluar Swoole/ReactPHP/Workerman para el caso (ADR) · Construir un servidor asíncrono simple (websockets/HTTP) · Manejar backpressure y pools de conexiones · Medir el rendimiento frente al modelo FPM | lista | sí | 3-4 pasos |
| $criterios_clave | El ADR justifica el modelo asíncrono · El benchmark compara ambos modelos con datos | lista | sí | calidad verificable |
| $prompt_guia | Evalúa y prototipa un servidor asíncrono (Swoole) para mi caso con benchmark frente a FPM | texto | no | "PHP asíncrono: Fiber y Swoole" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El ADR justifica el modelo asíncrono
- [ ] El benchmark compara ambos modelos con datos

## Ejemplos de prompts

- "Evalúa y prototipa un servidor asíncrono (Swoole) para mi caso con benchmark frente a FPM"
- "Aplica PHP asíncrono: Fiber y Swoole (nivel profesional) a mi trabajo actual con Servicios web y APIs en PHP: prioriza El ADR justifica el modelo asíncrono"
- "Revisa mi webservices-php y dime qué pasos de PHP asíncrono: Fiber y Swoole me faltan en este nivel"