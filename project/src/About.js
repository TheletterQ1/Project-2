import React from 'react'
import App from './App'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
// import {navBar} from './App'

const aboutMe = () => {

    return (<>
         <nav style={{display: "flex", justifyContent: 'center', justifyContent: 'space-between'}}>
        <Link to='/About'>
          <h4>About</h4>
        </Link>
        <Link to='/Search'>
          <h4>Search</h4>
        </Link>
         <i class="fa fa-bars" aria-hidden="true">☰</i>
    
        </nav>
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
          <Route exact path ='/'>
            <App />
          </Route>
          <Route exact path ='/About'>
            <aboutMe />
          </Route>
          <Route exact path ='/Search'>
            {/* <Searches /> */}
          </Route>
        </Switch>
        </main>
    </>)
}
export default aboutMe