import React, { Component } from 'react'
import base from '../rebase.config.js'
import LoadingAnimation from '../components/LoadingAnimation'
import Center from '../layout/Center'
import SelectLanguage from '../components/SelectLanguage'
import Text from '../components/translations'

class UserProfile extends Component {

  constructor(props){
    super(props)
    this.state = {
      userProfile: {},
      loading: true
    }
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
    const language = this.state.userProfile.language || 'en'

    const mappedLanguages = this.availableLanguages.map((data, index) => {
      return (
        <SelectLanguage
          handleOptionChange={ this._handleOptionChange.bind(this) }
          language={data}
          key={index}
        />
      )
    })

    return (
        this.state.loading
        ? <Center height={'300px'}><LoadingAnimation height='auto'/></Center>
        : <div>
            <form>
              <h1>{Text[language].selectYourLanguage}</h1>
              {mappedLanguages}
            </form>
          </div>
    )
  }
}

export default UserProfile
