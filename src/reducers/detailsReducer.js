import * as constants from '../constants';

const initialState = {
    pokemon: null,
    isLoading: true,
    isError: false,
    toggleSprite: false,
    toggleAbilities: false,
    toggleMoves: false,
    toggleStats: false
};

export function detailsReducer(state = initialState, action){
    switch (action.type) {
        case constants.DETAILS_GET_START:
            return {...state, isLoading: true };
        case constants.DETAILS_GET_SUCCESS:
            return {...state, isLoading: false, pokemon: action.payload.data};
        case constants.DETAILS_GET_ERROR:
            return {...state, isLoading: false, isError: true};
        default:
            return state;

    }
}
