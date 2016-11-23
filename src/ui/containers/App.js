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
            firebaseUser: null
        }
    }

    componentWillMount() {
        const authDataCallback = (user) => {
            if (user) {
                if (user.emailVerified) this.setState({hasUser: true, loading: false, firebaseUser: user})
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

    onLogoutClicked(event) {
      base.auth().signOut()
      this.setState({hasUser: false})
      browserHistory.replace('/login')
    }

    // Define how the context looks like
    getChildContext() {
      return {
       hasUser: this.state.hasUser,
       firebaseUser: this.state.firebaseUser,
       logout: this.onLogoutClicked.bind(this),
       loading: this.state.loading
      }
    }

    render() {
        const { children } = this.props

        return (
            <div>
                <Header />
                <Container size={'medium'}>
                    {children}
                </Container>
            </div>
        )
    }
}

App.propTypes = {
  children: React.PropTypes.node,
}

export default App

App.childContextTypes = {
     hasUser: React.PropTypes.bool.isRequired,
     firebaseUser: React.PropTypes.object,
     loading: React.PropTypes.bool.isRequired,
     logout: React.PropTypes.func.isRequired
}
