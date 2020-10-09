import React from 'react'
import './App.css'


const showSearch = (props) => {
            
      
    const showList = props.capturedData.properties ? props.capturedData.properties.map(property => (
  <>  
      <img 
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

	return (
		<> 
		
	{showList}

		</>
  
		)
	}

export default showSearch;