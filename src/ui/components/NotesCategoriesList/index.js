import React from 'react'
import uuidV4 from 'uuid/v4'

const NotesCategoriesList = ({removeCategory, handleClick, customCategories, defaultCategories, Text, language }) => {

  return (
    <div className={'notes-categories-list'}>
        <h2 className={`notes-categories-list__title`} >Categories</h2>
        {defaultCategories.map((category) =>
            <button className={`notes-categories-list__button`} key={ uuidV4() } onClick={ (event) => handleClick(event, category.name) }>{category.label}</button>
        )}
        {customCategories.map((category) =>
          <div key={uuidV4()}>
            <button className={`notes-categories-list__button`} onClick={ (event) => handleClick(event, category) }>{category}</button>
            <button className={`notes-categories-list__delete-button fa fa-trash-o`} onClick={ (event) => removeCategory(event, category) }></button>
          </div>
        )}
    </div>
  )

}

export default NotesCategoriesList

NotesCategoriesList.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  customCategories: React.PropTypes.array.isRequired,
  Text: React.PropTypes.object.isRequired,
  language: React.PropTypes.string.isRequired,
  defaultCategories: React.PropTypes.array.isRequired
}
