import React from 'react'
import { connect } from 'react-redux'
import { removePost } from '../actions/posts'


const PostItem = (props) => {
  
//   const handleClick = () => {
//     props.remove(props.post.name)
//   }
//   return (
//     <li onClick={handleClick}>{props.post}</li>
//   )
// }


function mapDispatchToProps(dispatch) {
  return {
    remove: (name) => {
        dispatch(removePost(name))
    }
  }

}


export default connect(null, mapDispatchToProps)(BooksItem)

