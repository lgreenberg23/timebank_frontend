
export function getUser(id) {
    // debugger
  	return(dispatch) => {
  	  
     fetch(`http://localhost:3000/api/v1/users/${id}`)
	      .then(res => res.json())
	      .then(user => 
          {
            dispatch(
            {type: 'GET_USER',
             payload: user}
            )}
      )
   }
}