
export function getUser(id) {
	return(dispatch) => {
	  
    fetch(`http://localhost:3000/api/v1/users/${id}`)
      .then(res => res.json())
      .then(user => {
        dispatch(
        {type: 'GET_USER',
         payload: user}
        )
      }
    )
  }
}

// after a user says they did a transaction, change the hours in the database 
// & display the edited hours in your account
export function updateHours(user, otherUser, hours, type){
  const jwtToken = localStorage.getItem("token")
  const update = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        other_user_id: otherUser.id,
        token: jwtToken,
        hours: hours,
        type: type
    })
  }
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/hours/${user.id}`, update)
      .then(res => res.json())
      .then(users => {
        dispatch(
        {type: 'UPDATE_HOURS',
         payload: users}
      )}
    )//.then(res => history.push("/profile"))
  }
}