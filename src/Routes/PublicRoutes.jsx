import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Component/Home'

export default function PublicRoutes() {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Home}></Route>
            </Switch>
        </div>
    )
}
