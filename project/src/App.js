import {React, useState} from 'react';
import theHomes from './Listings'
import './App.css';

function App() {

  const [houses, setHouses] = useState([]);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [home, setHome] = useState(null)
  const limit = 20;
    
     const url = `https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=New%20York%20City&limit=${limit}&offset=0&state_code=NY&rapidapi-key=e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808`;
     function Houses(){
       fetch(url)
       .then((response) => response.json)
       .then((data) =>{
         console.log(data)
         setHouses={data};
       })}
   Houses()
      
       console.log(houses)
    // const data = response.json();
    // const houses = {data}
    // this.setHouses({data})
  
  
    //  handleClick = //for clicking on the itemns
    // const handleClick = (home) => {
    //   preventDefault()
    //   setHome(home);
    // };
      //to handle input changes
     const handleChangeCity = event => {
       setCity(event.target.value);
     }
     const handleChangeState = event => {
      setState(event.target.value);
     }
     console.log(handleChangeCity, handleChangeState)
  
    //  const handleSubmit = event => {
     
    //  }
    
  
  
    return (
      <>
        <div className="App">
        <nav>
            <a href ='/App>'>Home</a>
            <br/>
            <a href ='/App>'>About</a>
          </nav>
        <header>
         
        <h1>Hello CodeSandbox</h1>
        <h2>Enter Desired Area Details To Begin</h2>
        </header>
          </div>
        <input name='cities' onChange={handleChangeCity} value={city} placeholder='city ex: New York City'/>
        <br/>
        <br/>
        <input name='states' onChange={handleChangeState} value={state} placeholder='state ex: NY'/>
        
        <button>Submit</button>
            <theHomes/>
     </>
    );
  }
export default App;
