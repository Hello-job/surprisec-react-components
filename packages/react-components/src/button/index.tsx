import { ReactNode } from 'react';
import type { CSSProperties } from 'react';
import { getPrefix } from '../utils/config';
import './style';
import cls from 'classnames';

interface ButtonProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode | string;
  type?: 'primary' | 'link' | 'default';
  icon?: ReactNode;
  onClick?: () => void;
}

const prefixCls = getPrefix('btn');

const Button = ({ children, className, style, type = 'default', icon, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={cls(
        prefixCls,
        {
          [`${prefixCls}-${type}`]: type,
        },
        className
      )}
    >
      <span className={`${prefixCls}-icon`}>{icon}</span>
      <span>{children}</span>
    </button>
  );
};

export type { ButtonProps };
export default Button;
