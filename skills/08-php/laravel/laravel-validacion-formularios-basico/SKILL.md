---
name: laravel-validacion-formularios-basico
description: Validación y formularios · nivel Básico · Laravel 11: framework productivo. Validación con Form Requests, reglas avanzadas y mensajes coherentes entre web y API. Objetivo del nivel: validar con el Validator
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "validacion-formularios"
  nivel: basico
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Validación y formularios — Básico

## Qué hace este skill

Validación con Form Requests, reglas avanzadas y mensajes coherentes entre web y API. En este nivel se entrega: **validar con el Validator**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Validación y formularios** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Validar requests en controladores con $request->validate
2. Mostrar errores en Blade con @error
3. Aplicar reglas básicas: required, email, min, unique

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | validar con el Validator | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Validar requests en controladores con $request->validate · Mostrar errores en Blade con @error · Aplicar reglas básicas: required, email, min, unique | lista | sí | 3-4 pasos |
| $criterios_clave | Los errores se muestran por campo con valores conservados · Ninguna acción de escritura acepta datos sin validar | lista | sí | calidad verificable |
| $prompt_guia | Añade validación con mensajes por campo a mi formulario de registro en Laravel | texto | no | "Validación y formularios" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los errores se muestran por campo con valores conservados
- [ ] Ninguna acción de escritura acepta datos sin validar

## Ejemplos de prompts

- "Añade validación con mensajes por campo a mi formulario de registro en Laravel"
- "Aplica Validación y formularios (nivel basico) a mi trabajo actual con Laravel 11: framework productivo: prioriza Los errores se muestran por campo con valores conservados"
- "Revisa mi laravel y dime qué pasos de Validación y formularios me faltan en este nivel"