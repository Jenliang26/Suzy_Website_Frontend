import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container
} from 'react-bootstrap';
import Home from './Home/Home';


class App extends Component{
  state = {
    account: []
  }
  componentDidMount(){
    this.getAccounts();
  }

  async getAccounts(){
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/accounts/employees/")
      this.setState({
        account : response.data
      })
      console.log(response.data)
    }
      catch(except){
        console.log("API Error")
      }
  }

  render(){
    return(
      <div className="App" style={{
        backgroundColor: 'beige',
        backgroundSize: 'cover',
        height: '100vh'
      }}>
        <Router>
          <div className="navbar">
            <Navbar id='navbar' fixed='top' bg='black' variant='dark'>
            <Navbar.Brand href='' id="Logo">Welcome to Sewing By Suzy!</Navbar.Brand>
            <Nav.Link id="NavLinks" href='/home'> Home</Nav.Link>
            <Nav className="ml-auto">
              {/* <SearchBar /> */}
            </Nav>
            </Navbar>
          </div>
          <Switch>
            <Route path='/home' exact component={Home}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
};

export default App;

