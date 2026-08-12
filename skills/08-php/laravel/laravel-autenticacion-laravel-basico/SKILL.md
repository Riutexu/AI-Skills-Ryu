---
name: laravel-autenticacion-laravel-basico
description: Autenticación y autorización · nivel Básico · Laravel 11: framework productivo. Login seguro, guards, roles y políticas con el flujo estándar de Laravel (y Breeze/Fortify). Objetivo del nivel: login/logout con el flujo oficial
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "autenticacion-laravel"
  nivel: basico
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Autenticación y autorización — Básico

## Qué hace este skill

Login seguro, guards, roles y políticas con el flujo estándar de Laravel (y Breeze/Fortify). En este nivel se entrega: **login/logout con el flujo oficial**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Autenticación y autorización** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Instalar el scaffolding de auth de Laravel (Breeze o custom)
2. Entender el guard web: sesiones y hash de contraseñas
3. Proteger rutas con auth middleware

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | login/logout con el flujo oficial | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Instalar el scaffolding de auth de Laravel (Breeze o custom) · Entender el guard web: sesiones y hash de contraseñas · Proteger rutas con auth middleware | lista | sí | 3-4 pasos |
| $criterios_clave | El registro/login/logout funcionan y protegen rutas · Las contraseñas se cifran con bcrypt (nunca en texto plano) | lista | sí | calidad verificable |
| $prompt_guia | Implementa autenticación completa con Breeze, rutas protegidas y contraseñas hasheadas | texto | no | "Autenticación y autorización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El registro/login/logout funcionan y protegen rutas
- [ ] Las contraseñas se cifran con bcrypt (nunca en texto plano)

## Ejemplos de prompts

- "Implementa autenticación completa con Breeze, rutas protegidas y contraseñas hasheadas"
- "Aplica Autenticación y autorización (nivel basico) a mi trabajo actual con Laravel 11: framework productivo: prioriza El registro/login/logout funcionan y protegen rutas"
- "Revisa mi laravel y dime qué pasos de Autenticación y autorización me faltan en este nivel"