import React, { Component } from 'react'
import base from '../../rebase.config.js'

class SelectLanguage extends Component {

  constructor(props){
    super(props)
    this.state = {
      language: 'en'
    }
    this.firebaseUser = base.auth().currentUser || {}
  }

  componentWillMount() {
    const { uid } = this.firebaseUser
    base.fetch(`users/${uid}`,  {
      context: this,
      asArray: true
      }).then(data => {
        this.setState({language: data.language})
      }).catch(error => {
        //handle error
        console.log(error)
      })
  }

  handleOptionChange(changeEvent) {
    const language = changeEvent.target.value
    const { uid } = this.firebaseUser

    this.setState({
      language
    })

    base.update(`users/${uid}`, {
      data: {language}
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
                  <input type="radio" value="en" checked={this.state.language === 'en'} onChange={this.handleOptionChange.bind(this)} />
                  English
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="de" checked={this.state.language === 'de'} onChange={this.handleOptionChange.bind(this)}/>
                  German
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="es" checked={this.state.language === 'es'} onChange={this.handleOptionChange.bind(this)}/>
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
