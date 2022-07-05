import {
  FC,
  Children,
  cloneElement,
  ReactElement,
  forwardRef,
  useState,
  useImperativeHandle,
} from 'react'

interface Props {
  className?: string
  ref: any
  children: any
}

import styles from './Modal.module.scss'

const Modal: FC<Props> = forwardRef(
  ({ children, className, ...props }, ref) => {
    const [open, setOpen] = useState(false)

    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }))

    const child = Children.only(children) as ReactElement

    if (open)
      return (
        <div className={styles.modal} onClick={() => setOpen(false)}>
          {cloneElement(child, {
            className,
            ...props,
          })}
        </div>
      )

    return null
  }
)

Modal.displayName = 'Modal'

export default Modal
