import React, {useState, useEffect} from 'react';
import TheHomes from './Listings'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import aboutMe from './About';
import Searches from './Search'

function App() {
  // const [formData, setFormData] = useState ({
  //   city: "",

  //   state: "",

  //   results: ""
  // })

 
  const [houses, setHouses] = useState({});
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [results, setResults] = useState('')
   
  const limit = {results};
                                                                                                 //{city}      //limit                      //{state}     
  const url = `https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=New%20York%20City&limit=10&offset=0&state_code=NY&rapidapi-key=e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808`;


        // console.log(FormData);

     function Houses(){
       fetch(url)
       .then((response) => response.json())
       .then((data) =>{
         console.log(data)
         setHouses(data);
       })}
       useEffect(() => {
         Houses();
         
       }, [])
      
       console.log(houses);
    // const data = response.json();
    // const houses = {data}
    // this.setHouses({data})
  
  
    //  handleClick = //for clicking on the itemns
    // const handleClick = (home) => {
    //   preventDefault()
    //   setHome(home);
    // };
      //to handle input changes
    

    // const handleChange = (event) => {
    //   // event.prevent
    //   setFormData({ ...formData, [event.target.name] : event.target.value});
    // };


     const handleChangeCity = event => {
       setCity(event.target.value);
     };

     const handleClickNav = target => {
       return <h4 style = {{display: 'none' }}/>
     }

     const handleChangeState = event => {
      setState(event.target.value);
     };

     const handleChangeNumber = event => {
       setResults(event.target.value);
     };

    //  const handleSubmit = (event) => {
    //    e.preventDefault();
    // console.log(event)
    //  };

  
    return (
      <>
        <div className="App">
         {/* <nav>{navBar}</nav> */}
        {/* <nav onClick ={handleClickNav} id='nav' name='nav' style={{display: "flex", justifyContent: 'center', justifyContent: 'space-between'}}>
        
       <Link to='/About'>
         <h4>About</h4>
       </Link>
       <Link to='/Search'>
         <h4>Search</h4>
       </Link>
        <i class="fa fa-bars" aria-hidden="true">☰</i>
       </nav> */}

        <header>
         
        <h2>Acquiring properties has never been so easy!</h2>
        <h3>Enter Desired Area Details To Begin</h3>
        </header>
          </div>
        <form style={{display: "flex", justifyContent: "space-between"}}>
        <input 
        type='text' 
        name='cities' 
        onChange={handleChangeCity} 
        value={city} 
        placeholder='city ex: New York City'/>
        <br/>
        <br/>
        <input 
        type='text' 
        name='states' 
        onChange={handleChangeState} 
        value={state} 
        placeholder='state ex: NY'/>
        <br/>
        <br/>
        <input 
        type='number'
        name='results' 
        id='results' 
        onChange={handleChangeNumber} 
        value={results} 
        placeholder='number'/>
        
        <button onSubmit ={handleSubmit}>Search</button> 
        </form> 
        
        <main>
        <div id='wrapper'>
        <div id = 'thumbnails'>
            <TheHomes
            houses={houses}
            /></div>
        </div>
         <Switch>
          <Route exact path ='/App'>
            <App />
          </Route>
          <Route exact path ='/About'>
            <aboutMe />
           </Route>
          {/* <Route exact path ='/Search'>
            <Searches /> 
           </Route> */}
        </Switch> 
        </main>
     </>
    );
  }

export default {App,city,results,state} 
