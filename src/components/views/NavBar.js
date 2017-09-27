import React from 'react'
// import NavBarInput from './NavBarInput'
// import LoginForm from '../../components/auth/LoginForm';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {logout} from '../../actions/auth'
import {
  Button,
  Container,
  Menu,
  Segment
} from 'semantic-ui-react'


const Navbar = (props) => {

  const logOut = () => {
    props.logout()
    props.history.push('/login')
  }
  
  const goHome = () => {
      props.history.push('/in/home')
    }

  const seeProfile = () => {
    props.history.push('/in/profile')
  }


  	return(
  		  <Segment>
  		 	 <div>
  				<Menu fixed='top' size='large' color='violet' inverted>
  				  <Container>
              <Menu.Menu position='left'>
                <Button color='violet' onClick={logOut}>Log Out</Button>
              </Menu.Menu>
              <Menu.Item className='item'>
                <Menu.Item icon='home' onClick={goHome} as='a'></Menu.Item>
                <Menu.Item onClick={seeProfile} as='a'>Profile</Menu.Item>
              </Menu.Item>
            </Container>
          </Menu>
        </div>
      </Segment>
    )

}


function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( {logout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)



// <Menu.Item as='a' onClick={props.handleLoginClick}>Login</Menu.Item>
