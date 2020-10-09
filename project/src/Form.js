import React, {useState, createContext,useEffect} from 'react';
import { BrowserRouter as Router,Link, Switch, Route } from 'react-router-dom';
import App from './App';
import aboutMe from './About'
import Searches from './Search'
import showSearch from './List';


//props or state?????
// export const submittedContext =  createContext();    

export default function Form(props) {


    // const submittedContext =  createContext({formData});    

    
      const [userCity, setUserCity] = useState('');
      const [userState, setUserState] = useState('');
      const [userResults, setUserResults] = useState('');
      const [captureData,setCaptureData] = useState({})
      const [newURL,setNewUrl]= useState('')
      
        


//to handle submit
    const handleSubmit = (event) =>{
        const newURL = `https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=${userCity}&limit=${userResults}&offset=0&state_code=${userState}&rapidapi-key=e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808`;
        event.preventDefault()
        console.log(userCity,userResults, userState)
    }    
        function CaptureData(){
        setNewUrl(newURL)
        fetch(newURL)
        .then((response) => response.json())
        .then((data) =>{
          console.log(data)
          setCaptureData(data);
            
        //   setCaptureData(data);
          //props later
         })} 

        useEffect(() => {
         CaptureData()
 
      },[handleSubmit])
          
        
    
   
 //to handle input changes

        const handleCityChange = (event) => {
            console.log('handleChange-',event.target.value)
            setUserCity(event.target.value)
        };
        const handleStateChange = (event) => {
            console.log('handleChange-',event.target.value)
            setUserState(event.target.value)
        };
        const handleResultsChange = (event) => {
            console.log('handleChange-',event.target.value)
            setUserResults(event.target.value)
        };
       
        return(
          <>

        
         <form 
       
        className ='form' 
        style={{display: "column",justifyContent: "space-between"}}>
        <input 
        onChange={handleCityChange} 
        type='text' 
        name='city'       
        value={userCity} 
        placeholder='City - ex: New York City'/>
        <br/>
        <br/>
        <input 
        type='text' 
        name='state' 
        onChange={handleStateChange} 
        value={userState} 
        placeholder=' State - ex: NY'/>
        <br/>
        <br/>
        <input 
        type='number'
        name='results' 
        id='results' 
        onChange={handleResultsChange} 
        value={userResults} 
        placeholder='how many properties?'/>
        
        <input onClick={handleSubmit} type="submit" value='Search'/> 
        </form> 

     <main></main>
     <footer> <div id='search-wrapper'>
          <div id = 'search-thumbnails'>
            <showSearch
            captureData={captureData}
            /> 
          </div>
          </div>
          </footer>
       
       </>
      )
     }
    

