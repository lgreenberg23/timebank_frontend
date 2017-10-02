import React from 'react'
import ContacterFeed from './ContacterFeed'
import { Card, Feed } from 'semantic-ui-react'

const Contacters = (props) => {

	const transactions = props.transactions.filter((transact) => transact.status === 'pending')

	return(
			<Card>
		    <Card.Content>
		        People who Contacted You:
		    	<Feed>
		    	{transactions.map((trans, index) => {
		    		return <ContacterFeed key={index} transaction={trans} hours={trans.hours} person={trans.contacter} />})
		    	}
		   	</Feed>
	   	 </Card.Content>
	  	  </Card>
		)
}


export default Contacters