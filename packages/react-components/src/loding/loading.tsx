import React, { memo } from 'react';
import { getPrefix } from '../utils/config';
import './style';

const Loading: React.FC = () => {
  const prefixCls = getPrefix('loding');
  return (
    <div className={prefixCls}>
      <svg className={`${prefixCls}-content`} width="40" height="40">
        <circle className={`${prefixCls}-mouth`} cx="20" cy="20" r="14"></circle>
        <circle className={`${prefixCls}-eye`} cx="20" cy="20" r="14"></circle>
      </svg>
    </div>
  );
};

export default memo(Loading);
