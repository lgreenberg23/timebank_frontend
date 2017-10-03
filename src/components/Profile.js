import React from 'react'
import { connect } from 'react-redux'
// import PostsContainer from './PostsContainer'
import PostCard from './views/PostCardProfileDisplay'
import {Grid, Card, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import AcceptedCard from './views/acceptedCard'
import AcceptedCardInit from './views/AcceptedCardInitiated'



class Profile extends React.Component{


	posts = () => {
		return this.props.posts.filter((post) => {
				return post.poster.id === this.props.user.id
			})
	}

	offers = () => this.posts().filter((post)=> post.offer)
	
	requests = () => this.posts().filter((post)=> post.request)

	displayOffers = () => {
		return this.offers().map((post, index) => {
			return(
			<div key={index} className='white-opacity' >
				<Card.Group><PostCard key={index} post={post} /></Card.Group>
			</div>
			)
		})
	}
	displayRequests = () => {
		// console.log(this.props.transactions)
		return this.requests().map((post, index) => {
			return(
			<div key={index} className='white-opacity' >
				<Card.Group><PostCard key={index} post={post} /></Card.Group>
			</div>
		)
	})
	}

	transactions = () => {
		return this.props.transactions.filter((transact) => {
		//console.log(transact.contacter.id, "user", this.props.user.id)
			return transact.contacter.id === this.props.user.id
		})
	}

	transactionz = () => {
		return this.transactions().filter((transact) => {
			return transact.status !== 'accepted'
		})
	}

	displayTransactions = () => {
		return this.transactionz().map((transact, index) => {
			return(
				<div key={index}>
				{/*transact.post.request ? <h4>You responded to a reqest for:</h4> : <h4>You responded to an offer of:</h4>*/}
					<h4><Link to={`/in/pubprofile/${transact.post.poster.id}`}>{transact.post.poster.name}</Link></h4>
					<ul>
						<li>On their post for {transact.post.name}</li>
						<li>You suggested that it will take {transact.hours} hours</li>
						<li>Status: {transact.status}</li>
					</ul>
				</div>
				)
		})
	}

	acceptedTransactionsYouInitiated = () => {
		return this.transactions().filter((transact) => {
			return (transact.status === 'accepted' && !transact.verified)
		})
	}

	myPostsWithTransactions = () => {
		let transactions = []
		this.posts().filter((post) => transactions.push(post.transactions))
		return [].concat.apply([], transactions)
	}

	acceptedTransactionsYouAccepted = () => {
		let transactions = this.myPostsWithTransactions()
		return transactions.filter((transaction) => transaction.status === 'accepted' && !transaction.verified)
	}

	displayYouInitiated = () => {
		return this.acceptedTransactionsYouInitiated().map((transact, index)=> {
			return(
				<div key={index} className='white-opacity' >
					<AcceptedCardInit transact={transact} />
				</div>
				)
		})
	}

	displayYouAccepted = () => {
		return this.acceptedTransactionsYouAccepted().map((transact, index) => {
			// console.log("in DA", this.acceptedTransactionsYouAccepted())
			return(
				<div key={index} className='white-opacity' >
					<AcceptedCard transact={transact} />
				</div>
				)
		})
	}


	render(){
		if (this.props.user && this.props.posts){
		return(
			<div>
				<br></br>
				<br></br>
				<h2>Welcome, {this.props.user.name}</h2>
				<h4>Your banked hours: {this.props.user.hours_banked}</h4>
				<br></br>
				<Link to='/in/newPost'><Button basic color='violet'>Create a New Post</Button></Link>
				<Grid>
					<Grid.Row>
						<Grid.Column width={8}>
							<h3>Your offers:</h3>
								{this.displayOffers()}
						</Grid.Column>
						<Grid.Column width={8}>
							<h3>Your requests:</h3>
							{this.displayRequests()}
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<br/>
				<Grid>
					<Grid.Row>
						<Grid.Column width={8}>
							<h3>People you have contacted</h3>
							{this.displayTransactions()}
						</Grid.Column>
						<Grid.Column width={8}>
							<h3>Accepted Connections</h3>
							{this.displayYouInitiated()}
							{this.displayYouAccepted()}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
			)
		}else{
			'loading'
		}
	}
}



function mapStateToProps(state) {
  return {
     user: state.auth.user, 
     posts: state.posts.list,
     transactions: state.transactions.list
  }
}

export default connect(mapStateToProps)(Profile)
