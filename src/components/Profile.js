import React from 'react'
import { connect } from 'react-redux'
// import PostsContainer from './PostsContainer'
import PostCard from './views/PostCardProfileDisplay'
import {Grid, Card, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import AcceptedCard from './views/AcceptedCard'
import CompletedCard from './views/CompletedCard'
import PendingCard from './views/PendingTransactionsCard'
import YourOffers from './views/YourOffers'
import YourPending from './views/YourPending'
import YourCompleted from './views/profile/YourCompleted'
import YourAccepted from './views/YourAccepted'
import YourRequests from './views/YourRequests'



class Profile extends React.Component{


	posts = () => {
		return this.props.posts.filter((post) => post.poster.id === this.props.user.id)
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
					<PendingCard transact={transact} />
				</div>
				)
		})
	}

	myPostsWithTransactions = () => {
		let transactions = []
		this.posts().filter((post) => transactions.push(post.transactions))
		return [].concat.apply([], transactions)
	}


	acceptedTransactionsYouInitiated = () => {
		return this.transactions().filter((transact) => {
			return (transact.status === 'accepted' && !transact.verified)
		})
	}
	acceptedTransactionsYouAccepted = () => {
		let transactions = this.myPostsWithTransactions()
		return transactions.filter((transaction) => transaction.status === 'accepted' && !transaction.verified)
	}

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
			// console.log("in DA", this.acceptedTransactionsYouAccepted())
			return(
				<div key={index} className='white-opacity' >
					<AcceptedCard transact={transact} />
				</div>
				)
		})
	}

	completedTransactionsYouInitiated = () => {
		return this.transactions().filter((transact) => {
			return (transact.status === 'accepted' && transact.verified)
		})
	}
	completedTransactionsYouAccepted = () => {
		let transactions = this.myPostsWithTransactions()
		return transactions.filter((transaction) => transaction.status === 'accepted' && transaction.verified)
	}

	displayCompleted = () => {
		let completed = this.completedTransactionsYouAccepted().concat(this.completedTransactionsYouInitiated())
		console.log("completed array", completed)
		return completed.map((transact, index) => {
			// console.log("in DA", this.acceptedTransactionsYouAccepted())
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
				<Link to='/newPost'><Button basic color='violet'>Create a New Post</Button></Link>
				<br></br>
				<Grid>
					<Grid.Row>
						<Grid.Column width={8}>
								<YourOffers offers={this.displayOffers}/>
						</Grid.Column>
						<Grid.Column width={8}>
							<YourRequests requests={this.displayRequests}/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<br/>
				<Grid>
					<Grid.Row>
						<Grid.Column width={8}>
							<YourPending transactions={this.displayTransactions}/>
						</Grid.Column>
						<Grid.Column width={8}>
							<YourAccepted
								initiated={this.displayYouInitiated}
								accepted={this.displayYouAccepted}
							/>
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
