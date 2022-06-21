import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import toast from 'react-hot-toast'
import debounce from 'lodash.debounce'

import styles from './Header.module.scss'

import { useAppDispatch } from 'app/hooks'
import { setSearch, setSubcategory } from 'app/features/filterSlice'

import { client } from 'utils/client'

import CustomImage from 'components/ui/CustomImage'
import Button, { Types as ButtonTypes } from 'components/ui/Button'
import Icon, { Types } from 'components/ui/Icon'

interface IHeader {
  home?: boolean
  post?: any
  download?: any
  subcategories?: any
}

const Header: FC<IHeader> = ({ home, post, download, subcategories }) => {
  const dispatch = useAppDispatch()

  const handleChange = (e: any) => dispatch(setSearch(e.target.value))

  const vote = async (vote: 1 | 0) => {
    try {
      await client.post(`/posts/${download.id}/vote`, { vote, domain: 4 })
      toast.success('Post voted!')
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }

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
          <Link href="/">
            <div>
              <Icon type={Types.logo} />
            </div>
          </Link>
          {post && (
            <nav className={styles.navigation}>
              <ul>
                <li onClick={() => dispatch(setSubcategory(null))}>
                  All Mockups
                </li>
                {subcategories.map((item: any) => (
                  <li
                    onClick={() => dispatch(setSubcategory(item.id))}
                    key={item.id}
                  >
                    {item.title}
                  </li>
                ))}
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
                onChange={debounce(handleChange, 500)}
                type="text"
                placeholder="Type what you are looking for..."
              />
              <Icon type={Types.search} />
            </fieldset>
            <nav className={styles.navigation}>
              <ul>
                <li onClick={() => dispatch(setSubcategory(null))}>
                  All Mockups
                </li>
                {subcategories.map((item: any) => (
                  <li
                    onClick={() => dispatch(setSubcategory(item.id))}
                    key={item.id}
                  >
                    {item.title}
                  </li>
                ))}
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
          <CustomImage src={post.post_images} width={680} height={400} alt="" />
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
            <Link href={`/${post.id}/download`}>
              <div>
                <Button>
                  <Icon type={Types.download} />
                  DOWNLOAD
                </Button>
              </div>
            </Link>
          </div>
        </div>
      )}
      {download && (
        <>
          <Link href="/">
            <div className={styles.icon}>
              <Icon type={Types.logo} />
            </div>
          </Link>
          <div className={styles.download__content}>
            <h2>{download.title}</h2>
            <div className={styles.actions}>
              <div>
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
