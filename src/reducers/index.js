import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { detailsReducer } from './detailsReducer';
import { typeReducer } from './typeReducer';


const rootReducer = combineReducers({
    eventsStore: eventsReducer,
    detailsStore: detailsReducer,
    typeStore: typeReducer

});

export default rootReducer;
