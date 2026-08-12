---
name: administracion-windows-usuarios-grupos-avanzado
description: Usuarios y grupos · nivel Avanzado · Administración de Windows. Administrar cuentas locales y grupos con LocalAccounts, y membresías sin tocar el panel. Objetivo del nivel: Crear cuentas, configurar membresías y contraseñas con políticas de seguridad
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "usuarios-grupos"
  nivel: avanzado
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Usuarios y grupos — Avanzado

## Qué hace este skill

Administrar cuentas locales y grupos con LocalAccounts, y membresías sin tocar el panel. En este nivel se entrega: **Crear cuentas, configurar membresías y contraseñas con políticas de seguridad**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Usuarios y grupos** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear usuarios y grupos con New-LocalUser y New-LocalGroup
2. Agregar usuarios a grupos con Add-LocalGroupMember
3. Setear contraseñas y forzar cambio
4. Validar que la operación no rompa el admin actual

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Crear cuentas, configurar membresías y contraseñas con políticas de seguridad | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Crear usuarios y grupos con New-LocalUser y New-LocalGroup · Agregar usuarios a grupos con Add-LocalGroupMember · Setear contraseñas y forzar cambio · Validar que la operación no rompa el admin actual | lista | sí | 3-4 pasos |
| $criterios_clave | Creás cuentas y membresías sin errores de sesión · Nunca quedás sin acceso de administrador por error | lista | sí | calidad verificable |
| $prompt_guia | Tengo que dar de alta un usuario de servicio: crear la cuenta sin cambio de contraseña obligatorio, agregarlo a un grupo específico y verificar la membresía. | texto | no | "Usuarios y grupos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Creás cuentas y membresías sin errores de sesión
- [ ] Nunca quedás sin acceso de administrador por error

## Ejemplos de prompts

- "Tengo que dar de alta un usuario de servicio: crear la cuenta sin cambio de contraseña obligatorio, agregarlo a un grupo específico y verificar la membresía."
- "Aplica Usuarios y grupos (nivel avanzado) a mi trabajo actual con Administración de Windows: prioriza Creás cuentas y membresías sin errores de sesión"
- "Revisa mi administracion-windows y dime qué pasos de Usuarios y grupos me faltan en este nivel"