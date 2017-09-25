import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/posts'
import { bindActionCreators } from 'redux'
import PostCard from './views/PostCard'


const PostItem = (props) => {
  
  	// const handleClick = () => {
   //  	props.deletePost(props.post.name)
  	// }
  	return (
  		<PostCard post={props.post}/>
  	)
}


// function mapDispatchToProps(dispatch) {
// 	bindActionCreators(this.props.deletePost, dispatch)
// }

    		// <h2>{props.post.name}</h2>
export default PostItem
// export default connect(null, mapDispatchToProps)(PostItem)


    // t.string "name"
    // t.integer "poster_id"
    // t.string "category"
    // t.string "location"
    // t.datetime "expiration_date"
    // t.boolean "offer", default: false
    // t.boolean "request", default: false