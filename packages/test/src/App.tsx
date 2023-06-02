import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CumButton, Popover } from 'surprisec-react-components'
import 'surprisec-react-components/style'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CumButton />
      <Popover>按钮</Popover>
    </div>
  )
}

export default App
