---
name: seguridad-powershell-executionpolicy-applocker-profesional
description: ExecutionPolicy y AppLocker · nivel Profesional · Seguridad y hardening. Políticas de ejecución de scripts: niveles, scopes, bypass responsable y AppLocker como control fino. Objetivo del nivel: AppLocker y reglas de scripts: whitelist de scripts y módulos permitidos en la organización
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "executionpolicy-applocker"
  nivel: profesional
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# ExecutionPolicy y AppLocker — Profesional

## Qué hace este skill

Políticas de ejecución de scripts: niveles, scopes, bypass responsable y AppLocker como control fino. En este nivel se entrega: **AppLocker y reglas de scripts: whitelist de scripts y módulos permitidos en la organización**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ExecutionPolicy y AppLocker** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar reglas AppLocker para scripts
2. Permitir solo scripts firmados y de rutas confiables
3. Probar el efecto de las reglas sin lockear la máquina
4. Documentar el proceso de excepción

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | AppLocker y reglas de scripts: whitelist de scripts y módulos permitidos en la organización | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Diseñar reglas AppLocker para scripts · Permitir solo scripts firmados y de rutas confiables · Probar el efecto de las reglas sin lockear la máquina · Documentar el proceso de excepción | lista | sí | 3-4 pasos |
| $criterios_clave | Solo los scripts permitidos ejecutan en los equipos gestionados · Existe un proceso documentado de excepción | lista | sí | calidad verificable |
| $prompt_guia | Quiero que en mi empresa solo corran scripts permitidos: diseñá las reglas de AppLocker para PowerShell, el proceso de prueba y la política de excepciones. | texto | no | "ExecutionPolicy y AppLocker" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Solo los scripts permitidos ejecutan en los equipos gestionados
- [ ] Existe un proceso documentado de excepción

## Ejemplos de prompts

- "Quiero que en mi empresa solo corran scripts permitidos: diseñá las reglas de AppLocker para PowerShell, el proceso de prueba y la política de excepciones."
- "Aplica ExecutionPolicy y AppLocker (nivel profesional) a mi trabajo actual con Seguridad y hardening: prioriza Solo los scripts permitidos ejecutan en los equipos gestionados"
- "Revisa mi seguridad-powershell y dime qué pasos de ExecutionPolicy y AppLocker me faltan en este nivel"