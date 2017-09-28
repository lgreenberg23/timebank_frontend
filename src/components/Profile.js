import React from 'react'
import { connect } from 'react-redux'
// import PostsContainer from './PostsContainer'
import PostCard from './views/PostCardProfileDisplay'
import {Grid, Card, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';



class Profile extends React.Component{


	render(){
		let posts = this.props.posts.filter((post) => {
			return post.poster.id === this.props.user.id
		})

		let offers = posts.filter((post)=> post.offer)
		let requests = posts.filter((post)=> post.request)

		let displayOffers = offers.map((post, index) => {
				return(
				<div key={index}>
					<Card.Group><PostCard key={index} post={post} /></Card.Group>
				</div>
			)
		})

		let displayRequests = requests.map((post, index) => {
				return(
				<div key={index}>
					<Card.Group><PostCard key={index} post={post} /></Card.Group>
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
				<Grid>
					<Grid.Row>
						<Grid.Column width={8}>
							<h3>Your offers:</h3>
								{displayOffers}
						</Grid.Column>
						<Grid.Column width={8}>
							<h3>Your requests:</h3>
							{displayRequests}
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<br/>
				<Link to='/in/newPost'><Button basic color='violet'>Create a New Post</Button></Link>
							<h2>people who contacted you</h2>
			</div>
			)
	}
}



function mapStateToProps(state) {
	console.log(state, "map in prof")
  return {
     user: state.auth.user, 
     posts: state.posts.list,
     transactions: state.transactions.list
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