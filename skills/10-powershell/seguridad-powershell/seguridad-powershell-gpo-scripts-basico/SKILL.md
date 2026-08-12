---
name: seguridad-powershell-gpo-scripts-basico
description: Políticas de grupo para scripts · nivel Básico · Seguridad y hardening. GPO que gobiernan PowerShell: execution policy, logging, CLM y despliegue de scripts en dominios. Objetivo del nivel: Entender qué GPO afectan a PowerShell y dónde viven
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "gpo-scripts"
  nivel: basico
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Políticas de grupo para scripts — Básico

## Qué hace este skill

GPO que gobiernan PowerShell: execution policy, logging, CLM y despliegue de scripts en dominios. En este nivel se entrega: **Entender qué GPO afectan a PowerShell y dónde viven**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Políticas de grupo para scripts** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar las GPO de PowerShell en Computer Configuration
2. Ver qué políticas hay en el visor de GPO
3. Correlacionar GPO con el estado real de pwsh
4. Documentar la configuración actual del dominio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender qué GPO afectan a PowerShell y dónde viven | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Identificar las GPO de PowerShell en Computer Configuration · Ver qué políticas hay en el visor de GPO · Correlacionar GPO con el estado real de pwsh · Documentar la configuración actual del dominio | lista | sí | 3-4 pasos |
| $criterios_clave | Sabés qué GPO tocan a PowerShell en tu dominio · Verificás su efecto real en una máquina | lista | sí | calidad verificable |
| $prompt_guia | Quiero entender qué políticas de grupo afectan a PowerShell en mi empresa: mostrame dónde viven, cómo verlas y cómo verificar su efecto real. | texto | no | "Políticas de grupo para scripts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Sabés qué GPO tocan a PowerShell en tu dominio
- [ ] Verificás su efecto real en una máquina

## Ejemplos de prompts

- "Quiero entender qué políticas de grupo afectan a PowerShell en mi empresa: mostrame dónde viven, cómo verlas y cómo verificar su efecto real."
- "Aplica Políticas de grupo para scripts (nivel basico) a mi trabajo actual con Seguridad y hardening: prioriza Sabés qué GPO tocan a PowerShell en tu dominio"
- "Revisa mi seguridad-powershell y dime qué pasos de Políticas de grupo para scripts me faltan en este nivel"