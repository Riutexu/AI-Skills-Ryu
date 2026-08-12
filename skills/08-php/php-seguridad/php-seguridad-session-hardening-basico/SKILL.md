---
name: php-seguridad-session-hardening-basico
description: Endurecimiento de sesiones · nivel Básico · Seguridad web en PHP. Sesiones que resisten: flags, rotación, fijación y almacenamiento seguro. Objetivo del nivel: flags básicos de sesión
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "session-hardening"
  nivel: basico
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Endurecimiento de sesiones — Básico

## Qué hace este skill

Sesiones que resisten: flags, rotación, fijación y almacenamiento seguro. En este nivel se entrega: **flags básicos de sesión**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Endurecimiento de sesiones** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar httponly y samesite
2. Establecer timeouts de sesión
3. Usar session_regenerate_id tras login

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | flags básicos de sesión | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Configurar httponly y samesite · Establecer timeouts de sesión · Usar session_regenerate_id tras login | lista | sí | 3-4 pasos |
| $criterios_clave | Los flags de cookie están activos · La rotación tras login está presente | lista | sí | calidad verificable |
| $prompt_guia | Configura los flags y rotación de sesión de mi app tras login | texto | no | "Endurecimiento de sesiones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los flags de cookie están activos
- [ ] La rotación tras login está presente

## Ejemplos de prompts

- "Configura los flags y rotación de sesión de mi app tras login"
- "Aplica Endurecimiento de sesiones (nivel basico) a mi trabajo actual con Seguridad web en PHP: prioriza Los flags de cookie están activos"
- "Revisa mi php-seguridad y dime qué pasos de Endurecimiento de sesiones me faltan en este nivel"