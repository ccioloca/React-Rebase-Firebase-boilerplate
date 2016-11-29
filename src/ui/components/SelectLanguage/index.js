import React from 'react'
import Text from '../translations'

const SelectLanguage = ({ handleOptionChange, language, checked }) => {
  return (
    <div className="radio">
      <label className="radio__label">
        <input  className="radio__input"
                type="radio"
                name="language"
                value={language}
                checked={checked}
                onChange={ () => handleOptionChange(language) } />
        { Text[language][language] }
      </label>
    </div>
  )
}

export default SelectLanguage

SelectLanguage.propTypes = {
  handleOptionChange: React.PropTypes.func.isRequired,
  language: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool.isRequired
}
