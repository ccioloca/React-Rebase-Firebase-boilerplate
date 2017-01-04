import React from 'react'

const NewMessage = ({onFormSubmit, onChange, displayName, photoURL, value, Text, language }) => {

  let message

  return (
    <form className="form message-form"
          onSubmit={(event) => onFormSubmit(event, {
            message: message.value,
            photoURL,
            displayName,
            date: Date.now()
    })}>
      <div className="form__row message-form__row">
          <input className="form__field message-form__field"
                 type='text'
                 ref={c => (message = c)}
                 value={value}
                 placeholder={Text[language].message}
                 onChange={() => onChange(message.value) }
                 />
      </div>
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
  Text: React.PropTypes.object.isRequired,
  language: React.PropTypes.string.isRequired
}
