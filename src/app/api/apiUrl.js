const baseUrl = process.env.NEXT_PUBLIC_SITE_URL

export const getProductsUrl = () => `${baseUrl}/product`

export const getProductByIdUrl = (id) => `${baseUrl}/product?id=${id}`
