---
name: php-seguridad-passwords-argon2-profesional
description: Contraseñas con Argon2ID · nivel Profesional · Seguridad web en PHP. Almacenar contraseñas con el estándar moderno: Argon2ID, costes y políticas de rotación. Objetivo del nivel: gestión de credenciales
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "passwords-argon2"
  nivel: profesional
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Contraseñas con Argon2ID — Profesional

## Qué hace este skill

Almacenar contraseñas con el estándar moderno: Argon2ID, costes y políticas de rotación. En este nivel se entrega: **gestión de credenciales**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Contraseñas con Argon2ID** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la política de contraseñas de la plataforma
2. Implementar bloqueo por ataques a cuentas (lockout + notificación)
3. Gestionar reset con tokens seguros y expiración
4. Auditar la migración de hashes heredados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | gestión de credenciales | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Diseñar la política de contraseñas de la plataforma · Implementar bloqueo por ataques a cuentas (lockout + notificación) · Gestionar reset con tokens seguros y expiración · Auditar la migración de hashes heredados | lista | sí | 3-4 pasos |
| $criterios_clave | La política de contraseñas está documentada y aplicada · La migración de hashes heredados está completa y probada | lista | sí | calidad verificable |
| $prompt_guia | Diseña la gestión de credenciales de mi plataforma: política, lockout, reset seguro y migración de hashes | texto | no | "Contraseñas con Argon2ID" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La política de contraseñas está documentada y aplicada
- [ ] La migración de hashes heredados está completa y probada

## Ejemplos de prompts

- "Diseña la gestión de credenciales de mi plataforma: política, lockout, reset seguro y migración de hashes"
- "Aplica Contraseñas con Argon2ID (nivel profesional) a mi trabajo actual con Seguridad web en PHP: prioriza La política de contraseñas está documentada y aplicada"
- "Revisa mi php-seguridad y dime qué pasos de Contraseñas con Argon2ID me faltan en este nivel"