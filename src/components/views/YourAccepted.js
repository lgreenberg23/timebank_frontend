import React from 'react'
import {Button} from 'semantic-ui-react'


//parent = profile

class YourAccepted extends React.Component {
    
	state = {
		showResults: false
	}

  showAccepted = () => {
    return(
      <div>
      {this.props.accepted()}
      {this.props.initiated()}
      </div>
    )
  }
    
   onClick = (event) => {
    	event.preventDefault()
      this.setState({ showResults: !this.state.showResults })
   }
    
    render() {
        return (
            <div>
                <Button size='large' style={{backgroundColor: '#4E4689', color: 'white'}} onClick={this.onClick}> Accepted Exchanges </Button>
                { this.state.showResults ?  this.showAccepted() : null }
            </div>
        )
    }
}

export default YourAccepted