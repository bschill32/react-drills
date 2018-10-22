import React, { Component } from 'react';

class Login extends Component {
    constructor( ) {
        super();

        this.state = {
            username: "",
            password: ""
        }
        this.login = this.login.bind(this);
    }

    handleUsernameChange(val) {
        this.setState({
            username: val
        });
    }

    handlePasswordChange(val) {
        this.setState({
            password: val
        });
    }

    login() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.handleUsernameChange(e.target.value)}></input>
                <input onChange={(e) => this.handlePasswordChange(e.target.value)}></input>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login;
