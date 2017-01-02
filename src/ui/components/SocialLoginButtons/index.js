import React from 'react'
import Card from '../../layout/Card'
import uuidV4 from 'uuid/v4'

const SocialLoginButtons = ({providers, language, Text, onClick}) => {
  return (
    <Card>
      { providers.map( (provider) =>
          <div key={uuidV4()}>
            <button key={uuidV4()}
                    onClick={()=>onClick(provider)}
                    className='btn--unstyled'>Login With {provider}</button>
          </div>
      )}
    </Card>
  )
}

export default SocialLoginButtons

SocialLoginButtons.propTypes = {
  providers: React.PropTypes.array.isRequired,
  onClick:   React.PropTypes.func.isRequired,
  language:  React.PropTypes.string.isRequired,
  Text:      React.PropTypes.object.isRequired
}
