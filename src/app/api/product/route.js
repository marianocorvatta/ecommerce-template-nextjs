import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (id) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    })

    return NextResponse.json({ data: [product] })
  }

  const products = await prisma.product.findMany()

  return NextResponse.json({ data: products })
}
