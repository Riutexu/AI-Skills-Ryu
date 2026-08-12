---
name: php-advanced-reflection-metaprogramacion-basico
description: Reflection y metaprogramación · nivel Básico · PHP avanzado: metaprogramación y sistemas. Inspeccionar y manipular código en runtime: Reflection API, y cuándo usarla sin abusar. Objetivo del nivel: inspeccionar clases y funciones
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "reflection-metaprogramacion"
  nivel: basico
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Reflection y metaprogramación — Básico

## Qué hace este skill

Inspeccionar y manipular código en runtime: Reflection API, y cuándo usarla sin abusar. En este nivel se entrega: **inspeccionar clases y funciones**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Reflection y metaprogramación** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar ReflectionClass/ReflectionMethod para inspección
2. Leer parámetros y tipos en runtime
3. Documentar un uso legítimo (debug, autowiring)

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | inspeccionar clases y funciones | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Usar ReflectionClass/ReflectionMethod para inspección · Leer parámetros y tipos en runtime · Documentar un uso legítimo (debug, autowiring) | lista | sí | 3-4 pasos |
| $criterios_clave | La inspección funciona sobre clases existentes · El uso está justificado y comentado | lista | sí | calidad verificable |
| $prompt_guia | Inspecciona mis clases con Reflection para un panel de debug | texto | no | "Reflection y metaprogramación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La inspección funciona sobre clases existentes
- [ ] El uso está justificado y comentado

## Ejemplos de prompts

- "Inspecciona mis clases con Reflection para un panel de debug"
- "Aplica Reflection y metaprogramación (nivel basico) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza La inspección funciona sobre clases existentes"
- "Revisa mi php-advanced y dime qué pasos de Reflection y metaprogramación me faltan en este nivel"