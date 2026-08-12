---
name: laravel-cache-optimizacion-basico
description: Caché y optimización · nivel Básico · Laravel 11: framework productivo. Caché intencional con Redis: tags, invalidación por eventos y presupuestos de rendimiento. Objetivo del nivel: caché de queries y vistas
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "cache-optimizacion"
  nivel: basico
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Caché y optimización — Básico

## Qué hace este skill

Caché intencional con Redis: tags, invalidación por eventos y presupuestos de rendimiento. En este nivel se entrega: **caché de queries y vistas**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Caché y optimización** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Cachear consultas costosas con remember
2. Cachear fragmentos de vista
3. Invalidar manualmente en las escrituras

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | caché de queries y vistas | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Cachear consultas costosas con remember · Cachear fragmentos de vista · Invalidar manualmente en las escrituras | lista | sí | 3-4 pasos |
| $criterios_clave | Las consultas calientes se sirven desde caché sin datos obsoletos en el flujo probado · La invalidación está presente en cada escritura relevante | lista | sí | calidad verificable |
| $prompt_guia | Cachea las consultas calientes de mi dashboard y las vistas con invalidación correcta | texto | no | "Caché y optimización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las consultas calientes se sirven desde caché sin datos obsoletos en el flujo probado
- [ ] La invalidación está presente en cada escritura relevante

## Ejemplos de prompts

- "Cachea las consultas calientes de mi dashboard y las vistas con invalidación correcta"
- "Aplica Caché y optimización (nivel basico) a mi trabajo actual con Laravel 11: framework productivo: prioriza Las consultas calientes se sirven desde caché sin datos obsoletos en el flujo probado"
- "Revisa mi laravel y dime qué pasos de Caché y optimización me faltan en este nivel"