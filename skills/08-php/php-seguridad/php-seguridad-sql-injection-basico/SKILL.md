---
name: php-seguridad-sql-injection-basico
description: Inyección SQL · nivel Básico · Seguridad web en PHP. Erradicar SQLi: prepared statements, escapes y defensa del acceso a datos. Objetivo del nivel: eliminar concatenación SQL
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "sql-injection"
  nivel: basico
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Inyección SQL — Básico

## Qué hace este skill

Erradicar SQLi: prepared statements, escapes y defensa del acceso a datos. En este nivel se entrega: **eliminar concatenación SQL**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Inyección SQL** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Encontrar concatenación de SQL en el código
2. Sustituir por prepared statements con parámetros
3. Probar con payloads básicos de SQLi

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | eliminar concatenación SQL | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Encontrar concatenación de SQL en el código · Sustituir por prepared statements con parámetros · Probar con payloads básicos de SQLi | lista | sí | 3-4 pasos |
| $criterios_clave | Cero concatenación en consultas (grep verificado) · Los payloads de prueba no alteran la consulta | lista | sí | calidad verificable |
| $prompt_guia | Encuentra y corrige todas las consultas SQL concatenadas de mi código con prepared statements | texto | no | "Inyección SQL" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cero concatenación en consultas (grep verificado)
- [ ] Los payloads de prueba no alteran la consulta

## Ejemplos de prompts

- "Encuentra y corrige todas las consultas SQL concatenadas de mi código con prepared statements"
- "Aplica Inyección SQL (nivel basico) a mi trabajo actual con Seguridad web en PHP: prioriza Cero concatenación en consultas (grep verificado)"
- "Revisa mi php-seguridad y dime qué pasos de Inyección SQL me faltan en este nivel"