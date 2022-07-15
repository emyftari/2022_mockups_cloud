import { FC } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import styles from './HeaderPost.module.scss'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { setSubcategory } from 'app/features/filterSlice'

import Button, { Types as ButtonTypes } from 'components/ui/Button'
import Icon, { Types } from 'components/ui/Icon'
import Container from 'components/ui/Container'
import Single from 'components/Single/Single'

interface IHeader {
  post?: any
  subcategories?: any
}

const Header: FC<IHeader> = ({ post, subcategories }) => {
  const dispatch = useAppDispatch()
  const subcategory = useAppSelector((state) => state.filter.subcategory)

  return (
    <header
      className={clsx(styles.header)}
      style={subcategory ? { paddingBlock: '1rem 1rem' } : {}}
    >
      <Container wide>
        <div
          className={styles.header__top}
          style={subcategory ? { marginBottom: 0 } : {}}
        >
          <Link href="/">
            <div>
              <Icon type={Types.logo} />
            </div>
          </Link>
          <nav className={styles.navigation}>
            <ul>
              <li
                data-selected={subcategory === null || subcategory === -1}
                onClick={() => dispatch(setSubcategory(null))}
              >
                All Mockups
              </li>
              {subcategories.map((item: any) => (
                <li
                  data-selected={subcategory === item.id}
                  onClick={() => dispatch(setSubcategory(item.id))}
                  key={item.id}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.header__top__socials}>
            <h5>Donate</h5>
            <hr />
            <h5>Follow Us</h5>
            <a
              href="https://www.facebook.com/mockups.cloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <Icon type={Types.fb} />
              </span>
            </a>
            <a
              href="https://www.instagram.com/mockups.cloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <Icon type={Types.ig} />
              </span>
            </a>
            <Button type={ButtonTypes.circle}>
              <Icon type={Types.plus} />
            </Button>
          </div>
        </div>
      </Container>
      {!subcategory && <Single post={post} />}
    </header>
  )
}

export default Header
