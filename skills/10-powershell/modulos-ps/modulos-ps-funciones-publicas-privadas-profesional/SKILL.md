---
name: modulos-ps-funciones-publicas-privadas-profesional
description: Funciones públicas y privadas · nivel Profesional · Módulos y paquetes. El arte de la API de módulo: qué exponer, qué ocultar y cómo evolucionar sin romper consumidores. Objetivo del nivel: Evolución de API: deprecaciones, aliases de compatibilidad y semver aplicado a funciones
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "funciones-publicas-privadas"
  nivel: profesional
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Funciones públicas y privadas — Profesional

## Qué hace este skill

El arte de la API de módulo: qué exponer, qué ocultar y cómo evolucionar sin romper consumidores. En este nivel se entrega: **Evolución de API: deprecaciones, aliases de compatibilidad y semver aplicado a funciones**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones públicas y privadas** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Manejar cambios de firma con parámetros obsoletos
2. Usar alias de funciones para compatibilidad
3. Aplicar reglas de semver a cambios de API
4. Documentar breaking changes en changelog

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Evolución de API: deprecaciones, aliases de compatibilidad y semver aplicado a funciones | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Manejar cambios de firma con parámetros obsoletos · Usar alias de funciones para compatibilidad · Aplicar reglas de semver a cambios de API · Documentar breaking changes en changelog | lista | sí | 3-4 pasos |
| $criterios_clave | Un consumidor de la versión anterior sigue funcionando con aviso de deprecación · Los breaking changes están anunciados con antelación | lista | sí | calidad verificable |
| $prompt_guia | Voy a cambiar la firma de una función pública de mi módulo y hay gente usándola: diseñá la deprecación con parámetro obsoleto, aviso en runtime y el proceso semver para el changelog. | texto | no | "Funciones públicas y privadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un consumidor de la versión anterior sigue funcionando con aviso de deprecación
- [ ] Los breaking changes están anunciados con antelación

## Ejemplos de prompts

- "Voy a cambiar la firma de una función pública de mi módulo y hay gente usándola: diseñá la deprecación con parámetro obsoleto, aviso en runtime y el proceso semver para el changelog."
- "Aplica Funciones públicas y privadas (nivel profesional) a mi trabajo actual con Módulos y paquetes: prioriza Un consumidor de la versión anterior sigue funcionando con aviso de deprecación"
- "Revisa mi modulos-ps y dime qué pasos de Funciones públicas y privadas me faltan en este nivel"