---
name: php-legacy-migracion-compatibilidad-php83-profesional
description: Compatibilidad con PHP 8.3 · nivel Profesional · Migración de PHP legado (5/7 → 8.3). Los cambios de PHP 8 que rompen: funciones removidas, semántica y extensiones ausentes. Objetivo del nivel: compatibilidad como proceso
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "compatibilidad-php83"
  nivel: profesional
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Compatibilidad con PHP 8.3 — Profesional

## Qué hace este skill

Los cambios de PHP 8 que rompen: funciones removidas, semántica y extensiones ausentes. En este nivel se entrega: **compatibilidad como proceso**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Compatibilidad con PHP 8.3** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la matriz de compatibilidad del proyecto (extensiones, versiones)
2. Automatizar el escaneo de compatibilidad en CI
3. Gestionar el roadmap de deprecaciones futuras
4. Documentar decisiones de incompatibilidad aceptada

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | compatibilidad como proceso | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Definir la matriz de compatibilidad del proyecto (extensiones, versiones) · Automatizar el escaneo de compatibilidad en CI · Gestionar el roadmap de deprecaciones futuras · Documentar decisiones de incompatibilidad aceptada | lista | sí | 3-4 pasos |
| $criterios_clave | El escaneo de compatibilidad corre en CI · El roadmap de deprecaciones está gestionado | lista | sí | calidad verificable |
| $prompt_guia | Gestiona la compatibilidad de mi proyecto con 8.3 como proceso continuo con CI y roadmap | texto | no | "Compatibilidad con PHP 8.3" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El escaneo de compatibilidad corre en CI
- [ ] El roadmap de deprecaciones está gestionado

## Ejemplos de prompts

- "Gestiona la compatibilidad de mi proyecto con 8.3 como proceso continuo con CI y roadmap"
- "Aplica Compatibilidad con PHP 8.3 (nivel profesional) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza El escaneo de compatibilidad corre en CI"
- "Revisa mi php-legacy-migracion y dime qué pasos de Compatibilidad con PHP 8.3 me faltan en este nivel"