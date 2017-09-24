
function postsReducer(state = {
  list:[
  {id: 1, 
  	postInfo: { 
  		name: "guitar lesson",
  		category: "music",
  		offer: true,
  		request: false }
  },
  {id: 2, 
  	postInfo: { 
  		name:"knife skills",
  		category: "cooking",
  		offer: true,
  		request: false }
  }
  ],isLoading:false}, action) {



  switch (action.type) {
    case "ADD_POST":
      const newPost = {id: state.list.length + 1, postInfo: action.payload}
      return Object.assign({}, state, {list: [...state.list, newPost]})
    
    case "REMOVE_POST":
      const filteredArray = state.list.filter((post) => post.name !== action.payload)
      return Object.assign({}, state, {list: filteredArray})
    
    case "FETCHING_POSTS":
      return Object.assign({}, state, {isLoading: true})
    
    case "FETCHED_POSTS":
      return Object.assign({}, state, {list: action.payload, isLoading: false})
    
    default:
      return state
  }

}


export default postsReducer