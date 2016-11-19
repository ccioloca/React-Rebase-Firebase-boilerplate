import React from 'react'
import { Link } from 'react-router'

const PublicNavigation = () => {
    return (
      <div>
        <Link to="/login">
          Login
        </Link>
        <Link to="/register">
          Signup
        </Link>
      </div>
    )
}

export default PublicNavigation
