
// render posts 
// 1/2 page offers, other half requests, each with a "see more" button 
// that takes you to the public display of all offers / all posts

import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import AllPosts from './AllPosts'
// import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import * as PostActions from '../../actions/posts'
import { bindActionCreators } from 'redux'

class PublicHome extends React.Component{

	componentDidMount() {
    	if(this.props.posts.length===0){
     	 	this.props.getPosts()
    	}
  	}	

  	logIn = () => {
	    // localStorage.removeItem('token')
	    this.props.history.push('/login')
  	}

	render(){
		return(
			<div>
				<Button onClick={this.logIn}>Log In</Button>
				<br></br>
				<h1>Welcome to our Time Bank</h1>
				<br></br>
				<AllPosts posts={this.props.posts}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
     posts: state.posts.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PublicHome)


