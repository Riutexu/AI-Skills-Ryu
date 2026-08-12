---
name: devops-powershell-health-checks-avanzado
description: Health checks · nivel Avanzado · DevOps con PowerShell. Chequear que el sistema está sano: endpoints, servicios, disco y cómo reportarlo desde scripts. Objetivo del nivel: Chequeos con umbrales y degradación: warnings, timeouts y reportes estructurados
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "health-checks"
  nivel: avanzado
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Health checks — Avanzado

## Qué hace este skill

Chequear que el sistema está sano: endpoints, servicios, disco y cómo reportarlo desde scripts. En este nivel se entrega: **Chequeos con umbrales y degradación: warnings, timeouts y reportes estructurados**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Health checks** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir umbrales de warning y crítico
2. Agregar timeout a cada chequeo
3. Emitir reportes estructurados
4. Distinguir degradado de caído

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Chequeos con umbrales y degradación: warnings, timeouts y reportes estructurados | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Definir umbrales de warning y crítico · Agregar timeout a cada chequeo · Emitir reportes estructurados · Distinguir degradado de caído | lista | sí | 3-4 pasos |
| $criterios_clave | Los umbrales separan ok, warn y crítico · Un chequeo que no responde no cuelga el script | lista | sí | calidad verificable |
| $prompt_guia | Quiero health checks con umbrales para RYU-TUI: warn/crítico por métrica, timeout por chequeo y un reporte estructurado final. | texto | no | "Health checks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los umbrales separan ok, warn y crítico
- [ ] Un chequeo que no responde no cuelga el script

## Ejemplos de prompts

- "Quiero health checks con umbrales para RYU-TUI: warn/crítico por métrica, timeout por chequeo y un reporte estructurado final."
- "Aplica Health checks (nivel avanzado) a mi trabajo actual con DevOps con PowerShell: prioriza Los umbrales separan ok, warn y crítico"
- "Revisa mi devops-powershell y dime qué pasos de Health checks me faltan en este nivel"