import React from 'react'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import * as PostActions from '../actions/posts'
import { bindActionCreators } from 'redux'
// import Categories from './CategoriesList'
import AllPosts from './AllPosts'

class OffersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchOffers()
  }

  render() {
    console.log(this.props)

    return (
      <div>
        <PostForm />
        <AllPosts posts={this.props.posts}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  // console.log(state)
  return {
     posts: state.posts.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)


// https://react.semantic-ui.com/modules/dropdown -- FILTER POSTS