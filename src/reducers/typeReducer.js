import * as constants from '../constants';

const initialState = {
    typeList: [],
    isLoading: true,
    isError: false
};

export function typeReducer(state = initialState, action){
    switch (action.type) {
        case constants.TYPE_GET_START:
            return {...state, isLoading: true };
        case constants.TYPE_GET_SUCCESS:
            return {...state, isLoading: false, typeList: action.payload.data};
        case constants.TYPE_GET_ERROR:
            return {...state, isLoading: false, isError: true};
        default:
            return state;

    }
}
