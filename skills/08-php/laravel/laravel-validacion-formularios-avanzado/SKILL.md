---
name: laravel-validacion-formularios-avanzado
description: Validación y formularios · nivel Avanzado · Laravel 11: framework productivo. Validación con Form Requests, reglas avanzadas y mensajes coherentes entre web y API. Objetivo del nivel: Form Requests y reglas de negocio
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "validacion-formularios"
  nivel: avanzado
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Validación y formularios — Avanzado

## Qué hace este skill

Validación con Form Requests, reglas avanzadas y mensajes coherentes entre web y API. En este nivel se entrega: **Form Requests y reglas de negocio**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Validación y formularios** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear Form Requests con reglas y autorización propias
2. Escribir reglas custom reutilizables (Rule)
3. Validar reglas de negocio con after() y closures
4. Unificar mensajes en español y por contexto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Form Requests y reglas de negocio | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Crear Form Requests con reglas y autorización propias · Escribir reglas custom reutilizables (Rule) · Validar reglas de negocio con after() y closures · Unificar mensajes en español y por contexto | lista | sí | 3-4 pasos |
| $criterios_clave | Toda la validación vive en Form Requests, no en controladores · Las reglas custom se prueban de forma unitaria | lista | sí | calidad verificable |
| $prompt_guia | Reorganiza mi validación en Form Requests con reglas custom y mensajes en español unificados | texto | no | "Validación y formularios" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Toda la validación vive en Form Requests, no en controladores
- [ ] Las reglas custom se prueban de forma unitaria

## Ejemplos de prompts

- "Reorganiza mi validación en Form Requests con reglas custom y mensajes en español unificados"
- "Aplica Validación y formularios (nivel avanzado) a mi trabajo actual con Laravel 11: framework productivo: prioriza Toda la validación vive en Form Requests, no en controladores"
- "Revisa mi laravel y dime qué pasos de Validación y formularios me faltan en este nivel"