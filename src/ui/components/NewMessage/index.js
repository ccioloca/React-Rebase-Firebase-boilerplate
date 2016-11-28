import React from 'react'

const NewMessage = ({onFormSubmit, displayName, photoURL}) => {

  let message
  const date = Date.now()

  return (
    <form className="form"
          onSubmit={(event) => onFormSubmit(event, {
            message: message.value,
            photoURL,
            displayName,
            date
    })}>
      <div className="form__row">
        <label className="form__label">
          Message:
          <input className="form__field" type='text' ref={c => (message = c)} />
        </label>
      </div>
      <input className="form__submit" type="submit" value="Submit" />
    </form>
  )

}

export default NewMessage

NewMessage.propTypes = {
  onFormSubmit: React.PropTypes.func.isRequired,
  displayName: React.PropTypes.string.isRequired,
  photoURL: React.PropTypes.string.isRequired
}
