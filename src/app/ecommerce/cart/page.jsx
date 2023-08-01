import styles from './Cart.module.css'
import db from '../../../../lib/prisma'
import CheckoutButton from '@/components/CheckoutButton'

async function getCartProducts() {
  const products = await db.product.findMany({
    where: {
      id: 'clkidr29y0000n0hk6vtld8tl',
    },
  })

  return {
    props: products,
  }
}

export default async function Cart() {
  const { props: products } = await getCartProducts()

  return (
    <section className={styles.productsContainer}>
      <h1>Cart</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <CheckoutButton products={products} />
    </section>
  )
}
