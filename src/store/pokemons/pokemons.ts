import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsFavoriteState {
    [key: string] : SimplePokemon
}

function getInitialState(): PokemonsFavoriteState {
  const favorites = JSON.parse(localStorage.getItem('favorites') ?? '{}')
  return favorites
}

const initialState: PokemonsFavoriteState = {
  ...getInitialState()
}

const pokemonsSlice = createSlice({
  name: 'pokemonsState',
  initialState,
  reducers: {
    toggleFavorites(state, action: PayloadAction<SimplePokemon>){
        const pokemon = action.payload
        const {id} = pokemon

        if (!!state[id]) {
            delete state[id]
        } else {
            state[id] = pokemon
        }
        
        //! ESTO ES UNA MALA PRACTICA :D
        // localStorage.setItem('favorites', JSON.stringify(state))

    }
  }
});

export const { toggleFavorites } = pokemonsSlice.actions

export default pokemonsSlice.reducer