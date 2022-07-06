import { FC } from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  VKShareButton,
  PinterestShareButton,
} from 'next-share'

import styles from './Share.module.scss'

import Icon, { Types } from 'components/ui/Icon'

const Share: FC<any> = ({ url, media }) => {
  console.log(`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${url}`)

  return (
    <div className={styles.share}>
      <span>
        <Icon type={Types.share} />
        SHARE
      </span>
      <div>
        <FacebookShareButton
          url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${url}`}
        >
          <Icon type={Types.facebook} />
        </FacebookShareButton>
        <TwitterShareButton
          url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${url}`}
        >
          <Icon type={Types.twitter} />
        </TwitterShareButton>
        <LinkedinShareButton
          url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${url}`}
        >
          <Icon type={Types.linkedin} />
        </LinkedinShareButton>
        <VKShareButton url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${url}`}>
          <Icon type={Types.vk} />
        </VKShareButton>
        <PinterestShareButton
          url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${url}`}
          media={media}
        >
          <Icon type={Types.pinterest} />
        </PinterestShareButton>
      </div>
    </div>
  )
}

export default Share
