---
name: modulos-ps-profile-configuracion-basico
description: Profile y configuración · nivel Básico · Módulos y paquetes. El profile de PowerShell: temas, aliases, funciones de arranque y gestión de varias configuraciones. Objetivo del nivel: Entender y editar los profiles de PowerShell
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "profile-configuracion"
  nivel: basico
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Profile y configuración — Básico

## Qué hace este skill

El profile de PowerShell: temas, aliases, funciones de arranque y gestión de varias configuraciones. En este nivel se entrega: **Entender y editar los profiles de PowerShell**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Profile y configuración** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Saber qué profiles existen con $PROFILE
2. Agregar aliases y funciones al profile
3. Personalizar el prompt
4. Recargar el profile sin reiniciar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender y editar los profiles de PowerShell | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Saber qué profiles existen con $PROFILE · Agregar aliases y funciones al profile · Personalizar el prompt · Recargar el profile sin reiniciar | lista | sí | 3-4 pasos |
| $criterios_clave | Tus aliases y funciones cargan al arrancar pwsh · Entendés la jerarquía de profiles | lista | sí | calidad verificable |
| $prompt_guia | Quiero personalizar mi PowerShell: explicame los profiles de $PROFILE y armámelo con aliases, una función propia y un prompt custom. | texto | no | "Profile y configuración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tus aliases y funciones cargan al arrancar pwsh
- [ ] Entendés la jerarquía de profiles

## Ejemplos de prompts

- "Quiero personalizar mi PowerShell: explicame los profiles de $PROFILE y armámelo con aliases, una función propia y un prompt custom."
- "Aplica Profile y configuración (nivel basico) a mi trabajo actual con Módulos y paquetes: prioriza Tus aliases y funciones cargan al arrancar pwsh"
- "Revisa mi modulos-ps y dime qué pasos de Profile y configuración me faltan en este nivel"