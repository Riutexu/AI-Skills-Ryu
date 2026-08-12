---
name: php-legacy-migracion-diagnostico-legado-basico
description: Diagnóstico de código legado · nivel Básico · Migración de PHP legado (5/7 → 8.3). Saber qué hay antes de tocar: inventario, deuda, dependencias y riesgos de la migración. Objetivo del nivel: inventariar el legado
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "diagnostico-legado"
  nivel: basico
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Diagnóstico de código legado — Básico

## Qué hace este skill

Saber qué hay antes de tocar: inventario, deuda, dependencias y riesgos de la migración. En este nivel se entrega: **inventariar el legado**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Diagnóstico de código legado** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Enumerar archivos, funciones y dependencias
2. Detectar extensiones obsoletas y funciones deprecadas
3. Documentar el estado actual en un informe simple

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | inventariar el legado | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Enumerar archivos, funciones y dependencias · Detectar extensiones obsoletas y funciones deprecadas · Documentar el estado actual en un informe simple | lista | sí | 3-4 pasos |
| $criterios_clave | El inventario cubre código, deps y configuración · El informe identifica extensiones incompatibles | lista | sí | calidad verificable |
| $prompt_guia | Inventaría mi proyecto PHP legado: archivos, dependencias y extensiones obsoletas | texto | no | "Diagnóstico de código legado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El inventario cubre código, deps y configuración
- [ ] El informe identifica extensiones incompatibles

## Ejemplos de prompts

- "Inventaría mi proyecto PHP legado: archivos, dependencias y extensiones obsoletas"
- "Aplica Diagnóstico de código legado (nivel basico) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza El inventario cubre código, deps y configuración"
- "Revisa mi php-legacy-migracion y dime qué pasos de Diagnóstico de código legado me faltan en este nivel"