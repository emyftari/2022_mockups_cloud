import { FC, useState } from 'react'
import Image from 'next/image'

import styles from './CustomImage.module.scss'

interface Props {
  onClick?: () => void
  src: any
  layout?: string
  width?: number
  height?: number
  alt: string
  priority?: boolean
}

const CustomImage: FC<Props> = ({
  src,
  layout,
  width,
  height,
  alt,
  priority = false,
  onClick,
}) => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {layout ? (
        <Image
          onClick={onClick}
          className={loading ? styles.hide : styles.show}
          onLoadingComplete={() => setLoading(false)}
          src={src ? src[0].preview : '/images/placeholder.webp'}
          alt={alt}
          priority={priority}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      ) : (
        <Image
          onClick={onClick}
          className={loading ? styles.hide : styles.show}
          onLoadingComplete={() => setLoading(false)}
          src={src ? src[0].preview : '/images/placeholder.webp'}
          alt={alt}
          width={width}
          height={height}
          objectFit="cover"
          objectPosition="center"
        />
      )}
    </>
  )
}

export default CustomImage
