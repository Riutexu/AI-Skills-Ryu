import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/instrumentation-http";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { Resource } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "api-pedidos",
    [SemanticResourceAttributes.SERVICE_VERSION]: "1.4.0",
  }),
  traceExporter: new OTLPTraceExporter({
    url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT ?? "http://localhost:4318/v1/traces",
  }),
  instrumentations: getNodeAutoInstrumentations({
    "@opentelemetry/instrumentation-http": {},
    "@opentelemetry/instrumentation-express": {},
    "@opentelemetry/instrumentation-pg": {},
  }),
});

sdk.start();

process.on("SIGTERM", () =>
  sdk.shutdown().finally(() => process.exit(0))
);