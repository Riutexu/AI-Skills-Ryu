---
name: php-legacy-migracion-phpstan-llegado-profesional
description: Análisis estático del legado · nivel Profesional · Migración de PHP legado (5/7 → 8.3). Dar tipos y seguridad al legado: PHPStan gradual, niveles, baseline y deuda conocida. Objetivo del nivel: tipos como norma
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "phpstan-llegado"
  nivel: profesional
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Análisis estático del legado — Profesional

## Qué hace este skill

Dar tipos y seguridad al legado: PHPStan gradual, niveles, baseline y deuda conocida. En este nivel se entrega: **tipos como norma**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Análisis estático del legado** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Fijar el nivel objetivo y la política de errores nuevos
2. Integrar extensión de tipos (stubs) para el legado
3. Medir la densidad de tipos y el progreso trimestral
4. Documentar excepciones y su revisión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | tipos como norma | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Fijar el nivel objetivo y la política de errores nuevos · Integrar extensión de tipos (stubs) para el legado · Medir la densidad de tipos y el progreso trimestral · Documentar excepciones y su revisión | lista | sí | 3-4 pasos |
| $criterios_clave | El nivel objetivo está fijado y verificado en CI · La densidad de tipos mejora de forma medible | lista | sí | calidad verificable |
| $prompt_guia | Convierte el análisis estático en norma de mi legado: nivel objetivo, stubs y métricas trimestrales | texto | no | "Análisis estático del legado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El nivel objetivo está fijado y verificado en CI
- [ ] La densidad de tipos mejora de forma medible

## Ejemplos de prompts

- "Convierte el análisis estático en norma de mi legado: nivel objetivo, stubs y métricas trimestrales"
- "Aplica Análisis estático del legado (nivel profesional) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza El nivel objetivo está fijado y verificado en CI"
- "Revisa mi php-legacy-migracion y dime qué pasos de Análisis estático del legado me faltan en este nivel"