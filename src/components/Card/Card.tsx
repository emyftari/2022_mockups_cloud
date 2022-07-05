import { FC } from 'react'
import Link from 'next/link'

import styles from './Card.module.scss'

import CustomImage from 'components/ui/CustomImage'

interface ICard {
  id: number
  title: string
  post_images: any
  short_url: string
}

const Card: FC<ICard> = ({ title, post_images, short_url }) => {
  return (
    <Link href={`/${short_url}`}>
      <a className={styles.card}>
        <div className={styles.card__image}>
          <CustomImage src={post_images} alt="" layout="fill" />
        </div>
        <h3>{title}</h3>
      </a>
    </Link>
  )
}

export default Card
