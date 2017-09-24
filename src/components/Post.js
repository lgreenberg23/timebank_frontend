import React from 'react'
import { connect } from 'react-redux'
import { removePost } from '../actions/posts'
// import PostCard from './PostCard'


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
    // remove: (name) => {
    //     dispatch(removePost(name))
    // }
  }

}


export default connect(null, mapDispatchToProps)(PostItem)


    // t.string "name"
    // t.integer "poster_id"
    // t.string "category"
    // t.string "location"
    // t.datetime "expiration_date"
    // t.boolean "offer", default: false
    // t.boolean "request", default: false