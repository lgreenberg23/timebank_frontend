function usersReducer(state = {
  list:[],
	}, action) {


  switch (action.type) {
    // case "ADD_USER":
    //   const newPost = {id: state.list.length + 1, postInfo: action.payload.postInfo}
    //   return Object.assign({}, state, {list: [...state.list, newPost]})
    
    case "REMOVE_USER":
      const filteredArray = state.list.filter((post) => post.name !== action.payload.name)
      return Object.assign({}, state, {list: filteredArray})


    case "GET_USERS":
      return Object.assign({}, state, {list: action.payload}) 
      //action.payload is??

    case "GET_USER":
      // action.payload is specific user
      return Object.assign({}, state, {user: action.payload}) 

    case "UPDATE_HOURS":
    // action.payload is all the users
      return Object.assign({}, state, {list: action.payload}) 
    
    default:
      return state
  }
}

export default usersReducer