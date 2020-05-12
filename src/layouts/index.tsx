import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'


import BasicSiderIndex from '../layouts/BasicSiderIndex'
import BasicIndex from '../layouts/BasicIndex'
import Routes from '../Routers/routes'


// 路由
function BasicLayout() {
    useEffect(() => {
        console.log(Routes)
        // document.title = `You clicked layouts times`;
    }, [])

    return (
        <Switch>
            <Route
                exact
                path='/platform'
                render={(rest) => { return <BasicIndex {...rest} /> }}
            />
            {/* <Route
                exact
                path='/workbench'
                render={(rest) => { return <BasicSiderIndex {...rest} /> }}
            /> */}

            {/* <Redirect from='/' to='/home' /> */}
            {/* <Redirect path='' to='/home' /> */}
        </Switch>
    )
}

export default BasicLayout;