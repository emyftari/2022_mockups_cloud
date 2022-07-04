import { FC } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import toast from 'react-hot-toast'

import { client } from 'utils/client'

import styles from './HeaderDownload.module.scss'

import Icon, { Types } from 'components/ui/Icon'
import Container from 'components/ui/Container'

interface IHeader {
  home?: boolean
  post?: any
  download?: any
  subcategories?: any
}

const Header: FC<IHeader> = ({ post }) => {
  const vote = async (vote: 1 | 0) => {
    try {
      await client.post(`/posts/${post.id}/vote`, { vote, domain: 4 })
      toast.success('Post voted!')
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <header className={styles.header}>
      <Container wide className={styles.header__container}>
        <Link href="/">
          <div>
            <Icon type={Types.logoSimple} />
          </div>
        </Link>
        <div className={styles.header__title}>
          <span>Ps</span>
          <h2>{post.title}</h2>
        </div>
        <div className={styles.header__right}>
          <div className={styles.vote}>
            <h4>WORKS THIS LINK?</h4>
            <h3>VOTE NOW</h3>
          </div>
          <button onClick={() => vote(1)}>
            <Icon type={Types.arrowUp} />
          </button>
          <button onClick={() => vote(0)}>
            <Icon type={Types.arrowDown} />
          </button>
          <button>
            <Icon type={Types.share} />
            SHARE
          </button>
          <button>
            <Icon type={Types.heart} />
            DONATE
          </button>
          <button>
            <Icon type={Types.plusWhite} />
            SUBMIT
          </button>
        </div>
      </Container>
    </header>
  )
}

export default Header
