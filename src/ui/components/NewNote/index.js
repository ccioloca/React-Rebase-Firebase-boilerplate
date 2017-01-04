import React from 'react'

const NewNote = ({onFormSubmit, onChange, onCheck, isChecked, displayName, photoURL, value, Text, language }) => {

  const MODULE_NAME = 'new-note-form'
  let note

  return (
    <form className={`form ${MODULE_NAME}`}
          onSubmit={(event) => onFormSubmit(event, {
            note: note.value,
            photoURL,
            displayName,
            date: Date.now()
    })}>
      <div className={`form__row ${MODULE_NAME}__row`}>
        <label className={`form__label ${MODULE_NAME}__label ${MODULE_NAME}__title`}>
          {Text[language].addNewNote}
        </label>
        <textarea className={`form__field form__textarea ${MODULE_NAME}__field ${MODULE_NAME}__textarea`}
               ref={c => (note = c)}
               value={value}
               onChange={() => onChange(note.value) }
               />
       <input className={`form__submit ${MODULE_NAME}__submit`} type="submit" value={Text[language].addNewNote} />
      </div>

      <label>
        <input  className={`form__checkbox ${MODULE_NAME}__checkbox`}
                type="checkbox"
                checked={isChecked}
                onChange={ () => onCheck() } />
        {Text[language].isPrivate}
      </label>

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
