import React from 'react';
import App from './App'
import Form from './Form'
import './App.css'
import Searches from './Search'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import aboutMe from './About';


// const handleClickNav = target => {
//   return <h4 style = {{display: 'none' }}/>
// }

const theNav = (
   
   
   <div>
       <nav className ='nav' style={{display: "flex", alignContent: 'center', justifyContent: 'space-between'}}>     
       <Link className='Links' to='/About'>
         <h4>About</h4>
       </Link>
       <Link className='Links' to='/Search'>
         <h4>Search</h4>
       </Link>
       <Link className='Links' to='/App'>
         <h4>Home</h4>
       </Link>
       <div id="hamburger"><h4>☰</h4></div>
       </nav>
       <main>
       <Switch>
          <Route exact path ='/About'>
            <aboutMe
            aboutMe = {aboutMe} />
           </Route>
           {/* <Route exact path ='/Search'>
             <Searches /> 
            </Route> */}
         
         </Switch> 
        </main>
  </div>
         
)   
 
export default theNav
