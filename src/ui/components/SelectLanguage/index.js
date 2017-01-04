import React from 'react'
import Card from '../../layout/Card'
import uuidV4 from 'uuid/v4'

const SelectLanguage = ({ handleOptionChange, language, Text, availableLanguages }) => {
  return (
    <Card>
      <form className="select-language">
        <h1>{Text[language].selectYourLanguage}</h1>
        { availableLanguages.map((item) =>
          <div key={uuidV4()} className="select-language__radio-wrapper">
            <label className="select-language__label">
              <input  className="select-language__input"
                      type="radio"
                      name="language"
                      value={item}
                      checked={language === item}
                      onChange={ () => handleOptionChange(item) } />
              { Text[item].language }
            </label>
          </div>
        )}
      </form>
    </Card>
  )
}

export default SelectLanguage

SelectLanguage.propTypes = {
  handleOptionChange: React.PropTypes.func.isRequired,
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired,
  availableLanguages: React.PropTypes.array.isRequired
}
