import { useState } from 'react';
import './App.css';
import { Button, Modal, Loading } from 'surprisec-react-components';
import 'surprisec-react-components/style';

function App() {
  const [open, setOpen] = useState(false);

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
      <Loading />
    </div>
  );
}

export default App;
