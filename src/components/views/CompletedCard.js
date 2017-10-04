import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

// parent = profile

const CompletedIInit = (props)  => {

	return(
  	    <Card>
  	      <Card.Content>
  	        <Card.Header >{props.transact.post.name}</Card.Header>
            {props.transact.post.poster !== undefined ?
  	        <Card.Description >With <Link to={`/pubprofile/${props.transact.post.poster.id}`}>{props.transact.post.poster.name}</Link></Card.Description> :
            <Card.Description >With <Link to={`/pubprofile/${props.transact.contacter.id}`}>{props.transact.contacter.name}</Link></Card.Description>
  	        }
            <Card.Description >Expected Hours: {props.transact.hours}</Card.Description>
  	        <Card.Description >Actual Hours: {props.transact.hours_logged}</Card.Description>
  	      </Card.Content>
  	    </Card>
	)
}

export default CompletedIInit