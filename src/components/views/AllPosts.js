import React from 'react'
import Post from '../Post'



const AllPosts = (props) => {

	// console.log(props)
	const postItems = props.posts.map((post) => <Post key={post.id} post={post}/>)
		return (
			<div>
				{postItems}
			</div>
	)
}

export default AllPosts
