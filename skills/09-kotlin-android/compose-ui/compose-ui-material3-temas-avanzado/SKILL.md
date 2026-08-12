---
name: compose-ui-material3-temas-avanzado
description: Material 3 y temas · nivel Avanzado · Jetpack Compose: UI declarativa. Temas dinámicos y diseño consistente con Material 3. Objetivo del nivel: Temas por pantalla y personalización de componentes.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "material3-temas"
  nivel: avanzado
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Material 3 y temas — Avanzado

## Qué hace este skill

Temas dinámicos y diseño consistente con Material 3. En este nivel se entrega: **Temas por pantalla y personalización de componentes.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Material 3 y temas** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Aplicar un tema derivado en la pantalla de reproducción
2. Personalizar componentes Material con defaults
3. Usar composición local para el tema dinámico
4. Respetar la configuración de accesibilidad de tamaño de fuente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Temas por pantalla y personalización de componentes. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Aplicar un tema derivado en la pantalla de reproducción · Personalizar componentes Material con defaults · Usar composición local para el tema dinámico · Respetar la configuración de accesibilidad de tamaño de fuente | lista | sí | 3-4 pasos |
| $criterios_clave | La pantalla de reproducción usa el tema del álbum sin fugas a otras pantallas · El tamaño de fuente del sistema se respeta | lista | sí | calidad verificable |
| $prompt_guia | La pantalla del player de Ryutify debería tomar los colores de la portada. Implementá un tema derivado por composición local sin afectar al resto. | texto | no | "Material 3 y temas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La pantalla de reproducción usa el tema del álbum sin fugas a otras pantallas
- [ ] El tamaño de fuente del sistema se respeta

## Ejemplos de prompts

- "La pantalla del player de Ryutify debería tomar los colores de la portada. Implementá un tema derivado por composición local sin afectar al resto."
- "Aplica Material 3 y temas (nivel avanzado) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza La pantalla de reproducción usa el tema del álbum sin fugas a otras pantallas"
- "Revisa mi compose-ui y dime qué pasos de Material 3 y temas me faltan en este nivel"