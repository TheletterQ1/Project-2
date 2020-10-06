import React from 'react'
 import './App.css'

// function Houses(props) {

const TheHomes = (props) => {

	const saveHomes = props.houses.properties ? props.houses.properties.map(property => (
		<><img 
		style={{ border: '5px solid green'  }}
		src={property.thumbnail}
		alt={property.addess}
		key={property.rank}
		className='thumb'/>
		<div class='details'>{property.address.line}</div>
		
		<div class='details'>{property.address.city}</div>		
		<div class='details'>{property.address.postal_code}</div>		
		<div class='details'>{property.address.state}</div> </>
	)): <h1>Loading...</h1>


	return (
		<> 
		
	{saveHomes}
		</>
  
		)
	}

export default TheHomes 