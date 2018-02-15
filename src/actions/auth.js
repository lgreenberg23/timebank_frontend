
const URL = 'https://timebank-backend.herokuapp.com'

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
   //before you dispatch below you can check for the token
  return(dispatch) => {
    return fetch(`${URL}/api/v1/login`, getLogin)
    .then(res => res.json())
    .then(user => { 
      if (user.user){
        dispatch(
          {type: 'LOGIN',
            payload: user} //user contains user-> user.id, and jwt ->jwt token
          )
      }else{alert('Login failed')}

        }
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
      fetch(`${URL}/api/v1/users`, getSignUp)
      .then(res => res.json())
      .then(user => {
        if (user.user){
        dispatch(
           {type: 'LOGIN',
            payload: user}
         )
      }else{alert('Sign-Up Failed')}
      })
      .then(res => history.push("/home"))
   }
}




export function logout() {
   return {type: "LOG_OUT"}
}


export function letMeIn(callback) {
   const jwtToken = localStorage.getItem("token")
   console.log("jwt token", jwtToken)
   const myInfo = {
      headers:{
         "Authorization":`Bearer ${jwtToken}`,
         "Accept":"application/json"
      }
   }
   return(dispatch) => { 
      fetch(`${URL}/api/v1/me`, myInfo)
      .then(res => res.json()) 
      .then(user => {
         callback(user.id)
         dispatch(
            {type: 'LET_ME_IN',
             payload: user}
            )
         }
      )
   }
}
