# RYU-TUI: interfaces de terminal

Construcción de interfaces de terminal reales con PowerShell: ANSI, dibujo por caracteres, eventos de teclado y el desarrollo vivo de ryu-tui.ps1.

**Stack:** PowerShell 7, ANSI/VT, Windows 11 · **Familia:** PowerShell y automatización de Windows (10-powershell)

| Tema | Resumen | Niveles |
|---|---|---|
| **Escape ANSI y colores** | Códigos de escape, colores 16/256/truecolor, fondos, estilos y limpieza de pantalla portable. | [basico](/ryu-tui-escape-ansi-colores-basico/) · [avanzado](/ryu-tui-escape-ansi-colores-avanzado/) · [profesional](/ryu-tui-escape-ansi-colores-profesional/) |
| **Layout por caracteres** | Dibujo de interfaces con celdas de caracteres: coordenadas, medidas y composición de paneles. | [basico](/ryu-tui-layout-por-caracteres-basico/) · [avanzado](/ryu-tui-layout-por-caracteres-avanzado/) · [profesional](/ryu-tui-layout-por-caracteres-profesional/) |
| **Entrada de teclado y eventos** | Lectura de teclas con $Host.UI.RawUI, ReadKey, detección de teclas especiales y bucles de evento. | [basico](/ryu-tui-entrada-teclado-eventos-basico/) · [avanzado](/ryu-tui-entrada-teclado-eventos-avanzado/) · [profesional](/ryu-tui-entrada-teclado-eventos-profesional/) |
| **Menús interactivos** | Menús navegables con flechas, selección, atajos y estados de foco, estilo lo que se ve en RYU-TUI. | [basico](/ryu-tui-menus-interactivos-basico/) · [avanzado](/ryu-tui-menus-interactivos-avanzado/) · [profesional](/ryu-tui-menus-interactivos-profesional/) |
| **Spinners y barras de progreso** | Feedback visual de operaciones largas: spinners animados, barras de progreso y mensajes que no ensucian. | [basico](/ryu-tui-spinners-progreso-basico/) · [avanzado](/ryu-tui-spinners-progreso-avanzado/) · [profesional](/ryu-tui-spinners-progreso-profesional/) |
| **Ventanas y bordes** | Dibujo de ventanas, bordes redondeados, sombras, títulos y sistemas de capas superpuestas. | [basico](/ryu-tui-ventanas-bordes-basico/) · [avanzado](/ryu-tui-ventanas-bordes-avanzado/) · [profesional](/ryu-tui-ventanas-bordes-profesional/) |
| **Mouse en consola** | Soporte de mouse en Windows Terminal: habilitación VT, eventos de clic y su uso con moderación. | [basico](/ryu-tui-mouse-consola-basico/) · [avanzado](/ryu-tui-mouse-consola-avanzado/) · [profesional](/ryu-tui-mouse-consola-profesional/) |
| **Redibujado eficiente** | Parpadeo, buffer, regiones sucias y la disciplina de no redibujar lo que no cambió. | [basico](/ryu-tui-redibujado-eficiente-basico/) · [avanzado](/ryu-tui-redibujado-eficiente-avanzado/) · [profesional](/ryu-tui-redibujado-eficiente-profesional/) |
| **Historial y autocompletado** | Historial de entradas, navegación con flechas, autocompletado por prefijo y búsqueda. | [basico](/ryu-tui-historial-autocompletado-basico/) · [avanzado](/ryu-tui-historial-autocompletado-avanzado/) · [profesional](/ryu-tui-historial-autocompletado-profesional/) |
| **Integración con ryu-tui.ps1** | Trabajo real sobre la suite RYU-TUI: bootstrap.ps1, ryu-tui.ps1, comandos y el flujo de instalación. | [basico](/ryu-tui-integracion-ryu-tui-basico/) · [avanzado](/ryu-tui-integracion-ryu-tui-avanzado/) · [profesional](/ryu-tui-integracion-ryu-tui-profesional/) |
| **Portabilidad entre hosts** | Windows Terminal, consola clásica, VS Code, CI: que tu TUI se comporte bien en todos lados. | [basico](/ryu-tui-portabilidad-hosts-basico/) · [avanzado](/ryu-tui-portabilidad-hosts-avanzado/) · [profesional](/ryu-tui-portabilidad-hosts-profesional/) |
| **Rendimiento de renderizado** | Frames por segundo, costo de los escapes, drawing vs I/O y profiling del ciclo completo. | [basico](/ryu-tui-rendimiento-renderizado-basico/) · [avanzado](/ryu-tui-rendimiento-renderizado-avanzado/) · [profesional](/ryu-tui-rendimiento-renderizado-profesional/) |

---
Generado con [skill-factory.ps1](../../tools/skill-factory.ps1) desde [catalogos/10-powershell.json](../../catalogos/10-powershell.json).