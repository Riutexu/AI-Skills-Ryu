---
name: android-produccion-rollout-alfa-beta-avanzado
description: Rollout alfa, beta y staged · nivel Avanzado · Publicación y producción Android. Lanza gradualmente con alfa, beta y rollout staged. Objetivo del nivel: Rollout staged y monitoreo durante el rollout.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "rollout-alfa-beta"
  nivel: avanzado
  stack: "Play Store, firmas, CI, testing, releases"
---

# Rollout alfa, beta y staged — Avanzado

## Qué hace este skill

Lanza gradualmente con alfa, beta y rollout staged. En este nivel se entrega: **Rollout staged y monitoreo durante el rollout.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rollout alfa, beta y staged** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Iniciar el rollout staged en Play
2. Monitorear los crashes durante el rollout
3. Pausar y revertir el rollout
4. Subir el porcentaje gradualmente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Rollout staged y monitoreo durante el rollout. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Iniciar el rollout staged en Play · Monitorear los crashes durante el rollout · Pausar y revertir el rollout · Subir el porcentaje gradualmente | lista | sí | 3-4 pasos |
| $criterios_clave | El rollout staged se monitorea · La reversión funciona ante incidentes | lista | sí | calidad verificable |
| $prompt_guia | Lanzá Ryutify con rollout staged al 10% y monitoreá los crashes antes de subir al 100%. | texto | no | "Rollout alfa, beta y staged" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El rollout staged se monitorea
- [ ] La reversión funciona ante incidentes

## Ejemplos de prompts

- "Lanzá Ryutify con rollout staged al 10% y monitoreá los crashes antes de subir al 100%."
- "Aplica Rollout alfa, beta y staged (nivel avanzado) a mi trabajo actual con Publicación y producción Android: prioriza El rollout staged se monitorea"
- "Revisa mi android-produccion y dime qué pasos de Rollout alfa, beta y staged me faltan en este nivel"