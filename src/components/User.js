import React from 'react'
import { connect } from 'react-redux'
// import PostsContainer from './PostsContainer'
import PostCard from './views/PostCard'
import {Grid, Card} from 'semantic-ui-react'


class User extends React.Component{

	render(){
		console.log("user in User.js", this.props)

		let posts = this.props.user.posts.filter((post) => post.poster_id === this.props.user.id)

		let display = posts.map((post) => {
				return(
				<div><Grid.Column>
				<Card.Group><PostCard post={post} /></Card.Group>
				</Grid.Column> 
				</div>
			)
		})

		return(
			<div>
				<br></br>
				<br></br>
				<h2>Welcome, {this.props.user.name}</h2>
				<h4>You have {this.props.user.hours_banked} hours banked</h4>
				<br></br>
				<h3>Your offers and requests:</h3>

				{display}
			</div>
			)
	}
}



function mapStateToProps(state) {
  return {
     user: state.auth.user, 
     posts: state.posts.list
  }
}

export default connect(mapStateToProps)(User)

  // table "users"
  //   t.string "name"
  //   t.string "email"
  //   t.integer "hours_banked", default: 0
  //   t.string "password_digest"
  //   t.boolean "poster", default: false
  //   t.boolean "acceptor", default: false