import React from 'react'
 import './App.css'

// function Houses(props) {

const TheHomes = (props) => {

	const saveHomes = props.houses.properties ? props.houses.properties.map(property => (
		<><img 
		style={{ border: '5px solid green'  }}
		src={property.thumbnail}
		alt={property.addess}
		key={property.properties.property_id}
		className='thumb'/>
		<div className='details'>{property.address.line}</div>
		
		<div className='details'>{property.address.city}</div>		
		<div className='details'>{property.address.postal_code}</div>		
		<div className='details'>{property.address.state}</div> </>
	)): <h1>Loading...</h1>


	return (
		<> 
		
	{saveHomes}
		</>
  
		)
	}

export default TheHomes 