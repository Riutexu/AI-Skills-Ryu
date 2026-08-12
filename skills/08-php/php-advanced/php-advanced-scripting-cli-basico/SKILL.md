---
name: php-advanced-scripting-cli-basico
description: Scripting y CLI profesional · nivel Básico · PHP avanzado: metaprogramación y sistemas. Herramientas CLI bien hechas: argumentos, opciones, colores, salida y empaquetado. Objetivo del nivel: script CLI con argumentos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "scripting-cli"
  nivel: basico
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Scripting y CLI profesional — Básico

## Qué hace este skill

Herramientas CLI bien hechas: argumentos, opciones, colores, salida y empaquetado. En este nivel se entrega: **script CLI con argumentos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Scripting y CLI profesional** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Leer $argv y opciones básicas
2. Escribir salida clara con exit codes
3. Manejar errores con mensajes útiles

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | script CLI con argumentos | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Leer $argv y opciones básicas · Escribir salida clara con exit codes · Manejar errores con mensajes útiles | lista | sí | 3-4 pasos |
| $criterios_clave | El script documenta su uso con --help · Los exit codes son coherentes (0/1) | lista | sí | calidad verificable |
| $prompt_guia | Crea un script CLI PHP con argumentos, --help y exit codes | texto | no | "Scripting y CLI profesional" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El script documenta su uso con --help
- [ ] Los exit codes son coherentes (0/1)

## Ejemplos de prompts

- "Crea un script CLI PHP con argumentos, --help y exit codes"
- "Aplica Scripting y CLI profesional (nivel basico) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza El script documenta su uso con --help"
- "Revisa mi php-advanced y dime qué pasos de Scripting y CLI profesional me faltan en este nivel"