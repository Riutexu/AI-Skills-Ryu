---
name: php-seguridad-dependencias-seguras-basico
description: Dependencias y suministro · nivel Básico · Seguridad web en PHP. Cadena de suministro: auditoría de dependencias, pinning y abastecimiento seguro. Objetivo del nivel: auditar dependencias
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "dependencias-seguras"
  nivel: basico
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Dependencias y suministro — Básico

## Qué hace este skill

Cadena de suministro: auditoría de dependencias, pinning y abastecimiento seguro. En este nivel se entrega: **auditar dependencias**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Dependencias y suministro** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Correr composer audit y entender los reportes
2. Actualizar dependencias con criterio (minor/patch)
3. Evitar instalar paquetes desconocidos

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | auditar dependencias | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Correr composer audit y entender los reportes · Actualizar dependencias con criterio (minor/patch) · Evitar instalar paquetes desconocidos | lista | sí | 3-4 pasos |
| $criterios_clave | composer audit no reporta críticos sin plan · Las actualizaciones van en commits revisados | lista | sí | calidad verificable |
| $prompt_guia | Audita mis dependencias con composer audit y define el plan de actualización | texto | no | "Dependencias y suministro" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] composer audit no reporta críticos sin plan
- [ ] Las actualizaciones van en commits revisados

## Ejemplos de prompts

- "Audita mis dependencias con composer audit y define el plan de actualización"
- "Aplica Dependencias y suministro (nivel basico) a mi trabajo actual con Seguridad web en PHP: prioriza composer audit no reporta críticos sin plan"
- "Revisa mi php-seguridad y dime qué pasos de Dependencias y suministro me faltan en este nivel"