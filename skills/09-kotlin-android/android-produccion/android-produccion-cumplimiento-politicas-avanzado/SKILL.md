---
name: android-produccion-cumplimiento-politicas-avanzado
description: Cumplimiento y políticas · nivel Avanzado · Publicación y producción Android. Políticas de Play, privacidad y licencias en orden. Objetivo del nivel: Privacidad, permisos sensibles y licencias.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "cumplimiento-politicas"
  nivel: avanzado
  stack: "Play Store, firmas, CI, testing, releases"
---

# Cumplimiento y políticas — Avanzado

## Qué hace este skill

Políticas de Play, privacidad y licencias en orden. En este nivel se entrega: **Privacidad, permisos sensibles y licencias.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Cumplimiento y políticas** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Documentar el uso de los permisos
2. Completar el formulario de datos del usuario
3. Incluir las licencias de las librerías
4. Manejar el consentimiento de datos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Privacidad, permisos sensibles y licencias. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Documentar el uso de los permisos · Completar el formulario de datos del usuario · Incluir las licencias de las librerías · Manejar el consentimiento de datos | lista | sí | 3-4 pasos |
| $criterios_clave | El formulario de datos está completo · Las licencias se muestran en la app | lista | sí | calidad verificable |
| $prompt_guia | Completá el cumplimiento de Ryutify: formulario de datos de usuario, justificación de permisos y licencias de librerías. | texto | no | "Cumplimiento y políticas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El formulario de datos está completo
- [ ] Las licencias se muestran en la app

## Ejemplos de prompts

- "Completá el cumplimiento de Ryutify: formulario de datos de usuario, justificación de permisos y licencias de librerías."
- "Aplica Cumplimiento y políticas (nivel avanzado) a mi trabajo actual con Publicación y producción Android: prioriza El formulario de datos está completo"
- "Revisa mi android-produccion y dime qué pasos de Cumplimiento y políticas me faltan en este nivel"