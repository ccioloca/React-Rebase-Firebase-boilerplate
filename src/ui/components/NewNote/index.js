import React from 'react'

const NewNote = ({onFormSubmit, onChange, displayName, photoURL, value, Text, language }) => {

  let note
  const date = Date.now()
  const submitText = Text[language].submit
  const noteText =  Text[language].note

  return (
    <form className="form"
          onSubmit={(event) => onFormSubmit(event, {
            note: note.value,
            photoURL,
            displayName,
            date
    })}>
      <div className="form__row">
        <label className="form__label">
          {noteText}:
          <input className="form__field"
                 type='text'
                 ref={c => (note = c)}
                 value={value}
                 onChange={() => onChange(note.value) }
                 />
        </label>
      </div>
      <input className="form__submit" type="submit" value={submitText} />
    </form>
  )

}

export default NewNote

NewNote.propTypes = {
  onFormSubmit: React.PropTypes.func.isRequired,
  displayName: React.PropTypes.string.isRequired,
  photoURL: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  Text: React.PropTypes.object.isRequired
}
