import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
// import { Image, Header, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {deletePost} from '../../actions/posts'
import { bindActionCreators } from 'redux'
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

	deletePost = () => {
		// console.log(this.props.post)
		this.props.deletePost(this.props.post)
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
  	        <Card.Description >{this.props.post.description}</Card.Description>
  	        
  	        <Card.Content extra><a><Icon name='remove' onClick={this.deletePost}/></a></Card.Content>
  	      </Card.Content>
  	    </Card>
	  	)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({deletePost}, dispatch)
}
// function mapStateToProps

export default connect(null, mapDispatchToProps)(PostCard)