import React from 'react'
import { Link } from 'react-router'
import Avatar from '../Avatar'

const UserDropdownPure = (props) => {
  const {toggleDropdown, collapse, toggleOpenCloseClass, displayName, photoURL, logout} = props
  return (
    <div className="user-dropdown" tabIndex="0" onBlur={ collapse }>
      <button type="button"
              className="btn--unstyled user-dropdown__header"
              onClick={toggleDropdown}>
        <div className="user-dropdown__wrapper">
          <div className="user-dropdown__label">{displayName}</div>
          <Avatar photoURL={photoURL} size={'small'}/>
        </div>
      </button>
      <div className={`user-dropdown__items ${toggleOpenCloseClass}`}>
        <ul className="user-dropdown__items-list">
          <li className="user-dropdown__item">
            <Link to="profile">My Profile</Link>
          </li>
          <li className="user-dropdown__item-logout">
            <button className="user-dropdown__btn-logout btn--unstyled" onClick={logout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserDropdownPure

UserDropdownPure.propTypes = {
    displayName: React.PropTypes.string,
    photoURL: React.PropTypes.string,
    toggleDropdown: React.PropTypes.func,
    collapse: React.PropTypes.func,
    logout: React.PropTypes.func,
    toggleOpenCloseClass: React.PropTypes.string
}
