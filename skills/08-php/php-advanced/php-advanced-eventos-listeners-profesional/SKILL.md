---
name: php-advanced-eventos-listeners-profesional
description: Eventos y listeners · nivel Profesional · PHP avanzado: metaprogramación y sistemas. Desacoplar efectos: dispatcher de eventos, listeners y el modelo correcto de dominio. Objetivo del nivel: event-driven a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "eventos-listeners"
  nivel: profesional
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Eventos y listeners — Profesional

## Qué hace este skill

Desacoplar efectos: dispatcher de eventos, listeners y el modelo correcto de dominio. En este nivel se entrega: **event-driven a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eventos y listeners** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el bus de eventos (sync vs async) con criterio
2. Versionar eventos y compatibilidad de consumidores
3. Implementar outbox pattern para fiabilidad
4. Observar el bus: métricas de eventos y fallos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | event-driven a escala | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Diseñar el bus de eventos (sync vs async) con criterio · Versionar eventos y compatibilidad de consumidores · Implementar outbox pattern para fiabilidad · Observar el bus: métricas de eventos y fallos | lista | sí | 3-4 pasos |
| $criterios_clave | El outbox garantiza la publicación sin pérdidas · Los eventos versionados no rompen consumidores viejos | lista | sí | calidad verificable |
| $prompt_guia | Diseña el bus de eventos de mi plataforma con outbox pattern, versionado y métricas | texto | no | "Eventos y listeners" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El outbox garantiza la publicación sin pérdidas
- [ ] Los eventos versionados no rompen consumidores viejos

## Ejemplos de prompts

- "Diseña el bus de eventos de mi plataforma con outbox pattern, versionado y métricas"
- "Aplica Eventos y listeners (nivel profesional) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza El outbox garantiza la publicación sin pérdidas"
- "Revisa mi php-advanced y dime qué pasos de Eventos y listeners me faltan en este nivel"