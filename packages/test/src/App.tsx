import { useEffect, useState } from 'react';
import './App.css';
import { Button, Popover, Modal } from 'surprisec-react-components';
import 'surprisec-react-components/style';
let a = 1;
function App() {
  const [open, setOpen] = useState(false);
  console.log('??????运行几遍');
  useEffect(() => {
    ++a;
    console.log('>>>>>>>a', a);
  }, []);
  return (
    <div className="App">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        测试
      </Button>
      <Modal open={open} title="261D2B63.png标题" width={200} />
    </div>
  );
}

export default App;
