---
name: android-produccion-reduccion-tamano-avanzado
description: Reducción de tamaño del APK y AAB · nivel Avanzado · Publicación y producción Android. Baja el tamaño de Ryutify sin sacrificar features. Objetivo del nivel: Optimizaciones por densidad, ABI y recursos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "reduccion-tamano"
  nivel: avanzado
  stack: "Play Store, firmas, CI, testing, releases"
---

# Reducción de tamaño del APK y AAB — Avanzado

## Qué hace este skill

Baja el tamaño de Ryutify sin sacrificar features. En este nivel se entrega: **Optimizaciones por densidad, ABI y recursos.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Reducción de tamaño del APK y AAB** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar la división por ABI
2. Usar AAPT2 para recursos
3. Revisar las densidades de las imágenes
4. Comparar el tamaño por variante

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Optimizaciones por densidad, ABI y recursos. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Configurar la división por ABI · Usar AAPT2 para recursos · Revisar las densidades de las imágenes · Comparar el tamaño por variante | lista | sí | 3-4 pasos |
| $criterios_clave | La división por ABI funciona · El tamaño por variante está documentado | lista | sí | calidad verificable |
| $prompt_guia | Optimizá el tamaño de Ryutify: división por ABI, densidades de imágenes y comparación por variante. | texto | no | "Reducción de tamaño del APK y AAB" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La división por ABI funciona
- [ ] El tamaño por variante está documentado

## Ejemplos de prompts

- "Optimizá el tamaño de Ryutify: división por ABI, densidades de imágenes y comparación por variante."
- "Aplica Reducción de tamaño del APK y AAB (nivel avanzado) a mi trabajo actual con Publicación y producción Android: prioriza La división por ABI funciona"
- "Revisa mi android-produccion y dime qué pasos de Reducción de tamaño del APK y AAB me faltan en este nivel"