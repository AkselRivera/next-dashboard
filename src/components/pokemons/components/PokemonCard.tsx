import Link from 'next/link'
import { SimplePokemon } from '..'
import Image from 'next/image'
import { IoHeartOutline } from 'react-icons/io5'

interface Props {
  pokemon: SimplePokemon
}

export function PokemonCard({ pokemon }: Props) {
  const { name, id } = pokemon
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
          <Link
            href="/account/campaigns"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-red-600">
              <IoHeartOutline className="w-5 h-5" />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Add to favorites
              </p>
              <p className="text-xs text-gray-500">
                Save your favorite pokemons
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
