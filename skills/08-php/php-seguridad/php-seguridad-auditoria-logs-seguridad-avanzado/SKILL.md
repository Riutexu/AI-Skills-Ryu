---
name: php-seguridad-auditoria-logs-seguridad-avanzado
description: Auditoría y logs de seguridad · nivel Avanzado · Seguridad web en PHP. Registrar lo que importa: eventos de acceso, cambios sensibles y alertas útiles. Objetivo del nivel: pista de auditoría
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "auditoria-logs-seguridad"
  nivel: avanzado
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Auditoría y logs de seguridad — Avanzado

## Qué hace este skill

Registrar lo que importa: eventos de acceso, cambios sensibles y alertas útiles. En este nivel se entrega: **pista de auditoría**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Auditoría y logs de seguridad** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la pista de auditoría (quién, qué, cuándo, contexto)
2. Proteger los logs de manipulación (append-only)
3. Correlacionar eventos por sesión/request
4. Alertar patrones anómalos básicos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | pista de auditoría | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Diseñar la pista de auditoría (quién, qué, cuándo, contexto) · Proteger los logs de manipulación (append-only) · Correlacionar eventos por sesión/request · Alertar patrones anómalos básicos | lista | sí | 3-4 pasos |
| $criterios_clave | La pista de auditoría es completa en acciones críticas · Los logs son inmutables en producción | lista | sí | calidad verificable |
| $prompt_guia | Diseña la pista de auditoría de mi plataforma con logs inmutables | texto | no | "Auditoría y logs de seguridad" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La pista de auditoría es completa en acciones críticas
- [ ] Los logs son inmutables en producción

## Ejemplos de prompts

- "Diseña la pista de auditoría de mi plataforma con logs inmutables"
- "Aplica Auditoría y logs de seguridad (nivel avanzado) a mi trabajo actual con Seguridad web en PHP: prioriza La pista de auditoría es completa en acciones críticas"
- "Revisa mi php-seguridad y dime qué pasos de Auditoría y logs de seguridad me faltan en este nivel"