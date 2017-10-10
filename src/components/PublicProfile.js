import React from 'react'
import { connect } from 'react-redux'
// import PostsContainer from './PostsContainer'
import PostCard from './views/PostCardPubProf'
import {Grid, Card} from 'semantic-ui-react'
// import {Link} from 'react-router-dom';
import {getUser} from '../actions/userActions'
import {getPosts} from '../actions/posts'
import { bindActionCreators } from 'redux'


class Profile extends React.Component{

	componentWillMount(){
		// id = this.props.location.pathname.split("/")[2]
		this.props.getUser(this.props.location.pathname.split("/")[2])
	}

	componentDidMount(){
		this.props.getUser(this.props.location.pathname.split("/")[2])
	}

		// console.log("looking for name", this.props.person)
		// console.log("looking for posts", this.props.posts)
		
	getTheirPosts = () => {
		return this.props.posts.filter((post) => {
			return post.poster.id === this.props.person.id
		})
	}

	getOffers = () => this.getTheirPosts().filter((post)=> post.offer)
	getRequests = () => this.getTheirPosts().filter((post)=> post.request)

	// console.log("posts in pub prof", posts)

	displayOffers = () => {
		// console.log("in display offers pp:", this.getOffers())
		return this.getOffers().map((post, index) => {
			return(
				<div key={index} className='white-opacity' >
					<Card.Group><PostCard key={index} post={post} /></Card.Group>
				</div>
			)
		})
	}

	displayRequests = () => {
		// console.log("in display reqs pp:", this.getRequests())
		return this.getRequests().map((post, index) => {
			return(
				<div key={index} className='white-opacity'>
					<Card.Group><PostCard key={index} post={post} /></Card.Group>
				</div>
			)
		})
	}

	render(){
		if (this.props.posts && this.props.person){
			return(
				<div>
					<br></br>
					<br></br>
					<h2>{this.props.person.name}'s Profile</h2>
					<h3>Email:{this.props.person.email}</h3>
					<br></br>
					<Grid>
						<Grid.Row>
							<Grid.Column width={8}>
								<h3>{this.props.person.name}'s Offers:</h3>
									{this.displayOffers()}
							</Grid.Column>
							<Grid.Column width={8}>
								<h3>{this.props.person.name}'s Requests:</h3>
								{this.displayRequests()}
							</Grid.Column>
						</Grid.Row>
					</Grid>
					<br/>
				</div>
			)
		}else{
			return(
				<div>
				loading
				</div>
			)
		}
	}
}



function mapStateToProps(state) {
	//console.log("map in pub prof", state.users)
  return {
     user: state.auth.user, 
     posts: state.posts.list,
     transactions: state.transactions.list,
     person: state.users.user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( {getUser, getPosts}, dispatch)
}

// function mapDispatchToProps(dispatch){
//   	return {
//     	getUser: (userId, history) => {
//       	dispatch(getUser(userId, history))},
//       getPosts: () => {
//       	dispatch(getPosts())}
//   	}
// }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)