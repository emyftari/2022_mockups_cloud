import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Single.module.scss'

import Container from 'components/ui/Container'
import CustomImage from 'components/ui/CustomImage'
import Button from 'components/ui/Button'
import Icon, { Types } from 'components/ui/Icon'
import PostInfo from 'components/PostInfo'

const Single: FC<any> = ({ post }) => {
  return (
    <Container>
      <div className={styles.post}>
        <div className={styles.post__image}>
          <CustomImage layout="fill" src={post.post_images} alt="" />
        </div>
        <div className={styles.post__info}>
          <div className={styles.post__info__app}>
            <span>
              {post.application.name
                .split(' ')
                .map((word: any) => word[0])
                .join('')}
            </span>
            <p>{post.application.name}</p>
          </div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
        <div className={styles.post__right}>
          <div className={styles.post__ad}>
            <Image
              src="/images/ad-2.png"
              width={300}
              height={250}
              alt=""
              objectFit="cover"
            />
          </div>
          <div className={styles.socials}>
            <h2>SHARE</h2>
            <Link href="/">
              <a>
                <Icon type={Types.facebook} />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Icon type={Types.twitter} />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Icon type={Types.linkedin} />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Icon type={Types.vk} />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Icon type={Types.pinterest} />
              </a>
            </Link>
          </div>
          <Link href={`/${post.id}/download`}>
            <div className={styles.download}>
              <Button>
                <Icon type={Types.download} />
                DOWNLOAD
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Single
