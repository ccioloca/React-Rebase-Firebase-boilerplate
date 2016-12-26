import React from 'react'

const NewNote = ({onFormSubmit, onChange, onCheck, isChecked, displayName, photoURL, value, Text, language }) => {

  let note

  return (
    <form className="form new-note-form"
          onSubmit={(event) => onFormSubmit(event, {
            note: note.value,
            photoURL,
            displayName,
            date: Date.now()
    })}>
      <div className="form__row new-note-form__row">
        <label className="form__label new-note-form__label">
          {Text[language].note}:
        </label>
        <textarea className="form__field form__textarea new-note-form__field new-note-form__textarea"
               ref={c => (note = c)}
               value={value}
               onChange={() => onChange(note.value) }
               />
      </div>
      <input className="form__submit new-note-form__submit" type="submit" value={Text[language].submit} />
      <label><input className="form__checkbox new-note-form__checkbox" type="checkbox" checked={isChecked} onChange={ () => onCheck() } />{Text[language].isPrivate}</label>
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
