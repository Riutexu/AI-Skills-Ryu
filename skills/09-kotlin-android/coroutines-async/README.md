# Coroutines y concurrencia

Concurrencia correcta en Ryutify: contextos, cancellation, channels y flows productivos.

**Stack:** coroutines, Flow, channels, Dispatchers, structured concurrency · **Familia:** Kotlin y Android (09-kotlin-android)

| Tema | Resumen | Niveles |
|---|---|---|
| **Contextos de coroutines** | El contexto, el job y la jerarquía que gobiernan cada coroutine. | [basico](/coroutines-async-contextos-coroutines-basico/) · [avanzado](/coroutines-async-contextos-coroutines-avanzado/) · [profesional](/coroutines-async-contextos-coroutines-profesional/) |
| **Dispatchers y el hilo principal** | Elige el dispatcher correcto y nunca bloquees el main. | [basico](/coroutines-async-dispatchers-main-basico/) · [avanzado](/coroutines-async-dispatchers-main-avanzado/) · [profesional](/coroutines-async-dispatchers-main-profesional/) |
| **Cancelación y timeouts** | Cancela coroutines de forma cooperativa y evita operaciones eternas. | [basico](/coroutines-async-cancelacion-timeouts-basico/) · [avanzado](/coroutines-async-cancelacion-timeouts-avanzado/) · [profesional](/coroutines-async-cancelacion-timeouts-profesional/) |
| **Estructura concurrente y paralelismo** | async, await y paralelismo controlado dentro de la estructura. | [basico](/coroutines-async-estructuras-concurrentes-basico/) · [avanzado](/coroutines-async-estructuras-concurrentes-avanzado/) · [profesional](/coroutines-async-estructuras-concurrentes-profesional/) |
| **Flow y operadores** | El toolkit de operadores de Flow para transformar streams de datos. | [basico](/coroutines-async-flow-operadores-basico/) · [avanzado](/coroutines-async-flow-operadores-avanzado/) · [profesional](/coroutines-async-flow-operadores-profesional/) |
| **StateFlow y SharedFlow** | Los hot flows: estado compartido y eventos one-shot. | [basico](/coroutines-async-stateflow-sharedflow-basico/) · [avanzado](/coroutines-async-stateflow-sharedflow-avanzado/) · [profesional](/coroutines-async-stateflow-sharedflow-profesional/) |
| **Channels** | Comunicación entre coroutines con canales tipados. | [basico](/coroutines-async-channels-basico/) · [avanzado](/coroutines-async-channels-avanzado/) · [profesional](/coroutines-async-channels-profesional/) |
| **Fan-out y fan-in** | Distribuye trabajo entre coroutines y combina resultados. | [basico](/coroutines-async-fanout-fanin-basico/) · [avanzado](/coroutines-async-fanout-fanin-avanzado/) · [profesional](/coroutines-async-fanout-fanin-profesional/) |
| **Retry y backoff** | Reintenta las operaciones fallidas con backoff controlado. | [basico](/coroutines-async-retry-backoff-basico/) · [avanzado](/coroutines-async-retry-backoff-avanzado/) · [profesional](/coroutines-async-retry-backoff-profesional/) |
| **Integración con Retrofit y red** | Suspend functions, adapters y manejo de respuestas HTTP. | [basico](/coroutines-async-integracion-network-basico/) · [avanzado](/coroutines-async-integracion-network-avanzado/) · [profesional](/coroutines-async-integracion-network-profesional/) |
| **Tests de coroutines** | Testea coroutines y flows con runTest y controles de tiempo. | [basico](/coroutines-async-tests-coroutines-basico/) · [avanzado](/coroutines-async-tests-coroutines-avanzado/) · [profesional](/coroutines-async-tests-coroutines-profesional/) |
| **Casos de producción** | Problemas reales de concurrencia y sus soluciones en Ryutify. | [basico](/coroutines-async-casos-produccion-basico/) · [avanzado](/coroutines-async-casos-produccion-avanzado/) · [profesional](/coroutines-async-casos-produccion-profesional/) |

---
Generado con [skill-factory.ps1](../../tools/skill-factory.ps1) desde [catalogos/09-kotlin-android.json](../../catalogos/09-kotlin-android.json).