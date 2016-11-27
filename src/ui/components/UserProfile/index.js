import React, { Component } from 'react'
import base from '../../../rebase.config.js'
import LoadingAnimation from '../LoadingAnimation'
import Center from '../../layout/Center'
import SelectLanguage from '../SelectLanguage'


class UserProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: [],
      loading: true
    }
  }
  componentWillMount(){
    const uid = base.auth().currentUser.uid || ''
    this.ref = base.syncState(`users/${uid}` , {
      context: this,
      state: 'user',
      asArray: true,
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

  render(){
    const {user} = this.state
    return (
        this.state.loading
        ? <Center height={'300px'}><LoadingAnimation height='auto'/></Center>
        : <div>
            <SelectLanguage />
            {user}
          </div>
    )
  }
}

export default UserProfile
