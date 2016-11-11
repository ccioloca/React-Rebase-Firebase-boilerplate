import React, { Component } from 'react';
import base from '../../rebase.config.js';

class Logout extends Component {
    contextTypes: {
        router: React.PropTypes.object.isRequired
    }
    componentDidMount() {
        base.unauth();
        //TODO: set user state to logged out?
    }
    render() {
        return <p>You are now logged out</p>;
    }
}

export default Logout
