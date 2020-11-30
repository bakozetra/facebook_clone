import React from 'react'

function AddPostComponent({list}) {

  return (
    <div>
     <p>{list.username}</p>
      <p>{list.text}</p>
      <img src={list.picture}></img>
    </div>
  )
}

export default AddPostComponent
