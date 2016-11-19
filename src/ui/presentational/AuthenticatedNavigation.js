import React from 'react'
import { Link } from 'react-router'
import Avatar from './Avatar'

const AuthenticatedNavigation = ({photoURL}) => {
    return (
      <div className="dd-menu dd-menu-center user-dropdown__items">
        <button type="button" className="btn--unstyled user-dropdown__header">
          <div className="user-dropdown__wrapper">
            <div className="user-dropdown__label">Paul Hayes</div>
            <Avatar photoURL={photoURL} size={'50px'}/>
          </div>
        </button>
        <div className="dd-menu-items">
          <ul className="dd-items-center">
            <li className="user-dropdown__item">
              <Link className="user-dropdown__link" to="/profile">My Profile</Link>
            </li>
            <li className="user-dropdown__item">
              <Link className="user-dropdown__link" to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default AuthenticatedNavigation
