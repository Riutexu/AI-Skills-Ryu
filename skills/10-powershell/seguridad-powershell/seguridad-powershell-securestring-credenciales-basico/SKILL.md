---
name: seguridad-powershell-securestring-credenciales-basico
description: SecureString y credenciales · nivel Básico · Seguridad y hardening. Manejar contraseñas en memoria y en tránsito: SecureString, PSCredential y sus límites reales. Objetivo del nivel: Usar SecureString y PSCredential correctamente
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "securestring-credenciales"
  nivel: basico
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# SecureString y credenciales — Básico

## Qué hace este skill

Manejar contraseñas en memoria y en tránsito: SecureString, PSCredential y sus límites reales. En este nivel se entrega: **Usar SecureString y PSCredential correctamente**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **SecureString y credenciales** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un SecureString con Read-Host -AsSecureString
2. Armar un PSCredential
3. Usarlo en cmdlets que piden credenciales
4. Evitar convertirlo a texto plano

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar SecureString y PSCredential correctamente | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Crear un SecureString con Read-Host -AsSecureString · Armar un PSCredential · Usarlo en cmdlets que piden credenciales · Evitar convertirlo a texto plano | lista | sí | 3-4 pasos |
| $criterios_clave | Las contraseñas nunca se ven ni se loguean · Usás PSCredential en los comandos que lo piden | lista | sí | calidad verificable |
| $prompt_guia | Quiero pedir una contraseña de forma segura en mi script: mostrame Read-Host -AsSecureString, PSCredential y cómo usarla sin convertirla a texto. | texto | no | "SecureString y credenciales" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las contraseñas nunca se ven ni se loguean
- [ ] Usás PSCredential en los comandos que lo piden

## Ejemplos de prompts

- "Quiero pedir una contraseña de forma segura en mi script: mostrame Read-Host -AsSecureString, PSCredential y cómo usarla sin convertirla a texto."
- "Aplica SecureString y credenciales (nivel basico) a mi trabajo actual con Seguridad y hardening: prioriza Las contraseñas nunca se ven ni se loguean"
- "Revisa mi seguridad-powershell y dime qué pasos de SecureString y credenciales me faltan en este nivel"