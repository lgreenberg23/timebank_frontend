import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {deletePost} from '../../actions/posts'
import { bindActionCreators } from 'redux'
import Contacters from '../contacters'
import { Link } from 'react-router-dom';

// parent = profile

const AcceptCard = (props)  => {


	  return(
  	    <Card>
  	      <Card.Content>
  	        <Card.Header >{props.transact.post.name}</Card.Header>
  	        <Card.Description >With <Link to={`/in/pubprofile/${props.transact.post.poster.id}`}>{props.transact.post.poster.name}</Link></Card.Description>
  	        <Card.Description >You have agreed to {props.transact.hours} hours</Card.Description>
  	        <Card.Description >Their description: {props.transact.post.description}</Card.Description>
  	      </Card.Content>
  	    </Card>
	  	)
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({deletePost}, dispatch)
}
// function mapStateToProps

export default connect(null, mapDispatchToProps)(AcceptCard)