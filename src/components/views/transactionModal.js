import React from 'react'
import { Form, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'



class TransactionModal extends React.Component {

	state = {
		message: "",
		hours: '',			
	 	modalOpen: false
  	}

  	handleOpen = () => this.setState({ modalOpen: true })

  	handleClose = () => this.setState({ modalOpen: false })

  	handleSubmit = (event) => {
	   event.preventDefault()

	   this.props.contactPoster(this.state.hours)
    	// clears the form
  		//   	this.setState({
		// 		message: '',
		// 		hours:''
		// 	})
		this.handleClose()
 	}
	
	handlehoursChange = (event) =>{
			this.setState({
				hours: event.target.value
		})
	}

	render(){

		return(
				<Modal trigger={<a onClick={this.handleOpen}>Contact {this.props.posterName}</a>}
					open={this.state.modalOpen}
	            onClose={this.handleClose}>
					<h4>How many Hours would you like to suggest? Please input a number between 1 and 8</h4>
					<Form onSubmit={this.handleSubmit}>					
					   <Form.Field 
					   	label='Hours' 
					   	control='input' 
				   		placeholder='1' 
				   		onChange={this.handlehoursChange}
				   	/>
					<Form.Button content="Submit"/>
				</Form>
			</Modal>
		)
	}
}


function mapStateToProps(state){
	return {postState: state}
}

export default connect(mapStateToProps)(TransactionModal)