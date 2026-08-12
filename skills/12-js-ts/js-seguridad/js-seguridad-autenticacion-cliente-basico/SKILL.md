---
name: js-seguridad-autenticacion-cliente-basico
description: Autenticación en el cliente · nivel Básico · Seguridad web JS. Manejás la sesión y las credenciales en el cliente sin exponer secretos. Objetivo del nivel: Manejar sesión y logout de forma segura
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "autenticacion-cliente"
  nivel: basico
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Autenticación en el cliente — Básico

## Qué hace este skill

Manejás la sesión y las credenciales en el cliente sin exponer secretos. En este nivel se entrega: **Manejar sesión y logout de forma segura**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Autenticación en el cliente** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Almacenar la sesión en memoria y no en localStorage
2. Agregar la sesión a los requests con el header correcto
3. Implementar logout que elimine la sesión del servidor
4. Manejar la expiración de sesión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Manejar sesión y logout de forma segura | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Almacenar la sesión en memoria y no en localStorage · Agregar la sesión a los requests con el header correcto · Implementar logout que elimine la sesión del servidor · Manejar la expiración de sesión | lista | sí | 3-4 pasos |
| $criterios_clave | La sesión no vive en localStorage · El logout elimina la sesión del servidor | lista | sí | calidad verificable |
| $prompt_guia | La sesión de la SPA quedaba en localStorage: movela a memoria, agregala a los requests con el header correcto y hacé que el logout elimine la sesión del server. | texto | no | "Autenticación en el cliente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La sesión no vive en localStorage
- [ ] El logout elimina la sesión del servidor

## Ejemplos de prompts

- "La sesión de la SPA quedaba en localStorage: movela a memoria, agregala a los requests con el header correcto y hacé que el logout elimine la sesión del server."
- "Aplica Autenticación en el cliente (nivel basico) a mi trabajo actual con Seguridad web JS: prioriza La sesión no vive en localStorage"
- "Revisa mi js-seguridad y dime qué pasos de Autenticación en el cliente me faltan en este nivel"