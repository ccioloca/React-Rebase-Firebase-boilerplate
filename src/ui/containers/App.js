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
            loading: true,
            firebaseUser: null,
            language: 'en'
        }
    }

    componentWillMount() {
        const authDataCallback = (user) => {
            if (user) {
                this.setState({hasUser: true, loading: false, firebaseUser: user})
                base.post(`users/${user.uid}`, {
                  data: { test: 'test' }
                })
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
        const {hasUser, loading, firebaseUser, language} = this.state

        return (
            <div>
                <Header hasUser={hasUser} loading={loading} language={language}/>
                <Container size={'medium'}>
                    { React.cloneElement(children, { hasUser, firebaseUser, language }) }
                </Container>
            </div>
        )
    }
}

App.propTypes = {
  children: React.PropTypes.node,
}

export default App
