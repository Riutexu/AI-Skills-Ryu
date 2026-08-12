---
name: php-advanced-scripting-cli-profesional
description: Scripting y CLI profesional · nivel Profesional · PHP avanzado: metaprogramación y sistemas. Herramientas CLI bien hechas: argumentos, opciones, colores, salida y empaquetado. Objetivo del nivel: herramienta distribuible
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "scripting-cli"
  nivel: profesional
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Scripting y CLI profesional — Profesional

## Qué hace este skill

Herramientas CLI bien hechas: argumentos, opciones, colores, salida y empaquetado. En este nivel se entrega: **herramienta distribuible**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Scripting y CLI profesional** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Empaquetar con phar para distribución
2. Publicar con versionado y changelog
3. Soportar config por archivo (YAML/JSON) y overrides
4. Integrar con CI (lint, tests, phar build)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | herramienta distribuible | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Empaquetar con phar para distribución · Publicar con versionado y changelog · Soportar config por archivo (YAML/JSON) y overrides · Integrar con CI (lint, tests, phar build) | lista | sí | 3-4 pasos |
| $criterios_clave | El phar corre en otra máquina sin dependencias de entorno · El build CI produce el phar firmado | lista | sí | calidad verificable |
| $prompt_guia | Convierte mi CLI en herramienta distribuible: phar, config por archivo y CI de build | texto | no | "Scripting y CLI profesional" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El phar corre en otra máquina sin dependencias de entorno
- [ ] El build CI produce el phar firmado

## Ejemplos de prompts

- "Convierte mi CLI en herramienta distribuible: phar, config por archivo y CI de build"
- "Aplica Scripting y CLI profesional (nivel profesional) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza El phar corre en otra máquina sin dependencias de entorno"
- "Revisa mi php-advanced y dime qué pasos de Scripting y CLI profesional me faltan en este nivel"