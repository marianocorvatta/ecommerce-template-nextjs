import styles from './Products.module.css'
import prisma from '../../../lib/prisma'

async function getProducts() {
  const products = await prisma.product.findMany()

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
          <div key={product.id} className={styles.productCard}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
