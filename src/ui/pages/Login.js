import React, { Component } from 'react';
import base from '../../rebase.config.js';

class Login extends Component {

    contextTypes: {
        router: React.PropTypes.object.isRequired
    }

    handleSubmit(e) {
        e.preventDefault();
        var email = this.refs.email.value;
        var pw    = this.refs.pw.value;

        const authHandler = function(error, user) {
          if(error) console.log(error);
          this.redirectUserToIndex(user);
        }

        // Simple email/password authentication
        base.authWithPassword({
            email    : email,
            password : pw
        }, authHandler);
    }

    redirectUserToIndex(user) {
        var location = this.props.location
        if (location.state && location.state.nextPathname) {
            this.context.router.replace(location.state.nextPathname)
        } else {
            this.context.router.replace('/index')
        }
        // User signed in!
        console.log('User signed in!');
        // var uid = result.user.uid;
    }

    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <h1> Login </h1>
                <form onSubmit={() => this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label> Email </label>
                        <input className="form-control" ref="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input ref="pw" type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default Login
