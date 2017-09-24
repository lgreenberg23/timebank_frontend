// adapter connects the front end with the back end 
class Posts{

  static createPost(props, post){
    const createPost = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userInput: {input: post} 
      })
    }    
    fetch('http://localhost:3000/api/v1/posts', createPost)
      .then(res => res.json())
      .then(res => console.log(res))
      this.setState({
        post: false
      })
  }

  static getPosts() {
    fetch(`http://localhost:3000/api/v1/posts/`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res, testing: true
        })
      })
  }

  static deletePost(post) {
    fetch(`http://localhost:3000/api/v1/dog/posts//${post}`, {
      method: 'delete'
    })
    .then(response => response.json()
    .then(res => {
        this.setState({
          posts: res,
          testing: true
        })
      })
    );
  }

  static updatePost(post, oldPost) {
    const updatePost = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userInput: {
        input: comment, 
        breed: dog, 
        oldPost: oldPost
        }
      })
    }
    fetch(`http://localhost:3000/api/v1/dog/comments/${oldPost}`, updatePost)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res,
          testing: true
        })
      })
  }
}

export default Posts


    // "name"
    // "poster_id"
    // "category"
    // "location"
    // "expiration_date"
    // "offer", default: false
    // "request", default: false

