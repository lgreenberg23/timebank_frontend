import React from 'react'
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'
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
		console.log("in container", this.props)

		const AuthHome = authorize(Home)
		return(
			<div>
		       <Route exact path='/in/pubhome' component={PublicHome} />
		       <Route path="/in/posts" component={(props) => <PostsContainer props={props}/>}/>
		       <Route path="/in/home" component={AuthHome}/>
		       <Route path='/in/newPost' component={PostForm}/>
	       </div>
			)
		}
}

function mapStateToProps(state){
  console.log(state)
  return state
}

export default connect(mapStateToProps)(Container)