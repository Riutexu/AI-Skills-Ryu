---
name: modulos-ps-credenciales-instalacion-basico
description: Manejo de credenciales en instalación · nivel Básico · Módulos y paquetes. Instalaciones que piden credenciales: prompts, SecureString, exportación protegida y cero secretos en texto. Objetivo del nivel: Pedir y usar credenciales de forma segura en scripts
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "credenciales-instalacion"
  nivel: basico
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Manejo de credenciales en instalación — Básico

## Qué hace este skill

Instalaciones que piden credenciales: prompts, SecureString, exportación protegida y cero secretos en texto. En este nivel se entrega: **Pedir y usar credenciales de forma segura en scripts**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de credenciales en instalación** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Pedir credenciales con Get-Credential
2. Usar PSCredential sin exponer la contraseña
3. Pasarlas a cmdlets remotos
4. Evitar que aparezcan en logs

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Pedir y usar credenciales de forma segura en scripts | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Pedir credenciales con Get-Credential · Usar PSCredential sin exponer la contraseña · Pasarlas a cmdlets remotos · Evitar que aparezcan en logs | lista | sí | 3-4 pasos |
| $criterios_clave | La contraseña nunca se muestra ni se loguea · Usás PSCredential en comandos que la requieren | lista | sí | calidad verificable |
| $prompt_guia | Mi script de instalación necesita credenciales: mostrame cómo pedirlas con Get-Credential y usarlas sin que la contraseña quede en pantalla ni en logs. | texto | no | "Manejo de credenciales en instalación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La contraseña nunca se muestra ni se loguea
- [ ] Usás PSCredential en comandos que la requieren

## Ejemplos de prompts

- "Mi script de instalación necesita credenciales: mostrame cómo pedirlas con Get-Credential y usarlas sin que la contraseña quede en pantalla ni en logs."
- "Aplica Manejo de credenciales en instalación (nivel basico) a mi trabajo actual con Módulos y paquetes: prioriza La contraseña nunca se muestra ni se loguea"
- "Revisa mi modulos-ps y dime qué pasos de Manejo de credenciales en instalación me faltan en este nivel"