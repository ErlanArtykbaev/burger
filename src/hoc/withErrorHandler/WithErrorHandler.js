import React, { Component } from 'react'

import Modal from '../../components/UI/Modal/Modal'

const  WithErrorHandler = (WrappedComponent, axios) => {

  return class extends Component{
    state = {
      err: null
    }

    componentDidMount(){
      axios.interceptors.request.use(req => {
        this.setState({err: null})
        return req
    })
      axios.interceptors.response.use(res => res, err => (
        this.setState({err: err})
      ))
    }

    errorConfirmedHandler = () => {
      this.setState({err: null})
    }

    render(){
      return(
        <>
          <Modal 
            modalClosed={this.errorConfirmedHandler}
            show={this.state.err}> 
              {this.state.err ? this.state.err.message : null}
          </Modal>
          <WrappedComponent { ...this.props } />
        </>
      )
    }
  } 
}

export default WithErrorHandler
