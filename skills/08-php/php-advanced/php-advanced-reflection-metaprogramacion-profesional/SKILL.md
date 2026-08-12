---
name: php-advanced-reflection-metaprogramacion-profesional
description: Reflection y metaprogramación · nivel Profesional · PHP avanzado: metaprogramación y sistemas. Inspeccionar y manipular código en runtime: Reflection API, y cuándo usarla sin abusar. Objetivo del nivel: metaprogramación disciplinada
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "reflection-metaprogramacion"
  nivel: profesional
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Reflection y metaprogramación — Profesional

## Qué hace este skill

Inspeccionar y manipular código en runtime: Reflection API, y cuándo usarla sin abusar. En este nivel se entrega: **metaprogramación disciplinada**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Reflection y metaprogramación** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Establecer políticas de cuándo usar reflection (ADR)
2. Diseñar DSLs ligeros con atributos + reflection
3. Manejar la performance de la reflexión (cache y compile)
4. Auditar riesgos de seguridad de la generación dinámica

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | metaprogramación disciplinada | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Establecer políticas de cuándo usar reflection (ADR) · Diseñar DSLs ligeros con atributos + reflection · Manejar la performance de la reflexión (cache y compile) · Auditar riesgos de seguridad de la generación dinámica | lista | sí | 3-4 pasos |
| $criterios_clave | La política de reflexión está documentada y aplicada · El DSL se compila/cachea y es testeable | lista | sí | calidad verificable |
| $prompt_guia | Diseña el DSL de mi dominio con atributos + reflection, con política de uso y caché de compilación | texto | no | "Reflection y metaprogramación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La política de reflexión está documentada y aplicada
- [ ] El DSL se compila/cachea y es testeable

## Ejemplos de prompts

- "Diseña el DSL de mi dominio con atributos + reflection, con política de uso y caché de compilación"
- "Aplica Reflection y metaprogramación (nivel profesional) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza La política de reflexión está documentada y aplicada"
- "Revisa mi php-advanced y dime qué pasos de Reflection y metaprogramación me faltan en este nivel"