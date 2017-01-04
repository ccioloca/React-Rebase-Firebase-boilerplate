import React, { Component } from 'react'

class EditForm extends Component {

  constructor(props) {
    super(props)
    this.focus = this._focus.bind(this)
  }

  componentDidMount() {
    this._focus()
  }

  componentDidUpdate() {
    this._focus()
  }

  _focus() {
    this.textInput.focus()
  }

  render() {
    const {language, Text, handleSubmit, handleChange, value} = this.props

    return (
      <form className="form edit-form"
              onSubmit={(event) => handleSubmit(event, {
                text: this.textInput.value,
                edit_date: Date.now() })}>
        <div className="form__row edit-form__row">
          <input className="form__field edit-form__field"
                type='text'
                key={'0'}
                ref={input => (this.textInput = input)}
                value={value}
                placeholder={Text[language].edit}
                onChange={ () => handleChange(this.textInput.value) }
                />
        </div>
      </form>
    )
  }
}

export default EditForm

EditForm.propTypes = {
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string
}
