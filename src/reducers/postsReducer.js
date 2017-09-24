
function postsReducer(state = {
  list:[
  {id: 1, 
  	postInfo: { 
  		name: "guitar lesson",
  		category: "music",
  		location: 'New York',
  		offer: true,
  		request: false,
  		expirationDate: '5/12/18'
  },
  {id: 2, 
  	postInfo: { 
  		name:"knife skills",
  		category: "cooking",
  		location: 'Boston',
  		offer: true,
  		request: false,
  		expirationDate: '5/12/18'
  }
  ],isLoading:false}, action) {



  switch (action.type) {
    case "ADD_POST":
      const newPost = {id: state.list.length + 1, postInfo: action.payload}
      return Object.assign({}, state, {list: [...state.list, newPost]})
    
    case "REMOVE_POST":
      const filteredArray = state.list.filter((post) => post.postInfo.name !== action.payload)
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