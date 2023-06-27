import React, { memo } from 'react';
import { getPrefix } from '../utils/config';
import './style';

const Loading: React.FC = () => {
  const prefixCls = getPrefix('loding');
  return (
    <svg width="100" height="100">
      <circle className={`${prefixCls}-mouth`} cx="50" cy="50" r="14"></circle>
      <circle className={`${prefixCls}-eye`} cx="50" cy="50" r="14"></circle>
    </svg>
  );
};

export default memo(Loading);
