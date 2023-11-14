'use client'
import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
import { useState } from 'react'
import { NoPokemons } from './NoPokemons'

export const PokemonFavorites = () => {
  const pokemons = useAppSelector((state) => Object.values(state.pokemons))

  const [favoritePokemons, setFavoritePokemons] = useState(pokemons)
  return (
    <>
      {pokemons.length === 0 ? (
        <NoPokemons />
      ) : (
        <PokemonGrid pokemons={favoritePokemons} />
      )}
    </>
  )
}
