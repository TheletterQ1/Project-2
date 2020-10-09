import React from 'react';
import './App.css'
import {
  Link
} from 'react-router-dom';



const Nav = () => {
   
   return (
  
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
       
  
         
    ) }
 
export default Nav
