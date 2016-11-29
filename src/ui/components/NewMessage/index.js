import React from 'react'

const NewMessage = ({onFormSubmit, onChange, displayName, photoURL, value, Text, language }) => {

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
          <input className="form__field"
                 type='text'
                 ref={c => (message = c)}
                 value={value}
                 onChange={() => onChange(message.value) }
                 />
        </label>
      </div>
      <input className="form__submit" type="submit" value={Text[language].submit} />
    </form>
  )

}

export default NewMessage

NewMessage.propTypes = {
  onFormSubmit: React.PropTypes.func.isRequired,
  displayName: React.PropTypes.string.isRequired,
  photoURL: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  Text: React.PropTypes.object.isRequired
}
