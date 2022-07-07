import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import {
  setCookies,
  getCookie,
  checkCookies,
  CookieValueTypes,
} from 'cookies-next'

import { votePost } from 'utils/client'

import styles from './HeaderDownload.module.scss'

import Icon, { Types } from 'components/ui/Icon'
import Container from 'components/ui/Container'

interface IHeader {
  home?: boolean
  post?: any
  download?: any
  subcategories?: any
}

const Header: FC<IHeader> = ({ post: { id, title } }) => {
  const [revealShare, setRevealShare] = useState(false)
  const [upDown, setUpDown] = useState<0 | 1 | null | CookieValueTypes>(null)

  const vote = async (vote: 1 | 0) => {
    try {
      await votePost(id, vote)
      setUpDown(vote)
      setCookies(`post-${id}`, id)
      setCookies(`vote-${id}`, vote)
      toast.success('Post voted!')
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    if (checkCookies(`post-${id}`) && checkCookies(`vote-${id}`)) {
      const cookieId: any = getCookie(`post-${id}`)

      if (parseInt(cookieId) === id) {
        setUpDown(getCookie(`vote-${id}`))
      }
    }
    // eslint-disable-next-line
  }, [upDown])

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
          <h2>{title}</h2>
        </div>
        <div className={styles.header__right}>
          <div className={styles.vote}>
            <h4>WORKS THIS LINK?</h4>
            <h3>VOTE NOW</h3>
          </div>
          <button disabled={upDown === '1'} onClick={() => vote(1)}>
            <Icon type={Types.arrowUp} />
          </button>
          <button disabled={upDown === '0'} onClick={() => vote(0)}>
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
