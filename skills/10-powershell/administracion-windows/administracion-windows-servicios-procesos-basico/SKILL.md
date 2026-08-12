---
name: administracion-windows-servicios-procesos-basico
description: Servicios y procesos · nivel Básico · Administración de Windows. Gestionar servicios y procesos: listar, filtrar, iniciar/detener con seguridad y diagnósticos de estado. Objetivo del nivel: Listar, filtrar y controlar servicios y procesos con los cmdlets estándar
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "servicios-procesos"
  nivel: basico
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Servicios y procesos — Básico

## Qué hace este skill

Gestionar servicios y procesos: listar, filtrar, iniciar/detener con seguridad y diagnósticos de estado. En este nivel se entrega: **Listar, filtrar y controlar servicios y procesos con los cmdlets estándar**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Servicios y procesos** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Listar servicios con Get-Service y filtrar por estado
2. Iniciar y detener servicios con Start-Service y Stop-Service
3. Ver procesos con Get-Process y ordenar por uso de memoria
4. Matar procesos con Stop-Process de forma controlada

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Listar, filtrar y controlar servicios y procesos con los cmdlets estándar | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Listar servicios con Get-Service y filtrar por estado · Iniciar y detener servicios con Start-Service y Stop-Service · Ver procesos con Get-Process y ordenar por uso de memoria · Matar procesos con Stop-Process de forma controlada | lista | sí | 3-4 pasos |
| $criterios_clave | Filtrás servicios por estado sin procesar texto · Nunca matás un proceso sin verificar antes | lista | sí | calidad verificable |
| $prompt_guia | Quiero un script que liste los servicios detenidos que deberían estar corriendo y los procesos top por memoria. Mostrame los cmdlets de servicios y procesos con filtros prolijos. | texto | no | "Servicios y procesos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Filtrás servicios por estado sin procesar texto
- [ ] Nunca matás un proceso sin verificar antes

## Ejemplos de prompts

- "Quiero un script que liste los servicios detenidos que deberían estar corriendo y los procesos top por memoria. Mostrame los cmdlets de servicios y procesos con filtros prolijos."
- "Aplica Servicios y procesos (nivel basico) a mi trabajo actual con Administración de Windows: prioriza Filtrás servicios por estado sin procesar texto"
- "Revisa mi administracion-windows y dime qué pasos de Servicios y procesos me faltan en este nivel"