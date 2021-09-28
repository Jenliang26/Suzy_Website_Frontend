import React, {Component} from 'react';
import './App.css';
import OwnerSite from './components/OwnerSite/OwnerSite';
import AnonSite from './components/AnonSite/AnonSite';
import EmployeeSite from './components/EmployeeSite/EmployeeSite';
import CustomerSite from './components/CustomerSite/CustomerSite';
import Footer from './components/Footer/Footer.jsx';
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from "jwt-decode";
import axios from 'axios';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        user:[],
        userRole: "Not Logged In"

      }
  }

  componentWillMount() {
      this.getUserToken();
      console.log(this.state.userRole)
  }

  getUserToken() {
      let jwt = localStorage.getItem('token');

      console.log(jwt)
      try{
          const user = jwt_decode(jwt);
          console.log("jwt"+user);
          this.setState({user}, () => (this.state))
          console.log(this.state) 
          if (user != 'undefined') {
            let uid = user.user_id
            this.getUserInfo(uid)
          }
          console.log(user) 
          console.log(this.state.userRole)
      } catch (err) {
          console.log(err)
      }
  }

  async getUserInfo(uid) {
    try{
        let request = await axios.get('http://127.0.0.1:8000/api/accounts/customers/user/' + uid, 
            {headers:{'Access-Control-Allow-Origin':true}})
        this.setState({userRole:'Customer', user:request.data})
    }catch (error){
        let requeste = await axios.get('http://127.0.0.1:8000/api/accounts/employees/user/' + uid, 
            {headers:{'Access-Control-Allow-Origin':true}})
        this.setState({userRole:'Employee', user:requeste.data})
    }
  }

  render(){
    if(this.state.userRole === 'Owner'){
        return (
            <div>
                <OwnerSite userRole={this.state.userRole} user={this.state.user} />
            </div>
        );
    }else if(this.state.userRole  === 'Employee'){
        return (
            <div>
                <EmployeeSite userRole={this.state.userRole} user={this.state.user} />
            </div>
        );
    }else if(this.state.userRole  === 'Customer'){
        return (
            <div>
                <CustomerSite userRole={this.state.userRole} user={this.state.user} />
            </div>
        );
    }else{
        return (
            <div>
                <AnonSite userRole={this.state.userRole} user={this.state.user} />
            </div>
        );
    }
  } 
}


export default App;

