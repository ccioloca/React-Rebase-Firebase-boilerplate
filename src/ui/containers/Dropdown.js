import React, { Component } from 'react'
import DropdownMenu from 'react-dd-menu'

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

  click() {
    console.log('You clicked an item')
  }

  render() {
    let menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close.bind(this),
      toggle: <button type="button" onClick={this.toggle.bind(this)}>Click me</button>
    }

    return (
      <DropdownMenu {...menuOptions}>
        <li><a href="#">Example 1</a></li>
        <li><button type="button" onClick={this.click.bind(this)}>Example 2</button></li>
      </DropdownMenu>
    );
  }

}

export default Dropdown
