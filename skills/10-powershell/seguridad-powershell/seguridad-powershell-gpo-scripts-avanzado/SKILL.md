---
name: seguridad-powershell-gpo-scripts-avanzado
description: Políticas de grupo para scripts · nivel Avanzado · Seguridad y hardening. GPO que gobiernan PowerShell: execution policy, logging, CLM y despliegue de scripts en dominios. Objetivo del nivel: Desplegar políticas de logging y ejecución vía GPO en un lab
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "gpo-scripts"
  nivel: avanzado
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Políticas de grupo para scripts — Avanzado

## Qué hace este skill

GPO que gobiernan PowerShell: execution policy, logging, CLM y despliegue de scripts en dominios. En este nivel se entrega: **Desplegar políticas de logging y ejecución vía GPO en un lab**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Políticas de grupo para scripts** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear una GPO de ScriptBlock Logging
2. Aplicar ExecutionPolicy por GPO
3. Verificar el efecto con gpresult
4. Probar la política en una máquina del lab

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Desplegar políticas de logging y ejecución vía GPO en un lab | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Crear una GPO de ScriptBlock Logging · Aplicar ExecutionPolicy por GPO · Verificar el efecto con gpresult · Probar la política en una máquina del lab | lista | sí | 3-4 pasos |
| $criterios_clave | La GPO se aplica y se verifica con gpresult · El logging queda activo y consultable | lista | sí | calidad verificable |
| $prompt_guia | Quiero desplegar ScriptBlock Logging y una ExecutionPolicy vía GPO en mi lab: mostrame cómo crear la GPO, aplicarla y verificar el efecto con gpresult. | texto | no | "Políticas de grupo para scripts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La GPO se aplica y se verifica con gpresult
- [ ] El logging queda activo y consultable

## Ejemplos de prompts

- "Quiero desplegar ScriptBlock Logging y una ExecutionPolicy vía GPO en mi lab: mostrame cómo crear la GPO, aplicarla y verificar el efecto con gpresult."
- "Aplica Políticas de grupo para scripts (nivel avanzado) a mi trabajo actual con Seguridad y hardening: prioriza La GPO se aplica y se verifica con gpresult"
- "Revisa mi seguridad-powershell y dime qué pasos de Políticas de grupo para scripts me faltan en este nivel"