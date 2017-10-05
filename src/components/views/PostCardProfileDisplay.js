import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deletePost } from '../../actions/posts'
import { bindActionCreators } from 'redux'
import Contacters from '../contacters'
// import PostInfoModal from './PostInfoModal'


class PostCard extends React.Component{

	offerRequestDisplay = () => {
		if (this.props.post.offer === true){
			return "Offer"
		}else{
			return "Request"
		}
	}

	deletePost = () => {
		this.props.deletePost(this.props.post)
	} 



// in render, filter to two columns, requests and offers and display each separately
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
  	        <Card.Content extra><a><Icon name='remove' onClick={this.deletePost}/></a></Card.Content>
  	      </Card.Content>
  	        {this.props.post.transactions.length>0 ?
  	       	 <Card.Content><Contacters transactions={this.props.post.transactions}/></Card.Content> : ''}  
  	    </Card>
	  	)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({deletePost}, dispatch)
}

export default connect(null, mapDispatchToProps)(PostCard)