const baseUrl = process.env.NEXT_PUBLIC_ROOT_DOMAIN

export const getProductsUrl = () => `${baseUrl}/api/product`

export const getProductByIdUrl = (id) => `${baseUrl}/api/product/${id}`
