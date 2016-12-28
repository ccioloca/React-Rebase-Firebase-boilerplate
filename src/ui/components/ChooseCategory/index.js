import React from 'react'
import uuidV4 from 'uuid/v4'

const ChooseCategory = ({Text, language, categories, selectedCategory, onChange}) => {

    return (
        <div className="choose-category">
          <h2 className="choose-category__title">Choose Category</h2>
          <select value={selectedCategory} onChange={(event) => onChange(event) }>
            {categories.map( value =>
              <option key={uuidV4()}>{value}</option>
            )}
          </select>
        </div>
    )

}

export default ChooseCategory

ChooseCategory.propTypes = {
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired,
  categories: React.PropTypes.array.isRequired,
  selectedCategory: React.PropTypes.string.isRequired
}
