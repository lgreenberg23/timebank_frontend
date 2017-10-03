import React from 'react'
import { Form, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateHours } from '../../actions/userActions'
import { verifyTransaction } from '../../actions/transactions'
import { bindActionCreators } from 'redux'
// import {Link} from 'react-router-dom'
// import {addPost} from '../actions/posts'


//parent = acceptedCardInitiated
//if YOU responded to a person's post and they accepted you, 
//after the fact you can say how many hours it took

class TransactionModal extends React.Component {

	state = {
		message: "",
		hours: '',			
	 	modalOpen: false
  	}

  	offerRequestDisplay = () => {
		if (this.props.transact.post.offer === true){
			return "Offer"
		}else{
			return "Request"
		}
	}

  	handleOpen = () => this.setState({ modalOpen: true })

  	handleClose = () => this.setState({ modalOpen: false })

  	handleSubmit = (event) => {
	   event.preventDefault()
		// console.log("I AM IN HandleSubmit", hours)

		let type = this.offerRequestDisplay()

		//send user & other user so can update their hours; send the number of hours to +/-
		this.props.updateHours(this.props.user, this.props.transact.post.poster, this.state.hours, type)
		
		//verify transaction marks transaction as verified and logs hours
		// this.props.verifyTransaction(this.props.transact, this.state.hours)

		this.handleClose()

		//get page to re-render
 	}

	
	handlehoursChange = (event) =>{
			this.setState({
				hours: event.target.value
		})
	}

	render(){
		return(
			<Modal trigger={<a onClick={this.handleOpen}>I did this</a>}
				open={this.state.modalOpen}
            onClose={this.handleClose}>
				<h4>How many hours did you spend on this?</h4>
				<Form onSubmit={this.handleSubmit}>					
				   <Form.Field label='Hours' control='input' 
			   		placeholder='1' onChange={this.handlehoursChange}
			   	/>
					<Form.Button content="Verify Exchange"/>
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