import * as constants from '../constants';
import fetch from 'isomorphic-fetch';


export function getTypeStart(){
    return{
        type: constants.TYPE_GET_START,
    }
}

export function getTypeSuccess(data){
    return{
        type: constants.TYPE_GET_SUCCESS,
        payload: {
            data
        }
    }
}

export function getTypeError(error){
    return{
        type: constants.TYPE_GET_ERROR,
        payload: {
            error
        }
    }
}

export function getType(idType){
    return (dispatch) => {
        dispatch(getTypeStart());
        fetch('http://pokeapi.salestock.net/api/v2/type/' + idType)
        .then(response => response.json())
        .then(data => dispatch(getTypeSuccess(data)))
        .catch(error => dispatch(getTypeError(error)));
    };
}
