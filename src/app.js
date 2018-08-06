import React from 'react';
import Events from './events/Events';
import Details from './details/details';
import Type from './type/Type';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {
    return (<Router>
        <div className="pokedex_container">
            <Switch>
                <Route path="/details/:eventId" component={Details}/>
                <Route path="/type/:typetId" component={Type}/>
                <Route exact path="/" component={Events}/>
            </Switch>
        </div>
    </Router>);
}

export default App;
