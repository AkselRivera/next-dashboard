'use client'
import { useState } from 'react'

interface Props {
  value?: number
}

export function CardCounter({ value = 0 }: Props) {
  const [counter, setCounter] = useState(value)

  return (
    <>
      <span className="text-8xl ">{counter}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 mr-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] "
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 mr-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] "
          onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>
      </div>
    </>
  )
}
