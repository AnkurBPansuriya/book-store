import React, { Component } from 'react'
import './loginForm.css'

class loginForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            useremail: '',
            userpassword: ''
        }
    }

    changeUserName = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changeUserEmail = (event) => {
        this.setState({
            useremail: event.target.value
        })
    }

    changeUserPassword = (event) => {
        this.setState({
            userpassword: event.target.value
        })
    }

    alertSubmitMessage = (event) => {
        alert(`User Name : ${this.state.username} and Email : ${this.state.useremail}`)
    }


    render() {
        return (
            <>
                <div className='contant'>
                    <form className='LogIn'>
                        <h2>Login Form</h2>

                        <label>User Name : </label>
                        <input type='text' value={this.state.username} onChange={this.changeUserName} placeholder='Enter Your Name' />

                        <label>Email : </label>
                        <input type='email' value={this.state.useremail} onChange={this.changeUserEmail} placeholder='Enter Your Email' />

                        <label>Password : </label>
                        <input type='password' value={this.state.userpassword} onChange={this.changeUserPassword} placeholder='Enter Your Password' />

                        <button type='submit' onClick={this.alertSubmitMessage} >Submit</button>

                    </form>
                </div>

            </>
        )
    }
}

export default loginForm
