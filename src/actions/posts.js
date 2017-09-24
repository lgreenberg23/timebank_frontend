export function addPost(post) {
  return {
    type: "ADD_POST",
    payload: post
  }
}


export function removePost(name) {
  return {
    type:"REMOVE_POST",
    payload: name
  }
}
