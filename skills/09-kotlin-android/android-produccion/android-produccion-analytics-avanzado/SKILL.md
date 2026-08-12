---
name: android-produccion-analytics-avanzado
description: Analytics y eventos · nivel Avanzado · Publicación y producción Android. Mide el uso real del producto con eventos bien diseñados. Objetivo del nivel: Eventos bien diseñados y consistentes.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "analytics"
  nivel: avanzado
  stack: "Play Store, firmas, CI, testing, releases"
---

# Analytics y eventos — Avanzado

## Qué hace este skill

Mide el uso real del producto con eventos bien diseñados. En este nivel se entrega: **Eventos bien diseñados y consistentes.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Analytics y eventos** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el esquema de eventos del producto
2. Agregar los parámetros a los eventos
3. Versionar los eventos ante cambios
4. Documentar el diccionario de eventos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Eventos bien diseñados y consistentes. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Definir el esquema de eventos del producto · Agregar los parámetros a los eventos · Versionar los eventos ante cambios · Documentar el diccionario de eventos | lista | sí | 3-4 pasos |
| $criterios_clave | El esquema de eventos está documentado · Los eventos versionados no se rompen | lista | sí | calidad verificable |
| $prompt_guia | Quiero un esquema de eventos consistente para Ryutify: diccionario, parámetros y versionado de los cambios. | texto | no | "Analytics y eventos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El esquema de eventos está documentado
- [ ] Los eventos versionados no se rompen

## Ejemplos de prompts

- "Quiero un esquema de eventos consistente para Ryutify: diccionario, parámetros y versionado de los cambios."
- "Aplica Analytics y eventos (nivel avanzado) a mi trabajo actual con Publicación y producción Android: prioriza El esquema de eventos está documentado"
- "Revisa mi android-produccion y dime qué pasos de Analytics y eventos me faltan en este nivel"