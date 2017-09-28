import React from 'react'
import { Feed } from 'semantic-ui-react'



const ContacterFeed =(props) => {

	return(
		<Feed.Event>
       <Feed.Label image='' />
       <Feed.Content>
         <Feed.Summary>
           <a>{props.person}</a> would like to connect
         </Feed.Summary>
       </Feed.Content>
     </Feed.Event>


	)
}


export default ContacterFeed

// function mapStateToProps(state) {
// 	console.log(state, "map in prof")
//   return {
//      user: state.auth.user, 
//      posts: state.posts.list,
//      transactions: state.transactions.list
//   }
// }

// export default connect(mapStateToProps)(ContacterFeed) 