// api-cliente.ts — Cliente de API genérico con tipado de petición/respuesta.
import { ErrorApi } from "./errores.js";

export interface OpcionesPeticion<TEnvio> {
  url: string;
  metodo?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  cuerpo?: TEnvio;
  token?: string;
}

// Recurso<T> tipa la entidad del recurso y su colección.
export interface Pagina<T> {
  datos: T[];
  total: number;
  paginaActual: number;
  paginaSiguiente: number | null;
}

export class ApiCliente<TRecurso> {
  constructor(
    private readonly baseUrl: string,
    private readonly token?: string
  ) {}

  private async peticion<TEnvio, TRespuesta>(
    opciones: OpcionesPeticion<TEnvio>
  ): Promise<TRespuesta> {
    const respuesta = await fetch(`${this.baseUrl}${opciones.url}`, {
      method: opciones.metodo ?? "GET",
      headers: {
        "Content-Type": "application/json",
        ...(opciones.token ?? this.token
          ? { Authorization: `Bearer ${opciones.token ?? this.token}` }
          : {}),
      },
      body: opciones.cuerpo ? JSON.stringify(opciones.cuerpo) : undefined,
    });

    if (!respuesta.ok) {
      throw new ErrorApi(`La API respondió ${respuesta.status}`, {
        estado: respuesta.status,
        url: opciones.url,
      });
    }
    return (await respuesta.json()) as TRespuesta;
  }

  // Métodos parametrizados por recurso: el llamador elige la respuesta.
  listar<TSalida = TRecurso>(url = "/"): Promise<TSalida[]> {
    return this.peticion<never, TSalida[]>({ url });
  }

  obtener<TSalida = TRecurso>(url: string): Promise<TSalida> {
    return this.peticion<never, TSalida>({ url });
  }

  crear<TEnvio, TSalida = TRecurso>(
    url: string,
    cuerpo: TEnvio
  ): Promise<TSalida> {
    return this.peticion<TEnvio, TSalida>({ url, metodo: "POST", cuerpo });
  }

  actualizar<TEnvio, TSalida = TRecurso>(
    url: string,
    cuerpo: TEnvio
  ): Promise<TSalida> {
    return this.peticion<TEnvio, TSalida>({ url, metodo: "PUT", cuerpo });
  }

  eliminar(url: string): Promise<void> {
    return this.peticion<never, void>({ url, metodo: "DELETE" });
  }
}