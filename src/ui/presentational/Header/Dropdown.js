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
    const {firebaseUser, logout} = this.props
    const {isMenuOpen} = this.state

    let menuOptions = {
      isOpen: isMenuOpen,
      close: this.close.bind(this),
      toggle: <UserButton onClick={this.toggle.bind(this)}
                          displayName={firebaseUser.displayName}
                          photoURL={firebaseUser.photoURL}/>
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

Dropdown.propTypes = {
  firebaseUser: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}
