import React from 'react'
import uuidV4 from 'uuid/v4'

const NotesCategoriesList = ({removeCategory, handleClick, categories, Text, language }) => {

  return (
    <div className={'notes-categories-list'}>
        <h2 className={`notes-categories-list__title`} >Categories</h2>
        <button className={`notes-categories-list__button`} onClick={ (event) => handleClick(event, 'all') }>All Notes</button>
        <button className={`${MODULE_NAME}__button`} onClick={ (event) => handleClick(event, 'Category 1') }>Category 1</button>
        <button className={`${MODULE_NAME}__button`} onClick={ (event) => handleClick(event, 'Category 2') }>Category 2</button>
        <button className={`${MODULE_NAME}__button`} onClick={ (event) => handleClick(event, 'Category 3') }>Category 3</button>
        {categories.map((category) => <div key={uuidV4()}>
            <button className={`notes-categories-list__button__button`} key={ uuidV4() } onClick={ (event) => handleClick(event, category) }>{category}</button>
            <button className={`notes-categories-list__button__delete-button fa fa-trash-o`} onClick={ (event) => removeCategory(event, category) }></button>
          </div>
          )}
    </div>
  )

}

export default NotesCategoriesList

NotesCategoriesList.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  categories: React.PropTypes.array.isRequired,
  Text: React.PropTypes.object.isRequired,
  language: React.PropTypes.string.isRequired
}
