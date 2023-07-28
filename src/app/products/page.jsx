import db from '../../../lib/prisma'
import styles from './Products.module.css'
import Link from 'next/link'

async function getProducts() {
  const products = await db.product.findMany()

  return {
    props: products,
  }
}

export default async function Products() {
  const { props: products } = await getProducts()

  return (
    <section className={styles.productsContainer}>
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
    </section>
  )
}
