import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { log } from "console";
import { RootState } from "..";

export const localStorageMiddleware = (state:MiddlewareAPI) =>{
    return (next: Dispatch)=> (action: Action) =>{
        next(action);
        console.log('action', action);

        if (action.type === 'pokemonsState/toggleFavorites') {
            const {pokemons} = state.getState() as RootState

            localStorage.setItem('favorites', JSON.stringify(pokemons))
            return
        }
    }
}