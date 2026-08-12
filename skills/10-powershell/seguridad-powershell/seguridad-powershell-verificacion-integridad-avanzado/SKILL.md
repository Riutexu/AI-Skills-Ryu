---
name: seguridad-powershell-verificacion-integridad-avanzado
description: Verificación de integridad · nivel Avanzado · Seguridad y hardening. Que tus scripts sean lo que dicen ser: hashes, firmas, checksums y detección de alteraciones. Objetivo del nivel: Integridad en el deploy: verificar antes de ejecutar, firmas y manifests de la suite
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "verificacion-integridad"
  nivel: avanzado
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Verificación de integridad — Avanzado

## Qué hace este skill

Que tus scripts sean lo que dicen ser: hashes, firmas, checksums y detección de alteraciones. En este nivel se entrega: **Integridad en el deploy: verificar antes de ejecutar, firmas y manifests de la suite**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Verificación de integridad** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Verificar hashes antes de cada ejecución
2. Combinar hash y firma de los scripts
3. Mantener un manifest de integridad de la suite
4. Deployar solo lo verificado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Integridad en el deploy: verificar antes de ejecutar, firmas y manifests de la suite | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Verificar hashes antes de cada ejecución · Combinar hash y firma de los scripts · Mantener un manifest de integridad de la suite · Deployar solo lo verificado | lista | sí | 3-4 pasos |
| $criterios_clave | Nada se ejecuta sin verificar su integridad · El manifest de integridad está versionado | lista | sí | calidad verificable |
| $prompt_guia | Quiero que bootstrap.ps1 verifique la integridad de lo que va a instalar antes de tocar nada: armá el manifest de hashes y firmas del proyecto. | texto | no | "Verificación de integridad" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Nada se ejecuta sin verificar su integridad
- [ ] El manifest de integridad está versionado

## Ejemplos de prompts

- "Quiero que bootstrap.ps1 verifique la integridad de lo que va a instalar antes de tocar nada: armá el manifest de hashes y firmas del proyecto."
- "Aplica Verificación de integridad (nivel avanzado) a mi trabajo actual con Seguridad y hardening: prioriza Nada se ejecuta sin verificar su integridad"
- "Revisa mi seguridad-powershell y dime qué pasos de Verificación de integridad me faltan en este nivel"