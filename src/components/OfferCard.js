import React from 'react'
import { connect } from 'react-redux'
import { removeBook } from '../actions/books'


const BooksItem = (props) => {
  console.log(props)
  const handleClick = () => {
    props.remove(props.book.title)
  }
  return (
    <li onClick={handleClick}>{props.book}</li>
  )
}


function mapDispatchToProps(dispatch) {
  return {
    remove: (title) => {
        dispatch(removeBook(title))
    }
  }

}


export default connect(null, mapDispatchToProps)(BooksItem)