---
name: pester-testing-beforeall-setup-avanzado
description: Antes y después (BeforeAll) · nivel Avanzado · Pester: testing de scripts. Setup y teardown: BeforeAll/AfterAll, BeforeEach/AfterEach y estados compartidos sin sorpresas. Objetivo del nivel: Fixtures de sistema aislados: archivos temporales, variables y restauración garantizada
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "beforeall-setup"
  nivel: avanzado
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Antes y después (BeforeAll) — Avanzado

## Qué hace este skill

Setup y teardown: BeforeAll/AfterAll, BeforeEach/AfterEach y estados compartidos sin sorpresas. En este nivel se entrega: **Fixtures de sistema aislados: archivos temporales, variables y restauración garantizada**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Antes y después (BeforeAll)** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear una carpeta temporal por suite
2. Guardar y restaurar variables de entorno en tests
3. Usar try/finally en teardown para no dejar basura
4. Aislar tests que tocan el profile

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Fixtures de sistema aislados: archivos temporales, variables y restauración garantizada | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Crear una carpeta temporal por suite · Guardar y restaurar variables de entorno en tests · Usar try/finally en teardown para no dejar basura · Aislar tests que tocan el profile | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún test deja archivos ni variables de entorno modificadas · Un test que falla igual corre su teardown | lista | sí | calidad verificable |
| $prompt_guia | Quiero tests que tocan variables de entorno y el profile sin ensuciar mi máquina: armame los fixtures con carpeta temporal, restauración garantizada con try/finally y aislamiento. | texto | no | "Antes y después (BeforeAll)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún test deja archivos ni variables de entorno modificadas
- [ ] Un test que falla igual corre su teardown

## Ejemplos de prompts

- "Quiero tests que tocan variables de entorno y el profile sin ensuciar mi máquina: armame los fixtures con carpeta temporal, restauración garantizada con try/finally y aislamiento."
- "Aplica Antes y después (BeforeAll) (nivel avanzado) a mi trabajo actual con Pester: testing de scripts: prioriza Ningún test deja archivos ni variables de entorno modificadas"
- "Revisa mi pester-testing y dime qué pasos de Antes y después (BeforeAll) me faltan en este nivel"