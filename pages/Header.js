import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  return (
    <div className="list">
      <Link to="/">Feed</Link>
      <Link to="/add">Add Post</Link>
      <Link to="/options">Option</Link>
    </div>
  )
}

export default header
