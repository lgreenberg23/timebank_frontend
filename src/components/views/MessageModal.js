import React from 'react'
import { Form, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateHours } from '../../actions/userActions'
import { verifyTransaction } from '../../actions/transactions'
import { bindActionCreators } from 'redux'
// import {Link} from 'react-router-dom'


//parent = contacterFeed



class TransactionModal extends React.Component {

	state = {
		message: "",
		hours: '',			
	 	modalOpen: false
  	}

  	offerRequestDisplay = () => {
		this.props.transact.post.offer ? 'Offer' : 'Request'
	}

  	handleOpen = () => this.setState({ modalOpen: true })

  	handleClose = () => this.setState({ modalOpen: false })

  	handleSubmit = (event) => {
	   event.preventDefault()

	//either call the fetch from here to update the transaction, OR
	//send back the message to contacter feed and let it send the fetch		

		this.handleClose()
 	}

	
	handleMessageChange = (event) =>{
			this.setState({
				message: event.target.value
		})
	}

	render(){
		return(
			<Modal 
				trigger={<a onClick={this.handleOpen} icon='checkmark'></a>}
				open={this.state.modalOpen}
            onClose={this.handleClose}>
				<h4>Would you like to send a message along with your decision?</h4>
				<Form onSubmit={this.handleSubmit}>					
				   <Form.Field label='Message' control='input' 
			   		placeholder='Sorry this cannot be done remotely OR I think this will take 5 hours not 3' 
			   		onChange={this.handleMessageChange}
			   	/>
					<Form.Button content="Send Decision"/>
				</Form>
			</Modal>
		)
	}
}

function mapStateToProps(state){
	return {user: state.auth.user}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({updateHours, verifyTransaction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionModal)