import React from 'react'
// import NavBarInput from './NavBarInput'
import Login from '../../components/auth/LoginForm';


import {
  Button,
  Container,
  Menu,
  Segment
} from 'semantic-ui-react'

const Navbar = (props) => {

	return(
		  <Segment>
		 	 <div>
				<Menu fixed='top' size='large' color='violet' inverted>
				  <Container>
				    <Menu.Item as='a' onClick={props.handleLoginClick}>Login</Menu.Item>
				    <Menu.Menu position='right'>
				      <Menu.Item className='item'>
				      </Menu.Item>
				    </Menu.Menu>
				  </Container>
				</Menu>
			</div>
		</Segment>
	)
}

export default Navbar

        // <NavBarInput fetchBlogs={props.fetchBlogs}/>

