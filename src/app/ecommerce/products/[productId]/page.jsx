import ProductCard from '@/components/ProductCard'
import db from '../../../../../lib/prisma'
import styles from '../Products.module.css'

export const dynamic = 'force-dynamic'

async function getProduct(productId) {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  })

  return {
    props: product,
  }
}

export default async function Product({ params: { productId } }) {
  const { props: product } = await getProduct(productId)

  return (
    <section className={styles.productsContainer}>
      <h1>Product</h1>
      <div className={styles.productList}>
        <ProductCard product={product} />
      </div>
    </section>
  )
}
