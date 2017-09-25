import React from 'react'
import { bindActionCreators } from 'redux'
import { Dropdown, Form, TextArea, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as PostActions from '../actions/posts'



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


	const Categories = [
	  'Cooking & Nutrition' ,
	    'Music',
	    'DIY Skills',
	    'Planting & Herbalism',
	    'Misc'
	]


  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addPost(this.state.name)

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
	
	handleNameChange = (event) =>
		this.setState({
			name: event.target.value
	})

	handleDescChange = (event) =>
		this.setState({
			description: event.target.value
	})


	render(){
		console.log("I got to the PostForm")
		return(
			<div>
			<Segment>
				<h1>Submit a Post</h1>
				<form onSubmit={this.handleSubmit}>
					<Form.Field label='Skill' control='input' type="text" onChange={this.handleNameChange} value={this.state.name}/>
					    <Form.Group grouped>
					      <Form.Field label='Request' control='input' type='checkbox' />
					      <Form.Field label='Offer' control='input' type='checkbox' />
					    </Form.Group>
					  	<Dropdown placeholder='Select Category' fluid selection options={this.categories} />
					    <Form.Field label='Location' control='input' placeholder='Location' />
					   <Form.Field label='Description' placeholder='Write a sentence about what this would entail' onChange={this.handleDescChange}/>
					<input type="submit" value="submit"/>
				</form>
				</Segment>
			</div>
		)
	}
}

				    //if request is checked, set it to true, if offer, set that to true

function mapDispatchToProps(dispatch) {

  return bindActionCreators(PostActions, dispatch)
}

export default connect(null,mapDispatchToProps)(PostForm)



