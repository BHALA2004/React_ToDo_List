import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './UseState'
import UseReduce from './UseReduce'
import UseEffect from './UseEffect'
import UseLayout from './UseLayoutEffect'
import UseContext from './UseContext'
import UseRef from './UseRef'
import UseMemo from './UseMemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      // <UseState/>
      //<UseReduce/>
      //<UseEffect/>
      //<UseLayout/>
      //<UseContext/>
      // <UseRef/>
      <UseMemo/>
    
  )
}

export default App
