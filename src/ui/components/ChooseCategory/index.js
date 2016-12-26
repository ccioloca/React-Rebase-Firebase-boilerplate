import React from 'react'

const ChooseCategory = ({Text, language}) => {

    return (
        <div>
          hello world
        </div>
    )

}

export default ChooseCategory

ChooseCategory.propTypes = {
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
