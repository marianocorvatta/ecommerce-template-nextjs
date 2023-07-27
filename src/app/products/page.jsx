// import db from '../../../lib/prisma'
import styles from './Products.module.css'
import Link from 'next/link'

const baseUrl = process.env.NEXT_PUBLIC_ROOT_DOMAIN

async function getProducts() {
  // const products = await db.product.findMany()
  console.log('baseUrl', baseUrl)
  const res = await fetch(`${baseUrl}/api/product`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const { data: products } = await res.json()
  console.log('products', products)
  return {
    props: products,
  }
}

export default async function Products() {
  const { props: products } = await getProducts()

  return (
    <main className={styles.productsContainer}>
      <h1>Products</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className={styles.productCard}>
              <h2>{product?.title}</h2>
              <p>{product?.description}</p>
              <p>$ {product?.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
