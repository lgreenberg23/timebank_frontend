import React from 'react'
import { connect } from 'react-redux'
// import PostsContainer from './PostsContainer'
import PostCard from './views/PostCard'
import {Grid, Card} from 'semantic-ui-react'



class Profile extends React.Component{


	render(){
		console.log("user in Profile.js", this.props.user)

		let posts = this.props.posts.filter((post) => post.poster_id === this.props.user.id)

		let offers = posts.filter((post)=> post.offer)
		let requests = posts.filter((post)=> post.request)

		let displayOffers = offers.map((post, index) => {
				return(
				<div>
					<Grid.Column>
						<Card.Group><PostCard key={index} post={post} /></Card.Group>
					</Grid.Column> 
				</div>
			)
		})

		let displayRequests = requests.map((post, index) => {
				return(
				<div>
					<Grid.Column>
						<Card.Group><PostCard key={index} post={post} /></Card.Group>
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
				<h3>Your offers:</h3>
					{displayOffers}
				<h3>Your requests:</h3>
					{displayRequests}
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

// function mapDispatchToProps(dispatch){
//   return bindActionCreators( {letMeIn}, dispatch)
// }

export default connect(mapStateToProps)(Profile)

  // table "users"
  //   t.string "name"
  //   t.string "email"
  //   t.integer "hours_banked", default: 0
  //   t.string "password_digest"
  //   t.boolean "poster", default: false
  //   t.boolean "acceptor", default: false