import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom'
import { Navbars, Home, Commits, Profile } from './components/index'

import './styles.css'

const App = () => {
    const [mouse, setMouse] = useState('')

    const handleMouse = (cursor) => {
        console.log("hola")
        setMouse(cursor)
    }
    useEffect(() => {
        setMouse(mouse)
        console.log(mouse)
    })
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
