'use client'
import { useAppSelector } from '@/store'
import { SimpleWidget } from '..'
import { IoCartOutline } from 'react-icons/io5'

export function WidgetGrid() {
  const counter = useAppSelector((state) => state.counter.count)

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label="Counter"
        subtitle="Counter"
        title={counter.toString()}
        icon={<IoCartOutline size={50} className="text-blue-500" />}
        href="/dashboard/counter"
      />
    </div>
  )
}
