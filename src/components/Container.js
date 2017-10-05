import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import PostForm from './PostForm'
import Profile from './Profile'
import PublicProf from './PublicProfile'
import Home from './views/Home'
import Navbar from './views/NavBar'
import About from './views/AboutPage'
import PostsContainer from './PostsContainer'
import authorize from './HOCs/RequireAuth'


class Container extends React.Component{

//parent = app
//this is where all routes that require a user to be signed in live

	render(){

		const AuthHome = authorize(Home)
		const authProf = authorize(Profile)
		return(
			<div className='landing-image'>
				<Navbar handleLoginClick={this.handleNavBarClick} {...this.props} />
				<div>
			       <Route path="/posts" component={PostsContainer}/>
			       <Route path="/home" component={AuthHome}/>
			       <Route path='/newPost' component={PostForm}/>
			       <Route path='/profile' component={authProf}/>
			       <Route path='/pubprofile/:id' component={PublicProf}/>
			       <Route path='/about' component={About}/>
		       </div>
	       </div>
			)
		}
}

function mapStateToProps(state){
  return state
}



export default connect(mapStateToProps)(Container)



