---
name: php-advanced-web-sockets-php-basico
description: WebSockets y tiempo real · nivel Básico · PHP avanzado: metaprogramación y sistemas. Tiempo real en PHP: servidores websocket, broadcasting y el modelo de procesos adecuado. Objetivo del nivel: entender websockets
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "web-sockets-php"
  nivel: basico
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# WebSockets y tiempo real — Básico

## Qué hace este skill

Tiempo real en PHP: servidores websocket, broadcasting y el modelo de procesos adecuado. En este nivel se entrega: **entender websockets**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **WebSockets y tiempo real** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Explicar el modelo websocket vs polling
2. Consumir un websocket desde JS
3. Usar un servidor existente (websocket service)

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | entender websockets | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Explicar el modelo websocket vs polling · Consumir un websocket desde JS · Usar un servidor existente (websocket service) | lista | sí | 3-4 pasos |
| $criterios_clave | El cliente JS recibe mensajes en tiempo real · El modelo se explica con claridad | lista | sí | calidad verificable |
| $prompt_guia | Conecta mi app a un servidor websocket existente y recibe mensajes en tiempo real | texto | no | "WebSockets y tiempo real" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El cliente JS recibe mensajes en tiempo real
- [ ] El modelo se explica con claridad

## Ejemplos de prompts

- "Conecta mi app a un servidor websocket existente y recibe mensajes en tiempo real"
- "Aplica WebSockets y tiempo real (nivel basico) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza El cliente JS recibe mensajes en tiempo real"
- "Revisa mi php-advanced y dime qué pasos de WebSockets y tiempo real me faltan en este nivel"