---
name: php-seguridad-session-hardening-avanzado
description: Endurecimiento de sesiones · nivel Avanzado · Seguridad web en PHP. Sesiones que resisten: flags, rotación, fijación y almacenamiento seguro. Objetivo del nivel: anti-fijación y robo
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "session-hardening"
  nivel: avanzado
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Endurecimiento de sesiones — Avanzado

## Qué hace este skill

Sesiones que resisten: flags, rotación, fijación y almacenamiento seguro. En este nivel se entrega: **anti-fijación y robo**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Endurecimiento de sesiones** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Proteger contra fijación de sesión (rotación + validación)
2. Almacenar sesiones en Redis/BD para multi-server
3. Detectar secuestro (fingerprint suave) con precaución
4. Expirar sesiones por inactividad y absoluto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | anti-fijación y robo | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Proteger contra fijación de sesión (rotación + validación) · Almacenar sesiones en Redis/BD para multi-server · Detectar secuestro (fingerprint suave) con precaución · Expirar sesiones por inactividad y absoluto | lista | sí | 3-4 pasos |
| $criterios_clave | La fijación de sesión falla en prueba · Las sesiones se comparten entre servidores | lista | sí | calidad verificable |
| $prompt_guia | Endurece mis sesiones: anti-fijación, almacenamiento compartido y expiración | texto | no | "Endurecimiento de sesiones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La fijación de sesión falla en prueba
- [ ] Las sesiones se comparten entre servidores

## Ejemplos de prompts

- "Endurece mis sesiones: anti-fijación, almacenamiento compartido y expiración"
- "Aplica Endurecimiento de sesiones (nivel avanzado) a mi trabajo actual con Seguridad web en PHP: prioriza La fijación de sesión falla en prueba"
- "Revisa mi php-seguridad y dime qué pasos de Endurecimiento de sesiones me faltan en este nivel"