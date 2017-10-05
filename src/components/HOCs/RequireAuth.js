
// Higher order component
//wrapped component is whatever you pass in

import React from 'react'

import { Redirect } from 'react-router-dom'

function authenticated(WrappedComponent){
  return function (props) {
		if (props.location.pathname === '/login' || props.location.pathname === '/register'){	
			return null     
		}else{
			if (!localStorage.getItem('token')) {
	        return <Redirect to='/login' />
	      }
	   	return <WrappedComponent {...props} />
	   }
	}
}

export default authenticated



//good convention - have it in an HOC and protect it

//from class notes: 

// import React from 'react'
// function authorize(RenderedComponent, props){
//   return class extends React.Component {
//     componentWillMount() {
//         if (!localStorage.getItem('token') && this.props.location.pathname !== "login") {
//           this.props.history.push("/login")
//         } else {

//         }
//     }
//     render() {

//       return (<RenderedComponent {...props} {...this.props}/>)

//     }
//   }
// }


// export default authorize






