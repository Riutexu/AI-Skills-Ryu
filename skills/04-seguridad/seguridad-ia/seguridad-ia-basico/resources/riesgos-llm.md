# Riesgos de los LLM — explicados en simple

## 1. Prompt injection (la más importante)
El modelo mezcla TUS instrucciones con el contenido que le llega. Si un usuario (o un email, una web) mete instrucciones en ese contenido, el modelo puede obedecerlas.
**Regla mental:** todo lo que no sea tu system prompt es DATA, aunque parezca instrucción.

## 2. Fuga de información sensible
El modelo puede soltar datos que recibió en el contexto: secretos del prompt, PII de otros chats, contenido del RAG.
**Regla mental:** nunca pongas al modelo algo que no quieras que diga.

## 3. Salida no controlada (XSS, comandos)
El modelo genera texto; si lo renderizas como HTML o lo ejecutas como comando, un ataque se vuelve real.
**Regla mental:** la salida del modelo es entrada del USUARIO final; trátala igual de sospechosa.

## 4. Exceso de agencia
Cada herramienta que le das al modelo es un poder que un atacante puede usar por proxy.
**Regla mental:** un agente con demasiados poderes es una botnet con ChatGPT dentro.

## 5. Consumo ilimitado (costo/DoS)
Entradas gigantes o loops de agentes = facturas y degradación de servicio.
**Regla mental:** todo límite (tokens, tiempo, gasto) es una medida de seguridad.

## La pregunta que te salva en cada decisión
> "¿Qué pasa si un atacante controla esta entrada/salida/herramienta?"
Si tu respuesta es "nada", sigue. Si es "pues...", arrepiéntete antes de desplegar.