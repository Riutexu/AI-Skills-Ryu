---
name: php-legacy-migracion-deps-desactualizadas-profesional
description: Dependencias desactualizadas · nivel Profesional · Migración de PHP legado (5/7 → 8.3). Renovar dependencias de un legado: inventario, versiones soportadas y upgrades seguros. Objetivo del nivel: gestión de ciclo de vida
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "deps-desactualizadas"
  nivel: profesional
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Dependencias desactualizadas — Profesional

## Qué hace este skill

Renovar dependencias de un legado: inventario, versiones soportadas y upgrades seguros. En este nivel se entrega: **gestión de ciclo de vida**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Dependencias desactualizadas** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Establecer la política de versiones y ventanas de soporte
2. Automatizar la detección de EOL en CI
3. Planificar upgrades mayores con hitos
4. Gestionar la deuda de versiones del portfolio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | gestión de ciclo de vida | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Establecer la política de versiones y ventanas de soporte · Automatizar la detección de EOL en CI · Planificar upgrades mayores con hitos · Gestionar la deuda de versiones del portfolio | lista | sí | 3-4 pasos |
| $criterios_clave | La política de versiones está aplicada y monitorizada · Los upgrades mayores tienen plan e hitos | lista | sí | calidad verificable |
| $prompt_guia | Establece la gestión del ciclo de vida de las dependencias de mi portfolio con política y plan | texto | no | "Dependencias desactualizadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La política de versiones está aplicada y monitorizada
- [ ] Los upgrades mayores tienen plan e hitos

## Ejemplos de prompts

- "Establece la gestión del ciclo de vida de las dependencias de mi portfolio con política y plan"
- "Aplica Dependencias desactualizadas (nivel profesional) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza La política de versiones está aplicada y monitorizada"
- "Revisa mi php-legacy-migracion y dime qué pasos de Dependencias desactualizadas me faltan en este nivel"