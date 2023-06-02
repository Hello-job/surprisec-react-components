import { ReactNode } from 'react'
import Mask from './mask'
import ReactDOM from 'react-dom'
import Button from '../button'
// import { Icon } from '@/components'
import cls from 'classnames'
import configModal from './configModal'

interface ModalProps {
  title?: string
  open: boolean
  children?: ReactNode
  footer?: ReactNode
  header?: ReactNode
  centered?: boolean
  closable?: boolean
  onCancel?: () => void
  onOk?: () => void
}

const Modal = ({
  title,
  open,
  children,
  footer,
  centered,
  closable,
  header,
  onOk,
  onCancel
}: ModalProps) => {
  const headerNode =
    header === undefined ? (
      <div className="text-sm">
        <span>{title}</span>
      </div>
    ) : (
      header
    )

  const closeIcon = closable ? null : (
    <div
      className=" absolute top-5 right-5 text-sm leading-none p-[2px] rounded-sm hover:bg-[#e0e0e0]"
      onClick={() => onCancel && onCancel()}
    >
      {/* <Icon className="text-textLight" type="iconclose11" /> */}
    </div>
  )

  const content = <div className="mb-5">{children}</div>

  const renderFooter = () => {
    return footer === undefined ? (
      <div className="flex justify-end items-center">
        <Button className="mr-5" onClick={() => onCancel && onCancel()}>
          取消
        </Button>
        <Button
          type="primary"
          className="bg-violet"
          onClick={() => onOk && onOk()}
        >
          确认
        </Button>
      </div>
    ) : (
      footer
    )
  }

  return ReactDOM.createPortal(
    <div className={`${open ? 'block' : 'hidden'}`}>
      <Mask />
      <div className="animate-modalShow  fixed inset-y-0 inset-x-0">
        <div
          className={cls(
            'w-[520px]  p-5 mx-auto rounded-xl bg-white relative',
            {
              'top-1/2 -translate-y-1/2': centered,
              ' top-[100px]': !centered
            }
          )}
        >
          {/* 头部区域 */}
          {headerNode}
          {/* 关闭按钮 */}
          {closeIcon}
          {/* 中间内容 */}
          {content}
          {renderFooter()}
        </div>
      </div>
    </div>,
    document.body
  )
}

Modal.confirm = configModal
export default Modal
