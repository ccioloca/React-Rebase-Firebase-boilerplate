import React from 'react'
import uuidV4 from 'uuid/v4'

const ChooseCategory = ({Text, language, categories, category, onChange}) => {

    return (
        <div className="choose-category">
          <h2 className="choose-category__title">Choose Category</h2>
          <select value={category} onChange={() => onChange() }>
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
  category: React.PropTypes.string.isRequired
}
