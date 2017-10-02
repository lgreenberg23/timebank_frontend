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
				<div key={index} className='white-opacity' >
					<Card.Group><PostCard key={index} post={post} /></Card.Group>
				</div>
			)
		})

		let displayRequests = requests.map((post, index) => {
				return(
				<div key={index} className='white-opacity' >
					<Card.Group><PostCard key={index} post={post} /></Card.Group>
				</div>
			)
		})
		console.log(this.props.transactions)
		let transactions = this.props.transactions.filter((transact) => {
			//console.log(transact.contacter.id, "user", this.props.user.id)
			return transact.contacter.id === this.props.user.id
		})

		let displayTransactions = transactions.map((transact, index) => {
			return(
				<div key={index} >
				{/*transact.post.request ? <h4>You responded to a reqest for:</h4> : <h4>You responded to an offer of:</h4>*/}
					<h4>{transact.post.name}</h4>
					<ul>
						<li>Person who posted this:{transact.post.poster.name}</li>
						<li>You suggested that it will take {transact.hours} hours</li>
						<li>Accepted? {transact.accepted}</li>
					</ul>
				</div>
				)
		})
			//display
			console.log("transactions", this.props.transactions)

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
				<h3>Users you have contacted</h3>
					{displayTransactions}
			</div>
			)
	}
}



function mapStateToProps(state) {
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