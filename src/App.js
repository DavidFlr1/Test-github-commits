import React from 'react'
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom'
import { Navbars, Home, Commits, Profile } from './components/index'

import Button from 'react-bootstrap/Button'

import './styles.css'

const App = () => {


    return (
        <Router>
            <Navbars />
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/Commits">
                        <Commits />
                    </Route>
                    <Route exact path="/Profile">
                        <Profile />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
