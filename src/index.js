import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { eventsReducers } from './reducers/eventsReducers';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import App from './app';


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
