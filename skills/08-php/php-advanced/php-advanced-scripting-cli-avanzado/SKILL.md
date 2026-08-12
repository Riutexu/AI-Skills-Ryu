---
name: php-advanced-scripting-cli-avanzado
description: Scripting y CLI profesional · nivel Avanzado · PHP avanzado: metaprogramación y sistemas. Herramientas CLI bien hechas: argumentos, opciones, colores, salida y empaquetado. Objetivo del nivel: CLI robusto
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "scripting-cli"
  nivel: avanzado
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Scripting y CLI profesional — Avanzado

## Qué hace este skill

Herramientas CLI bien hechas: argumentos, opciones, colores, salida y empaquetado. En este nivel se entrega: **CLI robusto**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Scripting y CLI profesional** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar parser de opciones (getopt o Symfony Console)
2. Añadir colores y progreso en terminales compatibles
3. Soportar entrada stdin y salida redirigible
4. Escribir tests del CLI sin ejecutarlo manual

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | CLI robusto | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Implementar parser de opciones (getopt o Symfony Console) · Añadir colores y progreso en terminales compatibles · Soportar entrada stdin y salida redirigible · Escribir tests del CLI sin ejecutarlo manual | lista | sí | 3-4 pasos |
| $criterios_clave | Las opciones se parsean y validan · El CLI funciona en pipes y scripts | lista | sí | calidad verificable |
| $prompt_guia | Convierte mi script en una herramienta CLI robusta con opciones, colores y tests | texto | no | "Scripting y CLI profesional" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las opciones se parsean y validan
- [ ] El CLI funciona en pipes y scripts

## Ejemplos de prompts

- "Convierte mi script en una herramienta CLI robusta con opciones, colores y tests"
- "Aplica Scripting y CLI profesional (nivel avanzado) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Las opciones se parsean y validan"
- "Revisa mi php-advanced y dime qué pasos de Scripting y CLI profesional me faltan en este nivel"