
function transactionsReducer(state = {
  list:[]
  //this is what a transaction looks like, list is an array of objects
  // transaction { 
    // "verified", default: false
    // "post_id"
    // "contacter_id"
    // "hours"
  //   }
  }, action) {


  switch (action.type) {
    case "ADD_TRANSACTION":
      console.log("action.payload transaction", action.payload)
      const newTransaction = {id: state.list.length + 1, transaction: action.payload.transaction}
      return Object.assign({}, state, {list: [...state.list, newTransaction]})
    
    case "REMOVE_TRANSACTION":
      const filteredArray = state.list.filter((transaction) => transaction.id !== action.payload.id)
      return Object.assign({}, state, {list: filteredArray})

    case "GET_TRANSACTIONS":
    // debugger
      return Object.assign({}, state, {list: action.payload} ) 
      //action.payload is all the transactions
    
    default:
      return state
  }
}

export default transactionsReducer
