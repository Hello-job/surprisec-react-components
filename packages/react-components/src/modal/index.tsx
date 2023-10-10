import { ReactNode } from 'react';
import Mask from './mask';
import ReactDOM from 'react-dom';
import Button from '../button';
import Icon from '../icon';
import cls from 'classnames';
import configModal from './configModal';
import { getPrefix } from '../utils/config';
import './style';

interface ModalProps {
  title?: string;
  open: boolean;
  children?: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  centered?: boolean;
  closable?: boolean;
  className?: string;
  width?: number | string;
  onCancel?: () => void;
  onOk?: () => void;
}

const Modal = ({
  title,
  open,
  children,
  footer,
  centered,
  closable,
  header,
  className,
  width = 520,
  onOk,
  onCancel,
}: ModalProps) => {
  const prefixCls = getPrefix('modal');
  const headerNode =
    header === undefined ? (
      <div className={`${prefixCls}-title`}>
        <span>{title}</span>
      </div>
    ) : (
      header
    );

  const closeIcon = () => {
    return closable ? null : (
      <div className={`${prefixCls}-closecon`} onClick={() => onCancel && onCancel()}>
        <Icon className={`${prefixCls}-closecon-icon`} type="iconclose11" />
      </div>
    );
  };

  const content = <div className="mb-5">{children}</div>;

  const renderFooter = () => {
    return footer === undefined ? (
      <div className={`${prefixCls}-footer`}>
        <Button style={{ marginRight: 20 }} onClick={() => onCancel && onCancel()}>
          取消
        </Button>
        <Button type="primary" onClick={() => onOk && onOk()}>
          确认
        </Button>
      </div>
    ) : (
      footer
    );
  };

  return ReactDOM.createPortal(
    <div style={{ display: open ? 'block' : 'none' }}>
      <Mask />
      <div className={prefixCls}>
        <div
          className={cls(
            `${prefixCls}-content`,
            {
              [`${prefixCls}-centered`]: centered,
            },
            className
          )}
          style={{ width: typeof width === 'string' ? (isNaN(parseInt(width)) ? width : width + 'px') : width }}
        >
          {/* 头部区域 */}
          {headerNode}
          {/* 关闭按钮 */}
          {closeIcon()}
          {/* 中间内容 */}
          {content}
          {renderFooter()}
        </div>
      </div>
    </div>,
    document.body
  );
};

Modal.confirm = configModal;
export default Modal;
