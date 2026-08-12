# Arquitectura MVVM y ViewModel

La arquitectura de Ryutify: MVVM, ViewModel, repositorios, inyección y el PlayerViewModel real.

**Stack:** MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService · **Familia:** Kotlin y Android (09-kotlin-android)

| Tema | Resumen | Niveles |
|---|---|---|
| **MVVM y capas** | Separación de responsabilidades: UI, ViewModel, dominio y datos. | [basico](/arquitectura-app-mvvm-capas-basico/) · [avanzado](/arquitectura-app-mvvm-capas-avanzado/) · [profesional](/arquitectura-app-mvvm-capas-profesional/) |
| **ViewModel y StateFlow** | El ViewModel como dueño del estado de la pantalla. | [basico](/arquitectura-app-viewmodel-stateflow-basico/) · [avanzado](/arquitectura-app-viewmodel-stateflow-avanzado/) · [profesional](/arquitectura-app-viewmodel-stateflow-profesional/) |
| **SavedStateHandle** | Sobrevive a la rotación y a la muerte del proceso con SavedStateHandle. | [basico](/arquitectura-app-savedstatehandle-basico/) · [avanzado](/arquitectura-app-savedstatehandle-avanzado/) · [profesional](/arquitectura-app-savedstatehandle-profesional/) |
| **Repositorios y fuentes de datos** | Unifica red, cache y base de datos detrás de repositorios. | [basico](/arquitectura-app-repositorios-fuentes-basico/) · [avanzado](/arquitectura-app-repositorios-fuentes-avanzado/) · [profesional](/arquitectura-app-repositorios-fuentes-profesional/) |
| **Inyección de dependencias** | Inyección manual y con contenedor para un grafo claro. | [basico](/arquitectura-app-inyeccion-dependencias-basico/) · [avanzado](/arquitectura-app-inyeccion-dependencias-avanzado/) · [profesional](/arquitectura-app-inyeccion-dependencias-profesional/) |
| **Casos de uso** | Orquesta las reglas de negocio con casos de uso claros. | [basico](/arquitectura-app-casos-uso-basico/) · [avanzado](/arquitectura-app-casos-uso-avanzado/) · [profesional](/arquitectura-app-casos-uso-profesional/) |
| **Mapeo a UI state** | Transforma el dominio en el estado exacto que la UI necesita. | [basico](/arquitectura-app-mapeo-ui-state-basico/) · [avanzado](/arquitectura-app-mapeo-ui-state-avanzado/) · [profesional](/arquitectura-app-mapeo-ui-state-profesional/) |
| **Manejo de errores en la arquitectura** | Los errores fluyen por las capas sin perderse ni tragarse. | [basico](/arquitectura-app-manejo-errores-basico/) · [avanzado](/arquitectura-app-manejo-errores-avanzado/) · [profesional](/arquitectura-app-manejo-errores-profesional/) |
| **Testing de ViewModel** | Tests unitarios de ViewModel con coroutines y repositorios simulados. | [basico](/arquitectura-app-testing-viewmodel-basico/) · [avanzado](/arquitectura-app-testing-viewmodel-avanzado/) · [profesional](/arquitectura-app-testing-viewmodel-profesional/) |
| **Ciclo de vida y leaks** | Que los ViewModels y los scopes no fugen memoria. | [basico](/arquitectura-app-ciclo-vida-leaks-basico/) · [avanzado](/arquitectura-app-ciclo-vida-leaks-avanzado/) · [profesional](/arquitectura-app-ciclo-vida-leaks-profesional/) |
| **PlayerViewModel real de Ryutify** | El ViewModel que gobierna la reproducción, la cola y la sesión. | [basico](/arquitectura-app-playerviewmodel-ryutify-basico/) · [avanzado](/arquitectura-app-playerviewmodel-ryutify-avanzado/) · [profesional](/arquitectura-app-playerviewmodel-ryutify-profesional/) |
| **Evolución a modular** | Evoluciona el monolitio a módulos sin romper la app. | [basico](/arquitectura-app-evolucion-modular-basico/) · [avanzado](/arquitectura-app-evolucion-modular-avanzado/) · [profesional](/arquitectura-app-evolucion-modular-profesional/) |

---
Generado con [skill-factory.ps1](../../tools/skill-factory.ps1) desde [catalogos/09-kotlin-android.json](../../catalogos/09-kotlin-android.json).