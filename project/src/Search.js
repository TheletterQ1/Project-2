import {React, useEffect, useState} from 'react'
import {App, city,limit } from './App'
import Nav from './Nav'

const Searches = async (e) => {
 
    const [searched, setSearched] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleSubmit(searched)
    }

    React.useEffect(() => {
    /*construtcing fetch url */const newURL =`https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=${city}&limit=${limit}&offset=0&state_code=${state}&rapidapi-key=e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808`;
       
        //time to fetch
        const makeApiCall = async () => {
          const res = await fetch(newURL);
          const newData = await res.json();
          console.log(newData,'searches');
          setSearched(newData)
        // }
          if(newData.properties.property_id === null) {
              console.log('No results found')
              return <p>Sorry...No results found</p>
              
            }
        }
        // makeApiCall()
      }, [])
      const showSearch = (props) => {
            console.log(props);
      
            const showList = props.searched.properties ? props.searched.properties.map(property => (
            <><img 
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
            <div className='details'>{property.address.postal_code}</div> </>
            )): <h1>Loading...</h1>
        }
    
    

      return <nav Nav ={Nav}/> 
    //         <>
    //          <nav style={{display: "flex", justifyContent: 'center', justifyContent: 'space-between'}}>
    //     <a href ='/App.js>'>Home</a>
    //     <i class="fa fa-bars" aria-hidden="true">☰</i>
    //     <a href ='/Search.js'>Search</a>
    //     <a href ='/About.js>'>About</a> 
    //    </nav> 
    //  <h1>This is the Search page</h1>
    //         <div>{showSearch}</div>
    //       </>
    //     );
}

 

      export default Searches



  