import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import VerifyModal from './VerifyModal'

// parent = profile

const AcceptCard = (props)  => {


	  return(
  	    <Card>
  	      <Card.Content>
  	        <Card.Header >{props.transact.post.name}</Card.Header>
            {!!props.transact.post.poster ?
  	        <Card.Description >With <Link to={`/pubprofile/${props.transact.post.poster.id}`}><b>{props.transact.post.poster.name}</b></Link></Card.Description> :
  	        <Card.Description >With <Link to={`/pubprofile/${props.transact.contacter.id}`}><b>{props.transact.contacter.name}</b></Link></Card.Description>
            }
            <Card.Description >You have agreed to {props.transact.hours} hours</Card.Description>
  	        <Card.Description >Description: {props.transact.post.description}</Card.Description>
  	        <Card.Description ><VerifyModal transact={props.transact}/></Card.Description>
  	      </Card.Content>
  	    </Card>
	  	)
}

export default AcceptCard
