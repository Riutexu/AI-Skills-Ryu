---
name: laravel-api-sanctum-basico
description: APIs con Sanctum · nivel Básico · Laravel 11: framework productivo. APIs REST autenticadas con tokens, rate limiting, respuestas JSON y versionado pragmático. Objetivo del nivel: API con tokens Sanctum
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "api-sanctum"
  nivel: basico
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# APIs con Sanctum — Básico

## Qué hace este skill

APIs REST autenticadas con tokens, rate limiting, respuestas JSON y versionado pragmático. En este nivel se entrega: **API con tokens Sanctum**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **APIs con Sanctum** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Instalar Sanctum y proteger rutas api con token
2. Crear tokens al login y enviarlos con Authorization Bearer
3. Devolver JSON consistente (data/errores)

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | API con tokens Sanctum | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Instalar Sanctum y proteger rutas api con token · Crear tokens al login y enviarlos con Authorization Bearer · Devolver JSON consistente (data/errores) | lista | sí | 3-4 pasos |
| $criterios_clave | Un cliente con token accede y sin token recibe 401 · Las respuestas JSON tienen una forma consistente | lista | sí | calidad verificable |
| $prompt_guia | Protege mi API con Sanctum: login con token, middleware y respuestas JSON consistentes | texto | no | "APIs con Sanctum" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un cliente con token accede y sin token recibe 401
- [ ] Las respuestas JSON tienen una forma consistente

## Ejemplos de prompts

- "Protege mi API con Sanctum: login con token, middleware y respuestas JSON consistentes"
- "Aplica APIs con Sanctum (nivel basico) a mi trabajo actual con Laravel 11: framework productivo: prioriza Un cliente con token accede y sin token recibe 401"
- "Revisa mi laravel y dime qué pasos de APIs con Sanctum me faltan en este nivel"