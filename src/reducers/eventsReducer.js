import * as constants from '../constants';

const initialState = {
    data: [],
    filter: '',
    isLoading: false,
    isError: false,
    toggleClass: false
};

export function eventsReducer(state = initialState, action){
    switch (action.type) {
        case constants.EVENTS_FILTER:
            return { ...state, filter: action.payload.filter};
        case constants.EVENTS_GET_START:
            return {...state, isLoading: true, filter: ''};
        case constants.EVENTS_GET_SUCCESS:
            return {...state, isLoading: false, data: action.payload.data};
        case constants.EVENTS_GET_ERROR:
            return {...state, isLoading: false, isError: true};
        default:
            return state;

    }
}
