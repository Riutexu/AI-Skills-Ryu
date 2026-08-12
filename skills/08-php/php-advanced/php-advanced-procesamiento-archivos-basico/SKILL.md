---
name: php-advanced-procesamiento-archivos-basico
description: Archivos y streams · nivel Básico · PHP avanzado: metaprogramación y sistemas. Trabajo con archivos robusto: lectura segura, streams, formatos y límites de memoria. Objetivo del nivel: leer y escribir archivos con seguridad
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "procesamiento-archivos"
  nivel: basico
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Archivos y streams — Básico

## Qué hace este skill

Trabajo con archivos robusto: lectura segura, streams, formatos y límites de memoria. En este nivel se entrega: **leer y escribir archivos con seguridad**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Archivos y streams** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar fopen/fread/fwrite con modos correctos
2. Manejar archivos grandes por líneas
3. Gestionar errores de permisos y rutas

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | leer y escribir archivos con seguridad | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Usar fopen/fread/fwrite con modos correctos · Manejar archivos grandes por líneas · Gestionar errores de permisos y rutas | lista | sí | 3-4 pasos |
| $criterios_clave | El procesamiento por líneas no agota memoria · Los errores de archivo se capturan con mensajes claros | lista | sí | calidad verificable |
| $prompt_guia | Procesa este archivo grande por líneas sin agotar memoria y con manejo de errores | texto | no | "Archivos y streams" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El procesamiento por líneas no agota memoria
- [ ] Los errores de archivo se capturan con mensajes claros

## Ejemplos de prompts

- "Procesa este archivo grande por líneas sin agotar memoria y con manejo de errores"
- "Aplica Archivos y streams (nivel basico) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza El procesamiento por líneas no agota memoria"
- "Revisa mi php-advanced y dime qué pasos de Archivos y streams me faltan en este nivel"