import React, { Component } from 'react'
import base from '../rebase.config.js'
import LoadingAnimation from '../components/LoadingAnimation'
import Center from '../layout/Center'
import SelectLanguage from '../components/SelectLanguage'

class UserProfile extends Component {

  constructor(props){
    super(props)
    this.state = {
      userProfile: {},
      loading: true
    }
    const { Text } = this.props
    this.availableLanguages = Object.keys(Text)
  }

  componentWillMount(){
    const uid = base.auth().currentUser.uid || ''
    this.ref = base.syncState(`users/${uid}` , {
      context: this,
      state: 'userProfile',
      asArray: false,
      then: () => {
        this.setState({
          loading: false
        })
      }
    })
  }

  componentWillUnmount(){
    base.removeBinding(this.ref)
  }

  _handleOptionChange(language) {
    const newUserProfile = Object.assign({}, this.state.userProfile, {language})
    this.setState({userProfile: newUserProfile})
  }

  render(){
    const { Text, language } = this.props

    return (
        this.state.loading
        ? <Center height={'300px'}><LoadingAnimation height='auto'/></Center>
        : <SelectLanguage
            handleOptionChange={ this._handleOptionChange.bind(this) }
            language={language}
            availableLanguages={ this.availableLanguages }
            Text={Text} />
    )
  }
}

export default UserProfile
