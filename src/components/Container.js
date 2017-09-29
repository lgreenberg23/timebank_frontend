import React from 'react'
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'
// import { Redirect } from 'react-router-dom';
import PostForm from './PostForm'
import Profile from './Profile'
import PublicProf from './PublicProfile'
import Home from './views/Home'
import Navbar from './views/NavBar'
// import OffersContainer from './OffersContainer'
import PostsContainer from './PostsContainer'
import authorize from './HOCs/RequireAuth'
// import { letMeIn } from '../actions/auth'
// import { bindActionCreators } from 'redux'
// import RequestsContainer from './components/RequestsContainer'

class Container extends React.Component{




	render(){

		const AuthHome = authorize(Home)
		const authProf = authorize(Profile)
		return(
			<div className='landing-image'>
				<Navbar handleLoginClick={this.handleNavBarClick} {...this.props} />
				<div>
			       <Route path="/in/posts" component={PostsContainer}/>
			       <Route path="/in/home" component={AuthHome}/>
			       <Route path='/in/newPost' component={PostForm}/>
			       <Route path='/in/profile' component={authProf}/>
			       <Route path='/in/pubprofile/:id' component={PublicProf}/>
		       </div>
	       </div>
			)
		}
}

function mapStateToProps(state){
  return state
}



export default connect(mapStateToProps)(Container)



