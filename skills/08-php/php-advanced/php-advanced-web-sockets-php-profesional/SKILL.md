---
name: php-advanced-web-sockets-php-profesional
description: WebSockets y tiempo real · nivel Profesional · PHP avanzado: metaprogramación y sistemas. Tiempo real en PHP: servidores websocket, broadcasting y el modelo de procesos adecuado. Objetivo del nivel: tiempo real a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "web-sockets-php"
  nivel: profesional
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# WebSockets y tiempo real — Profesional

## Qué hace este skill

Tiempo real en PHP: servidores websocket, broadcasting y el modelo de procesos adecuado. En este nivel se entrega: **tiempo real a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **WebSockets y tiempo real** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la arquitectura real-time (gateway + redis pub/sub)
2. Escalar horizontalmente las conexiones
3. Medir conexiones, latencia y estabilidad
4. Integrar con el backend de negocio (eventos a websockets)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | tiempo real a escala | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Diseñar la arquitectura real-time (gateway + redis pub/sub) · Escalar horizontalmente las conexiones · Medir conexiones, latencia y estabilidad · Integrar con el backend de negocio (eventos a websockets) | lista | sí | 3-4 pasos |
| $criterios_clave | La escala horizontal mantiene salas coherentes · Las métricas real-time se monitorizan | lista | sí | calidad verificable |
| $prompt_guia | Diseña mi arquitectura real-time: gateway websocket con pub/sub Redis escalado | texto | no | "WebSockets y tiempo real" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La escala horizontal mantiene salas coherentes
- [ ] Las métricas real-time se monitorizan

## Ejemplos de prompts

- "Diseña mi arquitectura real-time: gateway websocket con pub/sub Redis escalado"
- "Aplica WebSockets y tiempo real (nivel profesional) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza La escala horizontal mantiene salas coherentes"
- "Revisa mi php-advanced y dime qué pasos de WebSockets y tiempo real me faltan en este nivel"