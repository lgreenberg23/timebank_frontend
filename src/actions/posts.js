//in your action, you define the things that can happen in the reducer.  
// in the reducer, you actually set the state



export function addPost(postParams, history){
    const jwtToken = localStorage.getItem("token")
    const createPost = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        post: postParams,
        token: jwtToken
      })
    }
    return(dispatch) => {    
    	fetch('https://git.heroku.com/timebank-backend.git/api/v1/posts', createPost)
	      .then(res => res.json())
	      .then(post => dispatch(
        	{
            type: 'ADD_POST',
            payload: post
          })
        )
      .then(res => history.push("/home"))
      }
  }

// this should get the posts from index in the posts controller
export function getPosts() {
    // debugger
  	return(dispatch) => {
  	  
     fetch(`https://git.heroku.com/timebank-backend.git/api/v1/posts/`)
	      .then(res => res.json())
	      .then(posts => dispatch(
	      	{type: 'GET_POSTS',
           payload: posts}
      	)
      )
   }
}

export function deletePost(post) {
	return(dispatch) => {
    fetch(`https://git.heroku.com/timebank-backend.git/api/v1/posts/${post.id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(posts => {
      console.log("DELETE POSTS", posts)
      dispatch(
      	{type: 'REMOVE_POST',
         payload: post}
      )
    }
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
  return(dispatch) => {
    fetch(`https://git.heroku.com/timebank-backend.git/api/v1/posts/${oldPost.id}`, updatePost)
      .then(res => res.json())
      .then(post => dispatch(
      	{type: 'UPDATE_POST',
         payload: post}
      )
    )
 	}
}



