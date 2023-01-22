import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <span data-testid='label'>Hello</span>
    </div>
  )
}

export default App
