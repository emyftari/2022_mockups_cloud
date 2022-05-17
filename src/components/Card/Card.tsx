import Image from 'next/image'
import Link from 'next/link'

import styles from './Card.module.scss'

const Card = () => {
  return (
    <Link href="/post">
      <div className={styles.card}>
        <Image src="/test.jpg" width={285} height={180} alt="" />
        <h3>Hanging Frame 24×36 Poster</h3>
      </div>
    </Link>
  )
}

export default Card
