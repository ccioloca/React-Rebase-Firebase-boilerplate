import React, { Component } from 'react'
import Container from '../layout/Container'
import Navigation from '../presentational/Navigation.js'
import base from '../../rebase.config.js'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasUser: false,
            loading: true,
            photoURL: null
        }
    }

    componentWillMount() {
        const authDataCallback = (user) => {
            console.log(user)
            if (user) {
                if (user.emailVerified) this.setState({hasUser: true, loading: false, photoURL: user.photoURL})
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
        return (
            <div>
                <Navigation hasUser={this.state.hasUser} loading={this.state.loading} photoURL={this.state.photoURL}/>
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
