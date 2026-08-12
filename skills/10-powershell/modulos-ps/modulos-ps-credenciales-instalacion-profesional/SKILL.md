---
name: modulos-ps-credenciales-instalacion-profesional
description: Manejo de credenciales en instalación · nivel Profesional · Módulos y paquetes. Instalaciones que piden credenciales: prompts, SecureString, exportación protegida y cero secretos en texto. Objetivo del nivel: Estrategia de secretos para la suite: gestor central, credenciales por entorno y auditoría de uso
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "credenciales-instalacion"
  nivel: profesional
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Manejo de credenciales en instalación — Profesional

## Qué hace este skill

Instalaciones que piden credenciales: prompts, SecureString, exportación protegida y cero secretos en texto. En este nivel se entrega: **Estrategia de secretos para la suite: gestor central, credenciales por entorno y auditoría de uso**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de credenciales en instalación** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar dónde viven los secretos de la suite
2. Soportar SecretManagement si está disponible
3. Auditar cuándo y quién usó las credenciales
4. Fallar seguro: sin credenciales, nada de acceso parcial

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de secretos para la suite: gestor central, credenciales por entorno y auditoría de uso | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Diseñar dónde viven los secretos de la suite · Soportar SecretManagement si está disponible · Auditar cuándo y quién usó las credenciales · Fallar seguro: sin credenciales, nada de acceso parcial | lista | sí | 3-4 pasos |
| $criterios_clave | Los secretos de la suite tienen un solo dueño y flujo de rotación · Sin credenciales válidas el script falla antes de tocar nada | lista | sí | calidad verificable |
| $prompt_guia | Quiero una estrategia de secretos para RYU-TUI: soporte SecretManagement con fallback a DPAPI, credenciales por entorno y que sin credenciales válidas la instalación no empiece. Diseñámela. | texto | no | "Manejo de credenciales en instalación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los secretos de la suite tienen un solo dueño y flujo de rotación
- [ ] Sin credenciales válidas el script falla antes de tocar nada

## Ejemplos de prompts

- "Quiero una estrategia de secretos para RYU-TUI: soporte SecretManagement con fallback a DPAPI, credenciales por entorno y que sin credenciales válidas la instalación no empiece. Diseñámela."
- "Aplica Manejo de credenciales en instalación (nivel profesional) a mi trabajo actual con Módulos y paquetes: prioriza Los secretos de la suite tienen un solo dueño y flujo de rotación"
- "Revisa mi modulos-ps y dime qué pasos de Manejo de credenciales en instalación me faltan en este nivel"