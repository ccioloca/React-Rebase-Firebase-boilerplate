import React, { Component } from 'react'
import Container from '../layout/Container'
import Header from '../presentational/Header'
import base from '../../rebase.config.js'

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
        const {loading, hasUser, firebaseUser} = this.state
        return (
            <div>
                <Header hasUser={hasUser} loading={loading} firebaseUser={firebaseUser}/>
                <Container size={'medium'}>
                    {this.props.children}
                </Container>
            </div>
        )
    }
}

App.propTypes = {
  children: React.PropTypes.node,
}

export default App
