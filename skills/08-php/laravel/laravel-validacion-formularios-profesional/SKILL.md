---
name: laravel-validacion-formularios-profesional
description: Validación y formularios · nivel Profesional · Laravel 11: framework productivo. Validación con Form Requests, reglas avanzadas y mensajes coherentes entre web y API. Objetivo del nivel: validación como contrato y consistencia API/web
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "validacion-formularios"
  nivel: profesional
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Validación y formularios — Profesional

## Qué hace este skill

Validación con Form Requests, reglas avanzadas y mensajes coherentes entre web y API. En este nivel se entrega: **validación como contrato y consistencia API/web**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Validación y formularios** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Compartir esquemas de validación entre web y API (misma lógica)
2. Versionar reglas cuando el contrato cambia
3. Validación de datos externos (imports) con reportes de errores por fila
4. Proteger contra ataques: throttling de intentos y validación de tamaño

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | validación como contrato y consistencia API/web | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Compartir esquemas de validación entre web y API (misma lógica) · Versionar reglas cuando el contrato cambia · Validación de datos externos (imports) con reportes de errores por fila · Proteger contra ataques: throttling de intentos y validación de tamaño | lista | sí | 3-4 pasos |
| $criterios_clave | Web y API rechazan exactamente los mismos datos · Un import con errores reporta cada fila inválida sin perder el resto | lista | sí | calidad verificable |
| $prompt_guia | Centraliza la validación como contrato compartido web/API con imports que reportan errores por fila | texto | no | "Validación y formularios" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Web y API rechazan exactamente los mismos datos
- [ ] Un import con errores reporta cada fila inválida sin perder el resto

## Ejemplos de prompts

- "Centraliza la validación como contrato compartido web/API con imports que reportan errores por fila"
- "Aplica Validación y formularios (nivel profesional) a mi trabajo actual con Laravel 11: framework productivo: prioriza Web y API rechazan exactamente los mismos datos"
- "Revisa mi laravel y dime qué pasos de Validación y formularios me faltan en este nivel"