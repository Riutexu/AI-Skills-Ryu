---
name: php-legacy-migracion-rector-automatizado-avanzado
description: Rector: migración automatizada · nivel Avanzado · Migración de PHP legado (5/7 → 8.3). Migrar código con reglas: Rector, rector.php, reglas por set y revisión humana. Objetivo del nivel: sets y reglas propias
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rector-automatizado"
  nivel: avanzado
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Rector: migración automatizada — Avanzado

## Qué hace este skill

Migrar código con reglas: Rector, rector.php, reglas por set y revisión humana. En este nivel se entrega: **sets y reglas propias**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rector: migración automatizada** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Aplicar sets de PHP 8.1/8.2/8.3 con control
2. Escribir reglas Rector propias para el proyecto
3. Ejecutar Rector por módulo con commits atómicos
4. Combinar con PHPStan para verificar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | sets y reglas propias | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Aplicar sets de PHP 8.1/8.2/8.3 con control · Escribir reglas Rector propias para el proyecto · Ejecutar Rector por módulo con commits atómicos · Combinar con PHPStan para verificar | lista | sí | 3-4 pasos |
| $criterios_clave | Los sets avanzados pasan sin regresiones · Las reglas propias migran patrones del proyecto | lista | sí | calidad verificable |
| $prompt_guia | Migra mi código a PHP 8.3 con Rector por módulos y reglas propias, verificando con PHPStan | texto | no | "Rector: migración automatizada" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los sets avanzados pasan sin regresiones
- [ ] Las reglas propias migran patrones del proyecto

## Ejemplos de prompts

- "Migra mi código a PHP 8.3 con Rector por módulos y reglas propias, verificando con PHPStan"
- "Aplica Rector: migración automatizada (nivel avanzado) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza Los sets avanzados pasan sin regresiones"
- "Revisa mi php-legacy-migracion y dime qué pasos de Rector: migración automatizada me faltan en este nivel"