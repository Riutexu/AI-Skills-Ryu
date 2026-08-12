---
name: php-seguridad-secretos-configuracion-avanzado
description: Secretos y configuración · nivel Avanzado · Seguridad web en PHP. Secretos que nunca se filtran: variables de entorno, gestores y políticas de rotación. Objetivo del nivel: gestión de secretos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "secretos-configuracion"
  nivel: avanzado
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Secretos y configuración — Avanzado

## Qué hace este skill

Secretos que nunca se filtran: variables de entorno, gestores y políticas de rotación. En este nivel se entrega: **gestión de secretos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Secretos y configuración** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar un gestor de secretos (Vault/Secret Manager)
2. Cifrar secretos en repos de CI
3. Rotar secretos con procedimiento
4. Proteger configs por entorno

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | gestión de secretos | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Usar un gestor de secretos (Vault/Secret Manager) · Cifrar secretos en repos de CI · Rotar secretos con procedimiento · Proteger configs por entorno | lista | sí | 3-4 pasos |
| $criterios_clave | Los secretos de CI vienen del gestor · La rotación de secretos está probada | lista | sí | calidad verificable |
| $prompt_guia | Gestiona mis secretos con un gestor real y rotación probada | texto | no | "Secretos y configuración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los secretos de CI vienen del gestor
- [ ] La rotación de secretos está probada

## Ejemplos de prompts

- "Gestiona mis secretos con un gestor real y rotación probada"
- "Aplica Secretos y configuración (nivel avanzado) a mi trabajo actual con Seguridad web en PHP: prioriza Los secretos de CI vienen del gestor"
- "Revisa mi php-seguridad y dime qué pasos de Secretos y configuración me faltan en este nivel"