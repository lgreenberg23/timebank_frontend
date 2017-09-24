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
	    name: 'Cooking & Nutrition'
	  },
	    {
	    name: 'Music'
	  },
	    {
	    name: 'DIY Skills'
	  },
	    {
	    name: 'Planting & Herbalism'
	  },
	    {
	    name: 'Misc'
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



    // "name"
    // "poster_id"
    // "category"
    // "location"
    // "expiration_date"
    // "offer", default: false
    // "request", default: false

	
	handleInputChange = (event) =>
		this.setState({
			book:event.target.value
	})


	render(){
		return(
			<div>
				<h1>Submit a Post</h1>
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
			</div>
		)
	}
}

				    //if request, do one thing, else (aka if offer) do another - ternary

function mapDispatchToProps(dispatch) {

  return bindActionCreators(PostActions, dispatch)
}

export default connect(null,mapDispatchToProps)(PostForm)