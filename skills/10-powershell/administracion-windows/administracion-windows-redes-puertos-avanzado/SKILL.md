---
name: administracion-windows-redes-puertos-avanzado
description: Redes y puertos · nivel Avanzado · Administración de Windows. Diagnóstico de red: interfaces, conexiones TCP, puertos en escucha y conectividad sin herramientas extra. Objetivo del nivel: Correlacionar puertos con procesos, resolver problemas y monitorear conexiones
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "redes-puertos"
  nivel: avanzado
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Redes y puertos — Avanzado

## Qué hace este skill

Diagnóstico de red: interfaces, conexiones TCP, puertos en escucha y conectividad sin herramientas extra. En este nivel se entrega: **Correlacionar puertos con procesos, resolver problemas y monitorear conexiones**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Redes y puertos** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mapear puerto a proceso con OwningProcess
2. Detectar conexiones en estado raro (SYN_SENT colgadas)
3. Monitorear puertos en escucha de forma periódica
4. Resolver problemas de bind de puertos en conflicto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Correlacionar puertos con procesos, resolver problemas y monitorear conexiones | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Mapear puerto a proceso con OwningProcess · Detectar conexiones en estado raro (SYN_SENT colgadas) · Monitorear puertos en escucha de forma periódica · Resolver problemas de bind de puertos en conflicto | lista | sí | 3-4 pasos |
| $criterios_clave | Identificás qué proceso escucha en cada puerto · Detectás conexiones colgadas y su origen | lista | sí | calidad verificable |
| $prompt_guia | Un puerto está ocupado por algo que no debería: armame un diagnóstico que mapee puertos a procesos, muestre las conexiones raras y me diga qué proceso debo revisar. | texto | no | "Redes y puertos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Identificás qué proceso escucha en cada puerto
- [ ] Detectás conexiones colgadas y su origen

## Ejemplos de prompts

- "Un puerto está ocupado por algo que no debería: armame un diagnóstico que mapee puertos a procesos, muestre las conexiones raras y me diga qué proceso debo revisar."
- "Aplica Redes y puertos (nivel avanzado) a mi trabajo actual con Administración de Windows: prioriza Identificás qué proceso escucha en cada puerto"
- "Revisa mi administracion-windows y dime qué pasos de Redes y puertos me faltan en este nivel"