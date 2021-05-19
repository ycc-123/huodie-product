import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import CacheRoute, { CacheSwitch } from  'react-router-cache-route'

import Home from 'views/home/Home'
import Cart from 'views/cart/Cart'
import Category from 'views/category/Category'
import Live from 'views/live/Live'
import Profile from 'views/profile/Profile'
import Detail from 'views/detail/Detail'
import Submit from 'views/submit/Submit'

const AppRouter = () =>  {
  return (
    <Router>
      <CacheSwitch>
        {/* <Route path='/cart' exact component={Cart}></Route> */}
        {/* 精确匹配  总是 */}
        <CacheRoute path='/home' exact when='always' component={Home}></CacheRoute>
        <CacheRoute path="/cart" exact when='always' component={Cart}></CacheRoute>
        <CacheRoute path='/category' when='always' component={Category} ></CacheRoute>
        {/* <CacheRoute path='/live' when='always' exact component={Live}></CacheRoute> */}
        <Route path='/profile' when='always' component={Profile}></Route>
        <Redirect from='/' exact to='/home'></Redirect>
      </CacheSwitch>
      <Switch>
        <Route path='/detail/:id' component={Detail}></Route>
        <Route path='/live' exact component={Live}></Route>
        <Route path='/submit' exact component={Submit}></Route>
      </Switch>
    </Router>
  )
}

export default AppRouter
