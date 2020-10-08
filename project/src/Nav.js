import React from 'react';
import App from './App'
import Form from './Form'
import './App.css'
import Searches from './Search'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import aboutMe from './About';

// const handleClickNav = target => {
//   return <h4 style = {{display: 'none' }}/>
// }

const theNav = (
 // (  
   <Router>
   <div>
       <nav  class ='nav' style={{display: "flex", alignContent: 'center', justifyContent: 'space-between'}}>
       <div id="hamburger"><h4>☰</h4></div>  
      
       <Link class='Links' to='/About'>
         <h4>About</h4>
       </Link>
       <Link class='Links' to='/Search'>
         <h4>Search</h4>
       </Link>
       <Link class='Links' to='/App'>
         <h4>Home</h4>
       </Link>
       
       </nav>
       <main>
       <Switch>
          <Route exact path ='/App'>
            <App 
            App = {App} />
          </Route>
          <Route exact path ='/About'>
            <aboutMe
            aboutMe = {aboutMe} />
           </Route>
          {/* <Route exact path ='/Search'>
            <Searches /> 
           </Route> */}
        </Switch> 
       </main>
        </div></Router>
 )
 
export default theNav
