// import React from 'react'
// import { Link, Header, Modal, Button, Icon } from 'semantic-ui-react'
// import { Dropdown } from 'semantic-ui-react'
// import { connect } from 'react-redux'


// class PostModal extends React.Component {


//   state = {
//       modalOpen: false,
//       input: "" 
//   }

//   handleOpen = () => this.setState({ modalOpen: true })

//   handleClose = () => this.setState({ modalOpen: false })

//   handleSubmit = () => {
    
//   }

//   handleChange = (e) => {
//     this.setState({input: e.target.searchInput}) 
//   }


//   render(){
//     
//         return (
//           <Modal 
//             trigger={<Link onClick={this.handleOpen}>Contact Poster</Link>}
//             open={this.state.modalOpen}
//             onClose={this.handleClose}
//           >
//             <Modal.Header>{this.props.post.name}</Modal.Header>
//             <Modal.Content>
//               <Modal.Description>
//                 <Header>Description</Header>
//                 <p>{this.post.description}</p>
//                 <Dropdown
//                   search
//                   searchInput={{ type: 'number' }}
//                   selection
//                   options={options}
//                   placeholder='Select number of hours...'
//                   onChange={this.handleChange}
//                 />
//               </Modal.Description>
//             </Modal.Content>
//         <Modal.Actions>
//           <Button color='green' onClick={this.handleSubmit} inverted>
//             <Icon name='checkmark' /> Leave Comment!
//           </Button>
//         </Modal.Actions>
//           </Modal>
//         )
//   }
// }

// function mapStateToProps(state) {
//   return {
//      user: state.auth.user
//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({addTransaction}, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PostCard)



//   handleChange = (event) => {
//     console.log(this.state.input)
//     this.setState({
//       input: event.target.value
//     })
//   }

//   render() {
//     return (
//       <Modal
//         trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
//         open={this.state.modalOpen}
//         onClose={this.handleClose}
//         basic
//         size='small'
//       >
//         <Header/>
//         <Modal.Content>
//           <h3>Leave a comment about this breed!</h3>
//           <CommentText handleChange={this.handleChange}/>
//         </Modal.Content>
//       </Modal>
//     )
//   }
// }