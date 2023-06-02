import { Popover } from './index'
import { Button } from './index'

const App = () => {
  return (
    <>
      <Popover overlay={<div>哈哈哈哈</div>}>测试</Popover>
      <Button>确认</Button>
    </>
  )
}

export default App
