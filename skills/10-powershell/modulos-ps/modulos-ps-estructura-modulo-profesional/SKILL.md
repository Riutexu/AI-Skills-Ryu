---
name: modulos-ps-estructura-modulo-profesional
description: Estructura de módulo · nivel Profesional · Módulos y paquetes. Organización de un módulo real: archivos, carpetas, exports y punto de entrada. Objetivo del nivel: Diseño de módulo para distribución: boundaries claros, compatibilidad y rendimiento de carga
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "estructura-modulo"
  nivel: profesional
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Estructura de módulo — Profesional

## Qué hace este skill

Organización de un módulo real: archivos, carpetas, exports y punto de entrada. En este nivel se entrega: **Diseño de módulo para distribución: boundaries claros, compatibilidad y rendimiento de carga**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Estructura de módulo** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la API pública del módulo y mantenerla estable
2. Cargar solo lo necesario al importar
3. Probar compatibilidad PS 5.1 y pwsh 7
4. Escribir pruebas Pester que validen la estructura

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseño de módulo para distribución: boundaries claros, compatibilidad y rendimiento de carga | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Definir la API pública del módulo y mantenerla estable · Cargar solo lo necesario al importar · Probar compatibilidad PS 5.1 y pwsh 7 · Escribir pruebas Pester que validen la estructura | lista | sí | 3-4 pasos |
| $criterios_clave | La API pública está documentada y estable entre versiones · El módulo carga en menos de un segundo en frío | lista | sí | calidad verificable |
| $prompt_guia | Voy a publicar mi módulo de RYU-TUI y quiero que la estructura sea sólida: API pública estable, carga rápida, compatibilidad 5.1/pwsh 7 y tests que validen la estructura. | texto | no | "Estructura de módulo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La API pública está documentada y estable entre versiones
- [ ] El módulo carga en menos de un segundo en frío

## Ejemplos de prompts

- "Voy a publicar mi módulo de RYU-TUI y quiero que la estructura sea sólida: API pública estable, carga rápida, compatibilidad 5.1/pwsh 7 y tests que validen la estructura."
- "Aplica Estructura de módulo (nivel profesional) a mi trabajo actual con Módulos y paquetes: prioriza La API pública está documentada y estable entre versiones"
- "Revisa mi modulos-ps y dime qué pasos de Estructura de módulo me faltan en este nivel"