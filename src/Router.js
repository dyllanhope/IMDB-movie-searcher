import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Favourites from './pages/Favourites';


// router used to route between the Home, Favourites and About pages easily
const Router = (props) => (

    <HashRouter>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/About">
                <About />
            </Route>
            <Route exact path="/Favourites">
                <Favourites />
            </Route>
        </Switch>
    </HashRouter>
)


export default Router;