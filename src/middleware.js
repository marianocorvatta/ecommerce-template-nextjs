import { NextResponse } from 'next/server'

const ecommerceMiddleware = (url, res) => {
  if (url.pathname === '/') {
    return NextResponse.rewrite(new URL('/ecommerce/home', url))
  }

  if (url.pathname.startsWith('/products')) {
    return NextResponse.rewrite(new URL(`/ecommerce${url.pathname}`, url))
  }

  if (url.pathname.startsWith('/cart')) {
    return NextResponse.rewrite(new URL('/ecommerce/cart', url))
  }

  return res
}

export function middleware(request) {
  let res = NextResponse.next()
  const url = request.nextUrl.clone()
  res = ecommerceMiddleware(url, res)
  return res
}

export const config = {
  matcher: ['/', '/home', '/products/:path*', '/cart', '/admin/:path*'],
}
