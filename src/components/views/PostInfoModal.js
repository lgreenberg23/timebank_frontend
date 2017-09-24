MoreInfoModal.js

import React from 'react'
import { Button, Header, Image, Modal, Card } from 'semantic-ui-react'
import Comment from './Comment'
import Comments from './Comments'



class ModalScrollingExample extends React.Component {
  constructor(props) {
		super(props)

		this.state = {
			comment: false,
      comments: '',
      testing: false
		}

    this.getComments = this.getComments.bind(this)

	}

	leaveComment = () => {
    this.setState({
      comment: true
    })
  }

  writeComment = (props, comment) => {
    const createComment = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userInput: {input: comment, breed: props[0]}})
    }
    fetch('http://localhost:3000/api/v1/comments', createComment)
      .then(res => res.json())
      .then(res => console.log(res))
      this.setState({
        comment: false
      })
  }

  getComments = () => {
    fetch(`http://localhost:3000/api/v1/dog/comments/${this.props.dog[0]}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res, testing: true
        })
      })
  }

  deleteComment = (comment, dog) => {
    fetch(`http://localhost:3000/api/v1/dog/comments/${dog}/${comment}`, {
      method: 'delete'
    })
    .then(response => response.json()
    .then(res => {
        this.setState({
          comments: res,
          testing: true
        })
      })
    );
  }

  updateComment = (comment, dog, oldText) => {
    const updateComment = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userInput: {input: comment, breed: dog, oldText: oldText}})
    }
    fetch(`http://localhost:3000/api/v1/dog/comments/${dog}/${oldText}`, updateComment)
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          testing: true
        })
      })
  }

  render(){
    if (this.state.comment === true) {
			return (<div><Comment dog={this.props.dog} writeComment={this.writeComment}/></div>)
		} else {
        return (
          <Modal trigger={<Button onClick={this.getComments}>More Info!</Button>}>
            <Modal.Header>{this.props.dog[0]}</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={this.props.dog[2]} />
              <Modal.Description>
                <Header>Description</Header>
                <p>{this.props.dog[1]}</p>
                <p>Perfect For You!</p>
                <h3>Comments: </h3>
                { this.state.testing? <Comments deleteComment={this.deleteComment} updateComment={this.updateComment} dog={this.props.dog[0]} comments={this.state.comments}/>: <div> Comments Loading</div>}
              </Modal.Description>
            </Modal.Content>
            <Button onClick={this.leaveComment}>Leave a comment on this breed</Button>
          </Modal>
        )
      }
  }
}

export default ModalScrollingExample
