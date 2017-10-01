import React from 'react'
import { Card } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {addTransaction} from '../../actions/transactions'
import TransactionModal from './transactionModal'
// import { Image, Header, Button } from 'semantic-ui-react'



class PostCard extends React.Component{

	offerRequestDisplay = () => {
		if (this.props.post.offer === true){
			return "Offer"
		}else{
			return "Request"
		}
	}

	contactPoster = (hours) => {
		console.log("i am in contactPoster,", hours)
		this.props.addTransaction(this.props.post, hours)

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
  	        {this.props.post.poster.id !== this.props.user.id ?
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
