---
name: php-seguridad-xss-prevencion-avanzado
description: XSS y CSP · nivel Avanzado · Seguridad web en PHP. Erradicar XSS: escape por contexto, CSP estricto y políticas de salida. Objetivo del nivel: CSP y sanitización
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "xss-prevencion"
  nivel: avanzado
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# XSS y CSP — Avanzado

## Qué hace este skill

Erradicar XSS: escape por contexto, CSP estricto y políticas de salida. En este nivel se entrega: **CSP y sanitización**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **XSS y CSP** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar CSP estricto (default-src, script-src no unsafe)
2. Sanear HTML de usuarios con una librería (HTMLPurifier)
3. Proteger contextos JS/URL/atributos específicos
4. Manejar excepciones de CSP sin romper funcionalidad

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | CSP y sanitización | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Configurar CSP estricto (default-src, script-src no unsafe) · Sanear HTML de usuarios con una librería (HTMLPurifier) · Proteger contextos JS/URL/atributos específicos · Manejar excepciones de CSP sin romper funcionalidad | lista | sí | 3-4 pasos |
| $criterios_clave | El CSP bloquea scripts inline en pruebas · El HTML de usuario se sanea y renderiza seguro | lista | sí | calidad verificable |
| $prompt_guia | Implementa CSP estricto y saneamiento HTML de usuarios en mi app | texto | no | "XSS y CSP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El CSP bloquea scripts inline en pruebas
- [ ] El HTML de usuario se sanea y renderiza seguro

## Ejemplos de prompts

- "Implementa CSP estricto y saneamiento HTML de usuarios en mi app"
- "Aplica XSS y CSP (nivel avanzado) a mi trabajo actual con Seguridad web en PHP: prioriza El CSP bloquea scripts inline en pruebas"
- "Revisa mi php-seguridad y dime qué pasos de XSS y CSP me faltan en este nivel"