import { FC } from 'react'
import clsx from 'clsx'

import styles from './Container.module.scss'

const Container: FC<{ children: any; className?: any; wide?: boolean }> = ({
  children,
  className,
  wide,
}) => {
  return (
    <div className={clsx(styles.container, className, wide && styles.wide)}>
      {children}
    </div>
  )
}

export default Container
