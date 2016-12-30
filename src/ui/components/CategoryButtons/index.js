import React from 'react'
import uuidV4 from 'uuid/v4'

const CategoryButtons = ({handleClick, categories, Text, language }) => {

  return (
    <div className="category-buttons">
        <h2 className="category-buttons__title" >Categories</h2>
        <button className="category-buttons__button" onClick={ (event) => handleClick(event, 'all') }>All Notes</button>
        {categories.map((category) => <button className="category-buttons__button" key={ uuidV4() } onClick={ (event) => handleClick(event, category) }>{category}</button> )}
    </div>
  )

}

export default CategoryButtons

CategoryButtons.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  categories: React.PropTypes.array.isRequired,
  Text: React.PropTypes.object.isRequired,
  language: React.PropTypes.string.isRequired
}

//

/*
<button className="category-buttons__button" onClick={ () => handleClick('Category 1') }>Category 1</button>
<button className="category-buttons__button" onClick={ () => handleClick('Category 2') }>Category 2</button>
<button className="category-buttons__button" onClick={ () => handleClick('Category 3') }>Category 3</button>
<button className="category-buttons__button" onClick={ () => handleClick('test category') }>test category</button>*/
