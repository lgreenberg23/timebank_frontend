import React from 'react'
import ContacterFeed from './ContacterFeed'
import { Card, Feed } from 'semantic-ui-react'

const Contacters = (props) => {

	return(
			<Card>
		    <Card.Content>
		        People who Contacted You:
		    	<Feed>
		    	{props.transactions.map((trans, index) => {
		    		return <ContacterFeed key={index} person={trans.contacter} />})
		    	}
		   	</Feed>
	   	 </Card.Content>
	  	  </Card>
		)
}


export default Contacters