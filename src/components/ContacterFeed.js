import React from 'react'
import { Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { approveOrReject, deleteTransaction } from '../actions/transactions'
import { bindActionCreators } from 'redux'

//parent =  contacters

const ContacterFeed =(props) => {

  const handleApprove = () => {
    props.approveOrReject(props.transaction, "accepted")
  }

  const handleReject =() => {
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
