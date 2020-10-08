import React, {useEffect, useState,useContext} from 'react'
// import {
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';
// import App  from './App'
// import './App.css'
// import theNav from './Nav'
// import {Form, userContext} from './Form'




export default function Searches(){

//  const [searching, setSearching] = useContext(userContext);

  const [searched, setSearched] = useState({});

//       const handleSubmit = async () => {
//          event.preventDefault()
//          //
         
     

          React.useEffect(() => {

          /* construtcing fetch url*/ 
          const newURL =`https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=${FormData.city}&limit=${FormData.results}&offset=0&state_code=${FormData.state}&rapidapi-key=e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808`;
    
          //creating function
          //making fetch
          // function userSearch(){
          const makeApiCall = async () => {
          const res = await fetch(newURL);
          const newData = await res.json();
          console.log(newData,'searches');
          setSearched(newData)

//         //conditionals here

//           if(newData.properties.property_id === null) {
//               console.log('No results found')
//               return <p>Sorry...No results found</p>
              
             
           }
        },   makeApiCall()
             [formSubmit()])
      
      
      const showSearch = (props) => {
            
      
            const showList = props.searched.properties ? props.searched.properties.map(property => (
          <>  <img 
            style={{ border: '5px solid skyblue'  }}
            src={property.thumbnail}
            alt={property.addess}
            key={property.properties.property_id}
            className='thumb'/>
            <div className='details' key ={property.properties.property_id}>{property.address.line}
            {property.address.city}
            {property.address.postal_code}
            {property.address.postal_code}</div>
            
            <div className='details'>{property.address.city}</div>		
            <div className='details'>{property.address.postal_code}</div>		
            <div className='details'>{property.address.postal_code}</div> 
          </>
             )): <h1>Loading...</h1>

//        return (
//             <>
//              <nav theNav ={theNav}> 
//              {theNav}
//              </nav>
//               <h1>This is the Search Page</h1>
//              <div>
//                {/* showSearch showList={showList}/> */}                 
//              </div>
//            </>
//          );
      }
    
   }
           
      
      // export default Searches