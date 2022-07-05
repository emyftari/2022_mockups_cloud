import { FC, useRef } from 'react'
import {
  FacebookShareButton,
  VKShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
} from 'next-share'

import styles from './PostInfo.module.scss'

import Container from 'components/ui/Container'
import Icon, { Types } from 'components/ui/Icon'
import Modal from 'components/ui/Modal'
import Report from 'components/Report'

const PostInfo: FC<any> = ({
  application,
  title,
  description,
  short_url,
  post_images,
  id,
}) => {
  const modalRef = useRef<any>()

  return (
    <div>
      <div className={styles.action__bar}>
        <Container>
          <div className={styles.application}>
            <Icon type={Types.photoshop} />
            <h5>{application.name}</h5>
          </div>
          <div className={styles.share}>
            <FacebookShareButton
              url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${short_url}`}
            >
              <Icon type={Types.facebook} />
            </FacebookShareButton>
            <TwitterShareButton
              url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${short_url}`}
            >
              <Icon type={Types.twitter} />
            </TwitterShareButton>
            <LinkedinShareButton
              url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${short_url}`}
            >
              <Icon type={Types.linkedin} />
            </LinkedinShareButton>
            <VKShareButton
              url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${short_url}`}
            >
              <Icon type={Types.vk} />
            </VKShareButton>
            <PinterestShareButton
              url={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${short_url}`}
              media={post_images[0].preview}
            >
              <Icon type={Types.pinterest} />
            </PinterestShareButton>
          </div>
          <button onClick={() => modalRef.current.open()}>
            <Icon type={Types.warning} />
            REPORT
          </button>
          <button>
            <Icon type={Types.coffee} />
            DONATE
          </button>
        </Container>
      </div>
      <Container className={styles.info}>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </Container>
      <Modal ref={modalRef}>
        <Report close={() => modalRef.current.close()} id={id} />
      </Modal>
    </div>
  )
}

export default PostInfo
