import { CardCounter } from '@/components/shopping-cart'

export const metadata = {
  title: 'Counter Page',
  description: 'Counter page description',
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CardCounter value={20} />
    </div>
  )
}
