import React from 'react'

const SelectLanguage = ({handleOptionChange, language}) => {
  return (
    <div className="radio">
      <label className="radio__label">
        <input  className="radio__input"
                type="radio"
                name="language"
                value={language}
                onChange={ () => handleOptionChange(language) } />
        {language}
      </label>
    </div>
  )
}



export default SelectLanguage
