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


export function deleteTransaction(transaction) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/transactions/${transaction.id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(transactions => {
      console.log("DELETE TRANSACTIONS", transactions)
      dispatch(
        {type: 'REMOVE_TRANSACTION',
         payload: transaction}
      )
    }
    )
  }
}


export function approveOrReject(transaction, status){
  const jwtToken = localStorage.getItem("token")
  const update = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        transaction_id: transaction.id,
        token: jwtToken,
        status: status
    })
  }
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/transactions/modify/${transaction.id}`, update)
      .then(res => res.json())
      .then(transactions => {
        console.log("APPROVE_OR_REJECT", transactions)
        dispatch(
        {type: 'APPROVE_OR_REJECT',
         payload: transactions}
      )}
    )//.then(res => history.push("/in/profile"))
  }
}

//set transaction as verified so that you know to move it to the archived section
//update hours logged so you can see how many were subtracted or added from doing this
export function verifyTransaction(transaction, hours){
  const jwtToken = localStorage.getItem("token")
  const update = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        transaction_id: transaction.id,
        token: jwtToken,
        hours: hours
    })
  }
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/transactions/hours/${transaction.id}`, update)
      .then(res => res.json())
      .then(transactions => {
        console.log("VERIFY_TRANSACTION", transactions)
        console.log('initial_transaction', transaction)
        dispatch(
        {type: 'VERIFY_TRANSACTION',
         payload: transactions}
      )}
    )//.then(res => history.push("/in/profile"))
  }
}