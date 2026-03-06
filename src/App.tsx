import { useState } from 'react'
import './index.css' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
      <p className="mb-6 text-xl">Click the button to see state in action:</p>
      <button
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition"
        onClick={() => setCount(count + 1)}
      >
        Click Me: {count}
      </button>
    </div>
  )
}

export default App
