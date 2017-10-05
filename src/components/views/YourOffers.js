import React from 'react'
import {Button} from 'semantic-ui-react'


//parent = profile

class YourOffers extends React.Component {
    
	state = {
		showResults: false
	}

    
   onClick = (event) => {
    	event.preventDefault()
    	console.log("i am in onclick", this.props.offers)
      this.setState({ showResults: !this.state.showResults })
   }
    
    render() {
        return (
            <div>
                <Button size='large' style={{backgroundColor: '#4E4689', color: 'white'}} onClick={this.onClick}> Your Offers </Button>
                { this.state.showResults ? this.props.offers() : null }
            </div>
        )
    }
}

export default YourOffers

