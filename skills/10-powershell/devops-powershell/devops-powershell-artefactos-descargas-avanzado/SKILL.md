---
name: devops-powershell-artefactos-descargas-avanzado
description: Artefactos y descargas · nivel Avanzado · DevOps con PowerShell. Descargar y publicar artefactos: archivos de releases, checksums, versiones y verificación. Objetivo del nivel: Descargas robustas: resume, retries, checksums y manejo de versiones
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "artefactos-descargas"
  nivel: avanzado
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Artefactos y descargas — Avanzado

## Qué hace este skill

Descargar y publicar artefactos: archivos de releases, checksums, versiones y verificación. En este nivel se entrega: **Descargas robustas: resume, retries, checksums y manejo de versiones**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Artefactos y descargas** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Verificar checksums después de descargar
2. Implementar retries ante fallas de red
3. Resolver la última versión desde la API
4. Cachear descargas entre corridas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Descargas robustas: resume, retries, checksums y manejo de versiones | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Verificar checksums después de descargar · Implementar retries ante fallas de red · Resolver la última versión desde la API · Cachear descargas entre corridas | lista | sí | 3-4 pasos |
| $criterios_clave | Una descarga interrumpida se retoma o reintenta · Nada se usa sin verificar su checksum | lista | sí | calidad verificable |
| $prompt_guia | Mis descargas se cortan a mitad por la red: mostrame cómo implementar retries, verificación de checksum y resolución de la última versión desde la API de GitHub. | texto | no | "Artefactos y descargas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Una descarga interrumpida se retoma o reintenta
- [ ] Nada se usa sin verificar su checksum

## Ejemplos de prompts

- "Mis descargas se cortan a mitad por la red: mostrame cómo implementar retries, verificación de checksum y resolución de la última versión desde la API de GitHub."
- "Aplica Artefactos y descargas (nivel avanzado) a mi trabajo actual con DevOps con PowerShell: prioriza Una descarga interrumpida se retoma o reintenta"
- "Revisa mi devops-powershell y dime qué pasos de Artefactos y descargas me faltan en este nivel"