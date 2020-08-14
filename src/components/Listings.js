import React, {useState} from 'react';

function Listings(){
		  const [newListing, setNewListing] = useState("")
		  function handleInput(text){
				setNewListing(text)
		  }
		  function handleSubmit(e){
			e.preventDefault()
			fetch('http://localhost:8000/api/lists/create', {
    	 		body: JSON.stringify({
    	   		title: newListing,
  	   		}),
 	    		headers: {
 	      		'Accept': 'application/json',
 	      		'Content-Type': 'application/json',
	     		},
	     		method: 'POST'
	  		})
		  }

		  return(
			<div>
					 <form onSubmit={handleSubmit}>
					 <input type="text" onChange={e => handleInput(e.target.value)} />
					 <input type="submit" value="Submit" />
					 </form>
					 Listing
					 </div>
		  )
};

export default Listings;
