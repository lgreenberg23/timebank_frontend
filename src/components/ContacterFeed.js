import React from 'react'
import { Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { approveOrReject, deleteTransaction } from '../actions/transactions'
import { bindActionCreators } from 'redux'

//parent =  contacters

const ContacterFeed =(props) => {

  const handleApprove = () => {
    console.log('i am in handleApprove')
    props.approveOrReject(props.transaction, "accepted")
  }

  const handleReject =() => {
    console.log('i am in handleReject')
    props.approveOrReject(props.transaction, "rejected")
  }


	return(
		<Feed.Event>
      <Feed.Label icon='checkmark' onClick={handleApprove}/> 
      <Feed.Label icon='remove' onClick={handleReject}/>
       <Feed.Content>
         <Feed.Summary>
           <Link to={`/pubprofile/${props.person.id}`}>{props.person.name}</Link> would like to connect for {props.hours} hours. 
         </Feed.Summary>
       </Feed.Content>
     </Feed.Event>
  )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( {approveOrReject, deleteTransaction}, dispatch)
}


export default connect(null, mapDispatchToProps)(ContacterFeed)



/*
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
        <Card.Header>
          Steve Sanders
        </Card.Header>
        <Card.Meta>
          Friends of Elliot
        </Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>

*/ 