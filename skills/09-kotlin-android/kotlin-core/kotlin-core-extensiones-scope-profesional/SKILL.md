---
name: kotlin-core-extensiones-scope-profesional
description: Extensiones y scope functions · nivel Profesional · Kotlin moderno: fundamentos profesionales. Código idiomático con extensiones y el uso correcto de let, run, with, apply y also. Objetivo del nivel: Diseñar la API de extensiones públicas del proyecto con convención y tests.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "extensiones-scope"
  nivel: profesional
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Extensiones y scope functions — Profesional

## Qué hace este skill

Código idiomático con extensiones y el uso correcto de let, run, with, apply y also. En este nivel se entrega: **Diseñar la API de extensiones públicas del proyecto con convención y tests.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Extensiones y scope functions** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Inventariar las extensiones del proyecto y eliminar las duplicadas
2. Definir dónde viven: extensiones de dominio, de UI y de utilidades
3. Escribir tests de propiedades para las extensiones de formato
4. Establecer reglas de detekt contra scope functions excesivas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la API de extensiones públicas del proyecto con convención y tests. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Inventariar las extensiones del proyecto y eliminar las duplicadas · Definir dónde viven: extensiones de dominio, de UI y de utilidades · Escribir tests de propiedades para las extensiones de formato · Establecer reglas de detekt contra scope functions excesivas | lista | sí | 3-4 pasos |
| $criterios_clave | No existen dos extensiones que hagan lo mismo con distinto nombre entre módulos · Cada extensión pública tiene al menos un test y su kdoc | lista | sí | calidad verificable |
| $prompt_guia | Entre módulos de Ryutify se duplican extensiones como formatearDuracion. Hacé un inventario, unificálas en un módulo común y escribí tests de propiedades para los formatos. | texto | no | "Extensiones y scope functions" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] No existen dos extensiones que hagan lo mismo con distinto nombre entre módulos
- [ ] Cada extensión pública tiene al menos un test y su kdoc

## Ejemplos de prompts

- "Entre módulos de Ryutify se duplican extensiones como formatearDuracion. Hacé un inventario, unificálas en un módulo común y escribí tests de propiedades para los formatos."
- "Aplica Extensiones y scope functions (nivel profesional) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza No existen dos extensiones que hagan lo mismo con distinto nombre entre módulos"
- "Revisa mi kotlin-core y dime qué pasos de Extensiones y scope functions me faltan en este nivel"