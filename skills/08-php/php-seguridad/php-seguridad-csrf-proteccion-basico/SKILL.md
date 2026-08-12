---
name: php-seguridad-csrf-proteccion-basico
description: CSRF y abuso de sesiones · nivel Básico · Seguridad web en PHP. Proteger las acciones del usuario: tokens CSRF, SameSite y verificaciones de origen. Objetivo del nivel: tokens CSRF en formularios
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "csrf-proteccion"
  nivel: basico
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# CSRF y abuso de sesiones — Básico

## Qué hace este skill

Proteger las acciones del usuario: tokens CSRF, SameSite y verificaciones de origen. En este nivel se entrega: **tokens CSRF en formularios**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CSRF y abuso de sesiones** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Generar tokens CSRF por sesión
2. Incluirlos en formularios POST
3. Verificar en cada mutación

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | tokens CSRF en formularios | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Generar tokens CSRF por sesión · Incluirlos en formularios POST · Verificar en cada mutación | lista | sí | 3-4 pasos |
| $criterios_clave | Todas las mutaciones verifican el token · Los formularios sin token se rechazan | lista | sí | calidad verificable |
| $prompt_guia | Protege mis formularios con tokens CSRF verificados en cada POST | texto | no | "CSRF y abuso de sesiones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todas las mutaciones verifican el token
- [ ] Los formularios sin token se rechazan

## Ejemplos de prompts

- "Protege mis formularios con tokens CSRF verificados en cada POST"
- "Aplica CSRF y abuso de sesiones (nivel basico) a mi trabajo actual con Seguridad web en PHP: prioriza Todas las mutaciones verifican el token"
- "Revisa mi php-seguridad y dime qué pasos de CSRF y abuso de sesiones me faltan en este nivel"