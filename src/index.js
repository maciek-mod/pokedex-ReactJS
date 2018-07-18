import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { eventsReducers } from './reducers/eventsReducers';
import App from './app';
import thunk from 'redux-thunk';


const store = createStore(eventsReducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
