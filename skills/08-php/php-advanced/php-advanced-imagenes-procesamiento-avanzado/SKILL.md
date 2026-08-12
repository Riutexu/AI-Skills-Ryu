---
name: php-advanced-imagenes-procesamiento-avanzado
description: Procesamiento de imágenes · nivel Avanzado · PHP avanzado: metaprogramación y sistemas. Imágenes generadas y procesadas: GD/Imagick, miniaturas, formatos y presupuestos de peso. Objetivo del nivel: pipelines de imagen
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "imagenes-procesamiento"
  nivel: avanzado
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Procesamiento de imágenes — Avanzado

## Qué hace este skill

Imágenes generadas y procesadas: GD/Imagick, miniaturas, formatos y presupuestos de peso. En este nivel se entrega: **pipelines de imagen**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Procesamiento de imágenes** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Montar un pipeline de transformación (crop, filters, watermark)
2. Usar Imagick para operaciones avanzadas
3. Generar respuestas adaptativas (srcset)
4. Procesar uploads seguros (validar tipo y tamaño)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | pipelines de imagen | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Montar un pipeline de transformación (crop, filters, watermark) · Usar Imagick para operaciones avanzadas · Generar respuestas adaptativas (srcset) · Procesar uploads seguros (validar tipo y tamaño) | lista | sí | 3-4 pasos |
| $criterios_clave | El pipeline genera variantes correctas con watermark · Los uploads de imagen se validan y sanean | lista | sí | calidad verificable |
| $prompt_guia | Monta el pipeline de transformación de imágenes con watermark y uploads seguros | texto | no | "Procesamiento de imágenes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El pipeline genera variantes correctas con watermark
- [ ] Los uploads de imagen se validan y sanean

## Ejemplos de prompts

- "Monta el pipeline de transformación de imágenes con watermark y uploads seguros"
- "Aplica Procesamiento de imágenes (nivel avanzado) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza El pipeline genera variantes correctas con watermark"
- "Revisa mi php-advanced y dime qué pasos de Procesamiento de imágenes me faltan en este nivel"