import React from 'react'
import { Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import PublicProfile from './PublicProfile'
// import {getUser} from '../actions/userActions'
// import { connect } from 'react-redux'


const ContacterFeed =(props) => {

  // const getPerson = () => {
  //   // props.getUser(props.person.id, props.history)
  // }

	return(
		<Feed.Event>
       <Feed.Label image='' />
       <Feed.Content>
         <Feed.Summary>
            <Link to={`/in/pubprofile/${props.person.id}`}>{props.person.name}</Link> would like to connect
         </Feed.Summary>
       </Feed.Content>
     </Feed.Event>
  )
}


export default ContacterFeed

// function mapDispatchToProps(dispatch){
//     return {
//       getUser: (userId, history) => {
//         dispatch(getUser(userId, history))
//       }
//     }
// }

// export default connect(null, mapDispatchToProps)(ContacterFeed)
           


           // <a onClick={getPerson()}>{props.person.name}</a> would like to connect

// function mapStateToProps(state) {
// 	console.log(state, "map in prof")
//   return {
//      user: state.auth.user, 
//      posts: state.posts.list,
//      transactions: state.transactions.list
//   }
// }

// export default connect(mapStateToProps)(ContacterFeed) 