import React from 'react'

const SelectLanguage = ({ handleOptionChange, language, Text, availableLanguages }) => {

  const mappedLanguages = availableLanguages.map((item, index) => {

    const checked = language === item
    return (
      <div key={index} className="select-language__radio-wrapper">
        <label className="select-language__label">

          <input  className="select-language__input"
                  type="radio"
                  name="language"
                  value={item}
                  checked={checked}
                  onChange={ () => handleOptionChange(item) } />
          { Text[item].language }

        </label>
      </div>
    )
  })

  return (
    <form className="select-language">
      <h1>{Text[language].selectYourLanguage}</h1>
      {mappedLanguages}
    </form>
  )
}

export default SelectLanguage

SelectLanguage.propTypes = {
  handleOptionChange: React.PropTypes.func.isRequired,
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired,
  availableLanguages: React.PropTypes.array.isRequired
}
