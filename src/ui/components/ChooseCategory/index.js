import React from 'react'
import uuidV4 from 'uuid/v4'

const ChooseCategory = ({Text, language, categories, selectedCategory, onChange, toggleShowAddNewCategory, showAddNewCategory, onAddNewCategoryFormSubmit, onAddNewCategoryChange, selectValue, inputTextValue}) => {

    const MODULE_NAME = 'choose-category'
    let addNewCategory

    return (
        <div className={`${MODULE_NAME}`}>
          <h2 className={`${MODULE_NAME}__title`}>Choose Category</h2>
          <select className={`${MODULE_NAME}__select`} value={selectedCategory} onChange={(event) => onChange(event) }>
            {categories.map( value =>
              <option key={uuidV4()}>{value}</option>
            )}
          </select>
          <button className={`${MODULE_NAME}__button`} onClick={ () => toggleShowAddNewCategory() }>{Text[language].addNewCategory}</button>
          { showAddNewCategory ? <form className={`form ${MODULE_NAME}__add-new-category-form`}
                onSubmit={(event) => onAddNewCategoryFormSubmit(event, {
                  addNewCategory: addNewCategory.value
          })}>
            <div className={`form__row ${MODULE_NAME}__add-new-category-form__row`}>
              <input className={`form__field ${MODULE_NAME}__add-new-category-form__field`}
                    type='text'
                    ref={c => (addNewCategory = c)}
                    value={inputTextValue}
                    placeholder={Text[language].addNewCategory}
                    onChange={() => onAddNewCategoryChange(addNewCategory.value) }
                    />
            </div>
          </form> : <div></div> }
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
  inputTextValue: React.PropTypes.string.isRequired,
  selectValue: React.PropTypes.string.isRequired
}