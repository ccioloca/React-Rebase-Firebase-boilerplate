import React, { Component } from 'react'
import Container from '../layout/Container'
import Header from '../presentational/Header'
import base from '../../rebase.config.js'
import { browserHistory } from 'react-router'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasUser: false,
            loading: true
        }
    }

    componentWillMount() {
        const authDataCallback = (user) => {
            if (user) {
                if (user.emailVerified) this.setState({hasUser: true, loading: false})
            } else {
                this.setState({hasUser: false, loading: false})
                browserHistory.replace('/login')
            }
        }
        // Listen to authentication
        this.unsubscribeToAuthListener = base.onAuth(authDataCallback)
    }

    componentWillUnmount() {
        //to remove auth listener
        this.unsubscribeToAuthListener()
    }

    render() {
        const { children } = this.props
        const {hasUser, loading} = this.state

        return (
            <div>
                <Header hasUser={hasUser} loading={loading}/>
                <Container size={'medium'}>
                    { React.cloneElement(children, { hasUser: this.state.hasUser }) }
                </Container>
            </div>
        )
    }
}

App.propTypes = {
  children: React.PropTypes.node,
}

export default App
