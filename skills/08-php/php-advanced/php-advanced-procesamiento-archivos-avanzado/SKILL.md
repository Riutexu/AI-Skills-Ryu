---
name: php-advanced-procesamiento-archivos-avanzado
description: Archivos y streams · nivel Avanzado · PHP avanzado: metaprogramación y sistemas. Trabajo con archivos robusto: lectura segura, streams, formatos y límites de memoria. Objetivo del nivel: streams y formatos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "procesamiento-archivos"
  nivel: avanzado
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Archivos y streams — Avanzado

## Qué hace este skill

Trabajo con archivos robusto: lectura segura, streams, formatos y límites de memoria. En este nivel se entrega: **streams y formatos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Archivos y streams** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Trabajar con php://input/output y streams personalizados
2. Procesar CSV/JSONL con parsers eficientes
3. Implementar stream filters y transformaciones
4. Manejar codificaciones (UTF-8, BOM) correctamente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | streams y formatos | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Trabajar con php://input/output y streams personalizados · Procesar CSV/JSONL con parsers eficientes · Implementar stream filters y transformaciones · Manejar codificaciones (UTF-8, BOM) correctamente | lista | sí | 3-4 pasos |
| $criterios_clave | Los streams grandes se procesan con memoria acotada · La codificación de salida es correcta en los casos de prueba | lista | sí | calidad verificable |
| $prompt_guia | Procesa streams grandes de CSV/JSONL con filtros y memoria acotada | texto | no | "Archivos y streams" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los streams grandes se procesan con memoria acotada
- [ ] La codificación de salida es correcta en los casos de prueba

## Ejemplos de prompts

- "Procesa streams grandes de CSV/JSONL con filtros y memoria acotada"
- "Aplica Archivos y streams (nivel avanzado) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Los streams grandes se procesan con memoria acotada"
- "Revisa mi php-advanced y dime qué pasos de Archivos y streams me faltan en este nivel"