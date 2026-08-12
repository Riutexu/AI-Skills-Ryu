---
name: php-advanced-reflection-metaprogramacion-avanzado
description: Reflection y metaprogramación · nivel Avanzado · PHP avanzado: metaprogramación y sistemas. Inspeccionar y manipular código en runtime: Reflection API, y cuándo usarla sin abusar. Objetivo del nivel: autowiring y generación
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "reflection-metaprogramacion"
  nivel: avanzado
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Reflection y metaprogramación — Avanzado

## Qué hace este skill

Inspeccionar y manipular código en runtime: Reflection API, y cuándo usarla sin abusar. En este nivel se entrega: **autowiring y generación**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Reflection y metaprogramación** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar autowiring con reflection sobre constructores
2. Generar código en runtime (eval controlado) cuando es útil
3. Llamar métodos dinámicamente con argumentos resueltos
4. Cachear los resultados de la reflexión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | autowiring y generación | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Implementar autowiring con reflection sobre constructores · Generar código en runtime (eval controlado) cuando es útil · Llamar métodos dinámicamente con argumentos resueltos · Cachear los resultados de la reflexión | lista | sí | 3-4 pasos |
| $criterios_clave | El autowiring resuelve el grafo sin config manual · La generación dinámica está limitada y cacheada | lista | sí | calidad verificable |
| $prompt_guia | Implementa autowiring por reflection con caché de resultados en mi framework | texto | no | "Reflection y metaprogramación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El autowiring resuelve el grafo sin config manual
- [ ] La generación dinámica está limitada y cacheada

## Ejemplos de prompts

- "Implementa autowiring por reflection con caché de resultados en mi framework"
- "Aplica Reflection y metaprogramación (nivel avanzado) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza El autowiring resuelve el grafo sin config manual"
- "Revisa mi php-advanced y dime qué pasos de Reflection y metaprogramación me faltan en este nivel"