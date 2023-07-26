const baseUrl = process.env.API_URL

export const getProductsUrl = () => `${baseUrl}/product`

export const getProductByIdUrl = (id) => `${baseUrl}/product?id=${id}`
