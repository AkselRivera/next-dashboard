import { PokemonGrid } from '@/components/pokemons'

export const metadata = {
  title: 'Pokemons - Favorites',
  description: 'Your favorties pokemons',
}

export default async function PokemonsPage() {
  return (
    <div>
      <h3 className="text-5xl my-2">
        My favorites <small className="text-blue-500">Global state</small>
      </h3>

      <PokemonGrid pokemons={[]} />
    </div>
  )
}
