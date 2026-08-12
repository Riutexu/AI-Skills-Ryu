---
name: php-seguridad-passwords-argon2-basico
description: Contraseñas con Argon2ID · nivel Básico · Seguridad web en PHP. Almacenar contraseñas con el estándar moderno: Argon2ID, costes y políticas de rotación. Objetivo del nivel: hash seguro con password_hash
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "passwords-argon2"
  nivel: basico
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Contraseñas con Argon2ID — Básico

## Qué hace este skill

Almacenar contraseñas con el estándar moderno: Argon2ID, costes y políticas de rotación. En este nivel se entrega: **hash seguro con password_hash**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Contraseñas con Argon2ID** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar password_hash con PASSWORD_ARGON2ID
2. Verificar con password_verify
3. Explicar por qué no se guardan en texto plano

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | hash seguro con password_hash | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Usar password_hash con PASSWORD_ARGON2ID · Verificar con password_verify · Explicar por qué no se guardan en texto plano | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún hash débil (md5/sha1) en el código · El flujo login/registro usa password_hash/verify | lista | sí | calidad verificable |
| $prompt_guia | Cambia el almacenamiento de contraseñas de mi app a password_hash con Argon2ID | texto | no | "Contraseñas con Argon2ID" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún hash débil (md5/sha1) en el código
- [ ] El flujo login/registro usa password_hash/verify

## Ejemplos de prompts

- "Cambia el almacenamiento de contraseñas de mi app a password_hash con Argon2ID"
- "Aplica Contraseñas con Argon2ID (nivel basico) a mi trabajo actual con Seguridad web en PHP: prioriza Ningún hash débil (md5/sha1) en el código"
- "Revisa mi php-seguridad y dime qué pasos de Contraseñas con Argon2ID me faltan en este nivel"