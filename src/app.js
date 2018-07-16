import React from 'react';
import Events from './events/Events';
import Details from './details/details';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {
    return (<Router>
        <div>
            <Switch>
                <Route path="/about" render={(props) => <h1>a tititi hoooo!</h1>} />
                <Route path="/details/:eventId" component={Details}/>
                <Route exact path="/" component={Events}/>
            </Switch>
        </div>
    </Router>);
}

export default App;
