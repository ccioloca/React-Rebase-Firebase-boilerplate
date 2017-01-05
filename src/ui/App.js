import React, { Component } from 'react'
import Container from './layout/Container'
import Header from './Header'
import base from './rebase.config.js'
import { browserHistory } from 'react-router'
import Text from './translations'
import 'font-awesome/css/font-awesome.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasUser: false,
            loading: true,
            language: 'en',
            isAdmin: false,
            firebaseUser: {}
        }
    }

    componentWillMount() {
        const authDataCallback = (user) => {
            if (user) {
                this.setState({hasUser: true, loading: false, firebaseUser: user})

                this.ref = base.listenTo(`authentication/userOwned/${user.uid}/preferences`, {
                  context: this,
                  asArray: false,
                  then(userOptions) {
                    const language = userOptions.language || 'en'
                    this.setState({language})
                  }
                })

                base.fetch(`authentication/admins/${user.uid}`, {
                  context: this,
                  asArray: true,
                  onFailure: (err) => {
                    console.log(err)
                    this.setState({isAdmin: false})
                  },
                  then(data){
                    this.setState({isAdmin: true})
                  }
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
        base.removeBinding(this.ref)
    }

    render() {
        const { children } = this.props
        const { hasUser, loading, language, firebaseUser, isAdmin } = this.state
        const { displayName, photoURL } = firebaseUser

        return (
            <div>
                <Header hasUser={hasUser}
                        language={language}
                        Text={Text}
                        isAdmin={isAdmin}
                        displayName={displayName}
                        photoURL={photoURL}
                        loading={loading} />
                <Container size={'medium'}>
                    { React.cloneElement(children, { language, Text }) }
                </Container>
            </div>
        )
    }
}

export default App

App.propTypes = {
  children: React.PropTypes.node
}
