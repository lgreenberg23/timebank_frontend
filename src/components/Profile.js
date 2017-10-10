import React from 'react'
import { connect } from 'react-redux'
import PostCard from './views/profile/PostCardProfileDisplay'
import {Grid, Card, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import AcceptedCard from './views/profile/AcceptedCard'
import CompletedCard from './views/profile/CompletedCard'
import PendingCard from './views/profile/PendingTransactionsCard'
import YourOffers from './views/profile/YourOffers'
import YourPending from './views/profile/YourPending'
import YourCompleted from './views/profile/YourCompleted'
import YourAccepted from './views/profile/YourAccepted'
import YourRequests from './views/profile/YourRequests'



class Profile extends React.Component{

	//get all posts you made
	posts = () => {
		return this.props.posts.filter((post) => post.poster.id === this.props.user.id)
	}

	//from your posts, divide into offers & requests
	offers = () => this.posts().filter((post)=> post.offer)
	
	requests = () => this.posts().filter((post)=> post.request)

	//show the skills you offered and the help you requested
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
		return this.requests().map((post, index) => {
			return(
			<div key={index} className='white-opacity' >
				<Card.Group><PostCard key={index} post={post} /></Card.Group>
			</div>
		)
	})
	}

	//get all the transactions where you contacted someone about their post
	transactions = () => {
		return this.props.transactions.filter((transact) => {
			return transact.contacter.id === this.props.user.id
		})
	}
	//all transactions you initiated that are NOT accepted aka still pending
	pending = () => {
		return this.transactions().filter((transact) => {
			return transact.status !== 'accepted'
		})
	}

	displayPending = () => {
		return this.pending().map((transact, index) => {
			return(
				<div key={index}>
					<PendingCard transact={transact} />
				</div>
				)
		})
	}

	//get all my posts that someone else contacted me about (they init)
	myPostsWithTransactions = () => {
		let transactions = []
		this.posts().filter((post) => transactions.push(post.transactions))
		return [].concat.apply([], transactions)
	}

	//get all transactions I initiated that ARE accepted but not verified - 
	// need me to verify
	acceptedTransactionsYouInitiated = () => {
		return this.transactions().filter((transact) => {
			return (transact.status === 'accepted' && !transact.verified)
		})
	}
	//all transactions someone else initiated that are accepted and waiting for THEIR verification
	acceptedTransactionsYouAccepted = () => {
		let transactions = this.myPostsWithTransactions()
		return transactions.filter((transaction) => transaction.status === 'accepted' && !transaction.verified)
	}

	//now display all accepted transactions that have been agreed upon
	displayYouInitiated = () => {
		return this.acceptedTransactionsYouInitiated().map((transact, index)=> {
			return(
				<div key={index} className='white-opacity' >
					<AcceptedCard transact={transact} />
				</div>
			)
		})
	}
	displayYouAccepted = () => {
		return this.acceptedTransactionsYouAccepted().map((transact, index) => {
			return(
				<div key={index} className='white-opacity' >
					<AcceptedCard transact={transact} />
				</div>
				)
		})
	}

	//find all transactions where I contacted the other person and I verified
	completedTransactionsYouInitiated = () => {
		return this.transactions().filter((transact) => {
			return (transact.status === 'accepted' && transact.verified)
		})
	}
	//all transactions someone contacted me, I accepted, They verified
	completedTransactionsYouAccepted = () => {
		let transactions = this.myPostsWithTransactions()
		return transactions.filter((transaction) => transaction.status === 'accepted' && transaction.verified)
	}

	displayCompleted = () => {
		let completed = this.completedTransactionsYouAccepted().concat(this.completedTransactionsYouInitiated())
		console.log("completed array", completed)
		return completed.map((transact, index) => {
			return(
				<div key={index} className='white-opacity' >
					<CompletedCard transact={transact} />
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
				<h4>Your location: {this.props.user.location}</h4>
				<Link to='/newPost'><Button basic >Create a New Post</Button></Link>
				<br></br>
				<br/>
				<Grid>
					<Grid.Row>
						<Grid.Column width={4}>
								<YourOffers offers={this.displayOffers}/>
						</Grid.Column>
						<Grid.Column width={4}>
							<YourRequests requests={this.displayRequests}/>
						</Grid.Column>

						<Grid.Column width={4}>
							<YourAccepted
								initiated={this.displayYouInitiated}
								accepted={this.displayYouAccepted}
							/>
						</Grid.Column>
						<Grid.Column width={4}>
							<YourPending transactions={this.displayPending}/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<br/>
					<YourCompleted completed={this.displayCompleted} />
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
