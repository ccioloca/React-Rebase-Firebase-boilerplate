import React from 'react'
import Card from '../../layout/Card'

const SocialLoginButtons = ({providers, language, Text, onClick}) => {
  return (
    <Card>
      { providers.map( (provider, index) =>
          <div key={index}>
            <button key={index}
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
