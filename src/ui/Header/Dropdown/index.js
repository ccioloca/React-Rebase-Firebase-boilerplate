import React, { Component } from 'react'
import DropdownMenu from 'react-dd-menu'
import UserButton from '../UserButton'
import { Link, browserHistory } from 'react-router'
import base from '../../rebase.config.js'

class Dropdown extends Component {
  constructor(props) {
      super(props)
      this.state = {
        isMenuOpen: false,
      }
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

    const { isMenuOpen } = this.state
    const { language, Text, displayName, photoURL, isAdmin } = this.props

    const menuOptions = {
      isOpen: isMenuOpen,
      close: this.close.bind(this),
      toggle: <UserButton onClick={this.toggle.bind(this)}
                          displayName={displayName}
                          photoURL={photoURL}
                          Text={Text}
                          language={language}/>
    }

    return (
      <DropdownMenu {...menuOptions} className={`user-dropdown`}>
        <li className={`user-dropdown__item`}>
          <Link to="profile">{Text[language].myProfile}</Link>
        </li>
        {isAdmin &&
        <li className={`user-dropdown__item`}>
          <Link to="new-article">{Text[language].newArticle}</Link>
        </li>
        }
        <li className={`user-dropdown__item`}>
          <Link to="notes">{Text[language].myNotes}</Link>
        </li>
        <li className={`user-dropdown__item-logout`}>
          <button className={`user-dropdown__btn-logout btn--unstyled`}
                  onClick={() => this.logout()}>
            {Text[language].logout}
          </button>
        </li>
      </DropdownMenu>
    );
  }
}

export default Dropdown

Dropdown.propTypes = {
  isAdmin: React.PropTypes.bool,
  displayName: React.PropTypes.string,
  photoURL: React.PropTypes.string,
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
