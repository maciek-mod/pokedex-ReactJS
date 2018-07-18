import * as constants from '../constants';
import fetch from 'isomorphic-fetch';

export function filterEvents(filter) {
    return {
        type: constants.EVENTS_FILTER,
        payload: {
            filter
        }
    }
}

export function getEventsStart(){
    return{
        type: constants.EVENTS_GET_START,
    }
}

export function getEventsSuccess(data){
    return{
        type: constants.EVENTS_GET_SUCCESS,
        payload: {
            data
        }
    }
}

export function getEventsError(error){
    return{
        type: constants.EVENTS_GET_ERROR,
        payload: {
            error
        }
    }
}

export function getEvents(){
    return (dispatch) => {
        dispatch(getEventsStart());
        fetch('https://pokeapi.co/api/v2/pokedex/1/')
        .then(response => response.json())
        .then(data => dispatch(getEventsSuccess(data.pokemon_entries)))
        .catch(error => dispatch(getEventsError(error)));
    };
}
