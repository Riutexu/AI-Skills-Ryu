---
name: modulos-ps-estructura-modulo-avanzado
description: Estructura de módulo · nivel Avanzado · Módulos y paquetes. Organización de un módulo real: archivos, carpetas, exports y punto de entrada. Objetivo del nivel: Estructura con helpers privados, dot-sourcing y carga de recursos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "estructura-modulo"
  nivel: avanzado
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Estructura de módulo — Avanzado

## Qué hace este skill

Organización de un módulo real: archivos, carpetas, exports y punto de entrada. En este nivel se entrega: **Estructura con helpers privados, dot-sourcing y carga de recursos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Estructura de módulo** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Separar helpers en archivos y dot-sourcearlos
2. Mantener funciones privadas fuera del export
3. Cargar config y recursos desde dentro del módulo
4. Evitar efectos al importar (sin side effects)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Estructura con helpers privados, dot-sourcing y carga de recursos | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Separar helpers en archivos y dot-sourcearlos · Mantener funciones privadas fuera del export · Cargar config y recursos desde dentro del módulo · Evitar efectos al importar (sin side effects) | lista | sí | 3-4 pasos |
| $criterios_clave | El módulo se importa sin efectos colaterales · Los helpers privados no ensucian la sesión | lista | sí | calidad verificable |
| $prompt_guia | Mi módulo creció y quiero separar los helpers de dibujo en archivos propios, dot-sourceados, que no se exporten. Además quiero que importar el módulo no imprima nada. | texto | no | "Estructura de módulo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El módulo se importa sin efectos colaterales
- [ ] Los helpers privados no ensucian la sesión

## Ejemplos de prompts

- "Mi módulo creció y quiero separar los helpers de dibujo en archivos propios, dot-sourceados, que no se exporten. Además quiero que importar el módulo no imprima nada."
- "Aplica Estructura de módulo (nivel avanzado) a mi trabajo actual con Módulos y paquetes: prioriza El módulo se importa sin efectos colaterales"
- "Revisa mi modulos-ps y dime qué pasos de Estructura de módulo me faltan en este nivel"