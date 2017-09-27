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


    // const handleClick = () => {
   //   props.deletePost(props.post.name)
    // }
    // console.log('postItem props', props)

    
// function mapDispatchToProps(dispatch) {
//  bindActionCreators(this.props.deletePost, dispatch)
// }

        // <h2>{props.post.name}</h2>
// export default connect(null, mapDispatchToProps)(PostItem)

