// =============================================================
// SQL híbrido y transacciones interactivas (nivel profesional)
// Requisito: modelos Usuario, Pedido y Producto del schema avanzado
// =============================================================

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // 1. $queryRaw con placeholders: nunca interpolar valores.
  //    Prisma convierte los tags en prepared statements seguros.
  //    Nota: sin @@map, Prisma nombra las tablas como los modelos ("Pedido").
  const informe = await prisma.$queryRaw`
    SELECT p.id, p."usuarioId", p.total
    FROM "Pedido" p
    JOIN "Usuario" u ON u.id = p."usuarioId"
    WHERE p.estado = ${'entregado'}
      AND p."creadoEn" >= CURRENT_DATE - INTERVAL '30 days'
    ORDER BY p."creadoEn" DESC
    LIMIT 10;
  `
  console.log('Informe raw:', informe.length)

  // 2. $executeRaw para correcciones masivas sin round-trips
  const corregidos = await prisma.$executeRaw`
    UPDATE "Producto" SET stock = 0 WHERE stock < 0;
  `
  console.log('Filas corregidas:', corregidos)

  // 3. Transacción interactiva: varios pasos atómicos con lógica propia
  const pedidoCreado = await prisma.$transaction(async (tx) => {
    const cliente = await tx.usuario.findUniqueOrThrow({
      where: { email: 'ana@example.com' },
    })

    const pedido = await tx.pedido.create({
      data: { usuarioId: cliente.id, estado: 'pendiente' },
    })

    // El descuento de stock ocurre dentro de la misma transacción
    await tx.producto.update({
      where: { id: 1 },
      data: { stock: { decrement: 1 } },
    })

    return pedido
  })
  console.log('Pedido atómico:', pedidoCreado.id)

  // 4. Timeout y nivel de aislamiento explícitos
  const conteo = await prisma.$transaction(
    async (tx) => {
      return tx.usuario.count()
    },
    { timeout: 15000, isolationLevel: 'Serializable' },
  )
  console.log('Usuarios (Serializable):', conteo)

  // 5. Rollback controlado: si algo falla, nada se persiste
  try {
    await prisma.$transaction(async (tx) => {
      await tx.pedido.create({ data: { usuarioId: 1, estado: 'pendiente' } })
      throw new Error('Fallo simulado: se deshace toda la transacción')
    })
  } catch (error) {
    console.log('Transacción revertida:', error.message)
  }
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())