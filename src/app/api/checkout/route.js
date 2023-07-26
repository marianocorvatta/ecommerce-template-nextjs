import { NextResponse } from 'next/server'
import mercadopage from 'mercadopago'

const CURRENCY_ID = 'ARS'

export async function GET() {
  return NextResponse.json({ data: 'Hello World' })
}

export async function POST(request) {
  const res = await request.json()

  if (request.method !== 'POST') {
    NextResponse.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  mercadopage.configure({
    access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN,
  })

  const items = res.products.map((item) => {
    return {
      title: item.title,
      unit_price: item.price,
      currency_id: CURRENCY_ID,
      quantity: 1,
    }
  })

  try {
    const result = await mercadopage.preferences.create({
      items: items,
      notification_url: 'https://e720-190-237-16-208.sa.ngrok.io/webhook',
      back_urls: {
        success: 'http://localhost:3000/',
        // pending: "https://e720-190-237-16-208.sa.ngrok.io/pending",
        // failure: "https://e720-190-237-16-208.sa.ngrok.io/failure",
      },
    })

    return NextResponse.json({ data: result.body })
  } catch (error) {
    console.log('error', error)
    return NextResponse.json({ data: { error } })
  }
}
