---
name: modulos-ps-credenciales-instalacion-avanzado
description: Manejo de credenciales en instalación · nivel Avanzado · Módulos y paquetes. Instalaciones que piden credenciales: prompts, SecureString, exportación protegida y cero secretos en texto. Objetivo del nivel: Persistencia protegida: Export-CliXml con DPAPI y uso por sesión
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "credenciales-instalacion"
  nivel: avanzado
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Manejo de credenciales en instalación — Avanzado

## Qué hace este skill

Instalaciones que piden credenciales: prompts, SecureString, exportación protegida y cero secretos en texto. En este nivel se entrega: **Persistencia protegida: Export-CliXml con DPAPI y uso por sesión**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de credenciales en instalación** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Guardar credenciales con Export-CliXml protegidas
2. Importarlas sin texto plano en disco
3. Entender las limitaciones de DPAPI (por usuario y máquina)
4. Rotar credenciales guardadas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Persistencia protegida: Export-CliXml con DPAPI y uso por sesión | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Guardar credenciales con Export-CliXml protegidas · Importarlas sin texto plano en disco · Entender las limitaciones de DPAPI (por usuario y máquina) · Rotar credenciales guardadas | lista | sí | 3-4 pasos |
| $criterios_clave | Las credenciales en disco están cifradas para tu usuario · Sabés cuándo la persistencia es apropiada y cuándo no | lista | sí | calidad verificable |
| $prompt_guia | Mi script corre solo y necesita credenciales sin que nadie las tipee: explicame Export-CliXml con DPAPI, sus límites y armame el guardado y carga protegida. | texto | no | "Manejo de credenciales en instalación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las credenciales en disco están cifradas para tu usuario
- [ ] Sabés cuándo la persistencia es apropiada y cuándo no

## Ejemplos de prompts

- "Mi script corre solo y necesita credenciales sin que nadie las tipee: explicame Export-CliXml con DPAPI, sus límites y armame el guardado y carga protegida."
- "Aplica Manejo de credenciales en instalación (nivel avanzado) a mi trabajo actual con Módulos y paquetes: prioriza Las credenciales en disco están cifradas para tu usuario"
- "Revisa mi modulos-ps y dime qué pasos de Manejo de credenciales en instalación me faltan en este nivel"