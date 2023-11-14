import React from 'react'
import { IoHeartOutline } from 'react-icons/io5'

export const NoPokemons = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>There are no favorites</span>
    </div>
  )
}
