---
name: devops-powershell-json-dinamico-avanzado
description: Parsing de JSON dinámico · nivel Avanzado · DevOps con PowerShell. Respuestas de APIs que cambian: esquemas dinámicos, propiedades opcionales y normalización. Objetivo del nivel: Esquemas dinámicos: propiedades opcionales, nombres variables y normalización de respuestas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "json-dinamico"
  nivel: avanzado
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Parsing de JSON dinámico — Avanzado

## Qué hace este skill

Respuestas de APIs que cambian: esquemas dinámicos, propiedades opcionales y normalización. En este nivel se entrega: **Esquemas dinámicos: propiedades opcionales, nombres variables y normalización de respuestas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Parsing de JSON dinámico** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Acceder con propiedades dinámicas
2. Normalizar respuestas de distintas versiones de API
3. Usar PSCustomObject con defaults
4. Tolerar cambios de esquema entre versiones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Esquemas dinámicos: propiedades opcionales, nombres variables y normalización de respuestas | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Acceder con propiedades dinámicas · Normalizar respuestas de distintas versiones de API · Usar PSCustomObject con defaults · Tolerar cambios de esquema entre versiones | lista | sí | 3-4 pasos |
| $criterios_clave | El código tolera que falten propiedades · Normalizás respuestas heterogéneas a un esquema propio | lista | sí | calidad verificable |
| $prompt_guia | La API que consumo cambia de esquema entre versiones y a veces faltan campos: mostrame cómo normalizar respuestas dinámicas a un esquema propio con defaults. | texto | no | "Parsing de JSON dinámico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El código tolera que falten propiedades
- [ ] Normalizás respuestas heterogéneas a un esquema propio

## Ejemplos de prompts

- "La API que consumo cambia de esquema entre versiones y a veces faltan campos: mostrame cómo normalizar respuestas dinámicas a un esquema propio con defaults."
- "Aplica Parsing de JSON dinámico (nivel avanzado) a mi trabajo actual con DevOps con PowerShell: prioriza El código tolera que falten propiedades"
- "Revisa mi devops-powershell y dime qué pasos de Parsing de JSON dinámico me faltan en este nivel"