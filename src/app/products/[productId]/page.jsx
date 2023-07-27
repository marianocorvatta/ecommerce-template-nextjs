import { getProductByIdUrl } from '../../api/apiUrl'
import styles from '../Products.module.css'
import fetch from 'node-fetch'

export const dynamic = 'force-dynamic'

async function getProduct(productId) {
  const res = await fetch(getProductByIdUrl(productId))

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const { data: product } = await res.json()

  return {
    props: product,
  }
}

export default async function Product({ params: { productId } }) {
  const { props: product } = await getProduct(productId)

  return (
    <main className={styles.productsContainer}>
      <h1>Product</h1>
      <div className={styles.productList}>
        <div key={product.id} className={styles.productCard}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>$ {product.price}</p>
        </div>
      </div>
    </main>
  )
}
