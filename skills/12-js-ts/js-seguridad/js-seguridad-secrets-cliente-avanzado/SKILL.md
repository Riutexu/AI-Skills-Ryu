---
name: js-seguridad-secrets-cliente-avanzado
description: Secrets del cliente · nivel Avanzado · Seguridad web JS. Mantenés los secretos fuera del frontend: nada sensible debe viajar en el bundle. Objetivo del nivel: Gestionar claves públicas y firmas sin exponer secretos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "secrets-cliente"
  nivel: avanzado
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Secrets del cliente — Avanzado

## Qué hace este skill

Mantenés los secretos fuera del frontend: nada sensible debe viajar en el bundle. En este nivel se entrega: **Gestionar claves públicas y firmas sin exponer secretos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Secrets del cliente** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Separar claves públicas de privadas
2. Usar firmas y nonces de corta duración
3. Manejar la rotación de claves expuestas
4. Auditar los archivos de entorno y su gitignore

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Gestionar claves públicas y firmas sin exponer secretos | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Separar claves públicas de privadas · Usar firmas y nonces de corta duración · Manejar la rotación de claves expuestas · Auditar los archivos de entorno y su gitignore | lista | sí | 3-4 pasos |
| $criterios_clave | Solo las claves públicas llegan al cliente · Las claves expuestas se rotan | lista | sí | calidad verificable |
| $prompt_guia | La key pública de mapas se filtra cada tanto: centralizá su emisión por el backend, usá firmas de corta duración para los servicios y documentá la rotación. | texto | no | "Secrets del cliente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Solo las claves públicas llegan al cliente
- [ ] Las claves expuestas se rotan

## Ejemplos de prompts

- "La key pública de mapas se filtra cada tanto: centralizá su emisión por el backend, usá firmas de corta duración para los servicios y documentá la rotación."
- "Aplica Secrets del cliente (nivel avanzado) a mi trabajo actual con Seguridad web JS: prioriza Solo las claves públicas llegan al cliente"
- "Revisa mi js-seguridad y dime qué pasos de Secrets del cliente me faltan en este nivel"