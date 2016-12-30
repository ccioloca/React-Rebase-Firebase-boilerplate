import React, { Component } from 'react'

class CommentForm extends Component {

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
      <form className="form add-new-comment-form"
              onSubmit={(event) => handleSubmit(event, {
                comment: this.textInput.value,
                date: Date.now() })}>
        <div className="form__row add-new-comment-form__row">
          <input className="form__field add-new-comment-form__field"
                type='text'
                key={'0'}
                ref={input => (this.textInput = input)}
                value={value}
                placeholder={Text[language].addNewComment}
                onChange={ () => handleChange(this.textInput.value) }
                />
        </div>
      </form>
    )
  }
}

export default CommentForm

CommentForm.propTypes = {
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string
}
