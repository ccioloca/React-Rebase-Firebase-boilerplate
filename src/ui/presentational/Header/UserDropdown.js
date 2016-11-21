import React, { Component } from 'react'
import { Link } from 'react-router'
import Avatar from '../Avatar'
import base from '../../../rebase.config.js'
import { browserHistory } from 'react-router'

class UserDropdown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.bound_clicked = this._clicked.bind(this);
  }

  _toggleDropdown() {
    let isOpen = !this.state.isOpen;
    this.setState({ isOpen })
    if (isOpen) {
      window.addEventListener("click", this.bound_clicked, true)
    } else {
      window.removeEventListener("click", this.bound_clicked, true)
    }
  }

  _clicked(e) {
    if (e.srcElement !== 'div.user-dropdown__wrapper' && this.state.isOpen) {
      window.removeEventListener("click", this.clicked, true);
      this.setState({isOpen: false})
    }
  }

  _logout() {
    base.auth().signOut()
    browserHistory.push('Login')
  }

  render() {

    const {firebaseUser} = this.props
    const isOpen = this.state.isOpen ? 'is-visible' : 'is-hidden'

    return (
      <div className="user-dropdown">
        <button type="button"
                className="btn--unstyled user-dropdown__header"
                onClick={ this._toggleDropdown.bind(this) }>
          <div className="user-dropdown__wrapper">
            <div className="user-dropdown__label">{firebaseUser.displayName}</div>
            <Avatar photoURL={firebaseUser.photoURL} size={'small'}/>
          </div>
        </button>
        <div className={`user-dropdown__items ${isOpen}`}>
          <ul className="user-dropdown__items-list">
            <li className="user-dropdown__item">
              <Link to="profile">My Profile</Link>
            </li>
            <li className="user-dropdown__item-logout">
              <button className="user-dropdown__btn-logout btn--unstyled" onClick={this._logout.bind(this)}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default UserDropdown

UserDropdown.propTypes = {
  isOpen: React.PropTypes.bool
}
