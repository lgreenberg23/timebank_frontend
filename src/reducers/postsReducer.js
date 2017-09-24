
//this is where initial state is set

function postsReducer(state = {
  list:[{
    postInfo: { 
  		name: "guitar lesson",
  		category: "music",
  		location: 'New York',
  		offer: true,
  		request: false,
  		expirationDate: '5/12/18'
    }
  },
    {
    postInfo: { 
  		name:"knife skills",
  		category: "cooking",
  		location: 'Boston',
  		offer: true,
  		request: false,
  		expirationDate: '5/12/18'
    }
  }], 
  isLoading: false }, action) {


  switch (action.type) {
    case "ADD_POST":
      const newPost = {id: state.list.length + 1, postInfo: action.payload.postInfo}
      return Object.assign({}, state, {list: [...state.list, newPost]})
    
    case "REMOVE_POST":
      const filteredArray = state.list.filter((post) => post.postInfo.name !== action.payload.postInfo.name)
      return Object.assign({}, state, {list: filteredArray})

    case "FETCHING_POSTS":
      return Object.assign({}, state, {isLoading: true})

    case "GET_POSTS":
      return Object.assign({}, state, {list: action.payload, isLoading: false})
   
    // case "UPDATE_POST":

    
    default:
      return state
  }
}

export default postsReducer