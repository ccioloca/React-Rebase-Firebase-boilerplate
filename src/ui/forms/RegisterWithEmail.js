import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import base from '../../rebase.config.js'
import { Row, Col, FormControl, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import { validateEmail } from '../../utils/helpers.js'

class RegisterWithEmail extends Component {
    constructor(props){
        super(props)
        this.state = {
          error: null
        }
    }

    contextTypes: {
        router: React.PropTypes.object.isRequired
    }

    _registerWithEmail(e) {
        e.preventDefault();

        let userHandler = (error, user) => {
            if(error) this.setState({error: error.message})
            if(user) browserHistory.push('/login')
        }

        base.createUser({
            email    : ReactDOM.findDOMNode(this.refs.txtEmail).value,
            password : ReactDOM.findDOMNode(this.refs.txtPassword).value
        }, userHandler);
    }

    render() {
        let error = this.state.error ? <p> {this.state.error} </p> : undefined
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
                    </form>
                </Col>
            </Row>
        )
    }
}

export default RegisterWithEmail
