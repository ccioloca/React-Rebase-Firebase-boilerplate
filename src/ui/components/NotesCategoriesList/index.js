import React from 'react'
import uuidV4 from 'uuid/v4'

const NotesCategoriesList = ({handleClick, categories, Text, language }) => {

  return (
    <div className={'notes-categories-list'}>
        <h2 className={`notes-categories-list__title`} >Categories</h2>
        <button className={`notes-categories-list__button`} onClick={ (event) => handleClick(event, 'all') }>All Notes</button>
        {categories.map((category) => <button className={`notes-categories-list__button`} key={ uuidV4() } onClick={ (event) => handleClick(event, category) }>{category}</button> )}
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
