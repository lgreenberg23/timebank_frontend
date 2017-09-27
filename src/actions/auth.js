
export function login(userParams, history) {
   const userJSON = JSON.stringify(userParams)
   const getLogin = {
      method: 'post',
      body: userJSON,
      headers: {
         "Content-Type":"application/json",
         "Accept":"application/json"
      }
   }
   //before you dispatch below you can check for hte token
  return(dispatch) => {
    return fetch('http://localhost:3000/api/v1/login', getLogin)
    .then(res => res.json())
   
    .then(user => { dispatch(
           {type: 'LOGIN',
            payload: user} //user contains user-> user.id, and jwt ->jwt token
         )}
      )
    // .then(res => history.push("/in/home"))
   }
}

export function signUp(userParams, history) {
  const userJSON = JSON.stringify(userParams)
  const getSignUp = {
      method: 'post',
      body: userJSON,
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
   }
  return(dispatch) => {
      fetch('http://localhost:3000/api/v1/users', getSignUp)
      .then(res => res.json())
      .then(user => dispatch(
           {type: 'LOGIN',
            payload: user}
         )
      )
      .then(res => history.push("/in/home"))
   }
}




export function logout() {
   return {type: "LOG_OUT"}
}


export function letMeIn() {
   const jwtToken = localStorage.getItem("token")
   console.log("jwt token", jwtToken)
   const myInfo = {
      headers:{
         "Authorization":`Bearer ${jwtToken}`,
         "Accept":"application/json"
      }
   }
   return(dispatch) => { 
      fetch('http://localhost:3000/api/v1/me', myInfo)
      .then(res => res.json()) 
      .then(user => {
        console.log("in auth", user)
         dispatch(
            {type: 'LET_ME_IN',
             payload: user}
            )
         }
      )
   }
}
