import React, {Component} from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange1 = (value) => {
        this.setState({
            username: value
        })
    }

    handleChange2 = (value) => {
        this.setState({
            password: value
        })
    }

    render(){

        return(
            <div>
                <h1>Please Login......</h1>
                <input type="text" onChange={(e)=>{
                    this.handleChange1(e.target.value)
                }} placeholder="Username"/>
                <input type="text" onChange={(e)=>{
                    this.handleChange2(e.target.value)
                }} placeholder="Password"/>
                <button onClick={()=> alert(`Username: ${this.state.username} Password: ${this.state.password}`)}>Login</button>
            </div>
        )
    }
}














































// import React, { Component } from 'react';

// class Login extends Component {
//     constructor( ) {
//         super();

//         this.state = {
//             username: "",
//             password: ""
//         }
//         this.login = this.login.bind(this);
//     }

//     handleUsernameChange(val) {
//         this.setState({
//             username: val
//         });
//     }

//     handlePasswordChange(val) {
//         this.setState({
//             password: val
//         });
//     }

//     login() {
//         alert(`Username: ${this.state.username} Password: ${this.state.password}`);
//     }

//     render() {
//         return (
//             <div>
//                 <input onChange={(e) => this.handleUsernameChange(e.target.value)}></input>
//                 <input onChange={(e) => this.handlePasswordChange(e.target.value)}></input>
//                 <button onClick={this.login}>Login</button>
//             </div>
//         )
//     }
// }

// export default Login;
