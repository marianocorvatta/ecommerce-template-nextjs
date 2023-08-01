import ProductCard from '@/components/ProductCard'
import db from '../../../../lib/prisma'
import styles from './Products.module.css'

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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
