import React from 'react'
import { Route } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

import PostForm from './PostForm'
import RegisterForm from './Register'
import Home from './views/Home'
import PublicHome from './views/PublicHome'
// import OffersContainer from './OffersContainer'
import PostsContainer from './PostsContainer'
import authorize from './HOCs/RequireAuth'
// import RequestsContainer from './components/RequestsContainer'
// import testHOC from './components/HOCs/testHOC'

class Container extends React.Component{


render(){
	const AuthHome = authorize(Home)
	return(
		<div>
	       <Route exact path='/' component={PublicHome} />
	       <Route path="/posts" component={(props) => <PostsContainer props={props}/>}/>
	       <Route path="/home" component={AuthHome}/>
	       <Route path="/register" component={RegisterForm}/>
	       <Route path='/newPost' component={PostForm}/>
       </div>
		)
	}
}

export default Container