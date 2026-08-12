---
name: android-produccion-firmas-keystores-avanzado
description: Firmas y keystores · nivel Avanzado · Publicación y producción Android. Firma tu app con seguridad y sin perder la clave jamás. Objetivo del nivel: Seguridad del keystore y rotación de claves.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "firmas-keystores"
  nivel: avanzado
  stack: "Play Store, firmas, CI, testing, releases"
---

# Firmas y keystores — Avanzado

## Qué hace este skill

Firma tu app con seguridad y sin perder la clave jamás. En este nivel se entrega: **Seguridad del keystore y rotación de claves.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Firmas y keystores** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Guardar el keystore de forma segura
2. Usar las variables de entorno para las contraseñas
3. Configurar la firma por tipo de build
4. Entender la rotación de claves de Play

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Seguridad del keystore y rotación de claves. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Guardar el keystore de forma segura · Usar las variables de entorno para las contraseñas · Configurar la firma por tipo de build · Entender la rotación de claves de Play | lista | sí | 3-4 pasos |
| $criterios_clave | Las contraseñas no están en el repositorio · La clave de firma está respaldada | lista | sí | calidad verificable |
| $prompt_guia | El keystore de Ryutify está en el repo con la contraseña. Sacalo, usá variables de entorno y definí el respaldo seguro. | texto | no | "Firmas y keystores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las contraseñas no están en el repositorio
- [ ] La clave de firma está respaldada

## Ejemplos de prompts

- "El keystore de Ryutify está en el repo con la contraseña. Sacalo, usá variables de entorno y definí el respaldo seguro."
- "Aplica Firmas y keystores (nivel avanzado) a mi trabajo actual con Publicación y producción Android: prioriza Las contraseñas no están en el repositorio"
- "Revisa mi android-produccion y dime qué pasos de Firmas y keystores me faltan en este nivel"