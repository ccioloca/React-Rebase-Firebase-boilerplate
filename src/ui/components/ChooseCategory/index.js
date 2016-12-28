import React from 'react'
import uuidV4 from 'uuid/v4'

const ChooseCategory = ({Text, language, categories, selectedCategory, onChange, toggleShowAddNewCategory, showAddNewCategory, onAddNewCategoryFormSubmit, onAddNewCategoryChange, value}) => {

    console.log('choose Category', categories)

    let addNewCategory

    return (
        <div className="choose-category">
          <h2 className="choose-category__title">Choose Category</h2>
          <select value={selectedCategory} onChange={(event) => onChange(event) }>
            {categories.map( value =>
              <option key={uuidV4()}>{value}</option>
            )}
          </select>
          <button className="choose-category__button" onClick={ () => toggleShowAddNewCategory() }>Add New Category</button>
          <form className="form choose-category__add-new-category-form"
                onSubmit={(event) => onAddNewCategoryFormSubmit(event, {
                  addNewCategory: addNewCategory.value
          })}>
            <div className="form__row choose-category__add-new-category-form__row">
                <input className="form__field choose-category__add-new-category-form__field"
                      type='text'
                      ref={c => (addNewCategory = c)}
                      value={value}
                      placeholder={Text[language].addNewCategory}
                      onChange={() => onAddNewCategoryChange(addNewCategory.value) }
                      />
            </div>
          </form>
        </div>
    )

}

export default ChooseCategory

ChooseCategory.propTypes = {
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired,
  categories: React.PropTypes.array.isRequired,
  selectedCategory: React.PropTypes.string.isRequired,
  toggleShowAddNewCategory: React.PropTypes.func.isRequired,
  showAddNewCategory: React.PropTypes.bool.isRequired,
  onAddNewCategoryChange: React.PropTypes.func.isRequired,
  onAddNewCategoryFormSubmit: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired
}
