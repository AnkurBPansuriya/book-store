// import React from "react";

import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (<>
      <div>
      {/* <h1>This is a Home Page</h1> */}
      <h1>{this.props.name}</h1></div>
      </>
    )
  }
}

export default Home;