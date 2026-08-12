---
name: php-seguridad-uploads-seguros-basico
description: Subidas de archivos seguras · nivel Básico · Seguridad web en PHP. Subidas sin sorpresas: validación real, almacenamiento aislado y ejecución impedida. Objetivo del nivel: validar subidas básicas
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "uploads-seguros"
  nivel: basico
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Subidas de archivos seguras — Básico

## Qué hace este skill

Subidas sin sorpresas: validación real, almacenamiento aislado y ejecución impedida. En este nivel se entrega: **validar subidas básicas**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Subidas de archivos seguras** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Validar tamaño y tipo real del archivo
2. Guardar con nombres aleatorios y extensión segura
3. Servir desde una ruta sin ejecución

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | validar subidas básicas | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Validar tamaño y tipo real del archivo · Guardar con nombres aleatorios y extensión segura · Servir desde una ruta sin ejecución | lista | sí | 3-4 pasos |
| $criterios_clave | El tipo se valida por contenido, no solo extensión · La carpeta de subidas no ejecuta scripts | lista | sí | calidad verificable |
| $prompt_guia | Valida las subidas de mi app por contenido, renombra y sirve sin ejecución | texto | no | "Subidas de archivos seguras" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El tipo se valida por contenido, no solo extensión
- [ ] La carpeta de subidas no ejecuta scripts

## Ejemplos de prompts

- "Valida las subidas de mi app por contenido, renombra y sirve sin ejecución"
- "Aplica Subidas de archivos seguras (nivel basico) a mi trabajo actual con Seguridad web en PHP: prioriza El tipo se valida por contenido, no solo extensión"
- "Revisa mi php-seguridad y dime qué pasos de Subidas de archivos seguras me faltan en este nivel"