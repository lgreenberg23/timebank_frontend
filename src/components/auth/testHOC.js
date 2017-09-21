
import React from 'react'


function testHOC(RenderedComponent, props) {
  return class extends React.Component {
    componentWillMount() {
      if (localStorage.getItem('token')) {
        // logged in
      } else {
        // push away from screen
      }
      console.log("Mounting Component - TestHOC")
    }

    render() {
      console.log(this.props)
      return (
        <div>
          <p>Admin Portal</p>
          <RenderedComponent {...props}/>
        </div>

      )
    }

  }
}

export default testHOC
