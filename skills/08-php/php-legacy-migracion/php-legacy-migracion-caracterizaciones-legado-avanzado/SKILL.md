---
name: php-legacy-migracion-caracterizaciones-legado-avanzado
description: Pruebas de caracterización · nivel Avanzado · Migración de PHP legado (5/7 → 8.3). Proteger el comportamiento actual antes de tocar: golden tests y red de seguridad de regresión. Objetivo del nivel: red de seguridad de módulos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "caracterizaciones-legado"
  nivel: avanzado
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Pruebas de caracterización — Avanzado

## Qué hace este skill

Proteger el comportamiento actual antes de tocar: golden tests y red de seguridad de regresión. En este nivel se entrega: **red de seguridad de módulos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Pruebas de caracterización** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Construir tests de integración del módulo completo
2. Cubrir flujos de BD y de archivos del legado
3. Diferenciar comportamiento correcto vs bug heredado
4. Ejecutar la red antes de cada migración

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | red de seguridad de módulos | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Construir tests de integración del módulo completo · Cubrir flujos de BD y de archivos del legado · Diferenciar comportamiento correcto vs bug heredado · Ejecutar la red antes de cada migración | lista | sí | 3-4 pasos |
| $criterios_clave | La red cubre los flujos críticos completos · Los bugs heredados están documentados como comportamiento | lista | sí | calidad verificable |
| $prompt_guia | Construye la red de seguridad de tests de mis módulos legados antes de migrarlos | texto | no | "Pruebas de caracterización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La red cubre los flujos críticos completos
- [ ] Los bugs heredados están documentados como comportamiento

## Ejemplos de prompts

- "Construye la red de seguridad de tests de mis módulos legados antes de migrarlos"
- "Aplica Pruebas de caracterización (nivel avanzado) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza La red cubre los flujos críticos completos"
- "Revisa mi php-legacy-migracion y dime qué pasos de Pruebas de caracterización me faltan en este nivel"