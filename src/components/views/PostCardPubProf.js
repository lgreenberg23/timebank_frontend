import React from 'react'
import { Card } from 'semantic-ui-react'
// import { Image, Header, Button } from 'semantic-ui-react'

// import PostInfoModal from './PostInfoModal'


class PostCard extends React.Component{

	offerRequestDisplay = () => {
		if (this.props.post.offer === true){
			return "Offer"
		}else{
			return "Request"
		}
	}


// also, display by category?
	render() {
	  return(
  	    <Card>
  	      <Card.Content>
  	        <Card.Header className='center'>{this.props.post.name}</Card.Header>
  	        <Card.Description >{this.offerRequestDisplay()}</Card.Description>
  	        <Card.Description >Category: {this.props.post.category}</Card.Description>
  	        <Card.Description >Location: {this.props.post.location}</Card.Description>
  	        <Card.Description >Description: {this.props.post.description}</Card.Description>
  	      </Card.Content> 	       
  	    </Card>
	  	)
	}
}



export default PostCard