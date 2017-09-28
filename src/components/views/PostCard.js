import React from 'react'
import { Card} from 'semantic-ui-react'
// import { Image, Header, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {addTransaction} from '../../actions/transactions'
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

	contactPoster = () => {
		this.props.addTransaction(this.props.post)

	} 

// in render, filter to two columns, requests and offers and display each separately
// also, display by category?
	render() {
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


// function mapStateToProps(state) {
//   return {
//      user: state.auth.user
//   }
// }

function mapDispatchToProps(dispatch){
	return bindActionCreators({addTransaction}, dispatch)
}

export default connect(null, mapDispatchToProps)(PostCard)

  	      // <PostInfoModal dog={this.props.dog}/>
