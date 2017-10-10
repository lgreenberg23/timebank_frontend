import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

// parent = profile

const Pending = (props)  => {

	return(
      <div className='white-opacity'>
  	    <Card>
  	      <Card.Content>
  	        <Card.Header >{<Link to={`/pubprofile/${props.transact.post.poster.id}`}>{props.transact.post.poster.name}</Link>}</Card.Header>
  	        {/*transact.post.request ? <h4>You responded to a reqest for:</h4> : <h4>You responded to an offer of:</h4>*/}
  	        <Card.Description >On their post for <b>{props.transact.post.name}</b></Card.Description>
            <Card.Description >You suggested that it will take {props.transact.hours} hours</Card.Description>
  	        <Card.Description >Status: {props.transact.status}</Card.Description>
  	      </Card.Content>
  	    </Card>
      </div>
	)
}

export default Pending
				