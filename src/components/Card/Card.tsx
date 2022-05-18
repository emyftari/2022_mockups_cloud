import { FC } from 'react'

import styles from './Card.module.scss'

import Image from 'next/image'
import Link from 'next/link'

interface ICard {
  title: string
  image: string
}

const Card: FC<ICard> = ({ title, image }) => {
  return (
    <Link href="/post">
      <div className={styles.card}>
        <Image src={image} width={285} height={180} alt="" />
        <h3>{title}</h3>
      </div>
    </Link>
  )
}

export default Card
