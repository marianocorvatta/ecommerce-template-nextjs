import Link from 'next/link'
import styles from './ProductCard.module.css'

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className={styles.productCard}>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <p>$ {product?.price}</p>
      </div>
    </Link>
  )
}

export default ProductCard
