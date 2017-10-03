import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
// import { Image, Header, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {deletePost} from '../../actions/posts'
import { bindActionCreators } from 'redux'
import Contacters from '../contacters'
import { Link } from 'react-router-dom';


// class PostCard extends React.Component{

const AcceptCard = (props)  => {

	//parent = profile

	// offerRequestDisplay = () => {
	// 	 if (this.props.post.offer === true){
	// 	 	return "Offer"
	// 	 }else{
	// 	 	return "Request"
	// 	 }
	// }




	  return(
  	    <Card>
  	      <Card.Content>
  	        <Card.Header >{props.transact.post.name}</Card.Header>
  	        <Card.Description >With <Link to={`/in/pubprofile/${props.transact.contacter.id}`}>{props.transact.contacter.name}</Link></Card.Description>
  	        <Card.Description >You have agreed to {props.transact.hours} hours</Card.Description>
  	        <Card.Description >Your description: {props.transact.post.description}</Card.Description>
  	      </Card.Content>
  	    </Card>
	  	)
	
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({deletePost}, dispatch)
}
// function mapStateToProps

export default connect(null, mapDispatchToProps)(AcceptCard)

