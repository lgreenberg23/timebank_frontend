import React from 'react'
import { Card, Image, Header, Button } from 'semantic-ui-react'
// import PostInfoModal from './PostInfoModal'

// class PostCard extends React.Component{

const PostCard = (props) => {

	// render() {
	  return(
  	    <Card>
  	      <Card.Content>
  	        <Card.Header>{props.post.name}</Card.Header>
  	        <Card.Description >{props.post.category}</Card.Description>
  	        <Card.Description >{props.post.location}</Card.Description>
  	      </Card.Content>
  	    </Card>
	  	)
	// }
}

// function mapStateToProps

export default PostCard

  	      // <PostInfoModal dog={this.props.dog}/>
