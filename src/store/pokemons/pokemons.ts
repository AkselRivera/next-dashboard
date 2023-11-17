import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsFavoriteState {
    favorites: {[key: string] : SimplePokemon}
}

// function getInitialState(): PokemonsFavoriteState {
//   // if(typeof localStorage === 'undefined') {
//   //   return {}
//   // }
//   const favorites = JSON.parse(localStorage.getItem('favorites') ?? '{}')
//   return favorites
// }

const initialState: PokemonsFavoriteState = {
 favorites: {}
}

const pokemonsSlice = createSlice({
  name: 'pokemonsState',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{[key: string] : SimplePokemon}>){
        state.favorites = action.payload
    },
    toggleFavorites(state, action: PayloadAction<SimplePokemon>){
        const pokemon = action.payload
        const {id} = pokemon

        if (!!state.favorites[id]) {
            delete state.favorites[id]
        } else {
            state.favorites[id] = pokemon
        }
        
        //! ESTO ES UNA MALA PRACTICA :D
        // localStorage.setItem('favorites', JSON.stringify(state))

    }
  }
});

export const { setFavoritePokemons, toggleFavorites } = pokemonsSlice.actions

export default pokemonsSlice.reducer