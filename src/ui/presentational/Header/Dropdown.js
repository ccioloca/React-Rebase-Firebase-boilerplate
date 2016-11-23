import React, { Component } from 'react'
import DropdownMenu from 'react-dd-menu'
import UserButton from './UserButton'
import { Link } from 'react-router'
import Text from './translations'

class Dropdown extends Component {
  constructor(props) {
      super(props)
      this.state = {
        isMenuOpen: false
      }
  }

  toggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  close() {
    this.setState({ isMenuOpen: false })
  }

  render() {
    const _displayName = this.context.firebaseUser.displayName
    const _photoURL = this.context.firebaseUser.photoURL
    const displayName = _displayName
    const photoURL = _photoURL
    const {isMenuOpen} = this.state
    const {logout} = this.context

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
                  onClick={logout}>{Text.en.logout}</button>
        </li>
      </DropdownMenu>
    );
  }
}

export default Dropdown

Dropdown.contextTypes = {
  firebaseUser: React.PropTypes.object,
  logout: React.PropTypes.func.isRequired
}
