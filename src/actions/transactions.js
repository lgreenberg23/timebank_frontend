export function addTransaction(post, hours){
  const jwtToken = localStorage.getItem("token")
  const newTransaction = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        post_id: post.id,
        token: jwtToken,
        hours: hours
    })
  }
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/transactions`, newTransaction)
      .then(res => res.json())
      .then(transaction => {
        console.log("ADD_TRANSACT", transaction)
        dispatch(
        {type: 'ADD_TRANSACTION',
         payload: transaction}
      )}
    )//.then(res => history.push("/in/home"))
  }
}


export function getTransactions(user_id) {
    return(dispatch) => {
     fetch(`http://localhost:3000/api/v1/transactions/${user_id}`)
        .then(res => res.json())
        .then(transactions => {
          console.log("transactions in actions", transactions)
          // debugger
          dispatch(
                  {type: 'GET_TRANSACTIONS',
                   payload: transactions}
                )}
      )
   }
}