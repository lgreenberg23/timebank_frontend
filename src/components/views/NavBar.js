import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout, letMeIn } from '../../actions/auth'
import { getPosts } from '../../actions/posts'
import { getTransactions } from '../../actions/transactions'
import {
  Button,
  Container,
  Menu,
  Segment
} from 'semantic-ui-react'


class Navbar extends React.Component {

  loggedIn = () => {
    return !!localStorage.getItem('token')
  }

  afterUserCheck = (user_id) => {
        this.props.getPosts()
        this.props.getTransactions(user_id)
  }

  componentDidMount = () => {
    if (this.loggedIn){
        this.props.letMeIn(this.afterUserCheck)
     } 
   }

  logOut = () => {
    this.props.logout()
    this.props.history.push('/login')
  }
  
  goHome = () => {
      this.props.history.push('/home')
    }

  seeProfile = () => {
    this.props.history.push('/profile')
  }

  seeAbout = () => {
    this.props.history.push('/about')
  }


  render(){
      return(
            <div className='navbar'>
            <Menu fixed='top' inverted style={{backgroundColor:'#1D193D'}} >
              <Container>
                <Menu.Menu position='left'>
                  <Menu.Item className='item'>
                    <Menu.Item onClick={this.goHome} as='a'>HOME</Menu.Item>
                    <Menu.Item onClick={this.seeProfile} as='a'>PROFILE</Menu.Item>
                    <Menu.Item onClick={this.seeAbout} as='a'>ABOUT</Menu.Item>
                  </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position='right'>
                  <Menu.Item style={{backgroundColor:'#1D193D'}} onClick={this.logOut} as='a'>LOG OUT</Menu.Item>
                </Menu.Menu>
              </Container>
            </Menu>
          </div>
      )
    }
}


function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( {logout, letMeIn, getPosts, getTransactions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)



// <Menu.Item as='a' onClick={props.handleLoginClick}>Login</Menu.Item>
