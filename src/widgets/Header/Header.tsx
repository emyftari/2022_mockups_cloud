import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { setSubcategory } from 'app/features/filterSlice'

import styles from './Header.module.scss'

import Container from 'components/ui/Container'
import Search from 'components/Search'
import Button, { Types as ButtonTypes } from 'components/ui/Button'
import Icon, { Types } from 'components/ui/Icon'

interface IHeader {
  home?: boolean
  post?: any
  download?: any
  subcategories?: any
}

const Header: FC<IHeader> = ({ subcategories }) => {
  const subcategory = useAppSelector((state) => state.filter.subcategory)
  const dispatch = useAppDispatch()

  return (
    <header className={styles.header}>
      <Container wide>
        <div className={styles.header__top}>
          <Link href="/">
            <div>
              <Icon type={Types.logo} />
            </div>
          </Link>
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
        <div className={styles.header__nav}>
          <Search />
          <ul>
            <li
              data-selected={subcategory === -1 || subcategory === null}
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
        </div>
      </Container>
      <div className={styles.header__ad}>
        <Image src="/images/ad.png" width={970} height={90} alt="" />
      </div>
    </header>
  )
}

export default Header
