import React from 'react'
// import NavBarInput from './NavBarInput'
// import LoginForm from '../../components/auth/LoginForm';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {logout, letMeIn} from '../../actions/auth'
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


  logOut = () => {
    this.props.logout()
    this.props.history.push('/login')
  }
  
  goHome = () => {
      this.props.history.push('/in/home')
    }

  seeProfile = () => {
    this.props.history.push('/in/profile')
  }

  componentDidMount = () => {
    if (this.loggedIn){
        this.props.letMeIn()
     } 
   }

  render(){
      return(
          <Segment>
            <div>
            <Menu fixed='top' size='large' color='violet' inverted>
              <Container>
                <Menu.Menu position='left'>
                  <Button color='violet' onClick={this.logOut}>Log Out</Button>
                </Menu.Menu>
                <Menu.Item className='item'>
                  <Menu.Item icon='home' onClick={this.goHome} as='a'></Menu.Item>
                  <Menu.Item onClick={this.seeProfile} as='a'>Profile</Menu.Item>
                </Menu.Item>
              </Container>
            </Menu>
          </div>
        </Segment>
      )
    }
}


function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( {logout, letMeIn}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)



// <Menu.Item as='a' onClick={props.handleLoginClick}>Login</Menu.Item>
