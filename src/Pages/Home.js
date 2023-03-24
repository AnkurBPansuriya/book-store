// import React from "react";

import React, { Component } from 'react'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Welcome to Coding World !!'
    }
  }

  onChange() {
    this.setState({
      message: 'Thank you for visiting !!'
    })
  }
  render() {
    return (
      <>
        <div>
          {/* <h1>This is a Home Page</h1> */}
          <h1>{this.state.message}</h1>
          <button onClick={() => this.onChange()}>Click Here ⬇️</button>
        </div>
      </>
    )
  }
}

export default Home;