import React from 'react'
import App from './App'
import Form from './Form'
import Searches from './Search'
import theNav from './Nav'
import {
   
    Switch,
    Route,
    Link
  } from 'react-router-dom';
// import {navBar} from './App'

 function aboutMe() {
 

    return (<>
     <div Link ={Link} className='nav' handleClick = {App.handleClickNav} theNav={theNav}>{theNav}</div>
        <h1 class='welcome'>Welcome to Inner Circle Real Estate</h1>
        <h1>About This App</h1>
        <h3>Dedicated to bringing you quality properties at the touch of a button</h3>
        <p>
            This purpose of this app is to help users search detailed properties in the United States
        </p>
        <p>Nowadays people should be looking to acquire homes more than ever before.
            With the recent downfall of the economy and dropping of home prices in bigger cities,
            Now is the perfect time to invest in real estate. Whether you are searching for an investment
            to watch its equity grow, or your just tired of throwing your money down a black hole with rent.
            We'll help you acquire the perfect match for you and your needs. 
        </p>
        <main>
          <Switch>
            <Route  path ='/App'>
              <App />
            </Route>
            <Route path ='/About'>
             <aboutMe />
            </Route>
            <Route exact path ='/Search'>
              <Searches />
            </Route> 
          </Switch>
          </main>
    </>)
}
export default aboutMe