---
name: laravel-cache-optimizacion-avanzado
description: Caché y optimización · nivel Avanzado · Laravel 11: framework productivo. Caché intencional con Redis: tags, invalidación por eventos y presupuestos de rendimiento. Objetivo del nivel: tags y invalidación por eventos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "cache-optimizacion"
  nivel: avanzado
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Caché y optimización — Avanzado

## Qué hace este skill

Caché intencional con Redis: tags, invalidación por eventos y presupuestos de rendimiento. En este nivel se entrega: **tags y invalidación por eventos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Caché y optimización** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar tags de caché (Redis) para invalidación por dominio
2. Invalidar mediante eventos de modelo (created/updated)
3. Cachear listados con paginación sin duplicar claves
4. Medir hit ratio y ajustar TTLs

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | tags y invalidación por eventos | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Usar tags de caché (Redis) para invalidación por dominio · Invalidar mediante eventos de modelo (created/updated) · Cachear listados con paginación sin duplicar claves · Medir hit ratio y ajustar TTLs | lista | sí | 3-4 pasos |
| $criterios_clave | La invalidación por eventos mantiene los datos frescos (test) · El hit ratio del store se mide y documenta | lista | sí | calidad verificable |
| $prompt_guia | Implementa caché con tags Redis e invalidación por eventos de modelo, con medición de hit ratio | texto | no | "Caché y optimización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La invalidación por eventos mantiene los datos frescos (test)
- [ ] El hit ratio del store se mide y documenta

## Ejemplos de prompts

- "Implementa caché con tags Redis e invalidación por eventos de modelo, con medición de hit ratio"
- "Aplica Caché y optimización (nivel avanzado) a mi trabajo actual con Laravel 11: framework productivo: prioriza La invalidación por eventos mantiene los datos frescos (test)"
- "Revisa mi laravel y dime qué pasos de Caché y optimización me faltan en este nivel"