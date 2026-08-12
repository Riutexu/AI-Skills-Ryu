---
name: administracion-windows-redes-puertos-profesional
description: Redes y puertos · nivel Profesional · Administración de Windows. Diagnóstico de red: interfaces, conexiones TCP, puertos en escucha y conectividad sin herramientas extra. Objetivo del nivel: Scripts de diagnóstico de red completos con reportes y estado por puerto
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "redes-puertos"
  nivel: profesional
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Redes y puertos — Profesional

## Qué hace este skill

Diagnóstico de red: interfaces, conexiones TCP, puertos en escucha y conectividad sin herramientas extra. En este nivel se entrega: **Scripts de diagnóstico de red completos con reportes y estado por puerto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Redes y puertos** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escribir un checador de puertos de servicios por config
2. Generar reporte de salud de red con tiempos de respuesta
3. Comparar estado de puertos entre dos momentos
4. Integrar el chequeo a la TUI de RYU-TUI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Scripts de diagnóstico de red completos con reportes y estado por puerto | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Escribir un checador de puertos de servicios por config · Generar reporte de salud de red con tiempos de respuesta · Comparar estado de puertos entre dos momentos · Integrar el chequeo a la TUI de RYU-TUI | lista | sí | 3-4 pasos |
| $criterios_clave | El chequeo cubre los puertos críticos y reporta tiempo · Los resultados se integran como comando de la TUI | lista | sí | calidad verificable |
| $prompt_guia | Quiero agregar a RYU-TUI un comando de diagnóstico de red: chequea los puertos de mis servicios desde una config, mide latencia y muestra un reporte con estado por puerto. | texto | no | "Redes y puertos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El chequeo cubre los puertos críticos y reporta tiempo
- [ ] Los resultados se integran como comando de la TUI

## Ejemplos de prompts

- "Quiero agregar a RYU-TUI un comando de diagnóstico de red: chequea los puertos de mis servicios desde una config, mide latencia y muestra un reporte con estado por puerto."
- "Aplica Redes y puertos (nivel profesional) a mi trabajo actual con Administración de Windows: prioriza El chequeo cubre los puertos críticos y reporta tiempo"
- "Revisa mi administracion-windows y dime qué pasos de Redes y puertos me faltan en este nivel"