import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
// import { Image, Header, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
// import {deletePost} from '../actions/posts'
// import PostInfoModal from './PostInfoModal'

// class PostCard extends React.Component{

class PostCard extends React.Component{

	offerRequestDisplay = () => {
		if (this.props.post.offer === true){
			return "Offer"
		}else{
			return "Request"
		}
	}

	contactPoster = (e) => {
		console.log(e.target)
		this.props.post.contacter_id = this.props.user.id
		//somehow get the post or the post ID from this click
		//call this.props.deletePost(post)
	} 

// in render, filter to two columns, requests and offers and display each separately
// also, display by category?
	render() {
		// console.log("in postCard", this.props.post)
	  return(
  	    <Card color='teal'>
  	      <Card.Content>
  	        <Card.Header>{this.props.post.name}</Card.Header>
  	        <Card.Description >{this.offerRequestDisplay()}</Card.Description>
  	        <Card.Description >{this.props.post.category}</Card.Description>
  	        <Card.Description >{this.props.post.location}</Card.Description>
	        <Card.Content extra onClick={this.contactPoster}><a>Contact Poster</a></Card.Content>
  	      </Card.Content>
  	    </Card>
	  	)
	}
}


function mapStateToProps(state) {
  return {
     user: state.auth.user
  }
}

export default connect(mapStateToProps)(PostCard)

  	      // <PostInfoModal dog={this.props.dog}/>
