import React from 'react'
import {CartPage, MainPage} from '../pages'
import AppHeader from '../app-header'
import Background from './food-bg.jpg'
import {Redirect, Route, Switch} from "react-router-dom"

const App = () => {

   return (
      <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
         <AppHeader total={50}/>
         <Switch>
            <Route exact path="/">
               <Redirect to="/menu"/>
            </Route>
            <Route path="/menu">
               <MainPage/>
            </Route>
            <Route path="/cart">
               <CartPage/>
            </Route>
         </Switch>
      </div>
   )
}

export default App