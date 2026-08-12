---
name: laravel-api-sanctum-avanzado
description: APIs con Sanctum · nivel Avanzado · Laravel 11: framework productivo. APIs REST autenticadas con tokens, rate limiting, respuestas JSON y versionado pragmático. Objetivo del nivel: recursos, paginación y rate limits
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "api-sanctum"
  nivel: avanzado
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# APIs con Sanctum — Avanzado

## Qué hace este skill

APIs REST autenticadas con tokens, rate limiting, respuestas JSON y versionado pragmático. En este nivel se entrega: **recursos, paginación y rate limits**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **APIs con Sanctum** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Transformar modelos con API Resources (data/links)
2. Paginación con metadatos para el cliente
3. Configurar rate limiting por token y por IP
4. Manejar errores 422/404/500 en JSON de forma uniforme

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | recursos, paginación y rate limits | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Transformar modelos con API Resources (data/links) · Paginación con metadatos para el cliente · Configurar rate limiting por token y por IP · Manejar errores 422/404/500 en JSON de forma uniforme | lista | sí | 3-4 pasos |
| $criterios_clave | Las listas paginan con metadatos y sin fuga de datos · Los rate limits se respetan y comunican (headers) | lista | sí | calidad verificable |
| $prompt_guia | Estructura mi API con API Resources, paginación con metadatos y rate limiting por token | texto | no | "APIs con Sanctum" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las listas paginan con metadatos y sin fuga de datos
- [ ] Los rate limits se respetan y comunican (headers)

## Ejemplos de prompts

- "Estructura mi API con API Resources, paginación con metadatos y rate limiting por token"
- "Aplica APIs con Sanctum (nivel avanzado) a mi trabajo actual con Laravel 11: framework productivo: prioriza Las listas paginan con metadatos y sin fuga de datos"
- "Revisa mi laravel y dime qué pasos de APIs con Sanctum me faltan en este nivel"