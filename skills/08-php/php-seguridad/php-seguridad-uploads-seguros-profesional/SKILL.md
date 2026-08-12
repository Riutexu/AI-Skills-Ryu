---
name: php-seguridad-uploads-seguros-profesional
description: Subidas de archivos seguras · nivel Profesional · Seguridad web en PHP. Subidas sin sorpresas: validación real, almacenamiento aislado y ejecución impedida. Objetivo del nivel: almacenamiento de archivos a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "uploads-seguros"
  nivel: profesional
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Subidas de archivos seguras — Profesional

## Qué hace este skill

Subidas sin sorpresas: validación real, almacenamiento aislado y ejecución impedida. En este nivel se entrega: **almacenamiento de archivos a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Subidas de archivos seguras** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el almacenamiento (local/S3) con URLs firmadas
2. Proteger el acceso con autorización por archivo
3. Gestionar expiración y limpieza de temporales
4. Auditar la cadena de subida completa

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | almacenamiento de archivos a escala | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Diseñar el almacenamiento (local/S3) con URLs firmadas · Proteger el acceso con autorización por archivo · Gestionar expiración y limpieza de temporales · Auditar la cadena de subida completa | lista | sí | 3-4 pasos |
| $criterios_clave | El acceso por URL firmada caduca y autoriza · La limpieza de temporales está automatizada | lista | sí | calidad verificable |
| $prompt_guia | Diseña mi capa de subidas a escala: S3 con URLs firmadas y autorización por archivo | texto | no | "Subidas de archivos seguras" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El acceso por URL firmada caduca y autoriza
- [ ] La limpieza de temporales está automatizada

## Ejemplos de prompts

- "Diseña mi capa de subidas a escala: S3 con URLs firmadas y autorización por archivo"
- "Aplica Subidas de archivos seguras (nivel profesional) a mi trabajo actual con Seguridad web en PHP: prioriza El acceso por URL firmada caduca y autoriza"
- "Revisa mi php-seguridad y dime qué pasos de Subidas de archivos seguras me faltan en este nivel"