---
name: administracion-windows-firewall-avanzado
description: Firewall · nivel Avanzado · Administración de Windows. Reglas del Firewall de Windows con NetSecurity: consultar, crear y auditar reglas desde PowerShell. Objetivo del nivel: Crear reglas con cmdlets y verificar que funcionan
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "firewall"
  nivel: avanzado
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Firewall — Avanzado

## Qué hace este skill

Reglas del Firewall de Windows con NetSecurity: consultar, crear y auditar reglas desde PowerShell. En este nivel se entrega: **Crear reglas con cmdlets y verificar que funcionan**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Firewall** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear reglas de entrada/salida por puerto y programa
2. Limitar reglas por perfil y dirección IP
3. Habilitar/deshabilitar y eliminar reglas propias
4. Verificar el efecto con Test-NetConnection

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Crear reglas con cmdlets y verificar que funcionan | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Crear reglas de entrada/salida por puerto y programa · Limitar reglas por perfil y dirección IP · Habilitar/deshabilitar y eliminar reglas propias · Verificar el efecto con Test-NetConnection | lista | sí | 3-4 pasos |
| $criterios_clave | Creás reglas mínimas sin abrir puertos de más · Cada regla creada se verifica que efectivamente habilita lo esperado | lista | sí | calidad verificable |
| $prompt_guia | Mi app de terminal expone un puerto local y necesito abrirlo solo en el perfil privado y solo para mi IP. Creame la regla con New-NetFirewallRule y verificá que ande. | texto | no | "Firewall" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Creás reglas mínimas sin abrir puertos de más
- [ ] Cada regla creada se verifica que efectivamente habilita lo esperado

## Ejemplos de prompts

- "Mi app de terminal expone un puerto local y necesito abrirlo solo en el perfil privado y solo para mi IP. Creame la regla con New-NetFirewallRule y verificá que ande."
- "Aplica Firewall (nivel avanzado) a mi trabajo actual con Administración de Windows: prioriza Creás reglas mínimas sin abrir puertos de más"
- "Revisa mi administracion-windows y dime qué pasos de Firewall me faltan en este nivel"