---
name: php-seguridad-auditoria-logs-seguridad-basico
description: Auditoría y logs de seguridad · nivel Básico · Seguridad web en PHP. Registrar lo que importa: eventos de acceso, cambios sensibles y alertas útiles. Objetivo del nivel: logs de eventos clave
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "auditoria-logs-seguridad"
  nivel: basico
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Auditoría y logs de seguridad — Básico

## Qué hace este skill

Registrar lo que importa: eventos de acceso, cambios sensibles y alertas útiles. En este nivel se entrega: **logs de eventos clave**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Auditoría y logs de seguridad** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Loguear login/logout y fallos
2. Registrar cambios sensibles (permisos, pagos)
3. Retener logs con fecha y usuario

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | logs de eventos clave | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Loguear login/logout y fallos · Registrar cambios sensibles (permisos, pagos) · Retener logs con fecha y usuario | lista | sí | 3-4 pasos |
| $criterios_clave | Los eventos de acceso quedan registrados · La retención de logs está configurada | lista | sí | calidad verificable |
| $prompt_guia | Añade logs de eventos de acceso y cambios sensibles a mi app | texto | no | "Auditoría y logs de seguridad" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los eventos de acceso quedan registrados
- [ ] La retención de logs está configurada

## Ejemplos de prompts

- "Añade logs de eventos de acceso y cambios sensibles a mi app"
- "Aplica Auditoría y logs de seguridad (nivel basico) a mi trabajo actual con Seguridad web en PHP: prioriza Los eventos de acceso quedan registrados"
- "Revisa mi php-seguridad y dime qué pasos de Auditoría y logs de seguridad me faltan en este nivel"