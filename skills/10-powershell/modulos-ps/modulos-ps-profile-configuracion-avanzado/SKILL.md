---
name: modulos-ps-profile-configuracion-avanzado
description: Profile y configuración · nivel Avanzado · Módulos y paquetes. El profile de PowerShell: temas, aliases, funciones de arranque y gestión de varias configuraciones. Objetivo del nivel: Profile modular: cargar configuración por archivos y mantenerlo limpio y rápido
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "profile-configuracion"
  nivel: avanzado
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Profile y configuración — Avanzado

## Qué hace este skill

El profile de PowerShell: temas, aliases, funciones de arranque y gestión de varias configuraciones. En este nivel se entrega: **Profile modular: cargar configuración por archivos y mantenerlo limpio y rápido**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Profile y configuración** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Dividir el profile en archivos temáticos
2. Cargar condicionalmente según host o rol
3. Medir el tiempo de carga del profile
4. Evitar que el profile rompa scripts

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Profile modular: cargar configuración por archivos y mantenerlo limpio y rápido | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Dividir el profile en archivos temáticos · Cargar condicionalmente según host o rol · Medir el tiempo de carga del profile · Evitar que el profile rompa scripts | lista | sí | 3-4 pasos |
| $criterios_clave | El profile carga en menos de un segundo · Un error en el profile no rompe la sesión entera | lista | sí | calidad verificable |
| $prompt_guia | Mi profile se volvió un monstruo: dividilo en archivos temáticos, cargá según el host y mostrame cómo medir y bajar el tiempo de carga. | texto | no | "Profile y configuración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El profile carga en menos de un segundo
- [ ] Un error en el profile no rompe la sesión entera

## Ejemplos de prompts

- "Mi profile se volvió un monstruo: dividilo en archivos temáticos, cargá según el host y mostrame cómo medir y bajar el tiempo de carga."
- "Aplica Profile y configuración (nivel avanzado) a mi trabajo actual con Módulos y paquetes: prioriza El profile carga en menos de un segundo"
- "Revisa mi modulos-ps y dime qué pasos de Profile y configuración me faltan en este nivel"