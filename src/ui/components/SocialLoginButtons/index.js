import React from 'react'

const SocialLoginButtons = ({providers, language, Text, onClick}) => {
  const loginButtons = providers.map( (provider, index) => {
    return (
      <div>
        <button key={index}
                onClick={() => this._loginWithOAuthRedirect(provider)}
                className='btn--unstyled'>Login With {provider}</button>
      </div>
    )
  })

  return (
    <div>
      {loginButtons}
    </div>
  )
}

export default SocialLoginButtons

SocialLoginButtons.propTypes = {
  providers: React.PropTypes.array.isRequired,
  onClick:   React.PropTypes.func.isRequired,
  language:  React.PropTypes.string.isRequired,
  Text:      React.PropTypes.object.isRequired
}
