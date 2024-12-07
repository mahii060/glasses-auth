import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full text-center h-60 flex items-center justify-center bg-violet-400'>
      <button className='btn btn-error'>Click me</button>
    </div>
  )
}

export default App
