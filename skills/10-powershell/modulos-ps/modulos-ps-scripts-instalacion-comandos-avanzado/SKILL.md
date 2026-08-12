---
name: modulos-ps-scripts-instalacion-comandos-avanzado
description: Scripts de instalación por comandos · nivel Avanzado · Módulos y paquetes. Instalar sin bootstrap: comandos sueltos reproducibles, one-liners y registros de pasos manuales. Objetivo del nivel: Encadenar comandos con verificación entre pasos y puntos de control
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "scripts-instalacion-comandos"
  nivel: avanzado
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Scripts de instalación por comandos — Avanzado

## Qué hace este skill

Instalar sin bootstrap: comandos sueltos reproducibles, one-liners y registros de pasos manuales. En este nivel se entrega: **Encadenar comandos con verificación entre pasos y puntos de control**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Scripts de instalación por comandos** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Verificar cada paso antes de continuar
2. Guardar estado intermedio en archivos
3. Reanudar la instalación desde el paso fallado
4. Diferenciar instalación por usuario y por sistema

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Encadenar comandos con verificación entre pasos y puntos de control | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Verificar cada paso antes de continuar · Guardar estado intermedio en archivos · Reanudar la instalación desde el paso fallado · Diferenciar instalación por usuario y por sistema | lista | sí | 3-4 pasos |
| $criterios_clave | Un paso fallido no deja el entorno a medias · Reanudás una instalación cortada sin empezar de cero | lista | sí | calidad verificable |
| $prompt_guia | La instalación manual de mi entorno se corta a mitad por errores: armame una secuencia de comandos con verificación entre pasos, checkpoint y reanudación desde el fallo. | texto | no | "Scripts de instalación por comandos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un paso fallido no deja el entorno a medias
- [ ] Reanudás una instalación cortada sin empezar de cero

## Ejemplos de prompts

- "La instalación manual de mi entorno se corta a mitad por errores: armame una secuencia de comandos con verificación entre pasos, checkpoint y reanudación desde el fallo."
- "Aplica Scripts de instalación por comandos (nivel avanzado) a mi trabajo actual con Módulos y paquetes: prioriza Un paso fallido no deja el entorno a medias"
- "Revisa mi modulos-ps y dime qué pasos de Scripts de instalación por comandos me faltan en este nivel"