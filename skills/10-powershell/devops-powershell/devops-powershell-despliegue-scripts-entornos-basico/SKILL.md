---
name: devops-powershell-despliegue-scripts-entornos-basico
description: Despliegue de scripts a entornos · nivel Básico · DevOps con PowerShell. Llevar la suite de scripts de dev a producción: staging, promoción y rollback de versiones. Objetivo del nivel: Desplegar una versión de scripts a un entorno
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "despliegue-scripts-entornos"
  nivel: basico
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Despliegue de scripts a entornos — Básico

## Qué hace este skill

Llevar la suite de scripts de dev a producción: staging, promoción y rollback de versiones. En este nivel se entrega: **Desplegar una versión de scripts a un entorno**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Despliegue de scripts a entornos** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Copiar los scripts a la ruta del entorno
2. Verificar la versión desplegada
3. Registrar qué se desplegó y cuándo
4. Volver a la versión anterior si falla

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Desplegar una versión de scripts a un entorno | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Copiar los scripts a la ruta del entorno · Verificar la versión desplegada · Registrar qué se desplegó y cuándo · Volver a la versión anterior si falla | lista | sí | 3-4 pasos |
| $criterios_clave | El despliegue deja registro de versión y hora · La verificación post-despliegue es inmediata | lista | sí | calidad verificable |
| $prompt_guia | Quiero desplegar la versión 1.4 de RYU-TUI a mi máquina de producción: mostrame el script de copia, verificación y registro del despliegue. | texto | no | "Despliegue de scripts a entornos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El despliegue deja registro de versión y hora
- [ ] La verificación post-despliegue es inmediata

## Ejemplos de prompts

- "Quiero desplegar la versión 1.4 de RYU-TUI a mi máquina de producción: mostrame el script de copia, verificación y registro del despliegue."
- "Aplica Despliegue de scripts a entornos (nivel basico) a mi trabajo actual con DevOps con PowerShell: prioriza El despliegue deja registro de versión y hora"
- "Revisa mi devops-powershell y dime qué pasos de Despliegue de scripts a entornos me faltan en este nivel"