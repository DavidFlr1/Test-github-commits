import React from 'react'
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom'
import { Navbars, Home, Commits, Profile } from './components/index'

import './styles.css'

const App = () => {
    return (
        <div>
        <Router>
            <Navbars />
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
        </Router>
        </div>
    )
}

export default App
