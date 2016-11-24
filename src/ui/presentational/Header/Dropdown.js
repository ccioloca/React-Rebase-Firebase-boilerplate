import React, { Component } from 'react'
import DropdownMenu from 'react-dd-menu'
import UserButton from './UserButton'
import { Link, browserHistory } from 'react-router'
import Text from './translations'
import base from '../../../rebase.config.js'

class Dropdown extends Component {
  constructor(props) {
      super(props)
      this.state = {
        isMenuOpen: false,
        displayName: null,
        photoURL: null
      }
  }

  componentWillMount() {
      const authDataCallback = (user) => {
          if (user) {
              const {displayName, photoURL} = user
              this.setState({displayName, photoURL})
          }
      }
      // Listen to authentication
      this.unsubscribeToAuthListener = base.onAuth(authDataCallback)
  }

  componentWillUnmount() {
      //to remove auth listener
      this.unsubscribeToAuthListener()
  }

  toggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  close() {
    this.setState({ isMenuOpen: false })
  }

  logout() {
    base.unauth()
    browserHistory.replace('/login')
  }

  render() {
    const {isMenuOpen, displayName, photoURL} = this.state

    let menuOptions = {
      isOpen: isMenuOpen,
      close: this.close.bind(this),
      toggle: <UserButton onClick={this.toggle.bind(this)}
                          displayName={displayName}
                          photoURL={photoURL}/>
    }

    return (
      <DropdownMenu {...menuOptions} className="user-dropdown">
        <li className="user-dropdown__item">
          <Link to="profile">{Text.en.myProfile}</Link>
        </li>
        <li className="user-dropdown__item-logout">
          <button className="user-dropdown__btn-logout btn--unstyled"
                  onClick={() => this.logout()}>{Text.en.logout}</button>
        </li>
      </DropdownMenu>
    );
  }
}

export default Dropdown
