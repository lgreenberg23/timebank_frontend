
//this is where initial state is set

function postsReducer(state = {
  list:[],
  //this is what a post looks like, want list to be an array of individual posts with these keys
  // post { 
  // 		name: "guitar lesson",
  // 		category: "music",
  // 		location: 'New York',
  //    description: "i can teach you a song"
  // 		offer: true,
  // 		request: false,
  // 		expirationDate: '5/12/18'
  //   }
  //], 
  isLoading: false }, action) {


  switch (action.type) {
    case "ADD_POST":
      const newPost = {id: state.list.length + 1, postInfo: action.payload.postInfo}
      return Object.assign({}, state, {list: [...state.list, newPost]})
    
    case "REMOVE_POST":
      // console.log("in posts reducer", action.payload)

      const filteredArray = state.list.filter((post) => post.name !== action.payload.name)
      return Object.assign({}, state, {list: filteredArray})

    case "GET_POSTS":
    // debugger
    console.log("get posts", action.payload)
      return Object.assign({}, state, {list: action.payload, isLoading: false}) 
      //action.payload is all the posts
   
    // case "UPDATE_POST":

    case "ADD_CONTACTER": 
    //ends up being the same as get posts in the reducer, not the same in the action 
      return Object.assign({}, state, {list: action.payload, isLoading: false})

    
    default:
      return state
  }
}

export default postsReducer