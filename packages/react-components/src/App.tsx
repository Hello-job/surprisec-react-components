import { Popover, Button, Loading } from './index';

const App = () => {
  return (
    <>
      <Popover overlay={<div>哈哈哈哈</div>}>测试</Popover>
      <Button>确认</Button>
      {/* <div style={{ width: 200, height: 200, backgroundColor: 'pink' }}> */}
      <Loading />
      {/* </div> */}
    </>
  );
};

export default App;
