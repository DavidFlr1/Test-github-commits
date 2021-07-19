import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom'
import { Navbar, Home, Commits, Profile } from './components/index'

import {Button} from 'reactstrap'


import './styles.css'

const App = () => {
    const fetchInformation = () => {
        axios.get('https://api.github.com/repos/DavidFlr1/Test-github-commits/commits')
            .then(response => console.log(response))
    }

    return (
        <Router>
            <Navbar />
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
