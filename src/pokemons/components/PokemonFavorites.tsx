'use client'
import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
import { useEffect, useState } from 'react'
import { NoPokemons } from './NoPokemons'

export const PokemonFavorites = () => {
  const pokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  )

  const [favoritePokemons, setFavoritePokemons] = useState(pokemons)

  // useEffect(() => {
  //   setFavoritePokemons(pokemons)
  // }, [pokemons])

  return (
    <>
      {pokemons.length === 0 ? (
        <NoPokemons />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  )
}
