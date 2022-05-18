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
}

const Button: FC<Props> = ({
  children,
  type = ButtonTypes.primary,
  className,
}) => {
  const buttonClassName = clsx(styles.button, styles[type], className)

  return <button className={buttonClassName}>{children}</button>
}

export default Button
