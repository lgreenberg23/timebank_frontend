import React from 'react'
import { Card} from 'semantic-ui-react'
// import { Image, Header, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {addTransaction} from '../../actions/transactions'
import TransactionModal from './transactionModal'

// class PostCard extends React.Component{

class PostCard extends React.Component{

	offerRequestDisplay = () => {
		if (this.props.post.offer === true){
			return "Offer"
		}else{
			// console.log("in postcard, user:", this.props.user, "post:", this.props.post)
			return "Request"
		}
	}

	contactPoster = (hours) => {
		this.props.addTransaction(this.props.post, hours)
	} 

// also, display by category?
	render() {
		console.log("post", this.props.post, "user", this.props.user)
	  return(
  	    <Card color='teal'>
  	      <Card.Content>
  	        <Card.Header>{this.props.post.name}</Card.Header>
  	        <Card.Description >{this.offerRequestDisplay()}</Card.Description>
  	        <Card.Description >{this.props.post.category}</Card.Description>
  	        <Card.Description >{this.props.post.location}</Card.Description>
  	        {this.props.post.poster.id !== this.props.user.id /*&& this.props.post.transactions.forEach((transact) => transact.contacter.id !==this.props.user.id)*/ ?
	        <TransactionModal contactPoster={this.contactPoster}/> : ''}
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

function mapDispatchToProps(dispatch){
	return bindActionCreators({addTransaction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCard)


  	      //<Card.Content extra onClick={this.contactPoster}><a>Contact Poster</a></Card.Content>
