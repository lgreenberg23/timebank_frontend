class Auth{
	static login(userParams){
		const userJSON = JSON.stringify(userParams)
		return fetch('http://localhost:3000/api/v1/login',{
			method: 'post',
			body: userJSON,
			headers: {
				"Content-Type":"application/json",
				"Accept":"application/json"
			}
		})
		.then(res => res.json())
	}

	static signup(){

	}

	static me() {
		const jwtToken = localStorage.getItem("token")
		return fetch('http://localhost:3000/api/v1/me',{
			headers:{
				"Authorization": `Bearer ${jwtToken}`,
				"Accept":"application/json"
			}
		})
		.then(res => res.json())
	}

	static logOut() {
		localStore.removeItem('token')
	}
}

export default Auth



// class Auth {
//   static loggedIn() {
//     return !!sessionStorage.jwt;
//   }

//   static logOut() {
//     sessionStorage.removeItem('jwt');
//   }
// }

// export default Auth;