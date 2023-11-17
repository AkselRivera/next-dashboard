'use client'

import Link from 'next/link'
import { SimplePokemon } from '..'
import Image from 'next/image'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorites } from '@/store/pokemons/pokemons'

interface Props {
  pokemon: SimplePokemon
}

export function PokemonCard({ pokemon }: Props) {
  const { name, id } = pokemon
  const isFavorite = useAppSelector((state) => state.pokemons.favorites[id])

  const dispatch = useAppDispatch()

  function onToggle() {
    dispatch(toggleFavorites(pokemon))
  }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image
            className="mx-auto"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            height={100}
            width={100}
            alt={name}
            priority={false}
            style={{ width: '8rem', height: 'auto' }}
            // style={{ width: 'auto', height: 'auto' }}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <Link
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              href={`/dashboard/pokemons/${name}`}
            >
              More details
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToggle}
            className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
          >
            <div className="text-red-600">
              {!!isFavorite ? (
                <IoHeart className="w-5 h-5" />
              ) : (
                <IoHeartOutline className="w-5 h-5" />
              )}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {!!isFavorite ? 'In favorites' : 'Add to favorites'}
              </p>
              <p className="text-xs text-gray-500">
                Save your favorite pokemons
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
