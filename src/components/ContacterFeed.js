import React from 'react'
import { Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import PublicProfile from './PublicProfile'


const ContacterFeed =(props) => {


	return(
		<Feed.Event>
       <Feed.Content>
         <Feed.Summary>
            <Link to={`/in/pubprofile/${props.person.id}`}>{props.person.name}</Link> would like to connect for {props.hours} hours. 
         </Feed.Summary>
       </Feed.Content>
     </Feed.Event>
  )
}


export default ContacterFeed


// export default connect(null, mapDispatchToProps)(ContacterFeed)
           

    //console.log(this.state.category)
       // <Feed.Label image='' />

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