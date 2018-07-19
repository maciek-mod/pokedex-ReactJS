import * as constants from '../constants';
import fetch from 'isomorphic-fetch';


export function getDetailsStart(){
    return{
        type: constants.DETAILS_GET_START,
    }
}

export function getDetailsSuccess(data){
    return{
        type: constants.DETAILS_GET_SUCCESS,
        payload: {
            data
        }
    }
}

export function getDetailsError(error){
    return{
        type: constants.DETAILS_GET_ERROR,
        payload: {
            error
        }
    }
}

export function getDetails(idPokemon){
    return (dispatch) => {
        dispatch(getDetailsStart());
        fetch('https://pokeapi.co/api/v2/pokemon/' + idPokemon)
        .then(response => response.json())
        .then(data => dispatch(getDetailsSuccess(data)))
        .catch(error => dispatch(getDetailsError(error)));
    };
}
