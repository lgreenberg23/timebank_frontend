
export function getUser(id) {
    // debugger
  	return(dispatch) => {
  	  
     fetch(`http://localhost:3000/api/v1/users/${id}`)
	      .then(res => res.json())
	      .then(posts => dispatch(
	      	{type: 'GET_POSTS',
           	payload: user}
      	)
      )
   }
}