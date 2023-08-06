import { NextResponse } from 'next/server'
import db from '../../../../lib/prisma'

export async function GET() {
  const products = await db.product.findMany()
  return NextResponse.json({ data: products })
}
