---
name: laravel-migraciones-seeds-avanzado
description: Migraciones y seeds · nivel Avanzado · Laravel 11: framework productivo. Esquema versionado y datos de prueba reproducibles, del primer schema al deploy sin fricción. Objetivo del nivel: evolución de esquema segura
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "migraciones-seeds"
  nivel: avanzado
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Migraciones y seeds — Avanzado

## Qué hace este skill

Esquema versionado y datos de prueba reproducibles, del primer schema al deploy sin fricción. En este nivel se entrega: **evolución de esquema segura**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Migraciones y seeds** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escribir migraciones destructivas con down() correcto
2. Migrar tablas grandes sin lock (estrategias MySQL/PG)
3. Usar faker para seeds masivos y estados de dominio
4. Configurar factories con relaciones para tests

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | evolución de esquema segura | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Escribir migraciones destructivas con down() correcto · Migrar tablas grandes sin lock (estrategias MySQL/PG) · Usar faker para seeds masivos y estados de dominio · Configurar factories con relaciones para tests | lista | sí | 3-4 pasos |
| $criterios_clave | Cada migración tiene up/down coherentes · Las factories producen estados válidos para todos los tests | lista | sí | calidad verificable |
| $prompt_guia | Refuerza mis migraciones para producción: down() seguro, estrategias sin lock y factories completas | texto | no | "Migraciones y seeds" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada migración tiene up/down coherentes
- [ ] Las factories producen estados válidos para todos los tests

## Ejemplos de prompts

- "Refuerza mis migraciones para producción: down() seguro, estrategias sin lock y factories completas"
- "Aplica Migraciones y seeds (nivel avanzado) a mi trabajo actual con Laravel 11: framework productivo: prioriza Cada migración tiene up/down coherentes"
- "Revisa mi laravel y dime qué pasos de Migraciones y seeds me faltan en este nivel"