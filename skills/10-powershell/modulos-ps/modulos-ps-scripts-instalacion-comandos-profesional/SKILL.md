---
name: modulos-ps-scripts-instalacion-comandos-profesional
description: Scripts de instalación por comandos · nivel Profesional · Módulos y paquetes. Instalar sin bootstrap: comandos sueltos reproducibles, one-liners y registros de pasos manuales. Objetivo del nivel: Provisión reproducible por comandos: configuración declarativa y validación final
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "scripts-instalacion-comandos"
  nivel: profesional
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Scripts de instalación por comandos — Profesional

## Qué hace este skill

Instalar sin bootstrap: comandos sueltos reproducibles, one-liners y registros de pasos manuales. En este nivel se entrega: **Provisión reproducible por comandos: configuración declarativa y validación final**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Scripts de instalación por comandos** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escribir la configuración deseada como datos
2. Verificar el estado final contra la config
3. Probar el proceso en máquina limpia
4. Documentar el procedimiento para nuevos devs

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Provisión reproducible por comandos: configuración declarativa y validación final | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Escribir la configuración deseada como datos · Verificar el estado final contra la config · Probar el proceso en máquina limpia · Documentar el procedimiento para nuevos devs | lista | sí | 3-4 pasos |
| $criterios_clave | La provisión termina con validación declarada contra config · Un nuevo dev arma el entorno siguiendo solo la documentación | lista | sí | calidad verificable |
| $prompt_guia | Quiero que un dev nuevo arme el entorno de RYU-TUI siguiendo un procedimiento documentado y que al final un script valide que todo quedó como la config declarada. | texto | no | "Scripts de instalación por comandos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La provisión termina con validación declarada contra config
- [ ] Un nuevo dev arma el entorno siguiendo solo la documentación

## Ejemplos de prompts

- "Quiero que un dev nuevo arme el entorno de RYU-TUI siguiendo un procedimiento documentado y que al final un script valide que todo quedó como la config declarada."
- "Aplica Scripts de instalación por comandos (nivel profesional) a mi trabajo actual con Módulos y paquetes: prioriza La provisión termina con validación declarada contra config"
- "Revisa mi modulos-ps y dime qué pasos de Scripts de instalación por comandos me faltan en este nivel"