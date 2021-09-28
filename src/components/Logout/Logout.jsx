import React, {Component} from 'react';
import { Redirect } from 'react-router';


class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userRole: this.props.userRole
        }
    }

    componentDidMount() {
        this.setState({userRole: 'Anon'})
        localStorage.clear()
        window.location = '/';
    }

    render() {
        return(
            <div><Redirect to="/" push={true}></Redirect></div>
        )
    }
}

export default Logout;
