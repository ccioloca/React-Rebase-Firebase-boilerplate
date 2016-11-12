import React, { Component } from 'react'
import base from '../../rebase.config.js'

class Logout extends Component {

    constructor(props){
        super(props);
        this.state = {
          errors: null
        };
    }

    contextTypes: {
        router: React.PropTypes.object.isRequired
    }

    componentDidMount() {
        base.auth().signOut().then(function() {
            console.log('Signed Out');
        }, function(error) {
            console.error('Sign Out Error', error);
        });
    }

    render() {
        return <p>You are now logged out</p>
    }
}

export default Logout
