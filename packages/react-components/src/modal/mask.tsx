import './style'
import { getPrefix } from '../utils/config'

const prefixCls = getPrefix('modal')
const Mask = () => {
  return (
    <div className={`${prefixCls}-mask`}></div>
  );
};

export default Mask;
