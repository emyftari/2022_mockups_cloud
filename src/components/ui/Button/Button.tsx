import { FC } from 'react'
import clsx from 'clsx'

import styles from './Button.module.scss'

export enum ButtonTypes {
  primary = 'primary',
  circle = 'circle',
}

interface Props {
  type?: ButtonTypes
  className?: string
  children: any
  onClick?: () => void
}

const Button: FC<Props> = ({
  children,
  type = ButtonTypes.primary,
  className,
  onClick,
}) => {
  const buttonClassName = clsx(styles.button, styles[type], className)

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  )
}

export default Button
