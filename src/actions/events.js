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
