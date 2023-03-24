import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    onChange(){
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        return (
            <>

                <div>
                    <h1>Counter {this.state.count} </h1>
                    <button onClick={() => this.onChange()}>Click Here 🔢</button>
                </div>
            </>
        )
    }
}

export default Counter;