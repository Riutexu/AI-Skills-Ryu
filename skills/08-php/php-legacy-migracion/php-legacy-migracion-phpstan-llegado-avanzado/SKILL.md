---
name: php-legacy-migracion-phpstan-llegado-avanzado
description: Análisis estático del legado · nivel Avanzado · Migración de PHP legado (5/7 → 8.3). Dar tipos y seguridad al legado: PHPStan gradual, niveles, baseline y deuda conocida. Objetivo del nivel: subir niveles gradualmente
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "phpstan-llegado"
  nivel: avanzado
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Análisis estático del legado — Avanzado

## Qué hace este skill

Dar tipos y seguridad al legado: PHPStan gradual, niveles, baseline y deuda conocida. En este nivel se entrega: **subir niveles gradualmente**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Análisis estático del legado** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Subir el nivel con reducción de baseline por módulo
2. Tipar funciones del módulo crítico hasta nivel 5-6
3. Corregir errores por severidad (no por archivo)
4. Automatizar en CI con umbral de baseline

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | subir niveles gradualmente | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Subir el nivel con reducción de baseline por módulo · Tipar funciones del módulo crítico hasta nivel 5-6 · Corregir errores por severidad (no por archivo) · Automatizar en CI con umbral de baseline | lista | sí | 3-4 pasos |
| $criterios_clave | El nivel sube con baseline decreciente medible · El módulo crítico pasa nivel 6 | lista | sí | calidad verificable |
| $prompt_guia | Sube el nivel de PHPStan de mi legado con baseline decreciente por módulo | texto | no | "Análisis estático del legado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El nivel sube con baseline decreciente medible
- [ ] El módulo crítico pasa nivel 6

## Ejemplos de prompts

- "Sube el nivel de PHPStan de mi legado con baseline decreciente por módulo"
- "Aplica Análisis estático del legado (nivel avanzado) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza El nivel sube con baseline decreciente medible"
- "Revisa mi php-legacy-migracion y dime qué pasos de Análisis estático del legado me faltan en este nivel"