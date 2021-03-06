
function transactionsReducer(state = {
  list:[]
  //this is what a transaction looks like, list is an array of objects
  // transaction { 
    // "verified", default: false
    // "post_id"
    // "contacter_id"
    // "hours", "hours_logged"
  //   }
  }, action) {


  switch (action.type) {
    case "ADD_TRANSACTION":
      const newTransaction = {id: state.list.length + 1, transaction: action.payload.transaction}
      return Object.assign({}, state, {list: [...state.list, newTransaction]})
    
    case "REMOVE_TRANSACTION":
      const filteredArray = state.list.filter((transaction) => transaction.id !== action.payload.id)
      return Object.assign({}, state, {list: filteredArray})

    case "GET_TRANSACTIONS":
      return Object.assign({}, state, {list: action.payload} ) 
      //action.payload is all the transactions    

    case "APPROVE_OR_REJECT":
      return Object.assign({}, state, {list: action.payload} )
      // could have made action.payload the one transaction, 
      // and then done a slice and replace to add it back into the list

    case "VERIFY_TRANSACTION":
      return Object.assign({}, state, {list: action.payload} )
    
    default:
      return state
  }
}

export default transactionsReducer






