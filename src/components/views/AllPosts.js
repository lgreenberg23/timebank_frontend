import React from 'react'
import Post from '../Post'
import { Grid } from 'semantic-ui-react'


const AllPosts = (props) => {

	let offers = props.posts.filter((post)=> post.offer)
	let requests = props.posts.filter((post)=> post.request)

	let displayOffers = offers.map((post, index) => <div key={index} className='white-opacity'><Post key={post.id} post={post}/></div>)

	let displayRequests = requests.map((post, index) => <div key={index} className='white-opacity'><Post key={post.id} post={post}/></div>)
		return (
			<div>
				<Grid>
    				<Grid.Row>
    					
      				<Grid.Column width={8}>
							<h2>Offers</h2>
								{displayOffers}
						</Grid.Column>

      				<Grid.Column width={8}>
							<h2>Requests</h2>
								{displayRequests}
						</Grid.Column>
						
					</Grid.Row>
				</Grid>
			</div>
	)
}

// 	const postItems = props.posts.map((post) => <Post key={post.id} post={post}/>)
// 		return (
// 			<div>
// 				{postItems}
// 			</div>
// 	)
// }

export default AllPosts
