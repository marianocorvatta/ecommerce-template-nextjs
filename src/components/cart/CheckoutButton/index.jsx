'use client'

import styles from './CheckoutButton.module.css'
import { useRouter } from 'next/navigation'

const CheckoutButton = ({ products }) => {
  const { push } = useRouter()

  const handleCheckout = async () => {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({
        products,
      }),
    })
    const { data } = await response.json()

    push(data.init_point)
  }

  return (
    <section>
      <button onClick={handleCheckout} className={styles.checkoutBtn}>
        Checkoutbutton
      </button>
    </section>
  )
}

export default CheckoutButton
