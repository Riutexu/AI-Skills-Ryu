---
name: webservices-php-php-asincrono-basico
description: PHP asíncrono: Fiber y Swoole · nivel Básico · Servicios web y APIs en PHP. Operaciones concurrentes en PHP moderno: Fibers, Swoole/ReactPHP y el modelo correcto según el caso. Objetivo del nivel: entender el modelo bloqueante
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "php-asincrono"
  nivel: basico
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# PHP asíncrono: Fiber y Swoole — Básico

## Qué hace este skill

Operaciones concurrentes en PHP moderno: Fibers, Swoole/ReactPHP y el modelo correcto según el caso. En este nivel se entrega: **entender el modelo bloqueante**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PHP asíncrono: Fiber y Swoole** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Explicar por qué PHP es síncrono por defecto
2. Detectar dónde el bloqueo duele (llamadas externas)
3. Usar generadores como pista hacia async

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | entender el modelo bloqueante | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Explicar por qué PHP es síncrono por defecto · Detectar dónde el bloqueo duele (llamadas externas) · Usar generadores como pista hacia async | lista | sí | 3-4 pasos |
| $criterios_clave | El diagnóstico de bloqueo está claro en el código · Las llamadas externas se identifican y se marcan | lista | sí | calidad verificable |
| $prompt_guia | Diagnostica dónde bloquea mi script PHP (llamadas externas) y explica el modelo | texto | no | "PHP asíncrono: Fiber y Swoole" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El diagnóstico de bloqueo está claro en el código
- [ ] Las llamadas externas se identifican y se marcan

## Ejemplos de prompts

- "Diagnostica dónde bloquea mi script PHP (llamadas externas) y explica el modelo"
- "Aplica PHP asíncrono: Fiber y Swoole (nivel basico) a mi trabajo actual con Servicios web y APIs en PHP: prioriza El diagnóstico de bloqueo está claro en el código"
- "Revisa mi webservices-php y dime qué pasos de PHP asíncrono: Fiber y Swoole me faltan en este nivel"