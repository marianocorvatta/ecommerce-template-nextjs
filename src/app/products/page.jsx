import { getProductsUrl } from '../api/apiUrl'
import styles from './Products.module.css'
import Link from 'next/link'

async function getProducts() {
  const res = await fetch(getProductsUrl(), { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const { data: products } = await res.json()

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
