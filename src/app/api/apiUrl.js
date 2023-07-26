const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const getProductsUrl = () => `${baseUrl}/product`

export const getProductByIdUrl = (id) => `${baseUrl}/product?id=${id}`
