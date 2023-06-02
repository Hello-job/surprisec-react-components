import { ReactNode } from 'react'
import { getPrefix } from '../utils/config'
import './style'
import cls from 'classnames'

interface ButtonProps {
  className?: string
  children?: ReactNode | string
  type?: 'primary' | 'link' | 'default'
  onClick?: () => void
}

const prefixCls = getPrefix('btn')

const Button = ({
  children,
  className,
  type = 'default',
  onClick
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cls(
        prefixCls,
        {
          [`${prefixCls}-${type}`]: type
        },
        className
      )}
    >
      {children}
    </button>
  )
}

export type { ButtonProps }
export default Button
