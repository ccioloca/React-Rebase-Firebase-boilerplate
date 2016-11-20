import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import base from '../../rebase.config.js'
import { Row, Col, FormControl, Button } from 'react-bootstrap'
import { validateEmail } from '../../utils/helpers.js'

class RegisterWithEmail extends Component {
    constructor(props){
        super(props)
        this.state = {
          error: null,
          registered: false
        }
    }

    contextTypes: {
        router: React.PropTypes.object.isRequired
    }

    _registerWithEmail(e) {
        e.preventDefault()
        let email = ReactDOM.findDOMNode(this.refs.txtEmail).value
        let password = ReactDOM.findDOMNode(this.refs.txtPassword).value

        let userHandler = (error, user) => {
            if(error) this.setState({error: error.message})
            if(user) {
                user.sendEmailVerification().then(() => {
                this.setState({registered: true,
                                error: null})
                }, (error) => {
                    this.setState({error: error})
                })
            }
        }

        if ( validateEmail(email) ) {
            base.createUser({
                email    : email,
                password : password
            }, userHandler);
        } else {
            this.setState({error: 'invalid email address'})
        }

    }

    render() {
        let error = this.state.error ? <p> {this.state.error} </p> : undefined
        let registered = this.state.registered ? <p> Please verify your email address </p> : undefined
        return (
            <Row>
                <Col sm={6} smOffset={3}>
                    <form onSubmit={this._registerWithEmail.bind(this)}>
                        <FormControl  ref="txtEmail"
                                      type="email"
                                      placeholder="Email" />
                        <FormControl  ref="txtPassword"
                                      type="password"
                                      placeholder="Password" />
                        <Button type="submit"
                                className='btn btn-primary'>Register</Button>
                        {error}
                        {registered}
                    </form>
                </Col>
            </Row>
        )
    }
}

export default RegisterWithEmail
