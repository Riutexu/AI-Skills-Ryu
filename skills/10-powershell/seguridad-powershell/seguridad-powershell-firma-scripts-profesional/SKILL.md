---
name: seguridad-powershell-firma-scripts-profesional
description: Firma de scripts · nivel Profesional · Seguridad y hardening. Firmar scripts con Set-AuthenticodeSignature: certificados, signing y verificación de integridad. Objetivo del nivel: Infraestructura de firma: timestamps, HSM/certificados de código y política de la suite
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "firma-scripts"
  nivel: profesional
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Firma de scripts — Profesional

## Qué hace este skill

Firmar scripts con Set-AuthenticodeSignature: certificados, signing y verificación de integridad. En este nivel se entrega: **Infraestructura de firma: timestamps, HSM/certificados de código y política de la suite**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Firma de scripts** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar timestamp a las firmas (RFC3161)
2. Usar certificados de código (EV) o HSM
3. Firmar todos los scripts de RYU-TUI en el release
4. Verificar la firma como gate del pipeline

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Infraestructura de firma: timestamps, HSM/certificados de código y política de la suite | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Agregar timestamp a las firmas (RFC3161) · Usar certificados de código (EV) o HSM · Firmar todos los scripts de RYU-TUI en el release · Verificar la firma como gate del pipeline | lista | sí | 3-4 pasos |
| $criterios_clave | Cada release de la suite sale firmada con timestamp · La verificación de firma bloquea scripts alterados | lista | sí | calidad verificable |
| $prompt_guia | Quiero que cada release de RYU-TUI salga firmada con timestamp y verificación en el pipeline: diseñá la infraestructura de firma y el gate de verificación. | texto | no | "Firma de scripts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada release de la suite sale firmada con timestamp
- [ ] La verificación de firma bloquea scripts alterados

## Ejemplos de prompts

- "Quiero que cada release de RYU-TUI salga firmada con timestamp y verificación en el pipeline: diseñá la infraestructura de firma y el gate de verificación."
- "Aplica Firma de scripts (nivel profesional) a mi trabajo actual con Seguridad y hardening: prioriza Cada release de la suite sale firmada con timestamp"
- "Revisa mi seguridad-powershell y dime qué pasos de Firma de scripts me faltan en este nivel"