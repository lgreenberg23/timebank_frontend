import React from 'react'
import {Button} from 'semantic-ui-react'


//parent = profile

class Completed extends React.Component {
    
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
                <Button size='large' style={{backgroundColor: '#4E4689', color: 'white'}} onClick={this.onClick}> Completed Exchanges </Button>
                { this.state.showResults ? this.props.completed() : null }
            </div>
        )
    }
}

export default Completed