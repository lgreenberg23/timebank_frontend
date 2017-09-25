import React from 'react'
import PostItem from '../Post'



const AllPosts = (props) => {

	// console.log(props)
	const postItems = props.posts.map((post) => <PostItem key={post.id} post={post}/>)
		return (
			<ul>
				{postItems}
			</ul>
	)
}

export default AllPosts
