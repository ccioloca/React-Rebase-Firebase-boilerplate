import React, { Component } from 'react'
import base from '../../../rebase.config.js'

class SelectLanguage extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedOption: 'en'
    }

    this.firebaseUser = base.auth().currentUser || {}
  }

  handleOptionChange(changeEvent) {
    const selectedOption = changeEvent.target.value
    const { uid } = this.firebaseUser

    this.setState({
      selectedOption
    })

    base.update(`users/${uid}`, {
      data: {language: selectedOption}
    })

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              <div className="radio">
                <label>
                  <input type="radio" value="en" checked={this.state.selectedOption === 'en'} onChange={this.handleOptionChange.bind(this)} />
                  English
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="de" checked={this.state.selectedOption === 'de'} onChange={this.handleOptionChange.bind(this)}/>
                  German
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="es" checked={this.state.selectedOption === 'es'} onChange={this.handleOptionChange.bind(this)}/>
                  Spanish
                </label>
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

export default SelectLanguage
