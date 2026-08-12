---
name: laravel-autenticacion-laravel-profesional
description: Autenticación y autorización · nivel Profesional · Laravel 11: framework productivo. Login seguro, guards, roles y políticas con el flujo estándar de Laravel (y Breeze/Fortify). Objetivo del nivel: auth a escala: multi-guard y sesiones
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "autenticacion-laravel"
  nivel: profesional
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Autenticación y autorización — Profesional

## Qué hace este skill

Login seguro, guards, roles y políticas con el flujo estándar de Laravel (y Breeze/Fortify). En este nivel se entrega: **auth a escala: multi-guard y sesiones**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Autenticación y autorización** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar multi-guard (web, admin, api) con separación real de sesiones
2. Implementar sesiones activas visibles y revocables por el usuario
3. Auditoría de accesos: log de login, cambio de rol y fallos
4. Proteger contra fuerza bruta y account takeover (rate limit + alertas)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | auth a escala: multi-guard y sesiones | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Diseñar multi-guard (web, admin, api) con separación real de sesiones · Implementar sesiones activas visibles y revocables por el usuario · Auditoría de accesos: log de login, cambio de rol y fallos · Proteger contra fuerza bruta y account takeover (rate limit + alertas) | lista | sí | 3-4 pasos |
| $criterios_clave | El usuario ve y revoca sus sesiones activas · Los eventos de acceso quedan auditados y alertados | lista | sí | calidad verificable |
| $prompt_guia | Diseña la autenticación a escala: multi-guard, sesiones revocables visibles, auditoría y anti fuerza bruta | texto | no | "Autenticación y autorización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El usuario ve y revoca sus sesiones activas
- [ ] Los eventos de acceso quedan auditados y alertados

## Ejemplos de prompts

- "Diseña la autenticación a escala: multi-guard, sesiones revocables visibles, auditoría y anti fuerza bruta"
- "Aplica Autenticación y autorización (nivel profesional) a mi trabajo actual con Laravel 11: framework productivo: prioriza El usuario ve y revoca sus sesiones activas"
- "Revisa mi laravel y dime qué pasos de Autenticación y autorización me faltan en este nivel"