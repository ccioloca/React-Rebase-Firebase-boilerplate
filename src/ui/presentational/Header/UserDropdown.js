import React, { Component } from 'react'
import { Link } from 'react-router'
import Avatar from '../Avatar'

class UserDropdown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  _toggleDropdown() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    const isOpen = this.state.isOpen ? 'is-visible' : 'is-hidden'
    return (
      <div className="user-dropdown">
        <button type="button"
                className="btn--unstyled user-dropdown__header"
                onClick={ this._toggleDropdown.bind(this) }>
          <div className="user-dropdown__wrapper">
            <div className="user-dropdown__label">Paul Hayes</div>
            <Avatar photoURL={this.props.photoURL} size={'small'}/>
          </div>
        </button>
        <div className={`user-dropdown__items ${isOpen}`}>
          <ul className="user-dropdown__items-list">
            <li className="user-dropdown__item">
              <Link className="user-dropdown__link" to="/logout">Logout</Link>
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
