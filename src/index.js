import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { eventsReducers } from './reducers/eventsReducers';
import App from './app';


const store = createStore(eventsReducers);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
