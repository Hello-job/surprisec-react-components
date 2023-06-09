export const prefixCls = 'pj';

export const getPrefix = (suffixCls: string) => {
  return `${prefixCls}-${suffixCls}`;
};
