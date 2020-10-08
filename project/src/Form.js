import React, {useState, createContext} from 'react';
import { BrowserRouter as Router,Link, Switch, Route } from 'react-router-dom';
import App from './App';
import aboutMe from './About'
// import App from './App'
// // import theNav from './Nav'
// // import Searches from './Search'

// //props or state?????

     function Form() {


        const submittedContext = React.createContext;
      
    const [formData, setFormData] = useState ({
        city: '',
    
        state: '',
    
        results: ''
        }) 


            //to handle submit
        const formSubmit = (event) => {
        console.log('handleSubmit clicked')
        if(event) event.preventDefault()      
        const userCity = formData.city
        const userState = formData.state
        const userResults = formData.results
        }
         //to handle input changes

        const handleChange = (event) => {
        console.log('handleChange-',event.target.value)
        setFormData({ [event.target.name] : event.target.value});
        };

// //     const [searched, setSearched] = useState({})
// //     const handleSubmitURL = async({...FormData}) => {
// //     event.preventDefault();
// //     //come back and store each section 
// //     let newURL = `https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance
// //     &city=${FormData.city}&limit=${FormData.results}&offset=0
// //     &state_code=${FormData.state}
// //     &rapidapi-key=e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808`;
// //     // making new fetch
// //      function userSearch(){
// //      const makeApiCall = async () => {
// //      const res = await fetch(newURL)
// //      const newData = await res.json()
// //      console.log('searches-newData-',newData)
// //      setSearched(newData);
// //      }
// //     }    console.log(searched)
// //      };
    return(
          <>
//     {/*    <header>
//        <div className='nav' Route ={Route} Link={Link} handleClick = {handleClickNav} theNav={theNav}>{theNav}</div>
//        </header> */}
        
//         <form 
         onSubmit={formSubmit} 
        className ='form' 
        style={{display: "flex", justifyContent: "space-between"}}>
        <input 
        onChange={handleChange} 
        type='text' 
        name='cities'       
        value={formData.city} 
        placeholder='City - ex: New York City'/>
        <br/>
        <br/>
        <input 
        type='text' 
        name='states' 
        onChange={handleChange} 
        value={formData.state} 
        placeholder=' State - ex: NY'/>
        <br/>
        <br/>
        <input 
        type='number'
        name='results' 
        id='results' 
        onChange={handleChange} 
        value={formData.results} 
        placeholder='how many properties?'/>
        
        <input onSubmit={formSubmit} type="submit" value='Search'/> 
        </form> 
       <Router>
        <div>       
        {/* <Link class='Links' to='/About'>
          <h4>About</h4>
        </Link>
        <Link class='Links' to='/Search'>
          <h4>Search</h4>
        </Link>
        <Link class='Links' to='/App'>
          <h4>Home</h4>
        </Link> */}
       
         
        <main>
        <Switch>
           <Route exact path ='/App'>
             <App component {...App}/>
            </Route>
           <Route exact path ='/About'>
             <aboutMe
             aboutMe = {aboutMe} />
            </Route>
            </Switch>
            </main>
            </div>
            </Router>
          {/*  <userContext.Provider>
           <Route exact path ='/Search'>
             <Searches /> 
            </Route>
         </userContext.Provider>
         </Switch> 
        </main>
         </div></Router>  */}
        
       </>
      )
     }
 
export default Form