import React from 'react'
import { bindActionCreators } from 'redux'
import { Dropdown, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as PostActions from '../actions/posts'



class PostForm extends React.Component {

	state = {
			name: "",
			request: false,
			offer: false
	}
	
categories = [
  {
    text: 'Cooking & Nutrition',
    value: 'Cooking & Nutrition'
  },
    {
    text: 'Music',
    value: 'Music'
  },
    {
    text: 'DIY Skills',
    value: 'DIY Skills'
  },
    {
    text: 'Planting & Herbalism',
    value: 'Planting & Herbalism'
  },
    {
    text: 'Misc',
    value: 'Misc'
  }
]


  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addPost(this.state.name)
    this.setState({
			name: "",
			request: false,
			offer: false

		})
 	}


	
	handleInputChange = (event) =>
		this.setState({
			book:event.target.value
	})


	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" onChange={this.handleInputChange} value={this.state.name}/>
				    <Form.Group grouped>
				      <Form.Field label='Request' control='input' type='checkbox' />
				      <Form.Field label='Offer' control='input' type='checkbox' />
				    </Form.Group>

				  	<Dropdown placeholder='Select Category' fluid selection options={this.categories} />
				    <Form.Field label='' control='input' placeholder='First name' />
				<input type="submit" value="submit"/>
			</form>
		)
	}
}

				    //if request, do one thing, else do another - ternary

function mapDispatchToProps(dispatch) {

  return bindActionCreators(PostActions, dispatch)
}

export default connect(null,mapDispatchToProps)(PostForm)