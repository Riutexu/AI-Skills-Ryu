---
name: seguridad-powershell-securestring-credenciales-profesional
description: SecureString y credenciales · nivel Profesional · Seguridad y hardening. Manejar contraseñas en memoria y en tránsito: SecureString, PSCredential y sus límites reales. Objetivo del nivel: Estrategia de credenciales de la suite: ciclo de vida, rotación y cero credenciales en repos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "securestring-credenciales"
  nivel: profesional
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# SecureString y credenciales — Profesional

## Qué hace este skill

Manejar contraseñas en memoria y en tránsito: SecureString, PSCredential y sus límites reales. En este nivel se entrega: **Estrategia de credenciales de la suite: ciclo de vida, rotación y cero credenciales en repos**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **SecureString y credenciales** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el ciclo de vida de las credenciales de la suite
2. Integrar un gestor de secretos (SecretManagement)
3. Auditar dónde viven y cómo rotan
4. Detectar credenciales hardcodeadas en el repo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de credenciales de la suite: ciclo de vida, rotación y cero credenciales en repos | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Diseñar el ciclo de vida de las credenciales de la suite · Integrar un gestor de secretos (SecretManagement) · Auditar dónde viven y cómo rotan · Detectar credenciales hardcodeadas en el repo | lista | sí | 3-4 pasos |
| $criterios_clave | Ninguna credencial de la suite está en el código · La rotación se hace con el flujo documentado | lista | sí | calidad verificable |
| $prompt_guia | Quiero una estrategia de credenciales seria para RYU-TUI: ciclo de vida, integración con SecretManagement y un escaneo que detecte credenciales en el repo. | texto | no | "SecureString y credenciales" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ninguna credencial de la suite está en el código
- [ ] La rotación se hace con el flujo documentado

## Ejemplos de prompts

- "Quiero una estrategia de credenciales seria para RYU-TUI: ciclo de vida, integración con SecretManagement y un escaneo que detecte credenciales en el repo."
- "Aplica SecureString y credenciales (nivel profesional) a mi trabajo actual con Seguridad y hardening: prioriza Ninguna credencial de la suite está en el código"
- "Revisa mi seguridad-powershell y dime qué pasos de SecureString y credenciales me faltan en este nivel"