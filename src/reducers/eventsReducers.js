import * as constants from '../constants';

const initialState = {
    data: [],
    filter: '',
    isLoading: true
};

export function eventsReducers(state = initialState, action){ 
    switch (action.type) {
        case constants.EVENTS_FILTER:
            return { ...state, filter: action.payload.filter};
            break;
        default:
            return state;

    }
}
