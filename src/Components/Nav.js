import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
        <NavLink to="/">Login</NavLink>
      
        <NavLink to="/register">Register</NavLink>
    </nav>

  )
}
