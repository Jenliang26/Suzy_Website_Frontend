import { Container, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/button';
import './Login.css';
import axios from 'axios';
import jwt_decode from "jwt-decode";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        password: '',
        }   
    }

    componentWillMount() {
        console.log(this.state.userRole)
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    
    handleSubmit = (event) => {
        event.preventDefault();

        const user_data = {
            username: this.state.username,
            password: this.state.password
        };
        this.loginFunction(user_data)
    }

    async loginFunction(user_data) {
        
        try{
          let response = await axios.post('http://127.0.0.1:8000/api/token/', user_data)
            localStorage.setItem('token', response.data.access)
            console.log(response.data.access)
            console.log(this.state.username)
            console.log(this.state.password)
            console.log(localStorage.getItem('token'))
            localStorage.getItem('token');
            console.log(user_data.username)
            window.location = '/';
        }
            catch (error){
            console.log(error)
            }
    }

    
    render() {
        return (
            <div className="loginbox">
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label for="username">Username: </label>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/><br></br>
                    
                    <label for="password">Password: </label>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/><br></br>

                    <button type="submit">Login</button>
                </form>
                <span>
                    Not a member? sign up <a href='register'>here</a>
                </span>
                {/* <div>
                    <Site userdata={this.props.user} />
                </div> */}
            </div>
        )
    }
}

export default Login;