import {
  PokemonGrid,
  PokemonResponse,
  SimplePokemon,
} from '@/components/pokemons'

export const metadata = {
  title: 'Pokemons - Dashboard',
  description: 'Know your pokemons',
}

const getPokemons = async (
  limit = 151,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json())

  const pokemons = data.results.map((pokemon) => ({
    // Forzar que si vendra con el ! al final
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))

  // throw new Error('Error in getPokemons')
  return pokemons
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons()
  return (
    <div>
      <h3 className="text-5xl my-2">
        Listado de pokemons <small className="text-blue-500">Static</small>
      </h3>

      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
