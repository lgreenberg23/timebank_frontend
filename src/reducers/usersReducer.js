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
    // console.log("get posts", action.payload)
      return Object.assign({}, state, {list: action.payload}) 
      //action.payload is??

    case "GET_USER":
      // console.log("get user", action.payload)
      return Object.assign({}, state, {user: action.payload}) 

    case "UPDATE_HOURS":
      console.log("update hours for user", action.payload)
      return Object.assign({}, state, {list: action.payload}) 
    
    default:
      return state
  }
}

export default usersReducer