---
name: kotlin-core-tipos-nullability-profesional
description: Tipos y nullability · nivel Profesional · Kotlin moderno: fundamentos profesionales. Domina el sistema de tipos y la seguridad ante nulos, la raíz de los crash en Android. Objetivo del nivel: Definir la política de nullability del proyecto y eliminar bugs de nulos de forma sistemática.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "tipos-nullability"
  nivel: profesional
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Tipos y nullability — Profesional

## Qué hace este skill

Domina el sistema de tipos y la seguridad ante nulos, la raíz de los crash en Android. En este nivel se entrega: **Definir la política de nullability del proyecto y eliminar bugs de nulos de forma sistemática.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tipos y nullability** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Redactar la convención de nullability del equipo (bordes, defaults y errores)
2. Detectar la raíz de los nulos en la capa de red con modelos sellados
3. Reemplazar sentinelas (cadenas vacías, -1) por null o tipos sellados
4. Incorporar un chequeo en el CI que falle ante !! sin justificación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir la política de nullability del proyecto y eliminar bugs de nulos de forma sistemática. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Redactar la convención de nullability del equipo (bordes, defaults y errores) · Detectar la raíz de los nulos en la capa de red con modelos sellados · Reemplazar sentinelas (cadenas vacías, -1) por null o tipos sellados · Incorporar un chequeo en el CI que falle ante !! sin justificación | lista | sí | 3-4 pasos |
| $criterios_clave | Los crash de tipo NPE bajan a cero en dos releases consecutivas · El detekt del CI bloquea usos de !! no permitidos | lista | sí | calidad verificable |
| $prompt_guia | Venimos teniendo NPEs esporádicos reportados por usuarios. Auditá el proyecto buscando patrones de nulos y proponé un plan para eliminarlos de raíz en el parser de innertube. | texto | no | "Tipos y nullability" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los crash de tipo NPE bajan a cero en dos releases consecutivas
- [ ] El detekt del CI bloquea usos de !! no permitidos

## Ejemplos de prompts

- "Venimos teniendo NPEs esporádicos reportados por usuarios. Auditá el proyecto buscando patrones de nulos y proponé un plan para eliminarlos de raíz en el parser de innertube."
- "Aplica Tipos y nullability (nivel profesional) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza Los crash de tipo NPE bajan a cero en dos releases consecutivas"
- "Revisa mi kotlin-core y dime qué pasos de Tipos y nullability me faltan en este nivel"