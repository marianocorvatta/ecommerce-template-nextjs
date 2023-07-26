const baseUrl = process.env.NEXT_PUBLIC_SITE_URL

export const getProductsUrl = () => `${baseUrl}/api/product`

export const getProductByIdUrl = (id) => `${baseUrl}/api/product/${id}`
