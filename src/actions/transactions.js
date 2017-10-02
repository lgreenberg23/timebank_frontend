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


export function getTransactions() {
    // debugger
    return(dispatch) => {
      
     fetch(`http://localhost:3000/api/v1/transactions/`)
        .then(res => res.json())
        .then(transactions => dispatch(
          {type: 'GET_TRANSACTIONS',
           payload: transactions}
        )
      )
   }
}