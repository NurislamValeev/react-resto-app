import React from 'react'
import {CartPage, MainPage} from '../pages'
import AppHeader from '../app-header'
import Background from './food-bg.jpg'
import {Route, Switch} from "react-router-dom"
import ItemPage from "../pages/itemPage"

const App = () => {

   return (
      <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
         <AppHeader total={50}/>
         <Switch>
            <Route path = '/' exact component = {MainPage}/>
            <Route path = '/cart' exact component = {CartPage}/>
            <Route path = '/:id' component ={ItemPage}/>
         </Switch>
      </div>
   )
}

export default App