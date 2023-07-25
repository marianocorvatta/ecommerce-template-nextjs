import styles from './Cart.module.css'
import prisma from '../../../lib/prisma'

async function getCartProducts() {
  const products = await prisma.product.findMany({
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
    <main className={styles.productsContainer}>
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
      <button className={styles.checkoutBtn}>Checkout</button>
    </main>
  )
}
