---
name: compose-ui-material3-temas-basico
description: Material 3 y temas · nivel Básico · Jetpack Compose: UI declarativa. Temas dinámicos y diseño consistente con Material 3. Objetivo del nivel: Configurar el tema Material 3 de la app.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "material3-temas"
  nivel: basico
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Material 3 y temas — Básico

## Qué hace este skill

Temas dinámicos y diseño consistente con Material 3. En este nivel se entrega: **Configurar el tema Material 3 de la app.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Material 3 y temas** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la paleta de colores de Ryutify
2. Crear el tema claro y el oscuro con MaterialTheme
3. Usar typography y shapes del tema
4. Aplicar dynamic color en Android 12 y superiores

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar el tema Material 3 de la app. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Definir la paleta de colores de Ryutify · Crear el tema claro y el oscuro con MaterialTheme · Usar typography y shapes del tema · Aplicar dynamic color en Android 12 y superiores | lista | sí | 3-4 pasos |
| $criterios_clave | La app respeta el tema claro y oscuro definido · Los componentes usan los estilos del tema | lista | sí | calidad verificable |
| $prompt_guia | Definí el tema de Ryutify con Material 3: paleta propia, dark mode y dynamic color en Android 12 y superiores. | texto | no | "Material 3 y temas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La app respeta el tema claro y oscuro definido
- [ ] Los componentes usan los estilos del tema

## Ejemplos de prompts

- "Definí el tema de Ryutify con Material 3: paleta propia, dark mode y dynamic color en Android 12 y superiores."
- "Aplica Material 3 y temas (nivel basico) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza La app respeta el tema claro y oscuro definido"
- "Revisa mi compose-ui y dime qué pasos de Material 3 y temas me faltan en este nivel"