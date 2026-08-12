---
name: php-legacy-migracion-modernizacion-tipos-profesional
description: Modernización de tipos y estilo · nivel Profesional · Migración de PHP legado (5/7 → 8.3). Del código dinámico al tipado: docblocks a tipos, estilos modernos y herramientas. Objetivo del nivel: estilo como norma
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "modernizacion-tipos"
  nivel: profesional
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Modernización de tipos y estilo — Profesional

## Qué hace este skill

Del código dinámico al tipado: docblocks a tipos, estilos modernos y herramientas. En este nivel se entrega: **estilo como norma**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Modernización de tipos y estilo** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el estándar de estilo y tipos del proyecto destino
2. Automatizar CS-Fixer y análisis en CI
3. Medir la proporción de código tipado
4. Gestionar el resto de deuda con priorización

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | estilo como norma | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Definir el estándar de estilo y tipos del proyecto destino · Automatizar CS-Fixer y análisis en CI · Medir la proporción de código tipado · Gestionar el resto de deuda con priorización | lista | sí | 3-4 pasos |
| $criterios_clave | El estándar se aplica en CI sin excepciones no documentadas · La proporción de código tipado mejora trimestralmente | lista | sí | calidad verificable |
| $prompt_guia | Convierte el estilo y los tipos en norma de mi proyecto: CS-Fixer y análisis en CI con métricas | texto | no | "Modernización de tipos y estilo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El estándar se aplica en CI sin excepciones no documentadas
- [ ] La proporción de código tipado mejora trimestralmente

## Ejemplos de prompts

- "Convierte el estilo y los tipos en norma de mi proyecto: CS-Fixer y análisis en CI con métricas"
- "Aplica Modernización de tipos y estilo (nivel profesional) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza El estándar se aplica en CI sin excepciones no documentadas"
- "Revisa mi php-legacy-migracion y dime qué pasos de Modernización de tipos y estilo me faltan en este nivel"