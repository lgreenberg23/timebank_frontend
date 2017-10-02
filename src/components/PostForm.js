import React from 'react'
// import { bindActionCreators } from 'redux'
import { Dropdown, Form, Segment, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {addPost} from '../actions/posts'
// import categories from './CategoriesList'



class PostForm extends React.Component {

	state = {
			name: "",
			request: false,
			offer: false,
			category: '',
			location: '',
			expirationDate: '',
			description: ''
	}

  handleSubmit = (event) => {
    event.preventDefault()
    const postParams = {
        name: this.state.name,
        request: this.state.request,
        offer: this.state.offer,
        category: this.state.category,
        location: this.state.location,
        expiration_date: this.state.expirationDate,
        description: this.state.description
    }
    this.props.addPost(postParams, this.props.history)

    // clears the form
    this.setState({
			postName: '',
			request: false,
			offer: false,
			category: '',
			location: '',
			expirationDate: '',
			description: ''

		})
 	}
	
	handleNameChange = (event) =>{
			this.setState({
				name: event.target.value
		})
	}
	
	handleLocationChange = (event) =>{
			this.setState({
				location: event.target.value
		})
	}

	handleDescChange = (event) =>{
			this.setState({
				description: event.target.value
		})
	}

	handleCatChange = (event) =>{
			this.setState({
				category: event.target.innerText
		})
	}

	handleOffChange = (event) =>{
			this.setState({
				offer: true,
				request: false
		})
	}
	handleReqChange = (event) =>{
			// console.log("i hit handle request change")
			this.setState({
				request: true,
				offer: false
		})
	}

	render(){
		console.log("props in postform", this.props)
		return(
			<div>
			<br></br>
			<br></br>
			<Segment>
				<h1>Submit a Post</h1>
				<Form onSubmit={this.handleSubmit}>

					<Form.Field required label='Skill' 
						placeholder="what you are looking to offer or request" 
						control='input' 
						type="text" 
						onChange={this.handleNameChange} 
						value={this.state.name}
					/>
					<Form.Group required>
					   <Form.Field required>
				         Type:
				      </Form.Field>
			         <Form.Field>
			          	<Checkbox
				            radio
				            label='Request'
				            name='request'
				            value='request'
				            checked={this.state.request === true}
				            onChange={this.handleReqChange}
			          	/>
			         </Form.Field>
			         <Form.Field>
			          	<Checkbox
				            radio
				            label='Offer'
				            name='offer'
				            value='offer'
				            checked={this.state.offer === true}
				            onChange={this.handleOffChange}
			          	/>
			        </Form.Field>
			      </Form.Group>
					
					<Form.Field>
						Category
					  	<Dropdown label="Category" text="Category"
					  		placeholder='Select Category' 
					  		onChange={this.handleCatChange} 
					  		>
					  		    <Dropdown.Menu onClick={this.handleCatChange}>
							      <Dropdown.Item text='Music' />
							      <Dropdown.Item text='Tech' />
							      <Dropdown.Item text='DIY Skills' />
							      <Dropdown.Item text='Food & Nutrition' />
							      <Dropdown.Item text='Planting & Growing' />
							      <Dropdown.Item text='MISC' />
							    </Dropdown.Menu>
					  		
      				</Dropdown>
				  	</Form.Field>

				   <Form.Field required label='Location' control='input' 
				   	placeholder='Location' onChange={this.handleLocationChange}
				   />
				   <Form.Field>
				      <label>Description</label>
				      <input 
				      	placeholder='Write a sentence about what this would entail' 
				      	onChange={this.handleDescChange}
				      />
					</Form.Field>

					<Form.Button content="Submit"/>
				</Form>
			</Segment>
		</div>)
	}
}
					  		// fluid selection options={categories}

//VALIDATIONS on have to click one of request/offer

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({addPost}, dispatch)
// }

function mapDispatchToProps(dispatch){
  return {
    addPost: (postParams, history) => {
      return dispatch(addPost(postParams, history))
    }
  }
}


function mapStateToProps(state){
	return {postState: state}
}

export default connect(mapStateToProps,mapDispatchToProps)(PostForm)


// <Form.Field label='Request' control='input' 
// type='checkbox' onClick={this.handleTypeChange}/>
// <Form.Field label='Offer' control='input' 
// type='checkbox' onClick={this.handleTypeChange} />
					  		// <Dropdown.Menu>
      			// 			<Dropdown.Item text='Cooking & Nutrition' />
      			// 			<Dropdown.Item text='Music' />
      			// 			<Dropdown.Item text='DIY Skills' />
      			// 			<Dropdown.Item text='Misc' />
      			// 		<Dropdown.Menu>
