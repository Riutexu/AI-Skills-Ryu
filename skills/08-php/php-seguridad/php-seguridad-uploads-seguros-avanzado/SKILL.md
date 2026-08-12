---
name: php-seguridad-uploads-seguros-avanzado
description: Subidas de archivos seguras · nivel Avanzado · Seguridad web en PHP. Subidas sin sorpresas: validación real, almacenamiento aislado y ejecución impedida. Objetivo del nivel: defensa de subidas
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "uploads-seguros"
  nivel: avanzado
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Subidas de archivos seguras — Avanzado

## Qué hace este skill

Subidas sin sorpresas: validación real, almacenamiento aislado y ejecución impedida. En este nivel se entrega: **defensa de subidas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Subidas de archivos seguras** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Sanear imágenes (re-encode) contra polyglots
2. Limitar tipos por contexto con política
3. Escanear virus si el proveedor lo permite
4. Controlar cuotas y límites por usuario

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | defensa de subidas | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Sanear imágenes (re-encode) contra polyglots · Limitar tipos por contexto con política · Escanear virus si el proveedor lo permite · Controlar cuotas y límites por usuario | lista | sí | 3-4 pasos |
| $criterios_clave | Las imágenes se re-encodifican en subida · Las cuotas por usuario se respetan | lista | sí | calidad verificable |
| $prompt_guia | Endurece mis subidas: re-encode de imágenes, política de tipos y cuotas | texto | no | "Subidas de archivos seguras" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las imágenes se re-encodifican en subida
- [ ] Las cuotas por usuario se respetan

## Ejemplos de prompts

- "Endurece mis subidas: re-encode de imágenes, política de tipos y cuotas"
- "Aplica Subidas de archivos seguras (nivel avanzado) a mi trabajo actual con Seguridad web en PHP: prioriza Las imágenes se re-encodifican en subida"
- "Revisa mi php-seguridad y dime qué pasos de Subidas de archivos seguras me faltan en este nivel"