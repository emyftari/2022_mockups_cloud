import { FC } from 'react'
import Link from 'next/link'

import styles from './Card.module.scss'

import CustomImage from 'components/ui/CustomImage'

interface ICard {
  id: number
  title: string
  post_images: any
}

const Card: FC<ICard> = ({ id, title, post_images }) => {
  return (
    <Link href={`/${id}`}>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <CustomImage src={post_images} alt="" layout="fill" />
        </div>
        <h3>{title}</h3>
      </div>
    </Link>
  )
}

export default Card
