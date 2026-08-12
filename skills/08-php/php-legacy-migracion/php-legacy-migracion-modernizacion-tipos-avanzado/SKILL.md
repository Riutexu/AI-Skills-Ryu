---
name: php-legacy-migracion-modernizacion-tipos-avanzado
description: Modernización de tipos y estilo · nivel Avanzado · Migración de PHP legado (5/7 → 8.3). Del código dinámico al tipado: docblocks a tipos, estilos modernos y herramientas. Objetivo del nivel: docblocks a tipos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "modernizacion-tipos"
  nivel: avanzado
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Modernización de tipos y estilo — Avanzado

## Qué hace este skill

Del código dinámico al tipado: docblocks a tipos, estilos modernos y herramientas. En este nivel se entrega: **docblocks a tipos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Modernización de tipos y estilo** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Migrar docblocks @param/@return a tipos reales
2. Usar Rector para la migración automática de tipos
3. Resolver casos de tipos complejos (union/nullable)
4. Verificar con PHPStan tras cada conversión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | docblocks a tipos | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Migrar docblocks @param/@return a tipos reales · Usar Rector para la migración automática de tipos · Resolver casos de tipos complejos (union/nullable) · Verificar con PHPStan tras cada conversión | lista | sí | 3-4 pasos |
| $criterios_clave | Los docblocks migrados quedan verificados por PHPStan · La conversión automática se revisa manualmente | lista | sí | calidad verificable |
| $prompt_guia | Migra los docblocks de mi legado a tipos reales con Rector y verificación de PHPStan | texto | no | "Modernización de tipos y estilo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los docblocks migrados quedan verificados por PHPStan
- [ ] La conversión automática se revisa manualmente

## Ejemplos de prompts

- "Migra los docblocks de mi legado a tipos reales con Rector y verificación de PHPStan"
- "Aplica Modernización de tipos y estilo (nivel avanzado) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza Los docblocks migrados quedan verificados por PHPStan"
- "Revisa mi php-legacy-migracion y dime qué pasos de Modernización de tipos y estilo me faltan en este nivel"