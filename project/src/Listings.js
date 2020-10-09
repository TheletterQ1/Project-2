import React from 'react'
import App from './App'
import './App.css'

const TheHomes = (props) => {
	
	const saveHomes = props.houses.properties ? props.houses.properties.map(property => (
			<>	<div key={property.property_id}><img 
					style={{ border: '5px dark blue'  }}
					src={property.thumbnail}
					alt={property.addess}					
					className='thumb'/>
					<div syle={{display: 'inline'}} className='details'>
					{property.address.line}
					<br/>
					{property.address.city}, 
					
					{property.address.state}
					<br/>
					{property.address.postal_code}
				</div>
				</div>
			</>
		)): <h1>Loading...</h1>

	
	return (
		<> 
		
	{saveHomes}

		</>
  
		)
	}

export default TheHomes 