import React, {useState, useEffect} from 'react';
import TheHomes from './Listings'
import './App.css';

function App() {

  const [houses, setHouses] = useState({});
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [results, setResults] = useState('')
  // const [home, setHome] = useState(null)
  const limit = {results};
                                                                                                 //{city}      //limit                      //{state}     
     const url = `https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=${city}&limit=${limit}&offset=0&state_code=${state}&rapidapi-key=e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808`;
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

     const handleChangeNumber = event => {
       setResults(event.target.value);
     }
     console.log(city, state, results)

  
    //  const handleSubmit = event => {
     
    //  }
    
  
  
    return (
      <>
        <div className="App">
          <span>
        <nav>
            <a href ='/App>'>Home</a>
            <br/>
            <a href ='/App>'>About</a>
          </nav>
          </span>
        <header>
         
        <h2>Acquiring properties has never been so easy!</h2>
        <h3>Enter Desired Area Details To Begin</h3>
        </header>
          </div>
         
        <input name='cities' onChange={handleChangeCity} value={city} placeholder='city ex: New York City'/>
        <br/>
        <br/>
        <input name='states' onChange={handleChangeState} value={state} placeholder='state ex: NY'/>
        <br/>
        <br/>
        <input type='number' id='results' onChange={handleChangeNumber} value={results} placeholder='number'/>
        
        <button>Search</button> 
    
        <div id='wrapper'>
        <div id = 'thumbnails'>
            <TheHomes
            houses={houses}
            /></div>
        </div>
     </>
    );
  }
export default App;
