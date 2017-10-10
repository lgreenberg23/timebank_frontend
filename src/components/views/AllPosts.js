import React from 'react'
import Post from '../Post'
// import categories from '../CategoriesList'
import { Grid } from 'semantic-ui-react'

//parent = postsContainer

const AllPosts = (props) =>{

	let offers = props.posts.filter((post)=> post.offer)
	let requests = props.posts.filter((post)=> post.request)


	// map categories and make a button
	// onclick show the posts in that category
	// let displayOffers = categories.map((category, index) => {
	// 	return (
	// 		 <div key={index}>
	// 			<h3>{category.value}</h3>	
	// 		 	{let show = offers.filter((post, index) => { post.category == category.value }
	// 		 		console.log("category", category.value, "post-category", post.category)
			 		
	// 		 		show.map((post, index) => <div key={index} className='white-opacity'><Post key={post.id} post={post}/></div>)

	// 		 		)}
	// 		 	}
	// 		</div>
	// 	)
	// })	

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

export default AllPosts
