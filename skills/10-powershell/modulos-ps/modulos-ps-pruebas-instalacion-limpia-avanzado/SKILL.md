---
name: modulos-ps-pruebas-instalacion-limpia-avanzado
description: Pruebas de instalación limpia · nivel Avanzado · Módulos y paquetes. Validar instalaciones desde cero: máquinas de prueba, verificación de estado y tests post-instalación. Objetivo del nivel: Script de verificación automatizada post-instalación con resultados por paso
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "pruebas-instalacion-limpia"
  nivel: avanzado
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Pruebas de instalación limpia — Avanzado

## Qué hace este skill

Validar instalaciones desde cero: máquinas de prueba, verificación de estado y tests post-instalación. En este nivel se entrega: **Script de verificación automatizada post-instalación con resultados por paso**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Pruebas de instalación limpia** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escribir un verificador con checks por etapa
2. Detectar dependencias faltantes o versiones viejas
3. Generar reporte de verificación a archivo
4. Distinguir fallo crítico de warning

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Script de verificación automatizada post-instalación con resultados por paso | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Escribir un verificador con checks por etapa · Detectar dependencias faltantes o versiones viejas · Generar reporte de verificación a archivo · Distinguir fallo crítico de warning | lista | sí | 3-4 pasos |
| $criterios_clave | El verificador detecta problemas que el ojo se pierde · El reporte distingue fallos críticos de advertencias | lista | sí | calidad verificable |
| $prompt_guia | Quiero un script verify-install.ps1 que cheque la instalación de RYU-TUI paso a paso: versiones, dependencias, comandos y estado, con reporte a archivo. | texto | no | "Pruebas de instalación limpia" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El verificador detecta problemas que el ojo se pierde
- [ ] El reporte distingue fallos críticos de advertencias

## Ejemplos de prompts

- "Quiero un script verify-install.ps1 que cheque la instalación de RYU-TUI paso a paso: versiones, dependencias, comandos y estado, con reporte a archivo."
- "Aplica Pruebas de instalación limpia (nivel avanzado) a mi trabajo actual con Módulos y paquetes: prioriza El verificador detecta problemas que el ojo se pierde"
- "Revisa mi modulos-ps y dime qué pasos de Pruebas de instalación limpia me faltan en este nivel"