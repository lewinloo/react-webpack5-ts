import React from "react"
import { useState } from "react"
import { sum } from "./utils/sum"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h2>count: {count + sum(1, 2)}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default App
