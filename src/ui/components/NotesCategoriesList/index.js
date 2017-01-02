import React from 'react'
import uuidV4 from 'uuid/v4'

const NotesCategoriesList = ({handleClick, categories, Text, language }) => {

  const MODULE_NAME = 'notes-categories-list'

  return (
    <div className={MODULE_NAME}>
        <h2 className={`${MODULE_NAME}__title`} >Categories</h2>
        <button className={`${MODULE_NAME}__button`} onClick={ (event) => handleClick(event, 'all') }>All Notes</button>
        {categories.map((category) => <button className={`${MODULE_NAME}__button`} key={ uuidV4() } onClick={ (event) => handleClick(event, category) }>{category}</button> )}
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
