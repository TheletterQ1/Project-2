import React, {useState, useEffect} from 'react';
import TheHomes from './Listings';
import Form from './Form'
import './App.css';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import aboutMe from './About';
import showSearch from './Search';
import theNav from './Nav';

export default function App() {
 
  
  const [houses, setHouses] = useState({});

  // const myProps = (props) => {
  // const [home, setHome] = useState({});
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');
  // const [results, setResults] = useState('');
  
  //  const userData = (props) => {
  //    props.newCity = {city},
  //    props.newState = {state},
  //    props.newResults = {results}
  //  }

  // const limit = formData.results;
                                                                                                 //{city}      //limit                      //{state}     
    const url = `https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=New%20York%20City&limit=10&offset=0&state_code=NY&rapidapi-key=e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808`;

  // const newURL = `https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=${FormData.city}&limit=${FormData.results}&offset=0&state_code=${FormData.state}&rapidapi-key=e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808`;


     function Houses(){
       fetch(url)
       .then((response) => response.json())
       .then((data) =>{
         console.log(data)
         setHouses(data);
       })}

       useEffect(() => {
        Houses()

     },[])
        // // making new fetch

        
        // console.log(searched)
 
    //    console.log(houses);
    // const data = response.json();
    // const houses = {data}
    // this.setHouses({data})
  
  
    //  handleClick = //for clicking on the homes
    const handleClick = (event) => {
      // onclick(() => event.target.houses[0].property_id)
      console.log(event)
    };
      //to handle input changes
  
    return (
      <>
       
        <div onClick={handleClick} className="App">
          <header>
            <div className='nav'>{theNav}</div>
            <Form />
            <h1 class='welcome'>Welcome to Inner Circle Real Estate</h1>
            <h2>Acquiring properties has never been so easy!</h2>
            <h3>Enter Desired Area Details To Begin</h3>
          </header>
          </div>  
           {/* <div className='Form'> <Form /> */}
            {/* {formData.city ? <newURL } */}
           {/* </div> */}
         <main>
          <div id='wrapper'>
          <div id = 'thumbnails'>
            <TheHomes
            houses={houses}
            /> 
          </div>
          </div>
           {/* <div><showSearch
                showList= {showList}/></div> */}
           {/*         
           <Switch>
        
            <Route exact path ='/App'>
            <App />
            </Route>
            <Route exact path ='/About'>
            <aboutMe />        
            </Route> 
           {/* <Route exact path ='/Search'>
            <showSearch/>              
           </Route> 
            
        </Switch>   */}
        
        
         </main> 
     </>
    );
  }  


