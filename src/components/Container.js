import React from 'react'
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'
// import { Redirect } from 'react-router-dom';
import PostForm from './PostForm'
import Profile from './User'
import Home from './views/Home'
import Navbar from './views/NavBar'
// import OffersContainer from './OffersContainer'
import PostsContainer from './PostsContainer'
import authorize from './HOCs/RequireAuth'
// import RequestsContainer from './components/RequestsContainer'

class Container extends React.Component{


	render(){

		const AuthHome = authorize(Home)
		return(
			<div>
				<Navbar handleLoginClick={this.handleNavBarClick} {...this.props} />
				<div>
			       <Route path="/in/posts" component={PostsContainer}/>
			       <Route path="/in/home" component={AuthHome}/>
			       <Route path='/in/newPost' component={PostForm}/>
			       <Route path='/in/profile' component={Profile}/>
		       </div>
	       </div>
			)
		}
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Container)