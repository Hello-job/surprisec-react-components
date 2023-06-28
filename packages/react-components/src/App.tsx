import { Popover, Button, Loading, Modal } from './index';
import Icon from './icon';

const App = () => {
  return (
    <>
      <Popover overlay={<div>哈哈哈哈</div>}>测试</Popover>
      <Button icon={<Icon className="text-lg text-white" type="icondetails_edit" />}>确认</Button>
      <Loading />
      <Modal open={true}>9999</Modal>
    </>
  );
};

export default App;
