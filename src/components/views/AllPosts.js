import React from 'react'
import Post from '../Post'



const AllPosts = (props) => {

	let offers = props.posts.filter((post)=> post.offer)
	let requests = props.posts.filter((post)=> post.request)

	let displayOffers = offers.map((post) => <Post key={post.id} post={post}/>)

	let displayRequests = requests.map((post) => <Post key={post.id} post={post}/>)
		return (
			<div>
				<h2>Offers</h2>
					{displayOffers}
				<h2>Requests</h2>
					{displayRequests}
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
