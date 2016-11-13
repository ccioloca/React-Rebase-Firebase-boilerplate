import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import base from '../../rebase.config.js'
import { Row, Col, FormControl, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import { validateEmail } from '../../utils/helpers.js'

class EmailLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
          error: null
        }
    }

    contextTypes: {
        router: React.PropTypes.object.isRequired
    }

    _loginWithEmail(e) {
        e.preventDefault();

        let authHandler = (error, user) => {
            if(error) this.setState({error: error.message})
            if(user) browserHistory.push('/dashboard')
        }

        base.authWithPassword({
            email    : ReactDOM.findDOMNode(this.refs.txtEmail).value,
            password : ReactDOM.findDOMNode(this.refs.txtPassword).value
        }, authHandler);
    }

    _navigateToSignupPage() {
        browserHistory.push('/register')
    }

    render() {
        let error = this.state.error ? <p> {this.state.error} </p> : undefined
        return (
            <Row>
                <Col sm={6} smOffset={3}>
                    <form onSubmit={this._loginWithEmail.bind(this)}>
                      <FormControl  ref="txtEmail"
                                    type="email"
                                    placeholder="Email" />
                      <FormControl  ref="txtPassword"
                                    type="password"
                                    placeholder="Password" />
                      <Button type="submit"
                              className='btn btn-primary'>Login</Button>
                      <Button type="button"
                              className='btn btn-secondary'
                              onClick={() => this._navigateToSignupPage() }>Signup</Button>
                      {error}
                    </form>
                </Col>
            </Row>
        )
    }
}

export default EmailLogin
