import React from 'react'
import { Button, Header, Image, Modal, Card } from 'semantic-ui-react'



class PostModal extends React.Component {


	state = {
      	testing: false
		}


  render(){
        return (
          <Modal trigger={<Button>More Info!</Button>}>
            <Modal.Header>{this.props.post.name}</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>Description</Header>
                <p>{this.post.description}</p>
                <p>take some stuff from the input form </p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        )
  }
}

export default PostModal
