---
name: php8-core-sesiones-cookies-profesional
description: Sesiones y cookies · nivel Profesional · PHP 8.3: fundamentos profesionales. Estado de usuario en el navegador de forma segura: sesiones, cookies HttpOnly/SameSite y expiración. Objetivo del nivel: arquitectura de estado de sesión
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "sesiones-cookies"
  nivel: profesional
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Sesiones y cookies — Profesional

## Qué hace este skill

Estado de usuario en el navegador de forma segura: sesiones, cookies HttpOnly/SameSite y expiración. En este nivel se entrega: **arquitectura de estado de sesión**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Sesiones y cookies** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el contrato de sesión (qué se guarda server vs client-side)
2. Comparar sesiones tradicionales vs JWT/stateless con criterio
3. Implementar bloqueo de sesión y detección de robo (fingerprint suave)
4. Escalar sesiones con sharding o sesión distribuida
5. Auditar la política de cookies contra GDPR (consentimiento y expiraciones)

6. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
7. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | arquitectura de estado de sesión | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Diseñar el contrato de sesión (qué se guarda server vs client-side) · Comparar sesiones tradicionales vs JWT/stateless con criterio · Implementar bloqueo de sesión y detección de robo (fingerprint suave) · Escalar sesiones con sharding o sesión distribuida · Auditar la política de cookies contra GDPR (consentimiento y expiraciones) | lista | sí | 3-4 pasos |
| $criterios_clave | El análisis sesiones vs JWT está documentado según el caso de uso · La auditoría GDPR de cookies está resuelta | lista | sí | calidad verificable |
| $prompt_guia | Diseña la arquitectura de autenticación de mi app: sesiones vs JWT con análisis documentado y cumplimiento GDPR de cookies | texto | no | "Sesiones y cookies" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El análisis sesiones vs JWT está documentado según el caso de uso
- [ ] La auditoría GDPR de cookies está resuelta

## Ejemplos de prompts

- "Diseña la arquitectura de autenticación de mi app: sesiones vs JWT con análisis documentado y cumplimiento GDPR de cookies"
- "Aplica Sesiones y cookies (nivel profesional) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza El análisis sesiones vs JWT está documentado según el caso de uso"
- "Revisa mi php8-core y dime qué pasos de Sesiones y cookies me faltan en este nivel"