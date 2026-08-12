---
name: php-advanced-imagenes-procesamiento-profesional
description: Procesamiento de imágenes · nivel Profesional · PHP avanzado: metaprogramación y sistemas. Imágenes generadas y procesadas: GD/Imagick, miniaturas, formatos y presupuestos de peso. Objetivo del nivel: procesamiento a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "imagenes-procesamiento"
  nivel: profesional
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Procesamiento de imágenes — Profesional

## Qué hace este skill

Imágenes generadas y procesadas: GD/Imagick, miniaturas, formatos y presupuestos de peso. En este nivel se entrega: **procesamiento a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Procesamiento de imágenes** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el procesamiento en colas con workers
2. Optimizar formatos por caso (AVIF, compresión)
3. Monitorizar costes de procesamiento y caché de CDN
4. Medir y fijar presupuesto de peso por variante

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | procesamiento a escala | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Diseñar el procesamiento en colas con workers · Optimizar formatos por caso (AVIF, compresión) · Monitorizar costes de procesamiento y caché de CDN · Medir y fijar presupuesto de peso por variante | lista | sí | 3-4 pasos |
| $criterios_clave | El procesamiento en cola no carga la request · El presupuesto de peso se cumple en producción | lista | sí | calidad verificable |
| $prompt_guia | Escala mi procesamiento de imágenes: colas, AVIF, caché CDN y presupuesto de peso | texto | no | "Procesamiento de imágenes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El procesamiento en cola no carga la request
- [ ] El presupuesto de peso se cumple en producción

## Ejemplos de prompts

- "Escala mi procesamiento de imágenes: colas, AVIF, caché CDN y presupuesto de peso"
- "Aplica Procesamiento de imágenes (nivel profesional) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza El procesamiento en cola no carga la request"
- "Revisa mi php-advanced y dime qué pasos de Procesamiento de imágenes me faltan en este nivel"