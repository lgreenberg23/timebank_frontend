// import jwtDecode from 'jwt-decode';


const initialState = {
    token: null,
    user: {name: "", hours_banked: 0, email: '', id: null},
    isAuthenticated: false,
    statusText: null
};


function authReducer(state = initialState, action){

	switch (action.type) {

	   case "SIGN_UP":
	   	// localStorage.setItem("token", action.payload.jwt)
	      return Object.assign({}, state, {
            'isAuthenticated': localStorage.getItem('token') ? true : false,
            'token': action.payload.jwt,
            'user': action.payload.user,
            'statusText': 'You have been successfully signed in.'
        });

	   case "LOGIN":
	   	localStorage.setItem("token", action.payload.jwt)
	   	return Object.assign({}, state, {
            isAuthenticated: localStorage.getItem('token') ? true : false,
            token: action.payload.jwt,
            user: action.payload.user,// userName: jwtDecode(action.payload.jwt).userName,
            statusText: 'You have been successfully logged in.'
        });

	   case "LET_ME_IN":
	   	console.log("in authReducer", action.payload)
		   return Object.assign({}, state, {
            isAuthenticated: localStorage.getItem('token') ? true : false,
            token: localStorage.getItem('token'),
            user: action.payload,
            statusText: 'You have been successfully logged in.'
        });


	   case "LOG_OUT":
	   	localStorage.removeItem('token') //look at other code for this
			return Object.assign({}, state, {
				'isAuthenticated': localStorage.getItem("token") ? true : false,
				'token': null,
				'user': {},
				'statusText': 'You have been successfully logged out.'
			})

	   default:
	   	return state
	}

}



export default authReducer


// export default createReducer(initialState, {
//     [LOGIN_USER_REQUEST]: (state, payload) => {
//         return Object.assign({}, state, {
//             'isAuthenticating': true,
//             'statusText': null
//         });
//     },
//     [LOGIN_USER_SUCCESS]: (state, payload) => {
//         return Object.assign({}, state, {
//             'isAuthenticating': false,
//             'isAuthenticated': true,
//             'token': payload.token,
//             'userName': jwtDecode(payload.token).userName,
//             'statusText': 'You have been successfully logged in.'
//         });

//     },
//     [LOGIN_USER_FAILURE]: (state, payload) => {
//         return Object.assign({}, state, {
//             'isAuthenticating': false,
//             'isAuthenticated': false,
//             'token': null,
//             'userName': null,
//             'statusText': `Authentication Error: ${payload.status} ${payload.statusText}`
//         });
//     },
//     [LOGOUT_USER]: (state, payload) => {
//         return Object.assign({}, state, {
//             'isAuthenticated': false,
//             'token': null,
//             'userName': null,
//             'statusText': 'You have been successfully logged out.'
//         })
//     }
//   })