---
name: modulos-ps-pruebas-instalacion-limpia-basico
description: Pruebas de instalación limpia · nivel Básico · Módulos y paquetes. Validar instalaciones desde cero: máquinas de prueba, verificación de estado y tests post-instalación. Objetivo del nivel: Verificar que una instalación quedó correcta con chequeos manuales
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "pruebas-instalacion-limpia"
  nivel: basico
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Pruebas de instalación limpia — Básico

## Qué hace este skill

Validar instalaciones desde cero: máquinas de prueba, verificación de estado y tests post-instalación. En este nivel se entrega: **Verificar que una instalación quedó correcta con chequeos manuales**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Pruebas de instalación limpia** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Chequear versiones de lo instalado
2. Verificar que los comandos existen y responden
3. Probar la suite completa en una máquina limpia
4. Documentar los pasos de verificación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Verificar que una instalación quedó correcta con chequeos manuales | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Chequear versiones de lo instalado · Verificar que los comandos existen y responden · Probar la suite completa en una máquina limpia · Documentar los pasos de verificación | lista | sí | 3-4 pasos |
| $criterios_clave | Tenés una lista de chequeos post-instalación · La suite funciona en una máquina limpia de verdad | lista | sí | calidad verificable |
| $prompt_guia | Acabo de instalar RYU-TUI en una máquina limpia y quiero verificar que quedó todo: armame la lista de chequeos de versión y funcionalidad básica. | texto | no | "Pruebas de instalación limpia" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tenés una lista de chequeos post-instalación
- [ ] La suite funciona en una máquina limpia de verdad

## Ejemplos de prompts

- "Acabo de instalar RYU-TUI en una máquina limpia y quiero verificar que quedó todo: armame la lista de chequeos de versión y funcionalidad básica."
- "Aplica Pruebas de instalación limpia (nivel basico) a mi trabajo actual con Módulos y paquetes: prioriza Tenés una lista de chequeos post-instalación"
- "Revisa mi modulos-ps y dime qué pasos de Pruebas de instalación limpia me faltan en este nivel"