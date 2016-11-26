import React, { Component } from 'react';
import base from '../../rebase.config.js';
import LoadingAnimation from '../components/LoadingAnimation';
import Center from '../layout/Center'


class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: [],
      loading: true
    }
  }
  componentWillMount(){

    this.ref = base.syncState('messages', {
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
            {user}
          </div>
    );
  }
}

export default UserProfile
