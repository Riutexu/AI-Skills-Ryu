---
name: php-seguridad-dependencias-seguras-avanzado
description: Dependencias y suministro · nivel Avanzado · Seguridad web en PHP. Cadena de suministro: auditoría de dependencias, pinning y abastecimiento seguro. Objetivo del nivel: pinning y lock
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "dependencias-seguras"
  nivel: avanzado
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Dependencias y suministro — Avanzado

## Qué hace este skill

Cadena de suministro: auditoría de dependencias, pinning y abastecimiento seguro. En este nivel se entrega: **pinning y lock**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Dependencias y suministro** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mantener el lock y su integridad
2. Configurar rangos de versión conservadores
3. Evaluar el mantenimiento de cada paquete crítico
4. Revisar dependencias transitivas en el árbol

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | pinning y lock | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Mantener el lock y su integridad · Configurar rangos de versión conservadores · Evaluar el mantenimiento de cada paquete crítico · Revisar dependencias transitivas en el árbol | lista | sí | 3-4 pasos |
| $criterios_clave | El lock está versionado y reproducible · Los paquetes críticos tienen evaluación de mantenimiento | lista | sí | calidad verificable |
| $prompt_guia | Endurece mi cadena de suministro: lock íntegro, rangos conservadores y evaluación de paquetes críticos | texto | no | "Dependencias y suministro" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El lock está versionado y reproducible
- [ ] Los paquetes críticos tienen evaluación de mantenimiento

## Ejemplos de prompts

- "Endurece mi cadena de suministro: lock íntegro, rangos conservadores y evaluación de paquetes críticos"
- "Aplica Dependencias y suministro (nivel avanzado) a mi trabajo actual con Seguridad web en PHP: prioriza El lock está versionado y reproducible"
- "Revisa mi php-seguridad y dime qué pasos de Dependencias y suministro me faltan en este nivel"