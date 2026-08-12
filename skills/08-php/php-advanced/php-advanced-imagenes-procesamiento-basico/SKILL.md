---
name: php-advanced-imagenes-procesamiento-basico
description: Procesamiento de imágenes · nivel Básico · PHP avanzado: metaprogramación y sistemas. Imágenes generadas y procesadas: GD/Imagick, miniaturas, formatos y presupuestos de peso. Objetivo del nivel: redimensionar y servir imágenes
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "imagenes-procesamiento"
  nivel: basico
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Procesamiento de imágenes — Básico

## Qué hace este skill

Imágenes generadas y procesadas: GD/Imagick, miniaturas, formatos y presupuestos de peso. En este nivel se entrega: **redimensionar y servir imágenes**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Procesamiento de imágenes** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear miniaturas con GD
2. Forzar formatos correctos (JPEG/PNG/WebP)
3. Cachear las imágenes generadas

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | redimensionar y servir imágenes | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Crear miniaturas con GD · Forzar formatos correctos (JPEG/PNG/WebP) · Cachear las imágenes generadas | lista | sí | 3-4 pasos |
| $criterios_clave | Las miniaturas se generan y sirven desde caché · El peso de salida es razonable por formato | lista | sí | calidad verificable |
| $prompt_guia | Genera miniaturas WebP con GD y sírvelas desde caché | texto | no | "Procesamiento de imágenes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las miniaturas se generan y sirven desde caché
- [ ] El peso de salida es razonable por formato

## Ejemplos de prompts

- "Genera miniaturas WebP con GD y sírvelas desde caché"
- "Aplica Procesamiento de imágenes (nivel basico) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Las miniaturas se generan y sirven desde caché"
- "Revisa mi php-advanced y dime qué pasos de Procesamiento de imágenes me faltan en este nivel"