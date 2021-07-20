import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbars, Home, Commits, Profile } from './components/index'

import './styles.css'

const App = () => {
    // Setting personalized mouse to be deployed in the whole view
    const [mouse, setMouse] = useState('')
    const handleMouse = (cursor) => {
        setMouse(cursor)
    }

    return (
        <div style={{cursor: `url(${mouse}), auto`}}>
        <Router>
            <Navbars />
                <Switch>
                    <Route exact path="/">
                        <Home handleMouse={handleMouse} />
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
