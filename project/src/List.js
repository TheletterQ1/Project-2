import React from 'react'
import './App.css'


function showSearch(props) {
            
    const showList = props.capturedData.properties ? props.capturedData.properties.map(property => (
 <>   <div key ={property.properties.property_id}>
      <img 
      style={{ border: '5px solid skyblue'  }}
      src={property.thumbnail}
      alt={property.addess}
      key={property.properties.property_id}
      className='thumb'/>
      <div className='details'>{property.address.line}
      {property.address.city}
      {property.address.postal_code}
      {property.address.postal_code}</div>
     </div></>
     )): <h1>Loading...</h1>

	return (
		<> 
		
	{showList}

		</>
  
		)
	}

export default showSearch;