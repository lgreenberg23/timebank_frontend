export function addTransaction(post, user){
  const jwtToken = localStorage.getItem("token")
  const newTransaction = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        post_id: post.id,
        token: jwtToken
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