---
name: android-produccion-versionname-versioncode-avanzado
description: versionName y versionCode · nivel Avanzado · Publicación y producción Android. Versionado correcto y automatizado de los releases. Objetivo del nivel: Versionado automatizado por flavor y por CI.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "versionname-versioncode"
  nivel: avanzado
  stack: "Play Store, firmas, CI, testing, releases"
---

# versionName y versionCode — Avanzado

## Qué hace este skill

Versionado correcto y automatizado de los releases. En este nivel se entrega: **Versionado automatizado por flavor y por CI.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **versionName y versionCode** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Generar el versionCode desde el CI
2. Diferenciar el versionCode por flavor
3. Automatizar el versionName desde git
4. Evitar los choques de versionCode en Play

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Versionado automatizado por flavor y por CI. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Generar el versionCode desde el CI · Diferenciar el versionCode por flavor · Automatizar el versionName desde git · Evitar los choques de versionCode en Play | lista | sí | 3-4 pasos |
| $criterios_clave | El CI genera versionCode únicos · Los flavors tienen versionado distinto | lista | sí | calidad verificable |
| $prompt_guia | Quiero que el CI de Ryutify genere versionCode únicos por build y por flavor, sin choques en Play. | texto | no | "versionName y versionCode" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El CI genera versionCode únicos
- [ ] Los flavors tienen versionado distinto

## Ejemplos de prompts

- "Quiero que el CI de Ryutify genere versionCode únicos por build y por flavor, sin choques en Play."
- "Aplica versionName y versionCode (nivel avanzado) a mi trabajo actual con Publicación y producción Android: prioriza El CI genera versionCode únicos"
- "Revisa mi android-produccion y dime qué pasos de versionName y versionCode me faltan en este nivel"