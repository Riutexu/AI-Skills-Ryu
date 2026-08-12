---
name: php-advanced-procesamiento-archivos-profesional
description: Archivos y streams · nivel Profesional · PHP avanzado: metaprogramación y sistemas. Trabajo con archivos robusto: lectura segura, streams, formatos y límites de memoria. Objetivo del nivel: sistemas de archivos a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "procesamiento-archivos"
  nivel: profesional
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Archivos y streams — Profesional

## Qué hace este skill

Trabajo con archivos robusto: lectura segura, streams, formatos y límites de memoria. En este nivel se entrega: **sistemas de archivos a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Archivos y streams** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la estrategia de almacenamiento (local, S3, NFS) por capa
2. Implementar atomic writes y lock para concurrencia
3. Manejar batch de millones de archivos con colas
4. Auditar permisos y secretos en archivos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | sistemas de archivos a escala | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Diseñar la estrategia de almacenamiento (local, S3, NFS) por capa · Implementar atomic writes y lock para concurrencia · Manejar batch de millones de archivos con colas · Auditar permisos y secretos en archivos | lista | sí | 3-4 pasos |
| $criterios_clave | Las escrituras son atómicas bajo concurrencia · El proceso de millones de archivos no bloquea el sistema | lista | sí | calidad verificable |
| $prompt_guia | Diseña mi capa de archivos a escala: almacenamiento por capa, atomic writes y batching | texto | no | "Archivos y streams" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las escrituras son atómicas bajo concurrencia
- [ ] El proceso de millones de archivos no bloquea el sistema

## Ejemplos de prompts

- "Diseña mi capa de archivos a escala: almacenamiento por capa, atomic writes y batching"
- "Aplica Archivos y streams (nivel profesional) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Las escrituras son atómicas bajo concurrencia"
- "Revisa mi php-advanced y dime qué pasos de Archivos y streams me faltan en este nivel"