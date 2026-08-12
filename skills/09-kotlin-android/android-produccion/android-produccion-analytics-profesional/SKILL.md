---
name: android-produccion-analytics-profesional
description: Analytics y eventos · nivel Profesional · Publicación y producción Android. Mide el uso real del producto con eventos bien diseñados. Objetivo del nivel: Cultura de datos del producto: métricas accionables.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "analytics"
  nivel: profesional
  stack: "Play Store, firmas, CI, testing, releases"
---

# Analytics y eventos — Profesional

## Qué hace este skill

Mide el uso real del producto con eventos bien diseñados. En este nivel se entrega: **Cultura de datos del producto: métricas accionables.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Analytics y eventos** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir las métricas de producto del negocio
2. Correlacionar analytics con telemetría técnica
3. Configurar los embudos de conversión
4. Revisar los datos en las decisiones de producto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Cultura de datos del producto: métricas accionables. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Definir las métricas de producto del negocio · Correlacionar analytics con telemetría técnica · Configurar los embudos de conversión · Revisar los datos en las decisiones de producto | lista | sí | 3-4 pasos |
| $criterios_clave | Las métricas de producto están definidas · Los embudos miden el recorrido del usuario | lista | sí | calidad verificable |
| $prompt_guia | Quiero métricas accionables para Ryutify: definí las métricas de producto, los embudos clave y la correlación con la telemetría. | texto | no | "Analytics y eventos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las métricas de producto están definidas
- [ ] Los embudos miden el recorrido del usuario

## Ejemplos de prompts

- "Quiero métricas accionables para Ryutify: definí las métricas de producto, los embudos clave y la correlación con la telemetría."
- "Aplica Analytics y eventos (nivel profesional) a mi trabajo actual con Publicación y producción Android: prioriza Las métricas de producto están definidas"
- "Revisa mi android-produccion y dime qué pasos de Analytics y eventos me faltan en este nivel"