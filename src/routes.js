import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { App, Whoops404 } from './components'
import ReadDayCount from './components/containers/ReadDayCount'
import AddDayForm from './components/containers/AddDayForm'
import ReadDayList from './components/containers/ReadDayList'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={ReadDayCount}/>
            <Route path="add-day" component={AddDayForm}/>
            <Route path="list-days" component={ReadDayList}>
                <Route path=":filter" component={ReadDayList}/>
            </Route>
        <Route path="*" component={Whoops404}/>
        </Route>
    </Router>
)

export default routes
