import { FC } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import styles from './Header.module.scss'

import Button from 'components/Button'

interface IHeader {
  home?: boolean
  post?: boolean
}

const Header: FC<IHeader> = ({ home, post }) => {
  return (
    <header className={clsx(styles.header, home && styles.header__home)}>
      <div className={styles.header__top}>
        <div></div>
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
        </div>
      </div>
      {home && (
        <>
          <div className={styles.header__nav}>
            <fieldset className={styles.header__nav__search}>
              <input
                type="text"
                placeholder="Type what you are looking for..."
              />
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
          <div className={styles.header__ad}></div>
        </>
      )}
      {post && (
        <div className={styles.post}>
          <Image
            src="/test.jpg"
            width={680}
            height={400}
            alt=""
            objectFit="cover"
          />
          <div>
            <Image
              src="/test.jpg"
              width={300}
              height={250}
              alt=""
              objectFit="cover"
            />
            <div className={styles.socials}>
              <h2>SHARE</h2>
            </div>
            <Button />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
