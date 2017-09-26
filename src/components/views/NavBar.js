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


  	return(
  		  <Segment>
  		 	 <div>
  				<Menu fixed='top' size='large' color='violet' inverted>
  				  <Container>
  				    <Menu.Item as='a' onClick={props.handleLoginClick}>Login</Menu.Item>
  				    <Menu.Menu position='right'>
  				      <Menu.Item className='item'>
  				    <Menu.Item as='a'>My Account</Menu.Item>
  				      </Menu.Item>
  				      {props.auth.isAuthenticated? <Button onClick={logOut}>Log Out</Button>: <Button onClick={logOut}>Log In</Button>}
              </Menu.Menu>
            </Container>
          </Menu>
        </div>
      </Segment>
    )

}

// export default Navbar
function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {logout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
