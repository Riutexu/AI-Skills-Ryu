---
name: modulos-ps-profile-configuracion-profesional
description: Profile y configuración · nivel Profesional · Módulos y paquetes. El profile de PowerShell: temas, aliases, funciones de arranque y gestión de varias configuraciones. Objetivo del nivel: Gestión de profile como proyecto: versionado, instalación por bootstrap y temas intercambiables
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "profile-configuracion"
  nivel: profesional
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Profile y configuración — Profesional

## Qué hace este skill

El profile de PowerShell: temas, aliases, funciones de arranque y gestión de varias configuraciones. En este nivel se entrega: **Gestión de profile como proyecto: versionado, instalación por bootstrap y temas intercambiables**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Profile y configuración** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Versionar el profile en un repo
2. Instalar el profile desde bootstrap.ps1
3. Soportar temas de PowerShell intercambiables
4. Probar la carga del profile en sesión nueva

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Gestión de profile como proyecto: versionado, instalación por bootstrap y temas intercambiables | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Versionar el profile en un repo · Instalar el profile desde bootstrap.ps1 · Soportar temas de PowerShell intercambiables · Probar la carga del profile en sesión nueva | lista | sí | 3-4 pasos |
| $criterios_clave | El profile se instala con un comando y se versiona · Cambiar de tema no rompe aliases ni funciones | lista | sí | calidad verificable |
| $prompt_guia | Quiero versionar mi profile, instalarlo desde el bootstrap de RYU-TUI y que el tema personal de PowerShell se pueda cambiar desde la config sin romper nada. Diseñá la estructura. | texto | no | "Profile y configuración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El profile se instala con un comando y se versiona
- [ ] Cambiar de tema no rompe aliases ni funciones

## Ejemplos de prompts

- "Quiero versionar mi profile, instalarlo desde el bootstrap de RYU-TUI y que el tema personal de PowerShell se pueda cambiar desde la config sin romper nada. Diseñá la estructura."
- "Aplica Profile y configuración (nivel profesional) a mi trabajo actual con Módulos y paquetes: prioriza El profile se instala con un comando y se versiona"
- "Revisa mi modulos-ps y dime qué pasos de Profile y configuración me faltan en este nivel"