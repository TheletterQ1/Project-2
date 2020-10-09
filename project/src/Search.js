import React, {useEffect, useState,useContext} from 'react'
// import {
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';
import App, {formData} from './App'
import './App.css'
import theNav from './Nav'
import Form,{ handleSubmit, submittedContext} from './Form'
import showSearch from './List'




 function Searches(props) {
   console.log(props)

    const [searched, setSearched] = useState({});


      // const handleSubmit = (props) => {
      //   handleSubmit= props.handleSubmit
      // }
    

          return (
                  <>
                  
                  <h1>This is the Search Page</h1>
                  
                  
                    
                    
                    {/* <div id='wrapper'>
                    <div id = 'thumbnails'>
                    <showSearch
                          showList={showList}/>
                    </div>
                    </div>               */}
                     
                  </>
         );
       }
    
   
           
      
   export default Searches;