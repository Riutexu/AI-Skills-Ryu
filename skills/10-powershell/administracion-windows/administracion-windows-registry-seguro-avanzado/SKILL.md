---
name: administracion-windows-registry-seguro-avanzado
description: Registry seguro · nivel Avanzado · Administración de Windows. Leer y modificar el registro con Get-Item/New-Item, rutas PSDrive y copias de seguridad antes de tocar. Objetivo del nivel: Modificaciones con respaldo, rollback y validación previa
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "registry-seguro"
  nivel: avanzado
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Registry seguro — Avanzado

## Qué hace este skill

Leer y modificar el registro con Get-Item/New-Item, rutas PSDrive y copias de seguridad antes de tocar. En este nivel se entrega: **Modificaciones con respaldo, rollback y validación previa**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Registry seguro** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear backups de las claves antes de modificar
2. Setear valores con New-ItemProperty y Set-ItemProperty
3. Verificar la existencia de claves antes de tocar
4. Implementar rollback manual ante fallas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Modificaciones con respaldo, rollback y validación previa | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Crear backups de las claves antes de modificar · Setear valores con New-ItemProperty y Set-ItemProperty · Verificar la existencia de claves antes de tocar · Implementar rollback manual ante fallas | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún cambio al registry se hace sin backup previo · Ante un error, la clave se restaura a su estado original | lista | sí | calidad verificable |
| $prompt_guia | Voy a modificar una clave del registro de mi máquina y quiero hacerlo seguro: backup previo, validación de que existe, el cambio y un rollback si falla. Armame el patrón completo. | texto | no | "Registry seguro" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún cambio al registry se hace sin backup previo
- [ ] Ante un error, la clave se restaura a su estado original

## Ejemplos de prompts

- "Voy a modificar una clave del registro de mi máquina y quiero hacerlo seguro: backup previo, validación de que existe, el cambio y un rollback si falla. Armame el patrón completo."
- "Aplica Registry seguro (nivel avanzado) a mi trabajo actual con Administración de Windows: prioriza Ningún cambio al registry se hace sin backup previo"
- "Revisa mi administracion-windows y dime qué pasos de Registry seguro me faltan en este nivel"