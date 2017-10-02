import React from 'react'
// import { bindActionCreators } from 'redux'
import { Form, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'
// import {addPost} from '../actions/posts'


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

	    	// console.log("I AM IN HandleSubmit", hours)
	   this.props.contactPoster(this.state.hours)
    	// clears the form
  //   	this.setState({
		// 	message: '',
		// 	hours:''
		// })
		this.handleClose()
 	}
	
	handlehoursChange = (event) =>{
		// console.log("I AM IN HOURS CHANGE", event.data, event.target.value)
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
					   <Form.Field label='Hours' control='input' 
				   	placeholder='1' onChange={this.handlehoursChange}
				   	/>
					<Form.Button content="Submit"/>
				</Form>
			</Modal>
		)
	}
}

//VALIDATIONS on have to click one of request/offer

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({addPost}, dispatch)
// }


		// const hoursOptions = [
	 //      { key: 1, text: '1', value: 1 },
	 //      { key: 2, text: '2', value: 2 },
	 //      { key: 3, text: '3', value: 3 },
	 //      { key: 4, text: '4', value: 4 },
	 //      { key: 5, text: '5', value: 5 },
	 //      { key: 6, text: '6', value: 6 },
	 //      { key: 7, text: '7', value: 7 },
	 //      { key: 8, text: '8', value: 8 }
	 //   ]
		// console.log("props in postform", this.props)

function mapStateToProps(state){
	return {postState: state}
}

export default connect(mapStateToProps)(TransactionModal)
					

						// <Form.Field compact>
						//   	<Dropdown label="Hours" 
						//   		search
		    //               searchInput={{ type: 'number' }}
		    //               compact selection options={options}
		    //               placeholder='Select number of hours'
						//   		onChange={this.handleHoursChange}
						//   	>
	     //  				</Dropdown>
					 //  	</Form.Field>