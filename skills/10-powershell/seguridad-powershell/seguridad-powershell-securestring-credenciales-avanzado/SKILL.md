---
name: seguridad-powershell-securestring-credenciales-avanzado
description: SecureString y credenciales · nivel Avanzado · Seguridad y hardening. Manejar contraseñas en memoria y en tránsito: SecureString, PSCredential y sus límites reales. Objetivo del nivel: Entender los límites de SecureString: descifrable en el mismo usuario y máquina, y alternativas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "securestring-credenciales"
  nivel: avanzado
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# SecureString y credenciales — Avanzado

## Qué hace este skill

Manejar contraseñas en memoria y en tránsito: SecureString, PSCredential y sus límites reales. En este nivel se entrega: **Entender los límites de SecureString: descifrable en el mismo usuario y máquina, y alternativas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **SecureString y credenciales** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Entender cómo se cifra SecureString (DPAPI)
2. Probar qué pasa en otra sesión o máquina
3. Usar técnicas de no-persistencia en memoria
4. Evitar trucos inseguros (ConvertFrom-SecureString sin clave)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Entender los límites de SecureString: descifrable en el mismo usuario y máquina, y alternativas | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Entender cómo se cifra SecureString (DPAPI) · Probar qué pasa en otra sesión o máquina · Usar técnicas de no-persistencia en memoria · Evitar trucos inseguros (ConvertFrom-SecureString sin clave) | lista | sí | 3-4 pasos |
| $criterios_clave | Sabés exactamente qué protege SecureString y qué no · No usás atajos que destruyen la protección | lista | sí | calidad verificable |
| $prompt_guia | Sospecho que SecureString no es tan mágico como parece: explícame cómo se cifra, sus límites reales y qué alternativas hay cuando la seguridad importa. | texto | no | "SecureString y credenciales" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Sabés exactamente qué protege SecureString y qué no
- [ ] No usás atajos que destruyen la protección

## Ejemplos de prompts

- "Sospecho que SecureString no es tan mágico como parece: explícame cómo se cifra, sus límites reales y qué alternativas hay cuando la seguridad importa."
- "Aplica SecureString y credenciales (nivel avanzado) a mi trabajo actual con Seguridad y hardening: prioriza Sabés exactamente qué protege SecureString y qué no"
- "Revisa mi seguridad-powershell y dime qué pasos de SecureString y credenciales me faltan en este nivel"