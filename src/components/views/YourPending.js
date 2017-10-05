import React from 'react'
import {Button} from 'semantic-ui-react'


//parent = profile

class YourRequests extends React.Component {
    
	state = {
		showResults: false
	}

    
   onClick = (event) => {
    	event.preventDefault()
    	// console.log("i am in onclick", this.props.transactions)
      this.setState({ showResults: !this.state.showResults })
   }
    
    render() {
        return (
            <div>
                <Button size='large' inverted style={{backgroundColor: '#4E4689'}} onClick={this.onClick}> People you have contacted </Button>
                { this.state.showResults ? this.props.transactions() : null }
            </div>
        )
    }
}

export default YourRequests