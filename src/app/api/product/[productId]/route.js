import prisma from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const productId = params.productId

  if (productId) {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    })

    return NextResponse.json({ data: product })
  }
}
