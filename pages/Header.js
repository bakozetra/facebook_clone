import React from 'react'
import {Link} from 'react-router-dom'
import AddPost from './AddPost'
import Feed from './Feed'
import Options from './Options'
function header() {
  return (
    <div className="list">
     <Link to ="/"><AddPost/></Link> 
     <Link to ="/feed"><Feed/></Link> 
     <Link to ="/options"><Options/></Link> 
    </div>
  )
}

export default header
