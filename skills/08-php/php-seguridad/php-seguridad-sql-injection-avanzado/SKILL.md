---
name: php-seguridad-sql-injection-avanzado
description: Inyección SQL · nivel Avanzado · Seguridad web en PHP. Erradicar SQLi: prepared statements, escapes y defensa del acceso a datos. Objetivo del nivel: defensa profunda de datos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "sql-injection"
  nivel: avanzado
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Inyección SQL — Avanzado

## Qué hace este skill

Erradicar SQLi: prepared statements, escapes y defensa del acceso a datos. En este nivel se entrega: **defensa profunda de datos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Inyección SQL** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Proteger identificadores y orden dinámicos (whitelist)
2. Configurar la BD con privilegios mínimos
3. Evitar fugas de errores de BD
4. Manejar entradas de búsqueda/orden seguras

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | defensa profunda de datos | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Proteger identificadores y orden dinámicos (whitelist) · Configurar la BD con privilegios mínimos · Evitar fugas de errores de BD · Manejar entradas de búsqueda/orden seguras | lista | sí | 3-4 pasos |
| $criterios_clave | Los identificadores dinámicos pasan por whitelist · El usuario de BD solo tiene privilegios necesarios | lista | sí | calidad verificable |
| $prompt_guia | Endurece mi capa de datos: whitelist de identificadores, privilegios mínimos y sin fugas de errores | texto | no | "Inyección SQL" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los identificadores dinámicos pasan por whitelist
- [ ] El usuario de BD solo tiene privilegios necesarios

## Ejemplos de prompts

- "Endurece mi capa de datos: whitelist de identificadores, privilegios mínimos y sin fugas de errores"
- "Aplica Inyección SQL (nivel avanzado) a mi trabajo actual con Seguridad web en PHP: prioriza Los identificadores dinámicos pasan por whitelist"
- "Revisa mi php-seguridad y dime qué pasos de Inyección SQL me faltan en este nivel"