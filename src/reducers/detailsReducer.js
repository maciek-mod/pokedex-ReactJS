import * as constants from '../constants';

const initialState = {
    pokemon: null,
    isLoadingDetails: true,
    isErrorDetails: false
};

export function detailsReducer(state = initialState, action){
    switch (action.type) {
        case constants.DETAILS_GET_START:
            return {...state, isLoadingDetails: true };
        case constants.DETAILS_GET_SUCCESS:
            return {...state, isLoadingDetails: false, pokemon: action.payload.data};
        case constants.DETAILS_GET_ERROR:
            return {...state, isLoadingDetails: false, isErrorDetails: false};
        default:
            return state;

    }
}
