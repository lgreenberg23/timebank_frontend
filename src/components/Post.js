import React from 'react'
// import { connect } from 'react-redux'
// import { deletePost } from '../actions/posts'
// import { bindActionCreators } from 'redux'
import PostCard from './views/PostCard'


const PostItem = (props) => {
  
  return (
      <PostCard post={props.post}/>
  )
}
export default PostItem

