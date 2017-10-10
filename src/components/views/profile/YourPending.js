import React from 'react'
import {Button} from 'semantic-ui-react'


//parent = profile

class YourPending extends React.Component {
    
	state = {
		showResults: false
	}

    
   onClick = (event) => {
    	event.preventDefault()
      this.setState({ showResults: !this.state.showResults })
   }
    
    render() {
        return (
            <div>
                <Button size='large' style={{backgroundColor: '#4E4689', color:'white'}} onClick={this.onClick}> People you have contacted </Button>
                { this.state.showResults ? this.props.transactions() : null }
            </div>
        )
    }
}

export default YourPending