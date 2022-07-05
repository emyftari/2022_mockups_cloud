import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  VKShareButton,
  PinterestShareButton,
} from 'next-share'

import { client } from 'utils/client'

import styles from './Single.module.scss'

import Container from 'components/ui/Container'
import CustomImage from 'components/ui/CustomImage'
import Button from 'components/ui/Button'
import Icon, { Types } from 'components/ui/Icon'

const Single: FC<any> = ({ post }) => {
  const handleDownload = async () => {
    await client.post(`posts/${post.id}/download`, { domain: 4 })
  }

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

            <FacebookShareButton
              url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${post.short_url}`}
            >
              <Icon type={Types.facebook} />
            </FacebookShareButton>
            <TwitterShareButton
              url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${post.short_url}`}
            >
              <Icon type={Types.twitter} />
            </TwitterShareButton>
            <LinkedinShareButton
              url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${post.short_url}`}
            >
              <Icon type={Types.linkedin} />
            </LinkedinShareButton>
            <VKShareButton
              url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${post.short_url}`}
            >
              <Icon type={Types.vk} />
            </VKShareButton>
            <PinterestShareButton
              url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${post.short_url}`}
              media={post.post_images[0].preview}
            >
              <Icon type={Types.pinterest} />
            </PinterestShareButton>
          </div>
          <Link href={`/${post.short_url}/download`}>
            <div onClick={handleDownload} className={styles.download}>
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
