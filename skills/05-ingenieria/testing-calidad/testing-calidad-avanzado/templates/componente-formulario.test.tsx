import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormPago } from "./FormPago";
import { procesarPago } from "../services/pagos";

vi.mock("../services/pagos", () => ({
  procesarPago: vi.fn()
}));

const mockProcesarPago = vi.mocked(procesarPago);

describe("FormPago", () => {
  beforeEach(() => {
    mockProcesarPago.mockReset();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("muestra un error cuando la tarjeta es invalida", async () => {
    const user = userEvent.setup();
    render(<FormPago />);

    await user.type(screen.getByLabelText("Numero de tarjeta"), "1234");
    await user.type(screen.getByLabelText("Monto"), "100");
    await user.click(screen.getByRole("button", { name: "Pagar" }));

    expect(
      await screen.findByText("El numero de tarjeta debe tener 16 digitos")
    ).toBeInTheDocument();
    expect(mockProcesarPago).not.toHaveBeenCalled();
  });

  it("procesa el pago y muestra confirmacion", async () => {
    mockProcesarPago.mockResolvedValue({ id: "pago-1", estado: "aprobado" });
    const user = userEvent.setup();
    render(<FormPago />);

    await user.type(
      screen.getByLabelText("Numero de tarjeta"),
      "4242424242424242"
    );
    await user.type(screen.getByLabelText("Monto"), "100");
    await user.click(screen.getByRole("button", { name: "Pagar" }));

    await waitFor(() => expect(mockProcesarPago).toHaveBeenCalledOnce());
    expect(mockProcesarPago).toHaveBeenCalledWith(
      "4242424242424242",
      100
    );
    expect(
      await screen.findByRole("status", { name: "Resultado del pago" })
    ).toHaveTextContent("aprobado");
  });

  it("muestra el estado de carga mientras procesa", async () => {
    let resolver: (v: unknown) => void;
    mockProcesarPago.mockReturnValue(
      new Promise((resolve) => {
        resolver = resolve;
      }) as ReturnType<typeof procesarPago>
    );
    const user = userEvent.setup();
    render(<FormPago />);

    await user.type(
      screen.getByLabelText("Numero de tarjeta"),
      "4242424242424242"
    );
    await user.type(screen.getByLabelText("Monto"), "50");
    await user.click(screen.getByRole("button", { name: "Pagar" }));

    expect(screen.getByRole("button", { name: "Procesando..." })).toBeDisabled();

    resolver!({ id: "pago-2", estado: "aprobado" });
    expect(
      await screen.findByRole("status", { name: "Resultado del pago" })
    ).toHaveTextContent("aprobado");
  });

  it("muestra error de red cuando el servicio falla", async () => {
    mockProcesarPago.mockRejectedValue(new Error("Servicio no disponible"));
    const user = userEvent.setup();
    render(<FormPago />);

    await user.type(
      screen.getByLabelText("Numero de tarjeta"),
      "4242424242424242"
    );
    await user.type(screen.getByLabelText("Monto"), "100");
    await user.click(screen.getByRole("button", { name: "Pagar" }));

    expect(
      await screen.findByText("No se pudo procesar el pago")
    ).toBeInTheDocument();
  });
});