//in your action, you define the things that can happen in the reducer.  
// in the reducer, you actually set the state



export function createPost(props, post){
    const createPost = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userInput: {input: post} 
      })
    }
    return(dispatch) => {    
    	fetch('http://localhost:3000/api/v1/posts', createPost)
	      .then(res => res.json())
	      .then(post => dispatch(
	      	type: 'ADD_POST',
	      	payload: post
	      	)
      }
  }

export function getPosts() {
  	return(dispatch) => {
  	  dispatch({type:"FETCHING_POSTS"})
     fetch(`http://localhost:3000/api/v1/posts/`)
	      .then(res => res.json())
	      .then(posts => dispatch(
	      	type: 'GET_POSTS',
	      	payload: posts
      	)
   }
}

export function deletePost(post) {
	return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/dog/posts/${post}`, {
      method: 'delete'
    })
    .then(response => response.json()
    .then(post => dispatch(
      	type: 'REMOVE_POST',
      	payload: post
      )
 	}
}

export function updatePost(post, oldPost) {
    const updatePost = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userInput: {
	        post: post,
	        oldPost: oldPost
        }
      })
    }
    fetch(`http://localhost:3000/api/v1/dog/comments/${oldPost}`, updatePost)
      .then(res => res.json())
      .then(post => => dispatch(
      	type: 'UPDATE_POST',
      	payload: post
      )
 	}
}

export default Posts