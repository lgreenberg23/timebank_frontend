import React from 'react'
import { connect } from 'react-redux'
// import PostForm from './PostForm'
import * as PostActions from '../actions/posts'
import { bindActionCreators } from 'redux'
// import Categories from './CategoriesList'
import AllPosts from './views/AllPosts'
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class PostsContainer extends React.Component {
  
  componentDidMount() {
    if(this.props.posts.length===0){
      this.props.getPosts()
    }
  }

  render() {
    // console.log("props", this.props.posts)

    return (
      <div> 
        <AllPosts posts={this.props.posts}/>
        <br></br><br></br> 
        <Link to='/in/newPost'><Button basic color='violet'>Create a New Post</Button></Link>
      </div>
    )
  }
}


function mapStateToProps(state) {
	// debugger
  return {
     posts: state.posts.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)


// https://react.semantic-ui.com/modules/dropdown -- FILTER POSTS