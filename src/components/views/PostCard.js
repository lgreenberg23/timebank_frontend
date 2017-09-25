import React from 'react'
import { Card } from 'semantic-ui-react'
// import { Image, Header, Button } from 'semantic-ui-react'
// import {connect} from 'react-redux'
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

// in render, filter to two columns, requests and offers and display each separately
// also, display by category?
	render() {
		// console.log("in postCard", this.props.post)
	  return(
  	    <Card>
  	      <Card.Content>
  	        <Card.Header>{this.props.post.name}</Card.Header>
  	        <Card.Description >{this.offerRequestDisplay()}</Card.Description>
  	        <Card.Description >{this.props.post.category}</Card.Description>
  	        <Card.Description >{this.props.post.location}</Card.Description>
  	      </Card.Content>
  	    </Card>
	  	)
	}
}

// function mapStateToProps

export default PostCard

  	      // <PostInfoModal dog={this.props.dog}/>
