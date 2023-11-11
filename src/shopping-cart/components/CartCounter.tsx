'use client'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  addOne,
  initCounterState,
  susbtractOne,
} from '@/store/counter/counterSlice'
import { useState, useEffect } from 'react'

interface Props {
  value?: number
}

interface CounterResponse {
  count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then((res) => res.json())

  return data
}

export function CartCounter({ value = 0 }: Props) {
  const counter = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(initCounterState(value))
  // }, [dispatch, value])

  useEffect(() => {
    getApiCounter().then((data) => {
      dispatch(initCounterState(data.count))
    })
  }, [dispatch, value])

  return (
    <>
      <span className="text-8xl ">{counter}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 mr-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] "
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 mr-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] "
          onClick={() => dispatch(susbtractOne())}
        >
          -1
        </button>
      </div>
    </>
  )
}
