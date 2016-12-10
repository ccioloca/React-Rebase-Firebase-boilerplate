import React from 'react'
import Card from '../../layout/Card'

const SocialLoginButtons = ({providers, language, Text, onClick}) => {
  return (
    <Card>
      <div className="social-login-buttons">
        { providers.map( (provider, index) =>
          <button key={index}
                  onClick={()=>onClick(provider)}
                  className={`social-login-buttons__button social-login-buttons__button--${provider}`}>
                  <i className={`fa fa-${provider} social-login-buttons__icon`}></i>
                  Login With {provider}
          </button>
        )}
      </div>
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
