import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import styles from './Header.module.scss'

import Button, { Types as ButtonTypes } from 'components/ui/Button'
import Icon, { Types } from 'components/ui/Icon'

interface IHeader {
  home?: boolean
  post?: boolean
  download?: boolean
}

const Header: FC<IHeader> = ({ home, post, download }) => {
  return (
    <header
      className={clsx(
        styles.header,
        home && styles.header__home,
        post && styles.header__post,
        download && styles.header__download
      )}
    >
      {(home || post) && (
        <div className={styles.header__top}>
          <div>
            <Icon type={Types.logo} />
          </div>
          {post && (
            <nav className={styles.navigation}>
              <ul>
                <li>All Mockups</li>
                <li>Apparel & Sport</li>
                <li>Device & Technology</li>
                <li>Packgaging & Branding</li>
              </ul>
            </nav>
          )}
          <div className={styles.header__top__socials}>
            <h5>Donate</h5>
            <hr />
            <h5>Follow Us</h5>
            <span>
              <Icon type={Types.fb} />
            </span>
            <span>
              <Icon type={Types.ig} />
            </span>
            <Button type={ButtonTypes.circle}>
              <Icon type={Types.plus} />
            </Button>
          </div>
        </div>
      )}
      {home && (
        <>
          <div className={styles.header__nav}>
            <fieldset className={styles.header__nav__search}>
              <input
                type="text"
                placeholder="Type what you are looking for..."
              />
              <Icon type={Types.search} />
            </fieldset>
            <nav className={styles.navigation}>
              <ul>
                <li>All Mockups</li>
                <li>Apparel & Sport</li>
                <li>Device & Technology</li>
                <li>Packgaging & Branding</li>
              </ul>
            </nav>
          </div>
          <div className={styles.header__ad}>
            <Image src="/images/ad.png" width={970} height={90} alt="" />
          </div>
        </>
      )}
      {post && (
        <div className={styles.post}>
          <Image
            src="/images/single-post.png"
            width={680}
            height={400}
            alt=""
            objectFit="cover"
          />
          <div>
            <Image
              src="/images/ad-2.png"
              width={300}
              height={250}
              alt=""
              objectFit="cover"
            />
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
            <Button>
              <Icon type={Types.download} />
              DOWNLOAD
            </Button>
          </div>
        </div>
      )}
      {download && (
        <>
          <div className={styles.icon}>
            <Icon type={Types.logo} />
          </div>
          <div className={styles.download__content}>
            <h2>Hanging Frame 24×36 Poster Mockup</h2>
            <div className={styles.actions}>
              <div>
                <h4>WORKS THIS LINK?</h4>
                <h3>VOTE NOW</h3>
              </div>
              <button>
                <Icon type={Types.arrowUp} />
              </button>
              <button>
                <Icon type={Types.arrowDown} />
              </button>
              <button>
                <Icon type={Types.share} />
                SHARE
              </button>
              <button>
                <Icon type={Types.heart} />
                VOTE
              </button>
              <button>
                <Icon type={Types.plusWhite} />
                SUBMIT
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
