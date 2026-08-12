---
name: administracion-windows-registry-seguro-basico
description: Registry seguro · nivel Básico · Administración de Windows. Leer y modificar el registro con Get-Item/New-Item, rutas PSDrive y copias de seguridad antes de tocar. Objetivo del nivel: Navegar y leer el registro con el PSDrive HKLM/HKCU
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "registry-seguro"
  nivel: basico
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Registry seguro — Básico

## Qué hace este skill

Leer y modificar el registro con Get-Item/New-Item, rutas PSDrive y copias de seguridad antes de tocar. En este nivel se entrega: **Navegar y leer el registro con el PSDrive HKLM/HKCU**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Registry seguro** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Navegar el registry con Get-Item y Get-ChildItem
2. Leer valores con Get-ItemProperty
3. Entender la estructura de keys y values
4. Crear y eliminar keys de prueba con New-Item y Remove-Item

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Navegar y leer el registro con el PSDrive HKLM/HKCU | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Navegar el registry con Get-Item y Get-ChildItem · Leer valores con Get-ItemProperty · Entender la estructura de keys y values · Crear y eliminar keys de prueba con New-Item y Remove-Item | lista | sí | 3-4 pasos |
| $criterios_clave | Leés claves y valores sin abrir regedit · Entendés la diferencia entre key y value | lista | sí | calidad verificable |
| $prompt_guia | Necesito leer una clave de registro de configuración de mi app desde PowerShell sin abrir regedit. Explicame el PSDrive del registry y los cmdlets Get-Item y Get-ItemProperty. | texto | no | "Registry seguro" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Leés claves y valores sin abrir regedit
- [ ] Entendés la diferencia entre key y value

## Ejemplos de prompts

- "Necesito leer una clave de registro de configuración de mi app desde PowerShell sin abrir regedit. Explicame el PSDrive del registry y los cmdlets Get-Item y Get-ItemProperty."
- "Aplica Registry seguro (nivel basico) a mi trabajo actual con Administración de Windows: prioriza Leés claves y valores sin abrir regedit"
- "Revisa mi administracion-windows y dime qué pasos de Registry seguro me faltan en este nivel"